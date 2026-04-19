import express from 'express';
import cors from 'cors';
import { setupPaperRoutes } from './api/routes';
import { PaperApplicationService } from './application/services/PaperApplicationService';
import { OpenAlexAdapter } from './infrastructure/adapters/OpenAlexAdapter';

const app = express();
app.use(cors());
app.use(express.json());


const mockRepo = new (class {
    private papers: any[] = [];
    public async save(entity: any) {
        console.log(`[DB] PERSISTING Paper:`, entity.getTitle());
        this.papers.push(entity);
    }
    public async findAll() { return this.papers; }
    public async findById(id: string) { return this.papers.find(p => p.getId() === id) || null; }
    public async update() {}
    public async delete() {}
})() as any;

const externalSource = new OpenAlexAdapter();

const paperService = new PaperApplicationService(mockRepo, externalSource);

app.use(setupPaperRoutes(paperService));

const PORT = parseInt(process.env.PORT || '3000', 10);
const server = app.listen(PORT, () => {
    console.log(`Backend MVP Architecture is LIVE!`);
    console.log(`Listening efficiently on http://localhost:${PORT}`);
    console.log(`Test via POST request to http://localhost:${PORT}/api/papers`);
});

server.on('error', (err) => {
    console.error(`Server failed to start:`, err);
});

import express from 'express';
import { setupPaperRoutes } from './api/routes';
import { PaperApplicationService } from './application/services/PaperApplicationService';

const app = express();
app.use(express.json());

const mockRepo = new (class {
    public async save(entity: any) {
        console.log(`[DB] Saved Request internally:`, entity);
    }
})() as any;

const paperService = new PaperApplicationService(mockRepo);

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

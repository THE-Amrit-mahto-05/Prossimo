import { Request, Response, Router } from 'express';
import { PaperApplicationService } from '../application/services/PaperApplicationService';
import { CreatePaperDTO } from '../application/dtos/ResearchPaperDTO';

export function setupPaperRoutes(paperService: PaperApplicationService): Router {
    const router = Router();

    router.get('/api/papers', async (req: Request, res: Response) => {
        try {
            const papers = await paperService.getAllPapers();
            console.log(`[API] Returning ${papers.length} papers for list view`);
            res.json(papers);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });

    router.post('/api/papers', async (req: Request, res: Response) => {
        try {
            const dto: CreatePaperDTO = {
                title: req.body.title,
                year: req.body.year,
                industryId: req.body.industryId
            };

            const result = await paperService.createPaper(dto);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    });

    // GET /api/papers/search
    router.get('/api/papers/search', async (req: Request, res: Response) => {
        try {
            const query = req.query.q as string;
            if (!query) throw new Error("Query parameter 'q' is required");
            
            const results = await paperService.searchExternal(query);
            res.json(results);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });

    // POST /api/papers/import
    router.post('/api/papers/import', async (req: Request, res: Response) => {
        try {
            const { externalId } = req.body;
            console.log(`[API] Import Request received for: ${externalId}`);
            if (!externalId) throw new Error("Field 'externalId' is required");

            const result = await paperService.importFromExternal(externalId);
            res.status(201).json(result);
        } catch (error: any) {
            console.error(`[API] Import FAILED for ${req.body.externalId}:`, error.message);
            res.status(400).json({ error: error.message });
        }
    });

    // New: Analytics aggregation endpoint
    router.get('/api/papers/stats', async (req: Request, res: Response) => {
        try {
            const stats = await paperService.getAnalytics();
            res.json(stats);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}

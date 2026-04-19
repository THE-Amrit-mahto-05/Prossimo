import { Request, Response, Router } from 'express';
import { PaperApplicationService } from '../application/services/PaperApplicationService';
import { CreatePaperDTO } from '../application/dtos/ResearchPaperDTO';

export function setupPaperRoutes(paperService: PaperApplicationService): Router {
    const router = Router();

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

    return router;
}

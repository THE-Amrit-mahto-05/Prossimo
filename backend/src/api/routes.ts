export interface Request { body: any; params: any; query: any; }
export interface Response { status(code: number): this; json(data: any): void; }
export interface Router { post(path: string, handler: (req: Request, res: Response) => Promise<void> | void): void; }

export function MockRouter(): Router {
    return { post: (path, handler) => { } };
}

import { PaperApplicationService } from '../application/services/PaperApplicationService';
import { CreatePaperDTO } from '../application/dtos/ResearchPaperDTO';

export function setupPaperRoutes(paperService: PaperApplicationService): Router {
    const router = MockRouter();

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

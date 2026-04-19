import { PaperApplicationService } from './application/services/PaperApplicationService';
import { CreatePaperDTO } from './application/dtos/ResearchPaperDTO';

async function bootstrapVerticalSlice() {
    console.log("Starting MVP Vertical Slice");

    const paperRepository = new (class MockPaperRepo {
        public async save(entity: any) {
            console.log(`Saved paper: ${entity.getTitle()}`);
        }
    })() as any;

    const paperService = new PaperApplicationService(paperRepository);

    const requestDTO: CreatePaperDTO = {
        title: "Emerging AI in Market Research",
        year: 2026,
        industryId: "123-ind"
    };

    console.log("Processing Request...");
    const responseDTO = await paperService.createPaper(requestDTO);

    console.log("Response Output:", responseDTO);
    console.log("Vertical Slice Complete");
}

bootstrapVerticalSlice();

import { PaperApplicationService } from '../application/services/PaperApplicationService';
import { CreatePaperDTO } from '../application/dtos/ResearchPaperDTO';

console.log("Vertical Slice Integration Test ");

const mockRepo = new (class {
    public async save(entity: any) { }
})() as any;

const service = new PaperApplicationService(mockRepo);

async function runIntegrationTest() {
    try {
        const dto: CreatePaperDTO = { title: "Int Test Pipeline", year: 2026, industryId: "123" };

        const response = await service.createPaper(dto);

        if (response.title === "Int Test Pipeline" && response.paperId) {
            console.log("Vertical Slice Test Passed: DTO went through Application Service, mapped domains, and cleanly returned boundary object.");
        } else {
            console.error("Vertical Slice Failure: Unexpected response.", response);
        }
    } catch (e) {
        console.error("Vertical Slice Exception caught:", e);
    }
}

runIntegrationTest();

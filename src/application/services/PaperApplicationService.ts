import { IRepository } from '../../domain/contracts/IRepository';
import { ResearchPaper } from '../../domain/ResearchPaper';
import { CreatePaperDTO, PaperResponseDTO } from '../dtos/ResearchPaperDTO';
import { ResearchPaperFactory } from '../../domain/factories/ResearchPaperFactory';
import { PaperMapper } from '../mappers/PaperMapper';

export class PaperApplicationService {
    private repository: IRepository<ResearchPaper>;

    constructor(repository: IRepository<ResearchPaper>) {
        this.repository = repository;
    }

    public async createPaper(dto: CreatePaperDTO): Promise<PaperResponseDTO> {
        if (!dto.title) throw new Error("Validation Failed");
        
        const paper = ResearchPaperFactory.createFromUpload(
            dto.title, 
            dto.year, 
            { id: dto.industryId, name: "Unknown", desc: "" }
        );
        
        await this.repository.save(paper);
        
        return PaperMapper.toDTO(paper);
    }
}

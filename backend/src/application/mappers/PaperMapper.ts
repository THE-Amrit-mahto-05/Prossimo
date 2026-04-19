import { ResearchPaper } from '../../domain/ResearchPaper';
import { PaperResponseDTO } from '../dtos/ResearchPaperDTO';

export class PaperMapper {
    public static toDTO(paper: ResearchPaper): PaperResponseDTO {
        return {
            paperId: paper.getId(),
            title: paper.getTitle(),
            year: paper.getYear(),
            industryName: paper.getIndustry().getName()
        };
    }
}

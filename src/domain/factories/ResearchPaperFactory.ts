import { ResearchPaper } from '../ResearchPaper';
import { Industry } from '../Industry';

export class ResearchPaperFactory {
    public static createFromUpload(title: string, year: number, industryData: any): ResearchPaper {
        const industry = new Industry(industryData.id, industryData.name, industryData.desc);
        const generatedId = Math.random().toString(36).substring(7);
        return new ResearchPaper(generatedId, title, year, industry);
    }
}

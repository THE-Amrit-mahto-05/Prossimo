import { IndustryCategory } from './enums';
export interface ICreatePaperDTO {
    title: string;
    year: number;
    industryId: string;
}

export interface IPaperResponseDTO {
    paperId: string;
    title: string;
    year: number;
    industryName: string;
    industryCategory?: IndustryCategory;
}

export interface CreatePaperDTO {
    title: string;
    year: number;
    industryId: string;
}

export interface PaperResponseDTO {
    paperId: string;
    title: string;
    year: number;
    industryName: string;
}

export interface ExternalPaperDTO {
    externalId: string;
    title: string;
    year: number;
    authors: string[];
    venue?: string;
    url?: string;
    industryName?: string;
}

export interface IPaperSourceAdapter {

    search(query: string): Promise<ExternalPaperDTO[]>;
    getDetails(externalId: string): Promise<ExternalPaperDTO>;
}

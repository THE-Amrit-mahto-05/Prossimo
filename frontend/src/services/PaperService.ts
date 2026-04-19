import { ApiClient } from '../api/client';
import { ICreatePaperDTO, IPaperResponseDTO } from '../types/dtos';

export class PaperService {
    private client: ApiClient;

    constructor() {
        this.client = ApiClient.getInstance();
    }

    public async uploadPaper(dto: ICreatePaperDTO): Promise<IPaperResponseDTO> {
        return await this.client.post<IPaperResponseDTO>('/papers', dto);
    }

    public async getPapers(): Promise<IPaperResponseDTO[]> {
        return await this.client.get<IPaperResponseDTO[]>('/papers');
    }

    public async searchPapers(query: string): Promise<any[]> {
        return await this.client.get<any[]>(`/papers/search?q=${encodeURIComponent(query)}`);
    }

    public async importPaper(externalId: string): Promise<IPaperResponseDTO> {
        return await this.client.post<IPaperResponseDTO>('/papers/import', { externalId });
    }

    public async getAnalytics(): Promise<any[]> {
        return await this.client.get<any[]>('/papers/stats');
    }
}

export const paperService = new PaperService();

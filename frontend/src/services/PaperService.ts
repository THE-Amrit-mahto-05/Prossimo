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
}

export const paperService = new PaperService();

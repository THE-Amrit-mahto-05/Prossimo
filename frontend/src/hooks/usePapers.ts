import { useState } from 'react';
import { paperService } from '../services/PaperService';
import { ICreatePaperDTO, IPaperResponseDTO } from '../types/dtos';

export const usePapers = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [lastUploaded, setLastUploaded] = useState<IPaperResponseDTO | null>(null);

    const uploadPaper = async (dto: ICreatePaperDTO) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await paperService.uploadPaper(dto);
            setLastUploaded(result);
            return result;
        } catch (err: any) {
            setError(err.message || 'An error occurred during upload');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        uploadPaper,
        isLoading,
        error,
        lastUploaded
    };
};

import React, { useState, useEffect, useCallback } from 'react';
import { paperService } from '../services/PaperService';
import { IPaperResponseDTO } from '../types/dtos';

export function useRecentPapers() {
    const [papers, setPapers] = useState<IPaperResponseDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPapers = useCallback(() => {
        const doFetch = async () => {
            setIsLoading(true);
            try {
                const data = await paperService.getPapers();
                console.log('[DEBUG] Recent papers fetched:', data);
                setPapers(data);
                setError(null);
            } catch (err) {
                setError('Failed to load recent papers');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        doFetch();
    }, [paperService]);

    useEffect(() => {
        fetchPapers();
    }, [fetchPapers]);

    return { papers, isLoading, error, refresh: fetchPapers };
}

import React, { useState, useEffect, useCallback } from 'react';
import { paperService } from '../services/PaperService';

export const useAnalytics = () => {
    const [stats, setStats] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(() => {
        const doFetch = async () => {
            setIsLoading(true);
            try {
                const data = await paperService.getAnalytics();
                setStats(data);
            } catch (err: any) {
                setError(err.message || 'Failed to load stats');
            } finally {
                setIsLoading(false);
            }
        };
        doFetch();
    }, [paperService]);

    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    return {
        stats,
        isLoading,
        error,
        refresh: fetchStats
    };
};

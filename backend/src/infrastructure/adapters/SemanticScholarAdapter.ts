import { IPaperSourceAdapter, ExternalPaperDTO } from '../../domain/contracts/IPaperSourceAdapter';

export class SemanticScholarAdapter implements IPaperSourceAdapter {
    private readonly baseUrl = 'https://api.semanticscholar.org/graph/v1/paper';

    public async search(query: string): Promise<ExternalPaperDTO[]> {
        const url = `${this.baseUrl}/search?query=${encodeURIComponent(query)}&limit=10&fields=title,year,authors,venue,url`;
        
        try {
            console.log(`[EXTERNAL API] Searching Semantic Scholar for: "${query}"`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Semantic Scholar API error: ${response.statusText}`);
            }

            const data = await response.json() as any;
            
            return (data.data || []).map((item: any) => ({
                externalId: item.paperId,
                title: item.title,
                year: item.year || 0,
                authors: (item.authors || []).map((a: any) => a.name),
                venue: item.venue || 'Unknown',
                url: item.url || ''
            }));

        } catch (error) {
            console.error('[EXTERNAL API] Search failed:', error);
            throw error;
        }
    }

    public async getDetails(externalId: string): Promise<ExternalPaperDTO> {
        const url = `https://api.semanticscholar.org/graph/v1/paper/${externalId}?fields=title,year,authors,venue,url`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch paper details');
        
        const item = await response.json() as any;
        return {
            externalId: item.paperId,
            title: item.title,
            year: item.year || 0,
            authors: (item.authors || []).map((a: any) => a.name),
            venue: item.venue || 'Unknown',
            url: item.url || ''
        };
    }
}

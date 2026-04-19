import { IPaperSourceAdapter, ExternalPaperDTO } from '../../domain/contracts/IPaperSourceAdapter';

export class OpenAlexAdapter implements IPaperSourceAdapter {
    private readonly baseUrl = 'https://api.openalex.org/works';

    public async search(query: string): Promise<ExternalPaperDTO[]> {
        const url = `${this.baseUrl}?search=${encodeURIComponent(query)}&per_page=10`;

        try {
            console.log(`[EXTERNAL API] Searching OpenAlex for: "${query}"`);
            const response = await fetch(url, { headers: { 'Accept': 'application/json' } });

            if (!response.ok) {
                throw new Error(`OpenAlex API error: ${response.statusText}`);
            }

            const data = await response.json() as any;

            return (data.results || []).map((item: any) => ({
                externalId: item.id,
                title: item.display_name || item.title || 'Untitled',
                year: item.publication_year || 0,
                authors: (item.authorships || []).map((a: any) => a.author.display_name),
                venue: item.primary_location?.source?.display_name || 'Unknown Venue',
                url: item.doi || item.ids?.mag || '',
                industryName: item.primary_topic?.display_name || (item.concepts || [])[0]?.display_name || 'General Research'
            }));

        } catch (error) {
            console.error('[EXTERNAL API] Search failed:', error);
            throw error;
        }
    }

    public async getDetails(externalId: string): Promise<ExternalPaperDTO> {
        const apiId = externalId.replace('https://openalex.org/', 'https://api.openalex.org/works/');

        console.log(`[EXTERNAL API] Fetching OpenAlex details for: ${apiId}`);
        const response = await fetch(apiId, { headers: { 'Accept': 'application/json' } });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`OpenAlex Detail API error (${response.status}): ${errorText.substring(0, 50)}`);
        }

        const item = await response.json() as any;
        return {
            externalId: item.id,
            title: item.display_name || item.title || 'Untitled',
            year: item.publication_year || 0,
            authors: (item.authorships || []).map((a: any) => a.author.display_name),
            venue: item.primary_location?.source?.display_name || 'Unknown Venue',
            url: item.doi || item.ids?.mag || '',
            industryName: item.primary_topic?.display_name || (item.concepts || [])[0]?.display_name || 'General Research'
        };
    }
}

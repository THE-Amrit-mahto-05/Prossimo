import { Industry } from './Industry';

export class ResearchPaper {
    private id: string;
    private title: string;
    private year: number;
    private industry: Industry;

    constructor(id: string, title: string, year: number, industry: Industry) {
        if (title.trim().length === 0) throw new Error("Title cannot be empty");
        if (year < 1900 || year > new Date().getFullYear()) {
            throw new Error("Invalid publication year");
        }
        this.id = id;
        this.title = title;
        this.year = year;
        this.industry = industry;
    }

    public getId(): string { return this.id; }
    public getTitle(): string { return this.title; }
    public getYear(): number { return this.year; }
    public getIndustry(): Industry { return this.industry; }
}

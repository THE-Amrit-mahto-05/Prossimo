import { ResearchPaper } from './ResearchPaper';

export class User {
    private id: string;
    private name: string;
    private email: string;
    private uploadedPapers: ResearchPaper[]; 

    constructor(id: string, name: string, email: string) {
        if (!email.includes("@")) throw new Error("Invalid email format");
        this.id = id;
        this.name = name;
        this.email = email;
        this.uploadedPapers = [];
    }

    public uploadPaper(paper: ResearchPaper): void {
        this.uploadedPapers.push(paper);
    }

    public getUploadedPapers(): ReadonlyArray<ResearchPaper> {
        return this.uploadedPapers;
    }
}

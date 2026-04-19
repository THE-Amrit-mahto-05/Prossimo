export abstract class IndustryComponent {
    protected name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    public abstract getPapersCount(): number;
}

export class IndustryLeaf extends IndustryComponent {
    private papersCount: number;

    constructor(name: string, papersCount: number) {
        super(name);
        this.papersCount = papersCount;
    }

    public getPapersCount(): number {
        return this.papersCount;
    }
}

export class IndustryCategory extends IndustryComponent {
    private children: IndustryComponent[] = [];

    public add(component: IndustryComponent): void {
        this.children.push(component);
    }

    public getPapersCount(): number {
        return this.children.reduce((total, child) => total + child.getPapersCount(), 0);
    }
}

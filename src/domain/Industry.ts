export class Industry {
    private id: string;
    private name: string;
    private description: string;

    constructor(id: string, name: string, description: string) {
        if (name.trim().length === 0) throw new Error("Industry name cannot be empty");
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
}

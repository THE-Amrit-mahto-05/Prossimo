export abstract class ReportGeneratorTemplate {

    public generateReport(): void {
        this.fetchData();
        this.processData();
        this.formatReport();
    }

    protected abstract fetchData(): void;
    protected abstract processData(): void;

    protected formatReport(): void {
    }
}

export class IndustryReportGenerator extends ReportGeneratorTemplate {
    protected fetchData(): void {
    }

    protected processData(): void {
    }
}

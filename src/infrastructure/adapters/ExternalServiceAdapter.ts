export interface IOldExternalSystem {
    sendDataByXML(xmlData: string): boolean;
}

export interface INewSystemTarget {
    sendJSON(jsonData: object): boolean;
}

export class ExternalServiceAdapter implements INewSystemTarget {
    private oldSystem: IOldExternalSystem;

    constructor(oldSystem: IOldExternalSystem) {
        this.oldSystem = oldSystem;
    }

    public sendJSON(jsonData: object): boolean {
        const dummyXml = `<data>${JSON.stringify(jsonData)}</data>`;
        return this.oldSystem.sendDataByXML(dummyXml);
    }
}

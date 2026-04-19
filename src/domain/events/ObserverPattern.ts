export interface IObserver<T> {
    update(data: T): void;
}

export class AnalyticsObserver implements IObserver<any> {
    public update(data: any): void {
    }
}

export class PaperUploadSubject {
    private observers: IObserver<any>[] = [];

    public subscribe(observer: IObserver<any>): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: IObserver<any>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notifyAll(data: any): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}

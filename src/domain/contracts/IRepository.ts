export interface IReadable<T> {
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
}

export interface IWritable<T> {
    save(entity: T): Promise<void>;
    update(id: string, entity: T): Promise<void>;
}

export interface IDeletable {
    delete(id: string): Promise<void>;
}

export interface IRepository<T> extends IReadable<T>, IWritable<T>, IDeletable { }

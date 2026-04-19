import { IRepository } from '../../domain/contracts/IRepository';

export abstract class AbstractRepository<T> implements IRepository<T> {
    protected memoryStorage: Map<string, T> = new Map();

    public async findById(id: string): Promise<T | null> {
        return this.memoryStorage.get(id) || null;
    }

    public async findAll(): Promise<T[]> {
        return Array.from(this.memoryStorage.values());
    }

    public async save(entity: T): Promise<void> {
        const anyEntity = entity as any;
        this.memoryStorage.set(anyEntity.getId(), entity);
    }

    public abstract update(id: string, entity: T): Promise<void>;
    public abstract delete(id: string): Promise<void>;
}

import { IRepository } from '../../domain/contracts/IRepository';

export class CacheRepositoryDecorator<T> implements IRepository<T> {
    private dbRepository: IRepository<T>;
    private cache: Map<string, T> = new Map();

    constructor(dbRepository: IRepository<T>) {
        this.dbRepository = dbRepository;
    }

    public async findById(id: string): Promise<T | null> {
        if (this.cache.has(id)) {
            return this.cache.get(id) || null;
        }
        const entity = await this.dbRepository.findById(id);
        if (entity) this.cache.set(id, entity);
        return entity;
    }

    public async findAll(): Promise<T[]> {
        return this.dbRepository.findAll();
    }

    public async save(entity: T): Promise<void> {
        await this.dbRepository.save(entity);
        this.cache.set((entity as any).getId(), entity);
    }

    public async update(id: string, entity: T): Promise<void> {
        await this.dbRepository.update(id, entity);
        this.cache.set(id, entity);
    }

    public async delete(id: string): Promise<void> {
        await this.dbRepository.delete(id);
        this.cache.delete(id);
    }
}

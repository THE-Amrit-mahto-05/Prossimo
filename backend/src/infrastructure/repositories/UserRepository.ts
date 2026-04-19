import { AbstractRepository } from './AbstractRepository';
import { User } from '../../domain/User';

export class UserRepository extends AbstractRepository<User> {

    public async update(id: string, entity: User): Promise<void> {
        if (!this.memoryStorage.has(id)) {
            throw new Error("User not found");
        }
        this.memoryStorage.set(id, entity);
    }

    public async delete(id: string): Promise<void> {
        this.memoryStorage.delete(id);
    }
}

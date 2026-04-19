import { IStorageStrategy } from './IStorageStrategy';

export class LocalFileStorage implements IStorageStrategy {
    public async upload(fileBlob: any, fileName: string): Promise<string> {
        console.log("Uploading locally...");
        return `/local/uploads/${fileName}`;
    }
}

export class CloudFileStorage implements IStorageStrategy {
    public async upload(fileBlob: any, fileName: string): Promise<string> {
        console.log("Uploading to cloud...");
        return `https://cloudprovider.com/storage/${fileName}`;
    }
}

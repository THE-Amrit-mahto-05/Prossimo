
export interface IStorageStrategy {
    upload(fileBlob: any, fileName: string): Promise<string>;
}

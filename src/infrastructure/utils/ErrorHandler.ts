export class GlobalErrorHandler {
    public static handleError(error: Error): void {
        const timestamp = new Date().toISOString();
        console.error(`[${timestamp}] [System Error]: ${error.message}`);
    }

    public static executeWithRetry<T>(operation: () => Promise<T>, retries = 3): Promise<T> {
        return operation().catch((error) => {
            if (retries > 0) {
                return this.executeWithRetry(operation, retries - 1);
            }
            throw error;
        });
    }
}

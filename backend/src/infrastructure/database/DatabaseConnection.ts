export class DatabaseConnection {
    private static instance: DatabaseConnection;

    private constructor() {}

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public connect(): void {
        console.log("Database connected via Singleton");
    }
}

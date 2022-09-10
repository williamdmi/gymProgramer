const Client = require("pg").Client

class DB {
    client;
    constructor() {
        this.client = undefined;
        this.create();
    }

    /**
     * Creates a client object
     * @returns The client object
     */
    async create() {
        this.client = new Client({
            connectionString:
                'postgres://gvjtaushaivila:85b27c9ecfe3ee03459e52f5d3b809b64a6a7598e2b7cbde62fd0a0d5cdfec62@ec2-3-217-113-25.compute-1.amazonaws.com:5432/dcgamjv7qq292v',
            ssl: {
                rejectUnauthorized: false,
            },
        });
        await this.client.connect();
        console.log("connected to db");
    }

    /**
     * Connects to the database and creates the table if needed.
     */
    
    async createTables() {
        let query;
        query =
            `CREATE TABLE IF NOT EXISTS accounts(
            location_id SERIAL PRIMARY KEY,
            lat INTEGER NOT NULL,
            lon INTEGER NOT NULL,
            base_name TEXT NOT NULL,
            nearest_city TEXT NOT NULL
        );`;
        await this.client.query(query);
    }

    //TODO: Insert Functions
    //TODO: DELETE functions
    //TODO: edit functions
}

exports.DB = DB;
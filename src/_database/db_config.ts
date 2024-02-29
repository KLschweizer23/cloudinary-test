import { Pool, PoolConfig } from 'pg';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// Database access configuration
// Enter here your postgres local database access credentials

// interface LocalDatabaseConfig extends PoolConfig {
//     user: string;
//     password: string;
//     database: string;
//     host: string;
//     port: number;
// }

const localDatabase: PoolConfig  = {
    user: process.env.user || '',
    password: process.env.password || '',
    database: process.env.database || '',
    host: process.env.host || 'localhost',
    port: parseInt(process.env.db_port || '5432')
}

const ssl = process.env.ssl || '';
if (ssl != '') {
    localDatabase.ssl = {
        ca: fs.readFileSync(path.join(__dirname, `../../${ssl}`))
    }
}

const pool = new Pool(localDatabase);

module.exports = pool;
export default pool;
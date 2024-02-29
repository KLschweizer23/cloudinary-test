import pool from "../../_database/db_config";

const addPersonModel = async (req_body: any) => {

    const { name, email } = req_body;

    const param: string[] = [name, email];

    const query = `INSERT INTO test_persons (name, email) VALUES($1, $2) ON CONFLICT (email) DO NOTHING`;

    try {
        const response = await pool.query(query, param);
        return response;
    } catch (error: any) {
        console.log('add person model error says: ', error.message);
    }

}

export default addPersonModel;
import pool from "../../_database/db_config";

const deletePersonModel = async (req_body: any) => {

    const { id } = req_body;

    const param: Array<String> = [id];

    const query = `DELETE FROM test_persons WHERE id = $1`;

    try {
        const response = await pool.query(query, param);
        return response;
    } catch (error: any) {
        console.log('delete person model error says: ', error.message);
    }

}

export default deletePersonModel;
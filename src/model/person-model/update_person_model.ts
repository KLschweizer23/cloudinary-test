import pool from "../../_database/db_config";

const updatePersonModel = async (req_body: any) => {

    const { id, name, email } = req_body;

    const param: Array<String> = [id, name, email];

    const query = `UPDATE test_persons
    SET
    name = $2,
    email = $3
    WHERE
    id = $1
    AND NOT EXISTS (
        SELECT *
        FROM test_persons
        WHERE email = $3 AND id != $1
    )`;

    try {
        const response = await pool.query(query, param);
        return response;
    } catch (error: any) {
        console.log('update person model error says: ', error.message);
    }

}

export default updatePersonModel;
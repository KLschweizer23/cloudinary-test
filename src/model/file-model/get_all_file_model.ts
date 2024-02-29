import pool from "../../_database/db_config";

const getAllFileModel = async (req_body: any) => {

    const { person_id } = req_body;

    const params: string[] = [person_id];
    
    const query = 'SELECT * FROM test_files WHERE person_id = $1;';
    const query2 = `SELECT * FROM test_persons WHERE id = $1`;

    try {
        const response2 = await pool.query(query2, params);

        if (response2.rowCount === 0) {
            return 'Person does not exist';
        }

        const person = response2.rows[0];

        const response = await pool.query(query, params);

        const files: {}[] = [];

        response.rows.forEach((row) => {
            const newRow = {
                'file_id': row.id,
                'file_name': row.file_name,
                'file_unique_string': row.unique_string,
                'file_resource_type': row.resource_type,
                'file_url': row.url
            };
            files.push(newRow);
        });

        const returnResponse = {
            'id': person.id,
            'name': person.name,
            'email': person.email,
            'files': files
        }

        return returnResponse;
    } catch (error: any) {
        console.log('get file lists model error says:', error.message);
    }

}

export default getAllFileModel;
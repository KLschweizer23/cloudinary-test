import pool from "../../_database/db_config";
import { v2 as cloudinary } from 'cloudinary';

const deleteFileModel = async (req_body: any) => {

    const { id } = req_body;

    const params: string[] = [id];

    const query = `SELECT * FROM test_files WHERE id = $1;`;
    
    const query2 = `DELETE FROM test_files WHERE id = $1;`;

    try {
        const selectResponse = await pool.query(query, params);

        if (selectResponse && selectResponse.rowCount && selectResponse.rowCount >= 1) {
            const data = selectResponse.rows[0];
            const public_id = `${data.unique_string}_${data.file_name}`;
            const resource_type = data.resource_type;

            const result = await cloudinary.uploader.destroy(public_id, { resource_type: resource_type });

            if (result.result === 'ok') {
                const response = await pool.query(query2, params);
                return response;
            } else {
                return false;
            }
        }

    } catch (error: any) {
        console.log('delete file model error says:', error.message);
    }

}

export default deleteFileModel;
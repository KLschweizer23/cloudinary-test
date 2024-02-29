import cloudinary from "../../_database/cloudinary_config";
import fs from 'fs';
import pool from "../../_database/db_config";

const addFileModel = async (req_file: any, req_body: any) => {

    const { person_id } = req_body;

    const query = 'INSERT INTO test_files(file_name, unique_string, url, resource_type, person_id) VALUES ($1, $2, $3, $4, $5);';
    
    try {
        const public_id = `${req_file.filename}_${req_file.originalname}`;
        const cloudinaryResponse = await cloudinary.uploader.upload(req_file.path, { resource_type: 'auto', public_id: public_id });

        const filename = req_file.originalname;
        const unique_string = req_file.filename;
        const resource_type = cloudinaryResponse.resource_type;
        const url = cloudinaryResponse.url;

        const params = [filename, unique_string, url, resource_type, person_id];

        const response = await pool.query(query, params);

        fs.unlink(req_file.path, (err) => {
            if (err) {
                console.error('Error deleting file');
            }
        });

        return response;
    } catch (error: any) {
        console.log('add file model error says:', error.message);
    }

}

export default addFileModel;

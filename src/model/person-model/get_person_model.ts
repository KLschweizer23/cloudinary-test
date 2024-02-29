import pool from "../../_database/db_config";

const getPersonModel = async () => {

    const query = `SELECT p.id, p.name, p.email, COALESCE(ARRAY_AGG(f.file_name) FILTER (WHERE f.file_name IS NOT NULL), '{}') AS files FROM test_persons p left join test_files f ON p.id = f.person_id GROUP BY p.id ORDER BY p.id`;

    try {
        const response = await pool.query(query);
        return response;
    } catch (error: any) {
        console.log('get person model error says: ', error.message);
    }

}

export default getPersonModel;
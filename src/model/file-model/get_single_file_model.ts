import { v2 as cloudinary } from 'cloudinary';

const getSingleFileModel = async (req_body: any) => {

    const { id } = req_body;

    try {
        const name = '85a37a4844e4e9d9155334e7e0fa142c_My File.docx';
        const result = await cloudinary.api.resource(name, {
            resource_type: 'raw'
        });
        console.log(result);
        return 'success';
    } catch (error: any) {
        console.log('get single file model error says:', error.message);
        return 'fail';
    }

}

export default getSingleFileModel;
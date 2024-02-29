import deleteFileModel from "../../model/file-model/delete_file_model";
import { Request, Response } from 'express';

const deleteFileController = async (req: Request, res: Response) => {

    const modelResponse = await deleteFileModel(req.body);

    try {
        if (modelResponse && modelResponse?.rowCount === 1) {
            res.status(200).send('success');
        } else if (!modelResponse || modelResponse?.rowCount === 0) {
            res.status(200).send('fail');
        }
    } catch (error: any) {
        console.log('delete file controller error says:', error.message);
    }

}

export default deleteFileController;
import addFileModel from "../../model/file-model/add_file_model";
import { Request, Response } from 'express';

const addFileController = async (req: Request, res: Response) => {

    const modelResponse = await addFileModel(req.file, req.body);

    try {
        if (modelResponse?.rowCount === 1) {
            res.status(200).send('success');
        } else if (!modelResponse || modelResponse?.rowCount === 0) {
            res.status(200).send('fail');
        }
    } catch (error: any) {
        console.log('add file controller error says:', error.message);
    }

}

export default addFileController;
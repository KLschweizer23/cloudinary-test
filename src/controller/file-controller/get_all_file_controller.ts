import getAllFileModel from '../../model/file-model/get_all_file_model';
import { Request, Response } from 'express';

const getAllFileController = async (req: Request, res: Response) => {

    const modelResponse: any = await getAllFileModel(req.body);

    try {
        res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('get file lists controller error says:', error.message);
    }

}

export default getAllFileController;
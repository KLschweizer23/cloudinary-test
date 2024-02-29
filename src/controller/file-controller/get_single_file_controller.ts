import getSingleFileModel from "../../model/file-model/get_single_file_model";
import { Request, Response } from 'express';

const getSingleFileController = async (req: Request, res: Response) => {

    const modelResponse = await getSingleFileModel(req.body);

    try {
        res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('get single file controller error says:', error.message);
    }

}

export default getSingleFileController;
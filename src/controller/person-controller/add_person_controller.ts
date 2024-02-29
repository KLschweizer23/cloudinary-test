import addPersonModel from '../../model/person-model/add_person_model';
import { Request, Response } from 'express';

const addFileController = async (req: Request, res: Response) => {

    const modelResponse: any = await addPersonModel(req.body);

    try {
        res.status(200).send(modelResponse);
    } catch (error: any) {
        console.log('add file controller error says:', error.message);
    }

}

export default addFileController;
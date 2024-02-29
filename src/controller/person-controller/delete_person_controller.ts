import deletePersonModel from '../../model/person-model/delete_person_model';
import { Request, Response } from 'express';

const deletePersonController = async (req: Request, res: Response) => {

    const modelResponse: any = await deletePersonModel(req.body);

    try {
        if (!modelResponse || modelResponse.rowCount === 0) {
            res.status(200).send('conflict');
        } else if (modelResponse.rowCount === 1) {
            res.status(200).send('success');
        }
    } catch (error: any) {
        console.log('delete person controller error says:', error.message);
    }

}

export default deletePersonController;
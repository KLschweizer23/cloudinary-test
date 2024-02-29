import updatePersonModel from '../../model/person-model/update_person_model';
import { Request, Response } from 'express';

const updatePersonController = async (req: Request, res: Response) => {

    const modelResponse: any = await updatePersonModel(req.body);

    try {
        if (modelResponse.rowCount === 0) {
            res.status(200).send('conflict');
        } else if (modelResponse.rowCount === 1) {
            res.status(200).send('success');
        }
    } catch (error: any) {
        console.log('update person controller error says:', error.message);
    }

}

export default updatePersonController;
import getPersonModel from '../../model/person-model/get_person_model';
import { Request, Response } from 'express';

const getPersonController = async (req: Request, res: Response) => {

    const modelResponse: any = await getPersonModel();

    try {
        return res.status(200).send(modelResponse.rows);
    } catch (error: any) {
        console.log('get person controller error says:', error.message);
    }

}

export default getPersonController;
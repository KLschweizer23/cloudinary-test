import express from 'express';
const personRouters = express.Router();

import addPersonController from '../controller/person-controller/add_person_controller';
import getPersonController from '../controller/person-controller/get_person_controller';
import updatePersonController from '../controller/person-controller/update_person_controller';
import deletePersonController from '../controller/person-controller/delete_person_controller';

personRouters.post('/add-person', addPersonController);
personRouters.get('/get-all', getPersonController);
personRouters.put('/update-person', updatePersonController);
personRouters.delete('/delete-person', deletePersonController);

export default personRouters;
import express from 'express';
import multer from 'multer';

import addFileController from '../controller/file-controller/add_file_controller';
import getSingleFileController from '../controller/file-controller/get_single_file_controller';
import getAllFileController from '../controller/file-controller/get_all_file_controller';
import deleteFileController from '../controller/file-controller/delete_file_controller';

const fileRouters = express.Router();
const upload = multer({ dest: 'uploads/' });


fileRouters.post('/add-file', upload.single('file'), addFileController);
fileRouters.put('/get-single-file', getSingleFileController);
fileRouters.put('/get-all-file', getAllFileController);
fileRouters.delete('/delete-file', deleteFileController);

export default fileRouters;
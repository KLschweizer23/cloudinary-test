import express from 'express';
import fileRouters from './routers/file_router';
import personRouters from './routers/person_router';

const app = express();
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static('public'));

app.use('/files', fileRouters);
app.use('/persons', personRouters);

export default app;
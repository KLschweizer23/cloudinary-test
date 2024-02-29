import appServer from './app';
import http from 'http';
import 'dotenv/config';

const server = http.createServer(appServer);

appServer.get('/', async (req, res) => {
    res.send('Server is up!');
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
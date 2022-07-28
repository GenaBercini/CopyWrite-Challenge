const express =  require("express")
const dotenv = require("dotenv")

dotenv.config();
const server = express();
const router = require('./routes/routes')

server.set('port', process.env.PORT || 3001);
server.use(express.json({ limit: '50mb' }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use('/', router)

server.listen(server.get('port'), () => {
    console.log('Server listening on port', server.get('port'));
})


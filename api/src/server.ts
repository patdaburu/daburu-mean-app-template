import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as path from 'path';


// import routers
import PostRouter from './routers/PostRouter';
import UserRouter from './routers/UserRouter';


// Server class
export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        // set up mongoose
        const MONGO_URI = 'mongodb://localhost/test';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useMongoClient: true });

        // config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(cors());
    }

    public routes(): void {
        let router: express.Router;
        router = express.Router();

        this.app.use('/', router);
        this.app.use('/api/v1/posts', PostRouter);
        this.app.use('/api/v1/users', UserRouter);

        // Angular dist output folder.
        this.app.use(express.static(path.join(__dirname, '../../ui/dist')));
        // Send all other requests to the Angular app.
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../../ui/dist/index.html'));
        });
    }
}

export default new Server().app;

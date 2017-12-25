import { NextFunction, Request,  Response, Router } from 'express';
import User from '../models/User';

// tslint:disable object-literal-sort-keys
// tslint:disable object-literal-shorthand
// tslint:disable no-identical-functions
class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public GetRouter(): Router {
        return this.router;
    }

    public GetUsers(req: Request, res: Response): void {
        User.find({})
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
    }

    public GetUser(req: Request, res: Response): void {
        const username: string = req.params.username;
        User.findOne({ username }).populate('posts', 'title content') // This is how Mongoose populates related data.
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
    }

    public CreateUser(req: Request, res: Response): void {
        const name: string = req.body.name;
        const username: string = req.body.username;
        const email: string = req.body.email;
        const password: string = req.body.password;
        const posts: string[] = req.body.posts;

        // Create the new object.
        const user = new User({
            name: name,
            username: username,
            email: email,
            password: password,
            posts: posts
        });

        user.save()
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
    }

    public UpdateUser(req: Request, res: Response): void {
        const username: string = req.params.username;
        // TODO: Validate the data.
        User.findOneAndUpdate({ username }, req.body)
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
    }

    public DeleteUser(req: Request, res: Response): void {
        const username: string = req.params.username;
        User.findOneAndRemove({ username })
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            });
    }

    public routes() {
        this.router.get('/', this.GetUsers);
        this.router.get('/:username', this.GetUser);
        this.router.post('/', this.CreateUser);
        this.router.put('/:username', this.UpdateUser);
        this.router.delete('/:username', this.DeleteUser);
    }
}

// export
const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.GetRouter();

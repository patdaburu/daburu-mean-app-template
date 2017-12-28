import { NextFunction, Request,  Response, Router } from 'express';
import Post from '../models/Post';

// tslint:disable object-literal-sort-keys
// tslint:disable object-literal-shorthand
// tslint:disable no-identical-functions
export class PostRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public GetRouter(): Router {
        return this.router;
    }

    public GetPosts(req: Request, res: Response): void {
        Post.find({})
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

    public GetPost(req: Request, res: Response): void {
        const slug: string = req.params.slug;
        Post.findOne({ slug })
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

    public CreatePost(req: Request, res: Response): void {
        const title: string = req.body.title;
        const slug: string = req.body.slug;
        const content: string = req.body.content;
        const featuredImage: string = req.body.featuredImage;

        // Create the new object.
        const post = new Post({
            title: title,
            slug: slug,
            content: content,
            featuredImage: featuredImage
        });

        post.save()
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

    public UpdatePost(req: Request, res: Response): void {
        const slug: string = req.params.slug;
        // TODO: Validate the data.
        Post.findOneAndUpdate({ slug }, req.body)
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

    public DeletePost(req: Request, res: Response): void {
        const slug: string = req.params.slug;
        Post.findOneAndRemove({ slug })
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
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
        this.router.post('/', this.CreatePost);
        this.router.put('/:slug', this.UpdatePost);
        this.router.delete('/:slug', this.DeletePost);
    }
}

// export
const postRoutes = new PostRouter();
postRoutes.routes();

export default postRoutes.GetRouter();

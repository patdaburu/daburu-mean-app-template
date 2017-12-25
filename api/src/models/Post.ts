import { model, Schema } from 'mongoose';

// tslint:disable object-literal-sort-keys
const PostSchema: Schema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    title: {
        type: String,
        default: '',
        required: true
    },
    slug: {
        // url.com/posts/first-blog-post
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    featuredImage: {
        type: String,
        default: ''
    }
});


export default model('Post', PostSchema);

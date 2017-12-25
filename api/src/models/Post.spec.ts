import { expect } from 'chai';
import 'mocha';
import Post from './Post';

describe('Test the Post object.', () => {
    describe('Create a new instance and test the properties.', () => {
        it('returns the values supplied at construction', () => {
            const post = new Post({
                content: 'Test Content',
                featuredImage: 'Test Featured Image',
                slug: 'Test Slug',
                title: 'Test Title'
            });
            expect(post.content).to.equal('Test Content');
        });
    });
});

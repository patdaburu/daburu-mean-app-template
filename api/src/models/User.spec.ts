import { expect } from 'chai';
import 'mocha';
import User from './User';

describe('Test the Post object.', () => {
    describe('Create a new Post instance and test the properties.', () => {
        it('returns the values supplied at construction', () => {
            const user = new User({
                email: 'test@testme.org',
                name: 'Test Name',
                password: 'Never handle passwords like this!',
                posts: [],
                username: 'Test User Name'
            });
            expect(user.email).to.equal('test@testme.org');
            expect(user.name).to.equal('Test Name');
            expect(user.password).to.equal('Never handle passwords like this!');
            expect(user.username).to.equal('test user name');
        });
    });
});
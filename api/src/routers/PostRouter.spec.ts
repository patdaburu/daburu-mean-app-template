import { expect } from 'chai';
import 'mocha';
import { PostRouter } from './PostRouter';

import { Mockgoose } from 'mockgoose-fix';
import * as mongoose from 'mongoose';


describe('Test the PostRouter.', () => {

    // tslint:disable no-console
    before((done: any) => {

        // The block below seems to work, but doesn't use mockgoose.

        mongoose.connect('mongodb://localhost/unit-tests', { useMongoClient: true });
        mongoose.connection.on('connected', () => {
            console.log('db connection is now open');
            done();
        });


/*
        // https://github.com/mochajs/mocha/issues/1825 ... I just discovered a much cleaner work around. Use promises:

        const mockgoose = new Mockgoose(mongoose);

        mongoose.Promise = global.Promise;
        mockgoose.helper.setDbVersion('3.4.3');

        mockgoose.prepareStorage()
            .then(() => {
            mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
            mongoose.connection.on('connected', () => {
                console.log('db connection is now open');
                done();
            });
        })
            .catch((err) => {
            console.log(err);
            done(err);
        });
*/

    });




    describe('Create a new PostRouter instance.', () => {
        it('exists', (done: any) => {
            const postRouter = new PostRouter();
            expect('abc').to.equal('abc');
            done();
        });
    });

    after((done: any) => {
        mongoose.disconnect();
        done();
    });

});


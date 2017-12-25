import { expect } from 'chai';
import 'mocha';

// If you have tests that aren't specific to a single module,
// they can go in the 'test' directory.

describe('Run a sample integration test.', () => {
    describe('Run a test.', () => {
        it('simply passes to prove a point', () => {
            expect(true).to.equal(true);
        });
    });
});

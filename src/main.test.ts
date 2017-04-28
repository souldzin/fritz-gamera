import {expect} from 'chai';

describe('this test', () => {
    it('is a good one', () => {
        expect(true).to.equal(true);
    });
    it('is also a bad one', (done) => {
        done(new Error('You\'ve met with a terrible fate haven\'t you?'));
    });
});

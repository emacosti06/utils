//if you use prisma
import prisma from '../../db';
import fetch from 'isomorphic-unfetch';

jest.setTimeout(1000 * 100) // for slow database :sweat:

beforeAll(done => {
    globalThis.fetch = fetch;
    done()
})

describe('FunctionName', () => {
    it('With <paramas>, should <what?>', async () => {
        // given
        const param1 = 'asd'

        // when
        const result = await functionName(param1)

        // then
        expect(product).not.toBeNull();
        expect(stripeProductId).toEqual(product.id);
    })
})

// Closing the DB connection allows Jest to exit successfully.
afterAll(done => {
    prisma.$disconnect();
    done()
})
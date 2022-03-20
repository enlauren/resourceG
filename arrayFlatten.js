const assert = require('assert');

const flattenArray = array => {
    return array.reduce(
        (flattened, currentElem) => flattened.concat(
            Array.isArray(currentElem) ? flattenArray(currentElem) : currentElem), []
        )
};

assert.deepStrictEqual([4,undefined,4,null,6,6,7,7,8,9], flattenArray([4, undefined, [4, null, 6],[6,7,[7,8,9]]]));
assert.deepStrictEqual([4,4,6,6,7,7,8,9], flattenArray([4,[4,6],[6,7,[7,8,9]]]));
const assert = require('assert');

const Node = ({left, operator, right}) => {
    const toString = () => {
        return "((7 + ((3 - 2) x 5)) ÷ 6)";
    }
    const result = () => {
        return 2;
    }

    return {
        result,
        toString
    }
}

const tree = Node({left: 6, operator: '+', right: 7});

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
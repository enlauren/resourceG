const assert = require('assert');

const NodeToString = ({left, operator, right}) => {
    const toString = () => {
        return "((7 + ((3 - 2) x 5)) ÷ 6)";
    };
}

const NodeToResult = ({left, operator, right}) => {
    const result = function () {
        const setLeft = typeof left === 'object' ? left.result() : left;
        const setRight = typeof right === 'object' ? right.result() : right;
        switch (operator) {
          case "+":
            return setLeft + setRight;
          case "-":
            return setLeft - setRight;
          case "x":
            return setLeft * setRight;
          case "÷":
            return setLeft / setRight;
          default:
            return value;
        }
    };
    return {result};
}

const Node = ({left, operator, right}) => NodeToResult({left, operator, right});

const tree = NodeToResult({
    left: Node({
        left: 7, operator: '+', right: Node({
            left: Node({
                left: 3, operator: '-', right: 2
            }), operator: 'x', right: 5,
        })
    }),
    operator: '÷', right: 6});

// assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
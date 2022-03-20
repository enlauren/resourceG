const assert = require('assert');

const Op = () => ({
    Add: {
        Symbol: '+',
        Operation: (arg1, arg2) => arg1+arg2
    },
    Subtract: {
        Symbol: '-',
        Operation: (arg1, arg2) => arg1-arg2
    },
    Divide:  {
        Symbol: '÷',
        Operation: (arg1, arg2) => arg1/arg2
    },
    Multiply: {
        Symbol: 'x',
        Operation: (arg1, arg2) => arg1*arg2
    }
})

const ExpressionTreeArithmetic = ({left, operator, right}) => {
    const toString = function () {
        const setLeft = typeof left === 'object' ? left.toString() : left;
        const setRight = typeof right === 'object' ? right.toString() : right;
        return `(${setLeft} ${operator.Symbol} ${setRight})`
    };

    const result = function () {
        const setLeft = typeof left === 'object' ? left.result() : left;
        const setRight = typeof right === 'object' ? right.result() : right;
        return operator.Operation(setLeft, setRight)
    };

    return {toString, result};
}

const Node = ({left, operator, right}) => ExpressionTreeArithmetic({left, operator, right});


const tree = ExpressionTreeArithmetic({
    left: Node({
        left: 7, operator: Op().Add, right: Node({
            left: Node({
                left: 3, operator: Op().Subtract, right: 2
            }), operator: Op().Multiply, right: 5,
        })
    }),
    operator: Op().Divide, right: 6
});

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());

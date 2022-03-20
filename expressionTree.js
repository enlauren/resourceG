const assert = require('assert');

const Op = (arg1, arg2) => ({
    Addition: {
        Symbol: '+',
        Operation: arg1+arg2
    },
    Subtraction: {
        Symbol: '-',
        Operation: arg1-arg2
    },
    Division:  {
        Symbol: '÷',
        Operation: arg1/arg2
    },
    Multiplication: {
        Symbol: 'x',
        Operation: arg1*arg2
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
        return Op(setLeft, setRight).Operation
    };

    return {toString, result};
}

const Node = ({left, operator, right}) => ExpressionTreeArithmetic({left, operator, right});


const tree = ExpressionTreeArithmetic({
    left: Node({
        left: 7, operator: Op().Addition, right: Node({
            left: Node({
                left: 3, operator: Op().Subtraction, right: 2
            }), operator: Op().Multiplication, right: 5,
        })
    }),
    operator: Op().Division, right: 6
});

console.log(tree.toString())
assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
// assert.strictEqual(2, tree.result());

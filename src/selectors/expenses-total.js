export default (expenses = []) => {
    return expenses.map(e => e.amount).reduce((a, b) => a + b, 0);
};
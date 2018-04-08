import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '2'});
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: -1});
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 109,
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    };
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const expense = {
        description: 'water',
    };
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '1', updates: expense});
    expect(state).toEqual([{...expenses[0], ...expense}, expenses[1], expenses[2]]);
});

test('should not edit an expense if expense not found', () => {
    const expense = {
        description: 'water',
    };
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: -1, updates: expense});
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});


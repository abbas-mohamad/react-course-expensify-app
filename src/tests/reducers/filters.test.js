import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const currentState = {
        text: 'old text',
        sortBy: undefined,
        startDate: undefined,
        endDate: undefined
    };

    const state = filtersReducer(currentState, {type: 'SET_TEXT_FILTER', text: 'new text'});
    expect(state.text).toBe('new text');
});

test('should set startDate filter ', () => {
    const startDate = moment(0).add(1, 'day');

    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter ', () => {
    const endDate = moment(0).add(1, 'day');

    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
    expect(state.endDate).toEqual(endDate);
});
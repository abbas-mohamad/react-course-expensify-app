import React from 'react';
import {connect} from "react-redux";
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {

    return (
        <div>
            <h1>
                Viewing {expensesCount} expense{expensesCount === 1 ? '' : 's'} totalling {numeral(expensesTotal).format('$0,0.00')}
            </h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
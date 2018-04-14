import React from 'react';
import {connect} from "react-redux";
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral';
import {Link} from "react-router-dom";

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> expense{expensesCount === 1 ? '' : 's'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
                    <div className="page-header__actions">
                        <Link className="button" to="/create" activeClassName="is-active">Add Expense</Link>
                    </div>
                </h1>
            </div>
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
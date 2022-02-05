import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = () => {
    /* Creating a function to pass in the onSaveExpenseData function */
    const saveExpenseDataHandler = (enteredExpenseData) => {

        /* Passing the expenseData that exist into the ExpenseForm submitHandler function */
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        };
    };


    return (
        <div className='new-expense'>
            {/* Passing a function inside of the ExpenseForm component
            to be called in the app parent component */}

           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;
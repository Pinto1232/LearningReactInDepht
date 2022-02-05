import React from 'react';
import './ExpenseForm.css'


const ExpenseForm = () => {

    const addInputHandler = (event) => {
             event.preventDefault()
    }




    return (
            <form onChange={addInputHandler}>
                <h2>Expenform Data Capture</h2>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" />
                    </div>
                </div>

                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="text"/>
                    </div>
                </div>

                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min='0.01' step='0.01' />
                    </div>
                </div>

                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date"  min='2019-01-01' max='2022-12-31' />
                    </div>
                </div>

                <div className='new-expense__actions'>
                     <button type='submit'>Submit</button>
                </div>
            </form>
    );
};

export default ExpenseForm;
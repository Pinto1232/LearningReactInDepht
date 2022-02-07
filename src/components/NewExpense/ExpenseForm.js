import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };


    return (
            <form onSubmit={submitHandler}>
                <h2>Expenform Data Capture</h2>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" 
                        value={title}
                         onChange={titleChangeHandler} 

                         />
                    </div>
                </div>

                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="text"
                           value={amount}
                           onChange={amountChangeHandler}

                         />
                    </div>
                </div>


                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date"  min='2019-01-01' max='2022-12-31'
                           value={date}
                           onChange={dateChangeHandler} 
                        
                        />
                    </div>
                </div>

                <div className='new-expense__actions'>
                     <button type='submit'>Submit</button>
                </div>
            </form>
    );
};

export default ExpenseForm;
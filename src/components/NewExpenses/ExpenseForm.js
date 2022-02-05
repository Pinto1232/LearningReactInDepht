import React, {useState} from 'react';
import './ExpenseForm.css'


const ExpenseForm = () => {
    /* Managing more then one state */
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    /* One state with different value in one state object */
    /*  const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    }) */


    const titleChangeHandler = (event)  => {
        setTitle(event.target.value)
        console.log(title);

      /*   setUserInput({
            ...userInput,
            title: event.target.value
        })
        console.log(userInput); */
      /* Best way to update the prev state */
      /*  setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            } 
        })
        console.log(userInput); */
        
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)


       /*  setUserInput({
            ...userInput,
            amount: event.target.value
        })
        console.log(userInput); */
      /*   setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
        console.log(userInput); */
        
        
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)

        /* setUserInput({
            ...userInput,
            date: event.target.value
        })
        console.log(userInput); */
        /* setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        })
        console.log(userInput); */  
    }

    /* Creating a function to handle the form on submit */
    const submitHandler = (event) => {
        /* If the request was not sent the page will not reload */
        event.preventDefault()


        /* Combine the proprieties */
        const expenseData = {
            enteredTitle: title,
            enteredAmount: amount,
            enteredDate: new Date(date)
        };
        console.log(expenseData);
        /* Set the state to it initial state */
        setTitle('');
        setAmount('');
        setDate('');
    }



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
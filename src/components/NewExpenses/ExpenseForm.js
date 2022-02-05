import React, {useState} from 'react';
import './ExpenseForm.css'


const ExpenseForm = () => {
    /* Managing more then one state */
    /* const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('') */

    /* One state with different value in one state object */
   const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })


    const titleChangeHandler = (event)  => {
        /* setTitle(event.target.value) */

        setUserInput({
            ...userInput,
            title: event.target.value
        })
        console.log(userInput);
        
    };

    const amountChangeHandler = (event) => {
        /* setAmount(event.target.value) */
        setUserInput({
            ...userInput,
            amount: event.target.value
        })
        console.log(userInput);
        
    }

    const dateChangeHandler = (event) => {
        /* setDate(event.target.value) */

        setUserInput({
            ...userInput,
            date: event.target.value
        })
        console.log(userInput);
        
    }





    return (
            <form>
                <h2>Expenform Data Capture</h2>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" 
                         onChange={titleChangeHandler} 

                         />
                    </div>
                </div>

                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="text"
                           onChange={amountChangeHandler}

                         />
                    </div>
                </div>


                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date"  min='2019-01-01' max='2022-12-31'
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
import React, {useState} from 'react';
import './ExpensesItem.css'

const ExpensesItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const [price, setPrice] = useState(props.price)
    const [date, setDate] = useState(props.date)


   const clickHandler  = () => {
       setTitle('Updated')
       console.log(title)
   }

    return (
        <div className='expense-item'>
            <div className='expense-item__date'>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2 className=''>{props.title}</h2>
                <div className='expense-item__price'>{props.price}</div>
                <button onClick={clickHandler}>Change title</button>
            </div>
        </div>
    );
};

export default ExpensesItem;
import React from 'react';
import './ExpensesItem.css'

const ExpensesItem = (props) => {
    return (
        <div className='expense-item'>
            <div className='expense-item__date'>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2 className=''>{props.title}</h2>
                <div className='expense-item__price'>{props.price}</div>
                <button>Click me</button>
            </div>
        </div>
    );
};

export default ExpensesItem;
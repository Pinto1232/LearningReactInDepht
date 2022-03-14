import React from 'react';
import classes from './PraticalCard.module.css'

const PraticalCard = (props) =>
{
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default PraticalCard;
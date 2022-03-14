import React from 'react';
import PraticalCard from './PraticalCard'
import classes from '../UI-Pratical/ErrorModal.module.css'
import Button from './Button'

const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onHandlerError} />
            <PraticalCard className={classes.modal}>
            <header className={classes.header}>
                <h2>{ props.titles}</h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
               <Button onClick={props.onHandlerError}>Okay</Button>
            </footer>
            </PraticalCard>
        </div>
    );
};

export default ErrorModal;
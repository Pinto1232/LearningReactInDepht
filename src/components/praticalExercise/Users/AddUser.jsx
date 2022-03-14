import React, { useState } from 'react';
import classes from '../../praticalExercise/Users/AddUser.module.css';
import UserList from '../addUserList/UserList';
import Button from '../UI-Pratical/Button';
import ErrorModal from '../UI-Pratical/ErrorModal';
import PraticalCard from '../UI-Pratical/PraticalCard';

const AddUser = (props) =>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const handleAddUser = (event) =>{
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
        {
            setError({
                title: 'Invalid input', 
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }

        if (+enteredAge < 1)
        {
            setError({
                title: 'Invalid age', 
                message: 'Please enter a valid age (> 0) '
            })
            return 
        }
        /*  console.log(enteredUsername, enteredAge); */
        props.onAddUser(enteredUsername,    enteredAge);

        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameHandler = (event) =>{
        setEnteredUsername(event.target.value)
    }

    const ageHandler = (event) =>{
        setEnteredAge(event.target.value)
    }


    const errrorHandler = () =>
    {
        setError(null)
    }


    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onHandlerError={errrorHandler }/>}
        <PraticalCard className={classes.input}>
            <form onSubmit={handleAddUser}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={usernameHandler}
                    value={enteredUsername}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    type="number"
                    id="age"
                    onChange={ageHandler}
                    value={enteredAge}
                />
                <Button type="submit" className={classes.button}>Add User</Button>
            </form>
            </PraticalCard>
            </div>
    );
};

export default AddUser;
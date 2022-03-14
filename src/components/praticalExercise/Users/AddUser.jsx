import React from 'react';
import classes from '../../praticalExercise/Users/AddUser.module.css';
import PraticalCard from '../UI-Pratical/PraticalCard';

const AddUser = () =>
{
    const handleAddUser = (event) =>
    {
        event.preventDefault();
        
    }
    return (
        <PraticalCard className={classes.input}>
            <form onSubmit={handleAddUser}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" />
                <button type="submit">Add User</button>
           </form>
        </PraticalCard>
    );
};

export default AddUser;
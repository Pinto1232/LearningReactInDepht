import React from 'react';
import classes from '../../praticalExercise/Users/AddUser.module.css';
import Button from '../UI-Pratical/Button';
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
                <Button type="submit" className={classes.button}>Add User</Button>
           </form>
        </PraticalCard>
    );
};

export default AddUser;
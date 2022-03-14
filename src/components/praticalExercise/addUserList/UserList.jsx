import React from 'react';
import PraticalCard from '../UI-Pratical/PraticalCard';
import classes from '../../praticalExercise/addUserList/UserList.module.css'

const UserList = (props) => {
    return (
        <PraticalCard className={classes.users}>
           <ul>
            {props.users.map((user) => <li key={user.id}>
                {`${user.name} `}
                {`${user.age}`} years old
            </li>
            )}
            </ul>
        </PraticalCard>
    );
};

export default UserList;
import React from 'react';
import PersonForm from './PersonForm'

const NewPerson = (props) => {


    const savePersonDataHandler = (enteredPersonData) => {
         const PersonData = {
             ...enteredPersonData,
            id: Math.random().toString()
         };
         /**console.log(PersonData)*/
         props.onAddPerson(PersonData)
}

    return (
        <div>
            <PersonForm onSavePersonData={savePersonDataHandler} />
        </div>
    );
};

export default NewPerson;
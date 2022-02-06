import React, {useState} from 'react';
import './ExerciseForm.css'

const ExerciseForm = (props) => {
   const [enteredTitle, setEnteredTitle] =  useState('')
   const [enteredSubject, setEnteredSubject] =  useState('')


    const exerciseTitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);      
    }

    const exerciseSubjectChangeHandler = (event) => {
        setEnteredSubject(event.target.value);
    }

    const onSubmitHandler = (event) => {
            event.preventDefault()

            const exerciseData = {
               title: enteredTitle,
               subject: enteredSubject
            }
           /*  console.log(exerciseData); */
           props.onSaveExerciseData(exerciseData)

            /* Biding the values */
            setEnteredTitle('')
            setEnteredSubject('')
            
    }




    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-exercise__controls'>
                <div className='new-exercise__control'></div>
                <label>Exercise Title</label>
                <input type="text"
                   value={enteredTitle}
                   onChange={exerciseTitleChangeHandler}
                />
            </div>

            <div className='new-exercise__controls'>
                <div className='new-exercise__control'></div>
                <label>Exercise Subject</label>
                <input type="text"
                  value={enteredSubject}
                  onChange={exerciseSubjectChangeHandler}
                />
            </div>

            <div className='new-exercise__actions'>
                <button type='submit'>Submit Exercise</button>
            </div>

        </form>
    );
};

export default ExerciseForm;
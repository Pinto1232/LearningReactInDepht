import React from 'react';
import ExerciseForm from './ExerciseForm';
import './NewExercise.css'

const NewExercise = (props) => {

    const saveExerciseHandler = (enteredExerciseData) => {
        const exerciseData = {
            ...enteredExerciseData,
            id: Math.random().toString()

        };
        props.onAddExercise(exerciseData);
        
        

    }
    return (
        <div className='new-exercise'>
            <ExerciseForm onSaveExerciseData = {saveExerciseHandler}/>
        </div>
    );
};

export default NewExercise;
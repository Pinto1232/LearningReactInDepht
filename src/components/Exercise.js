import React, {useState} from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const [title, setTitle] = useState(props.title)
    const [subject, setSubject] = useState(props.subject)


   const exerciseHandler = () => {
       setTitle('Updated')
       console.log(title)
   }

    return (
        <div className='exercise-item'>
            <p className='exercise-title__item'>{props.title}</p>
            <div>
                <div className='exercise-subject__item'>{props.subject}</div>
                {/* <button onClick={exerciseHandler}>Add Subject</button> */}
            </div>
        </div>
    );
};

export default Exercise;
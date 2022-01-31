import React , {useState} from 'react';

const PersonForm = (props) => {

   const [enteredName, setEnteredName] =  useState('')
   const [enteredSurname, setEnteredSurname] = useState('')
   const [enteredAge, setEnteredAge] = useState('')
   const [enteredNationality, setEnteredNationality] = useState('')
   const [enteredProfession, setEntereProfession] = useState('')


   const PersonNameHandler = (event) => {
         setEnteredName(event.target.value)
   }


   const PersonSurnameHandler = (event) => {
      setEnteredSurname(event.target.value)
   }


   const PersonAgeHandler = (event) => {
     setEnteredAge(event.target.value)
   }


   const PersonNationalityHandler = (event) => {
    setEnteredNationality(event.target.value)
   }

   const PersonProfessionHandler = (event) => {
      setEntereProfession(event.target.value)
   }


   const personSubmitHandler = (event) => {
      event.preventDefault();
      
      const personData = {
          name: enteredName,
          surname: enteredSurname,
          age: enteredAge,
          nationality: enteredNationality,
          profession: enteredProfession
      };
      /*console.log(personData)*/
      props.onSavePersonData(personData)
      setEnteredName('')
      setEnteredSurname('')
      setEnteredAge('')
      setEnteredNationality('')
      setEntereProfession('')
   };


  


    
    return (
        <form onSubmit={personSubmitHandler}>
                <div className="new-expense__controls">
                 <div className="new-expense__control">
                    <label>Person Name</label>
                    <input 
                       type="text" 
                       value={enteredName}
                       onChange={PersonNameHandler}
                    />
                 </div>

                 <div className="new-expense__control">
                    <label>Person Surname</label>
                    <input 
                      type="text" 
                      value={enteredSurname}
                      onChange={PersonSurnameHandler} 
                    />
                 </div>


                 <div className="new-expense__control">
                    <label>Person Age</label>
                    <input 
                      type="text" 
                      value={enteredAge}
                      onChange={PersonAgeHandler} 
                    />
                 </div>


                 <div className="new-expense__control">
                    <label>Person Nationality</label>
                    <input 
                      type="text" 
                      value={enteredNationality}
                      onChange={PersonNationalityHandler} 
                    />
                 </div>


                 <div className="new-expense__control">
                    <label>Person Profession</label>
                    <input 
                      type="text" 
                      value={enteredProfession}
                      onChange={PersonProfessionHandler} 
                    />
                 </div>

                      
                <div className="new-expense__actions">
                     <button type="submit">Add Person</button>
                 </div>
                </div>
            </form>
    );
};

export default PersonForm;
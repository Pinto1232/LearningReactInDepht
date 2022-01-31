
import React from 'react'
import CarForm from './CarForm';
import './NewCar.css'

const NewCar = (props) => {

   const saveCarDataHandler = (enteredCarData) => {
      const carData = {
         ...enteredCarData,
         id: Math.random().toString()
      };
      //console.log(carData)
      props.onAddcar(carData)
   }


    return (
       <div className='new-expense'>
          <CarForm onSaveCarData={saveCarDataHandler} />
       </div>
    )

};

export default NewCar;
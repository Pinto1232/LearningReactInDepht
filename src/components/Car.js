import React, {useState} from 'react'

const Car = (props) => {
    const [name, SetName] = useState(props.name)
    const [maker, setMaker] = useState(props.maker)


    const clickHandler = () =>{
          SetName('Updated')
          console.log(name)
          setMaker('Updated')
          console.log(maker)
    }
   return (
       <div>
           <h2>Car name: {name}</h2>
           <h2>Car maker: {maker}</h2>
           <button onClick={clickHandler}>Click me</button>
       </div>
   )
}

export default Car;
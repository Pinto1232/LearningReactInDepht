import React, { useState } from 'react';

const Person = (props) => {
    const [name, setName] = useState(props.name);
    const [surname, setSurname] = useState(props.surname);
    const [age, setAge] = useState(props.age);
    const [nationality, setnationality] = useState(props.nationality);
    const [profession, setProfession] = useState(props.profession);


    const clickHandler = () => {
        setName('Updated!')
        console.log(name)
        setSurname('Updated')
        console.log(surname)
        setAge('Updated')
        console.log(age)
        setnationality('Updated')
        console.log(nationality)
        setProfession('Updated')
        console.log(profession)

    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Surname: {surname}</h2>
            <h2>Age: {age}</h2>
            <h2>Nationality: {nationality}</h2>
            <h2>Profession: {profession}</h2>
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default Person;
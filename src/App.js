import './App.css';
import Car from './components/Car';
import NewCar from './components/NewCar/NewCar';
import NewHouse from './components/NewHouse/NewHouse';
import NewPerson from './components/NewPerson/NewPerson';
import Person from './components/Person';


function App() {

  const carDetail = [
    {
      id: 0,
      name: 'Mercedes',
      maker: 'Mercedes'
    },
    {
      id: 1,
      name: 'Toyota',
      maker: 'Toyota'
    },
    {
      id: 2,
      name: 'Mazda',
      maker: 'Mazda'
    },
    {
      id: 3,
      name: 'Honda',
      maker: 'Honda'
    }
  ];



  const personDetail = [
    {
      id: 0,
      name: 'Pinto',
      surname: 'Manuel',
      age: 34,
      nationality: 'Angolan',
      profession: 'Frontend Developer'
    },

    {
      id: 1,
      name: 'Adriano',
      surname: 'Manuel',
      age: 34,
      nationality: 'Angolan',
      profession: 'Petroleun engineer'
    },

    {
      id: 2,
      name: 'Constancia',
      surname: 'Manuel',
      age: 34,
      nationality: 'Angolan',
      profession: 'Teacher'
    },

    {
      id: 3,
      name: 'Madalena',
      surname: 'Manuel',
      age: 34,
      nationality: 'Angolan',
      profession: 'Student'
    },

    {
      id: 4,
      name: 'Tunecas',
      surname: 'Manuel',
      age: 34,
      nationality: 'Angolan',
      profession: 'Student'
    }
  ];

  
  const HouseDetails = [
    {
      id: 0,
      location: 'Cape Town',
      address: 'Dorchester Drive',
      availability: 'available',
      size: '26 meter square'
    },
    {
      id: 1,
      location: 'Cape Town',
      address: 'Corchester Drive',
      availability: 'available',
      size: '26 meter square'
    },
    {
      id: 2,
      location: 'Cape Town',
      address: 'Oxford',
      availability: 'not available',
      size: '126 meter square'
    }
  ];
  
  
  


  const addCarHandler = Car => {
    console.log('In app');
    console.log(Car)
  }

  const addPersonHandler = Person => {
    console.log('In App 2')
    console.log(Person)
  }


  const addHouseHandler = House => {
    console.log('In App 3')
    console.log(House);
  }

 


  return (
    <div className="App">

        <NewCar onAddcar={addCarHandler} />
        <NewPerson onAddPerson={addPersonHandler}/>
        <NewHouse />



        <Person
            name = {personDetail[0].name}
            surname = {personDetail[0].surname}
            age = {personDetail[0].age}
            nationality = {personDetail[0].nationality}
            profession = {personDetail[0].profession}
        />

        <Person
            name = {personDetail[1].name}
            surname = {personDetail[1].surname}
            age = {personDetail[1].age}
            nationality = {personDetail[1].nationality}
            profession = {personDetail[1].profession}
        />

        <Person
            name = {personDetail[2].name}
            surname = {personDetail[2].surname}
            age = {personDetail[2].age}
            nationality = {personDetail[2].nationality}
            profession = {personDetail[2].profession}
        />

        <Person
            name = {personDetail[3].name}
            surname = {personDetail[3].surname}
            age = {personDetail[3].age}
            nationality = {personDetail[3].nationality}
            profession = {personDetail[3].profession}
        />

       <Person
            name = {personDetail[4].name}
            surname = {personDetail[4].surname}
            age = {personDetail[4].age}
            nationality = {personDetail[4].nationality}
            profession = {personDetail[4].profession}
        />




        {/**Displaying the car array **/}
        <Car 
           name = {carDetail[0].name}
           maker = {carDetail[0].maker}
        />
        <Car
           name = {carDetail[1].name}
           maker = {carDetail[1].maker}
        />
 
        <Car 
          name = {carDetail[2].name}
          maker = {carDetail[2].maker}
        />

        <Car
            name = {carDetail[3].name}
            maker = {carDetail[3].maker}
        />
    </div>
  );
}

export default App;

import './App.css';
import Car from './components/Car';
import NewCar from './components/NewCar/NewCar';

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


  const addCarHandler = Car => {
    console.log('In app');
    console.log(Car)
  }



  return (
    <div className="App">
           <NewCar onAddcar={addCarHandler} />
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

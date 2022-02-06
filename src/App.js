import './App.css';
import Exercise from './components/Exercise';
import ExpensesItem from './components/ExpensesItem';
import NewExercise from './components/NewExercise/NewExercise';
import NewExpense from './components/NewExpenses/NewExpense';


const expenses = [ 
  {
    id: 0,
    title: 'Water',
    price: 'R1200',
    date: new Date(2022, 7, 14)
  },
  {
    id: 1,
    title: 'Food',
    price: 'R3200',
    date: new Date(2022, 7, 14)
  },
  {
    id: 2,
    title: 'Diesel',
    price: 'R1600',
    date: new Date(2022, 7, 14)
  },
  {
    id: 3,
    title: 'Electricity',
    price: 'R1600',
    date: new Date(2022, 17, 14)
  }
];

const exercises = [
  {
    id: 0,
    title: 'Linear Equation',
    subject: 'Mathematic'
  },
  {
    id: 1, 
    title: 'Introductio to API', 
    subject: 'Programming'
  }
] 


const addExpenseHandler = expense =>{
   console.log('In App.js');
   console.log(expense);
}


const addExerciseHandler = (exercise) => {
  console.log('In App 2');
  console.log(exercise);
  
  
}


function App() {

  return (
    <div className="App">
      {/* New expense component */}
      <NewExpense onAddExpense={addExpenseHandler} />

    

      <ExpensesItem 
         title = {expenses[0].title}
         price = {expenses[0].price}
         date = {expenses[0].date}
      />

      <ExpensesItem 
         title = {expenses[1].title}
         price = {expenses[1].price}
         date = {expenses[1].date}
      />

      <ExpensesItem 
         title = {expenses[2].title}
         price = {expenses[2].price}
         date = {expenses[2].date}
      />

      <ExpensesItem 
         title = {expenses[3].title}
         price = {expenses[3].price}
         date = {expenses[3].date}
      />
   
      {/* New Exercise component */}
      <NewExercise onAddExercise={addExerciseHandler} />
      
     <Exercise 
        title = {exercises[0].title}
        subject = {exercises[0].subject}
      />

      <Exercise 
        title = {exercises[1].title}
        subject = {exercises[1].subject}
      /> 
    </div>
  );
}
export default App;

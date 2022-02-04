import './App.css';
import ExpensesItem from './components/ExpensesItem';


const ExpenseDetail = [ 
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
  }
]


function App() {

  return (
    <div className="App">
      <ExpensesItem 
         title = {ExpenseDetail[0].title}
         price = {ExpenseDetail[0].price}
         date = {ExpenseDetail[0].date}
      />

      <ExpensesItem 
         title = {ExpenseDetail[1].title}
         price = {ExpenseDetail[1].price}
         date = {ExpenseDetail[1].date}
      />

      <ExpensesItem 
         title = {ExpenseDetail[2].title}
         price = {ExpenseDetail[2].price}
         date = {ExpenseDetail[2].date}
      />
    </div>
  );
}
export default App;

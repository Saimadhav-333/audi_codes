import Card from './Components/Card';
import ToDoList from './Components/TodoList';
import './App.css';

let cars = [
  {
      cID: 1, 
      cName: 'Maruti Fronx', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: 'images/car1.jpg',
      price: "7,51,000"
  },
  {
      cID: 2, 
      cName: 'Mahindra Scorpio N', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: "images/car2.jpg",
      price: "13,60,000"
  },
  {
      cID: 3, 
      cName: 'Maruti Fronx', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: "images/car3.jpg",
      price: "7,60,000"
  },
  {
      cID: 4, 
      cName: 'Mahindra Scorpio', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: "images/car4.jpg",
      price: "13,84,000"
  },
  {
      cID: 5, 
      cName: 'Hyundai Creta', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: "images/car5.jpg",
      price: "11,00,00"
  },
  {
      cID: 6, 
      cName: 'Maruti Grand Vitara', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: "images/car5.jpg",
      price: "10,80,00"
  },
  {
      cID: 7, 
      cName: 'Hyundai Exter', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      image: "images/car5.jpg",
      price: "6,13,000"
  }
]

function App() {
  return (
    <>
     {/* <div className="d-flex flex-wrap justify-content-center">
      {cars.map((car) => (
        <Card
          cID={car.cID}
          cName={car.cName}
          desc={car.desc}
          image={car.image}
          price={car.price}
        />
      ))}
    </div> */}
    <ToDoList></ToDoList>

    </>
  );
}

export default App;

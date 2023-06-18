import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id:"e1", title: "Car Insurance", amount: 289.67, date: new Date(2023, 5, 17)},
    { id:"e2", title: "Laptop", amount: 289.67, date: new Date(2023, 8, 4)},
    { id:"e3", title: "Mobile Phone", amount: 120.67, date: new Date(2023, 11, 22)},
    { id:"e4", title: "Camera", amount: 300.67, date: new Date(2023, 10, 19)},
  ]
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

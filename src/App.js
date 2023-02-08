import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(2023, 2, 2),
      description: "Fridge",
      amount: 10,
    },
    {
      id: "c2",
      date: new Date(2023, 2, 2),
      description: "Fridge A12334",
      amount: 10,
    },
    {
      id: "c3",
      date: new Date(2023, 2, 2),
      description: "Fridge A123",
      amount: 1000,
    },
  ];

  const addCostHandler = (cost) =>{
    
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;

import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2023, 2, 2),
      description: "Fridge",
      amount: 10,
    },
    {
      date: new Date(2023, 2, 2),
      description: "Fridge A12334",
      amount: 10,
    },
    {
      date: new Date(2023, 2, 2),
      description: "Fridge A123",
      amount: 1000,
    },
  ];

  return (
    <div>
      <Costs costs={costs} />
    </div>
  );
}

export default App;

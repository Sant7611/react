import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    { name: "apple", price: "10$", emoji: "🍎" },
    { name: "banana", price: "5$", emoji: "🍌" },
    { name: "orange", price: "8$", emoji: "🍊" },
    { name: "pineapple", price: "13$", emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>{fruit.emoji}{""}{fruit.name} {""} {fruit.price}</li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
        ;
      </ul>
    </div>
  );
}

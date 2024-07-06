import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    { name: "apple", price: 10, emoji: "🍎",sold: true  }, // Price as a number
    { name: "banana", price: 5, emoji: "🍌",sold: false  },
    { name: "orange", price: 8, emoji: "🍊",sold: false  },
    { name: "pineapple", price: 13, emoji: "🍍",sold: true  },
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
            sold = {fruit.sold}
          />
        ))}
        ;
      </ul>
    </div>
  );
}

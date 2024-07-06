// export default function Fruit({ name, price, emoji }) {
//   return (
//     <li>
//       {emoji} {name} {price}{" "}
//       {price > 5 ? (
//         <h3>
//           {emoji} {name} {price}
//         </h3>
//       ) : (
//         " "
//       )}
//     </li>
//   );
// }

export default function Fruit({ name, price, emoji, sold }) {
  return (
    <li>
      {/* {sold ? (
        <h3>
          {emoji} {name} {price} {"Sold Out"}
        </h3>
      ) : (
        ""
        )} */}
        {emoji} {name} {price} {sold ? "soldout" : ""}
    </li>
  );
}

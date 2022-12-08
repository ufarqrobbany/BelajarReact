import './App.css';

const phoneData = [
  { name: "Iphone X", price: "10000000", discount: "50" },
  { name: "Oppo Find X", price: "14000000", discount: "30" },
  { name: "Redmi Note X", price: "12000000", discount: "42" },
  { name: "Vivo Y19", price: "5500000", discount: "5" }
];

function Produk({ price, name, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <s>Rp {price}</s> ({discount}%)
      </p>
      <p>
        <b>Rp {parseInt(price) - parseInt(price) * parseInt(discount) / 100}</b>
      </p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      {phoneData.map((phone, id) => (
        <Produk key={id} name={phone.name} price={phone.price} discount={phone.discount} />
      ))}
    </div>
  );
}

export default App;

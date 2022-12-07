import './App.css';

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
      <Produk name="Iphone X" price="10000000" discount="50" />
      <Produk name="Oppo Find X" price="14000000" discount="30" />
      <Produk name="Redmi Note X" price="12000000" discount="42" />
    </div>
  );
}

export default App;

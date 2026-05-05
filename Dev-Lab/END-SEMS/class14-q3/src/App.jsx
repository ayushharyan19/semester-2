import { useState } from 'react';

// ✅ ProductCard component
function ProductCard({ name, price, category }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

// ✅ App component
function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 30000, category: "Electronics" },
    { id: 3, name: "Shirt", price: 1000, category: "Clothing" },
    { id: 4, name: "Shoes", price: 2000, category: "Clothing" },
    { id: 5, name: "Watch", price: 5000, category: "Accessories" },
    { id: 6, name: "Headphones", price: 3000, category: "Electronics" },
    { id: 7, name: "Bag", price: 1500, category: "Accessories" },
    { id: 8, name: "Tablet", price: 25000, category: "Electronics" },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Product Management Dashboard</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))
      )}
    </div>
  );
}

export default App;
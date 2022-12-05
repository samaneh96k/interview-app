
import { useEffect, useState } from 'react';
import './App.css';
import Category from './componnents/category';
import Header from './componnents/header';
import Products from './componnents/Products';
import  axios  from 'axios';
import { useSelector } from 'react-redux';



function App() {
  //const items = useSelector((state) => state.cart.items);
  //console.log(items)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(products)
  async function doGetRequest() {
    setIsLoading(true);
    let res = await axios.get("https://fakestoreapi.com/products");

    let data = res.data;
    setProducts(data);
    setFilteredProducts(data)
  }
  const onChangeProduct = (text) => {
    if (text) {
      const filteredProduct = products.filter((p) =>
        p.category.includes(text)
     
      );
      setFilteredProducts(filteredProduct)
    } else {
      setFilteredProducts(products)
    }
   
  }

  useEffect(
    () => {
      doGetRequest();
      setIsLoading(false);
      
    },
    []
  );
  return (
    <div>

      <Header/>
      <Category onChangeProduct={onChangeProduct} />
      <Products products={products} filteredProducts={filteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default App;

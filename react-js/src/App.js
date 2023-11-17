//import './style.css';
//import Navbar from './day2/Navbar';
//import Main from './day2/Main';
//import Footer from './day2/Footer';
//import { Message } from './day2/Message';
// import DynamicRendering from './day3/DynamicRendering';
//import Button from './day3/Button';
// import Counter from './day-3/Counter';
// function App() {
//   return(

// <div>
//   {/* <Button></Button> */}
//   {/* <DynamicRendering></DynamicRendering> */}
//   <Counter></Counter>
//   </div>
//   );
// }

//export default App;

import { useState } from "react";
import Cart from "./day4/Cart";
import Menu from "./day4/Menu";
import Navbar from "./day4/Navbar";
import categories from "./day4/categories";
function App() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [products, setProducts] = useState([]);
  
    const handleClick = (index) => {
      setActiveCategory(categories[index]);
    };
  
    const handleAddToCart = (item) => {
      setProducts([...products, item]);
    };
  
    return (
      <div className="space-y-4 my-4">
        <Navbar category={categories} handleClick={handleClick} />
        <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
        <Cart products={products} />
      </div>
    );
  }
  
  export default App;
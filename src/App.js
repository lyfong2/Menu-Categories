import React, { useState} from 'react';
import MenuCategories from './components/MenuCategories';
import Home from './components/Home';
import './App.css';


function App() {
  const [menu, setMenu] = useState([]);
  const [showpage, setShowpage] = useState('');

  let fetchCategories = () => {    
    fetch('http://stream-restaurant-menu-svc.herokuapp.com/category')
      .then(result => result.json())
      .then(result => (
        setMenu(result),
        setShowpage('categories')
        ))
      .catch(e => console.log(e))
  }
  
  let clickHome = () => {
    setShowpage('home')
  }

  return (
    <div className="App">
      <h1>1.Welcome to Chef Chu's Restaurant</h1>
      <div>
        <button onClick={clickHome}>Home</button>
        <button onClick={fetchCategories}>Categories</button>
      </div>
      <hr/>
      <h3>Streamlinity UI test assignment starts below this line...</h3>
      <hr/>
        {
          showpage === 'categories'
          ? <div>
              <h2>Menu Categories</h2>          
              <MenuCategories menu={menu}/>
            </div>
          : showpage === 'home'
          ? <Home/>
          : null
        }              
    </div>
  );
}

export default App;

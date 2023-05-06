import React, { useState, createContext } from "react";
import "./styles.css";
import { Route, Link, Switch } from "react-router-dom";

//Import Data
import data from "./data"; // PULL IN DATA

//Import Components
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";

export const productContext = createContext()


export default function App() {
  const [products] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Gabi Products</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/product-list">Shop</Link>
        </div>
      </nav>

      <productContext.Provider value={products}>
      <Switch>
     
          <Route path="/product-list/:itemID">
            <Item />
          </Route>

          
          <Route path="/product-list">
            <ItemsList />
          </Route>
       

        <Route path="/" component={Home} />
      </Switch>
      </productContext.Provider>
    </div>
  );
}

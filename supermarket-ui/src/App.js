import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import Item from './components/Item';

function App() {

  const [products, setProducts] = useState([])
  const [gb, setGb] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [viewDetails,setViewDetails] = useState(null)
  let close = true

  const getAllData = async() => {
    const response = axios.get("http://localhost:8080/api/products")
    setProducts((await response).data)
  }

  useEffect(()=>{
    getAllData()
  },[])

  const GenerateBill = async() => {
    setGb(true)
  }

  return (
    <div className="App">
      <Header />
      <Main products={products} getAllData={getAllData} selectedProduct={selectedProduct}/>
      <hr />
      <Display products={products} getAllData={getAllData} setSelectedProduct={setSelectedProduct} setViewDetails={setViewDetails}/>
      {products.length > 0 ? 
      (<button onClick={GenerateBill}>Generate Bill</button>): ""}

      {gb && products? (
        <div>
        <p>-----------Bill---------</p>
        {products.map((p) =>(
          <div>
          <p>{p.id}   {p.name}   Rs{p.price}</p>
          
          </div>
        ))}
        </div>
      ):""}


      <hr />
      <Item viewDetails={viewDetails} close={close}/>
    </div>
  );
}

export default App;

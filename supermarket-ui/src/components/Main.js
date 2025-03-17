import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Main(props) {

    const [product,setProduct] = useState({
        category:"", name:"" ,price:"" , quantity:""
    })

    function handleChange(event){
        const {name,value} = event.target
        setProduct(prevFormData => {
            return{
                ...prevFormData,
                [name]:value
            }
        }) 
    }

    useEffect(()=>{
        if(props.selectedProduct){
            setProduct(props.selectedProduct)
        }
    },[props.selectedProduct])

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(props.selectedProduct){
            await axios.put(`http://localhost:8080/api/products/${product.id}`, product)
            alert("Product updated successfully!")
            props.getAllData()
        }
        else{
            await axios.post("http://localhost:8080/api/products", product)
            alert("Product added successfully!")
            props.getAllData()
        }
        setProduct({category: " ",name : " ", price:" " , quantity: " "})
    }


  return (
    <div>
      <h3>Hello!!! Welcome to SuperMarket</h3>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Category: </label>
            <input type='text' placeholder='Category' name='category' value={product.category} onChange={handleChange} required/>
        </div>
        <div>
            <label>Name: </label>
            <input type='text' placeholder='Name' name='name' value={product.name} onChange={handleChange} required/>
        </div>
        <div>
            <label>Price: </label>
            <input type='text' placeholder='Price' name='price' value={product.price} onChange={handleChange} required/>
        </div>
        <div>
            <label>Quantity: </label>
            <input type='text' placeholder='Quantity' name='quantity' value={product.quantity} onChange={handleChange} required/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

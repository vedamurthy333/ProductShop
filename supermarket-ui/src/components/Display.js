import React from 'react';
import axios from 'axios';

export default function Display({products,getAllData,setSelectedProduct,setViewDetails}) {
   const deleteItem = async(id) =>{
        try{
            await axios.delete(`http://localhost:8080/api/products/${id}`)
            getAllData()
        }
         catch{
            alert("Product is not deleted")
         }      
   }

   const viewItem = (p) =>{
    try{
        setViewDetails(p)
    }
    catch{

    }
   }

   const updateItem = (p) =>{
    try{
        setSelectedProduct(p)
    }
    catch{
        alert("Product is not updated")
    }
   }
   
    return (
        <div>
            <h2>Product List</h2>
            {products.length >0  ?(<table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action-View</th>
                        <th>Action-Delete</th>
                        <th>Action-Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p =>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.category}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td onClick={()=>viewItem(p)}><button>View</button></td>
                            <td onClick={()=>deleteItem(p.id)}><button>delete</button></td>
                            <td onClick={()=>updateItem(p)}><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>):""}
        </div>
    );
}

import React, { useEffect, useState } from 'react'

export default function Item({viewDetails}) {
 const [close1, setClose1] = useState(true)

 useEffect(() => {
    setClose1(true);
  }, [viewDetails]);
    
 const handleClose = () =>{
    setClose1(!close1)
 }
  return (
    <div>
        <h2>Product</h2>
        {viewDetails && close1 ? (
            <div>
            <button onClick={handleClose}>CLOSE</button>
            <table border="1">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Category</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{viewDetails.id}</td>
                        <td>{viewDetails.category}</td>
                        <td>{viewDetails.name}</td>
                        <td>{viewDetails.price}</td>
                        <td>{viewDetails.quantity}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        ): ""}
    </div>
  )
}

import { useState, useEffect } from "react";

const Myproduct = () =>{
    let[allproduct, updateProduct] = useState( [] );
    const getProduct = () =>{
        const seller = localStorage.getItem("seller");
        let url = "http://localhost:1234/product?sellerid="+seller;
        fetch(url)
        .then(response=>response.json())
        .then(productArray =>{
            updateProduct(productArray);
        })
    }
    useEffect(()=>{
        getProduct();
    }, [1]);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> <i className="fa fa-table"></i> My Products : {allproduct.length}  </h1>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr className="bg-light text-primary text-start">
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>inStock</th>
                                <th>Details</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-start">
                            {
                                allproduct.map((product, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {product.id} </td>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td> {product.stock} </td>
                                            <td> {product.details} </td>
                                            <td> <img src={product.photo} height="50" width="50"/> </td>
                                            <td>
                                                <button className="btn btn-danger"> 
                                                    <i className="fa fa-trash"></i>
                                                </button> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myproduct;
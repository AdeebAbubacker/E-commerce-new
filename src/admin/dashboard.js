import { useState, useEffect } from "react";

const Mydashboard = () =>{
    let[allproduct, updateProduct] = useState( [] );
    let[allorder, updateOrder] = useState( [] );

    const getProduct = () =>{
        const seller = localStorage.getItem("seller");
        let url = "http://localhost:1234/product?sellerid="+seller;
        fetch(url)
        .then(response=>response.json())
        .then(productArray =>{
            updateProduct(productArray);
        })
    }

    const getOrder = () =>{
        const seller = localStorage.getItem("seller");
        let url = "http://localhost:1234/orderlist?sellerid="+seller;
        fetch(url)
        .then(response=>response.json())
        .then(productArray =>{
            updateOrder(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
        getOrder();
    }, [1]);
    
    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> Dashboard </h1>
                </div>
            </div>
            <div className="row mt-4 text-center">
                <div className="col-lg-6 text-info">
                    <i className="fa fa-suitcase fa-3x"></i>
                    <h2> All Myproducts <br/> {allproduct.length} </h2>
                </div>

                <div className="col-lg-6 text-warning">
                    <i className="fa fa-phone fa-3x"></i>
                    <h2> All My Orders  <br/> {allorder.length}</h2>
                </div>
            </div>
       </div>
    )
}

export default Mydashboard;
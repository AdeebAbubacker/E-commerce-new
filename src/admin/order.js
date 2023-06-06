import { useState, useEffect } from "react";

const Myorder = () =>{
    let[allorder, updateOrder] = useState( [] );


    const getOrder = () =>{
        const seller = localStorage.getItem("seller");
        let url = "http://localhost:1234/orderlist?sellerid="+seller;
        fetch(url)
        .then(response=>response.json())
        .then(productArray =>{
            updateOrder(productArray.reverse());
        })
    }

    //latest order on top for that reverse

    useEffect(()=>{
        getOrder();
    }, [1]);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> <i className="fa fa-phone"></i> Recent Orders : {allorder.length} </h1>
                </div>
            </div>
            {
                allorder.map((order,index)=>{
                    return(
                        <div className="row mb-5 " key={index}> 
                        <div className="col-lg-4">
                            <h4>{order.customer}</h4>
                            <p>{order.mobile}</p>
                            <p>{order.email}</p>
                            <p>{order.address}</p>
                        </div>
                        <div className="col-lg-8">
                            <h5 className="text-center text-danger">
                                Order Items{order.item.length}
                            </h5>
                            <table className="table">
                                <thead>
                                    <tr className="text-primary text-start">
                                        <td>Item Name</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Total Price</td>
                                        <td>Photo</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.item.map((pinfo,index2)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{pinfo.name}</td>
                                                    <td>{pinfo.price}</td>
                                                    <td>{pinfo.qty}</td>
                                                    <td>{pinfo.price * pinfo.qty}</td>
                                                    <td><img src ={pinfo.photo} height="40" width="70"/></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Myorder;
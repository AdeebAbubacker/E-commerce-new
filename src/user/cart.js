import { useState, useEffect } from "react";
import swal from "sweetalert";

const Mycart = () =>{
    let[allproduct, updateProduct] = useState( [] );
    const getProduct = () =>{
        let url = "http://localhost:1234/cart";
        fetch(url)
        .then(response=>response.json())
        .then(productArray =>{
            updateProduct(productArray.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    }, [1]);

    const deleteproduct= (id) =>{
        let url = "http://localhost:1234/cart/"+ id;
        let postOption = {
            method : "DELETE"
        };
        fetch(url,postOption)
        .then(response=>response.json())
        .then(serverRes =>{
            swal("Item Deleted", "From Your Cart !", "success");
            getProduct();
        })
    }

    const plusbyone = (pid, product, action) =>{
        if(action==="B"){
            product["qty"] = product.qty - 1;
        }else{
            product["qty"] = product.qty + 1;
        }

        if(product.qty==0){
            deleteproduct(pid);
        }else{
            let url = "http://localhost:1234/cart/"+ pid;
            let postOption = {
                headers:{'Content-Type':'application/json'},
                method : "PUT",
                body:JSON.stringify(product)
            };
            fetch(url,postOption)
            .then(response=>response.json())
            .then(serverRes =>{
                swal("Quantity", "Updated Successfully !", "success");
                getProduct();
            })
        }
    }
    let [fullname, pickName] = useState("");
    let[email, pickemail] = useState("");
    let[mobile, pickmobile] = useState("");
    let[address, pickaddress] = useState("");

    const save = () =>{
        let orderdetails = {
            customer:fullname,
            mobile:mobile,
            email:email,
            address:address,
            item:allproduct
       };
       let url = "http://localhost:1234/orderlist";
       let postOption = {
        headers: {'Content-Type':'application/json'},
        method: "POST",
        body: JSON.stringify(orderdetails)
       }
       fetch(url,postOption)
       .then(response => response.json())
       .then(orderRes =>{
        swal("Order Recieved","Order id" + orderRes.id, "success")
       })
    }

    let total = 0;

    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="text-center mb-4"> Items in Cart : {allproduct.length} </h1>
                    <table className="table">
                        <thead>
                            <tr className="bg-light text-primary text-start">
                                <th> Product Name </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Total </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody className="text-start">
                            {
                                allproduct.map((product, index)=>{
                                    total = total + (product.price * product.qty);
                                    return(
                                        <tr key={index}>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td> 
                                                <button onClick={plusbyone.bind(this, product.id, product, "B")}> - </button>  
                                                <input type="text" value={product.qty}/>
                                                <button onClick={plusbyone.bind(this, product.id, product, "A")}> + </button>   
                                            </td>
                                            <td>Rs.{ product.price * product.qty }</td>
                                            <td className="text-center">
                                                <i className="fa fa-trash fa-lg text-danger"
                                                onClick={deleteproduct.bind(this, product.id)}></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr className="bg-info text-white">
                                <td colSpan="5" className="text-end">
                                    Rs {total} - Items Costs
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white"> Enter Delivery Details </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label> Customer Name </label>
                                <input type="text" className="form-control" onChange={obj => pickName(obj.target.value)}
                                value={fullname}/>
                            </div>
                            <div className="mb-3">
                                <label> Mobile No </label>
                                <input type="text" className="form-control" onChange={obj => pickmobile(obj.target.value)}
                                value={mobile}/>
                            </div>
                            <div className="mb-3">
                                <label> e-Mail Id </label>
                                <input type="text" className="form-control" onChange={obj => pickemail(obj.target.value)}
                                value={email}/>
                            </div>
                            <div className="mb-3">
                                <label> Delivery Address </label>
                                <textarea className="form-control" onChange={obj => pickaddress(obj.target.value)}
                                value={address}></textarea>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-danger" onClick={save}> Place My Order </button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Mycart;
import { useState } from "react";

const Newproduct = () =>{
    let[pname, pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pqty, pickQty] = useState("");
    let[pdetails, pickDetails] = useState("");
    let[pphoto, pickPhoto] = useState("");

    const save = () =>{
        let newproduct = {
            name:pname, 
            price:pprice, 
            stock:pqty, 
            photo:pphoto,
            details:pdetails, 
            sellerid:localStorage.getItem("seller")
        }
        let url = "http://localhost:1234/product";
        let postOption = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newproduct)
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(serverRes=>{
            alert(serverRes.id + " is your product id");
            pickName(""); 
            pickDetails("");
            pickPhoto("");
            pickQty("");
            pickPrice("");
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> <i className="fa fa-plus"></i> Enter product details  </h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-6">
                    Enter Product Name 
                    <input type="text" className="form-control"
                    onChange={obj=>pickName(obj.target.value)}
                    value={pname}/>
                </div>

                <div className="col-lg-3">
                    Enter Price 
                    <input type="number" className="form-control"
                    onChange={obj=>pickPrice(obj.target.value)}
                    value={pprice}/>
                </div>
                <div className="col-lg-3">
                    Enter Quantity 
                    <input type="number" className="form-control"
                    onChange={obj=>pickQty(obj.target.value)}
                    value={pqty}/>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-6">
                    Enter Product Details 
                    <textarea className="form-control"
                    onChange={obj=>pickDetails(obj.target.value)}
                    value={pdetails}></textarea>
                </div>

                <div className="col-lg-6">
                    Enter Product Photo URL 
                    <textarea className="form-control"
                    onChange={obj=>pickPhoto(obj.target.value)}
                    value={pphoto}></textarea>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 text-center">
                    <button className="btn btn-primary" onClick={save}> Upload Product </button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;
import { useState } from "react";
import swal from "sweetalert";

const Myregister = () =>{
    let [fullname, pickName] = useState("");
    let [emailid, pickEmail] = useState("");
    let [password, pickPassword] = useState("");
    let [mobileno, pickMobile] = useState("");
    let [address, pickAddress] = useState("");

    const save = () =>{
        let userinfo = {
            name: fullname,
            email : emailid,
            password: password,
            mobile : mobileno,
            address:address
        };
        let url = "http://localhost:1234/account";
        let postOption = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(userinfo)
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(serverRes=>{
            swal("hi , " + fullname, "Added in your Cart", "success");
            pickName("");
            pickMobile("");
            pickAddress("");
            pickEmail("");
            pickPassword("");
        })

    }
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                <h1 className="text-center text-info">Seller, Create Account </h1>
                
                <div className="mb-4">
                    <label>Shop/Seller Name</label>
                    <input type="text" placeholder="Enter Business name" className="form-control" 
                    onChange={obj => pickName(obj.target.value)} value={fullname}/>
                </div>

                <div className="mb-4">
                    <label>e-mail</label>
                    <input type="text" placeholder="Enter email id" className="form-control"
                     onChange={obj => pickEmail(obj.target.value)} value={emailid}/>
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" className="form-control"
                     onChange={obj => pickPassword(obj.target.value)} value={password}/>
                </div>

                <div className="mb-4">
                    <label>Mobile No</label>
                    <input type="text" placeholder="Enter mobile" className="form-control"
                     onChange={obj => pickMobile(obj.target.value)} value={mobileno}/>
                </div>

                <div className="mb-4">
                    <label>Bussiness Address</label>
                    <textarea placeholder="Enter Business Address" className="form-control"
                     onChange={obj => pickAddress(obj.target.value)} value={address}></textarea>
                </div>

                <div className="text-center">
                    <button className="btn btn-primary" onClick={save}>Register Now</button>
                </div>

             </div>
            </div>
        
        </div>
    )
}

export default Myregister;
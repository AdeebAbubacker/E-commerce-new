import { useState } from "react";
import swal from "sweetalert";

const Mylogin = () =>{
   
    let [emailid, pickEmail] = useState("");
    let [password, pickPassword] = useState("");
 

    const save = () =>{ 

        if(emailid == " " || password == ""){
            swal("Invalid", "Empty email or password", "error");
        }else{
        let url = "http://localhost:1234/account?email="+emailid+"&password="+password;  
        fetch(url)
        .then(response=>response.json())
        .then(serverRes=>{
            if(serverRes.length >0){
                swal("Login success , " , "Please wait....", "success");
                localStorage.setItem("seller", serverRes[0].id);   
                localStorage.setItem("fullname", serverRes[0].name); 
                window.location.reload(); //seller will load automatically
            }
            else{
                swal("Fail","Invalid or not excist","error");
                }           
                        })
            }
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                <h1 className="text-center text-info">Seller, Login </h1>

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

                <div className="text-center">
                    <button className="btn btn-primary" onClick={save}>Login Now</button>
                </div>

             </div>
            </div>
        
        </div>
    )
}

export default Mylogin;
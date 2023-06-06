import { HashRouter, Routes, Route } from "react-router-dom";
import AdminHeader from "./adminheader";
import Myproduct from "./product";
import Newproduct from "./newproduct";
import Mydashboard from "./dashboard";
import Myorder from "./order";

const AdminApp = () =>{

    return(
        <HashRouter>
            <AdminHeader/>

            <Routes>
                <Route exact path="/product" element={<Myproduct/>} />
                <Route exact path="/newproduct" element={<Newproduct/>} />
                <Route exact path="/" element={<Mydashboard/>} />
                <Route exact path="/orders" element={<Myorder/>} />
            </Routes>

        </HashRouter>
    )
}

export default AdminApp;
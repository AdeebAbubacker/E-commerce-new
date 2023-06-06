import { HashRouter, Routes, Route } from "react-router-dom";
import Myhome from "./home";
import Mycart from "./cart";
import Mylogin from "./login";
import Myregister from "./register";
import UserHeader from "./userheader";

const UserApp = () =>{
    return(
        <HashRouter>
            <UserHeader/>
            <Routes>
                <Route exact path="/" element={<Myhome/>} />
                <Route exact path="/cart" element={<Mycart/>} />
                <Route exact path="/login" element={<Mylogin/>} />
                <Route exact path="/register" element={<Myregister/>} />
            </Routes>
        </HashRouter>
    )
}

export default UserApp;
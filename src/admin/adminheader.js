import {Link} from 'react-router-dom';

const AdminHeader = () =>{
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-4 text-center'>
                    <h1 className='text-danger'> <i className='fa fa-shopping-bag'></i> Seller CRM </h1>
                </div>
                <div className='col-lg-8 text-end'>
                    <div className='btn-group'>
                        <Link to="/" className='btn btn-primary'> <i className='fa fa-home'></i> Dashboard</Link>
                        <Link to="/orders" className='btn btn-info'><i className='fa fa-phone'></i> My Orders</Link> 
                        <Link to="/newproduct" className='btn btn-success'><i className='fa fa-plus'></i> New Product</Link> 
                        <Link to="/product" className='btn btn-warning'><i className='fa fa-table'></i> Product LIst </Link>
                        <button to="#" className='btn btn-danger' onClick={logout}>
                            {localStorage.getItem("fullname")} - <i className='fa fa-power-off'></i> Logout</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default AdminHeader;

const logout = () => {
    localStorage.clear();
    window.location.reload();
}
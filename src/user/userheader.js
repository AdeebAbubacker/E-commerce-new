import {Link} from 'react-router-dom';

const UserHeader = () =>{
    return(
        <div className='col-lg-8 mt-4 text-center'>
        <div className='btn-group'>
            <Link to="/" className='btn btn-primary'> <i className='fa fa-home'></i> Home</Link>
            <Link to="/cart" className='btn btn-info'><i className='fa fa-phone'></i> My Cart</Link> 
            <Link to="/register" className='btn btn-success'><i className='fa fa-plus'></i> Create Account</Link> 
            <Link to="/login" className='btn btn-warning'><i className='fa fa-table'></i> Login</Link>
        </div> 
    </div>
    )
}
export default UserHeader;
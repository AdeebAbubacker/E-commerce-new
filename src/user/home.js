import { useState, useEffect } from "react";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";

const Myhome = () =>{
    let[allproduct, updateProduct] = useState( [] );
    const getProduct = () =>{
        let url = "http://localhost:1234/product";
        fetch(url)
        .then(response=>response.json())
        .then(productArray =>{
            updateProduct(productArray.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    }, [1]);

    const addinCart = (pinfo) =>{
        pinfo["qty"] = 1;
        let url = "http://localhost:1234/cart";
        let postOption = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(pinfo)
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(serverRes=>{
            swal(pinfo.name, "Added in your Cart", "success");
        })
    }

    let [keyword, updateKeyword] = useState("");

    //pagination start
    const PER_PAGE = 2;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allproduct.length / PER_PAGE);

    return(
       <div className="container mt-4">

        <div className="row mb-4">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
                <input type="text" placeholder="Search" className="form-control"
                onChange={obj=>updateKeyword(obj.target.value)} value={keyword}/>
            </div>
        </div>

            <div className="row">
                {
                    allproduct.filter(post => {
                        if (post.name.toLowerCase().includes(keyword.toLowerCase())) {
                            return post;
                        }
                    })
                    .slice(offset, offset + PER_PAGE)
                    .map((product, index) =>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <div className="p-4 shadow rounded">
                                    <h3 className="text-center mb-2"> {product.name} </h3>
                                    <img src={product.photo} height="160" width="90%" className="rounded"/>
                                    <p className="text-danger p-2">Rs. {product.price} </p>
                                    <p> {product.details} </p>
                                    <p className="text-center p-3">
                                        <button className="btn btn-danger btn-sm" 
                                        onClick={ addinCart.bind(this, product) }> 
                                           <i className="fa fa-shopping-cart"></i> Add to Cart 
                                        </button>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* siyaram sirs code */}

            <div className="mb-4 mt-4">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination  justify-content-center"}
                        pageClassName={"page-item "}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active primary"}
                    />
                </div>
       </div>
    )
}

export default Myhome;
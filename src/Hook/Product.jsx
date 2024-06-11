import { useState } from "react";
function Product(){

    return(
        <>
        <div className="container d-flex justify-content-center mt-5">
            <div className="p-3 border border-danger w-50">
                <h1 className=" text-center">Add Product</h1>
                <label htmlFor="code">Code</label>
                <input type="text" className=" form-control"  id="code" name="code"/>
                <label htmlFor="name">Name</label>
                <input type="text" className=" form-control"  />
                <label htmlFor="qty">Qty</label>
                <input type="text" className=" form-control"  />
                <label htmlFor="price">Price</label>
                <input type="text" className=" form-control"  />
                <button className="btn btn-primary mt-3">Buy Now</button>
                <button className="btn btn-danger mx-2 mt-3">Cancel</button>
            </div>
        </div>
        </>
    )
}
export default Product
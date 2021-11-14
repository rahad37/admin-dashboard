import React from 'react';
import './Product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../DummyData';
import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                </Link>
                
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">1</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">sales:</div>
                            <div className="productInfoValue">$123</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">active</div>
                            <div className="productInfoValue">yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">in stock</div>
                            <div className="productInfoValue">false</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpods' />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Status</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish className="productUploadIcon"/>
                            </label>
                            <input type="file" id='file' style={{display: 'none'}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;
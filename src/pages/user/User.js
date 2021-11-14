import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
                
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Rahim Mia</span>
                            <span className="userShowUserTitle">Web Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon'/>
                            <span className="userShowInfoTitle">rahimmia99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon'/>
                            <span className="userShowInfoTitle">12.07.1996</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="userShowInfoTitle">+8801567897654</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon'/>
                            <span className="userShowInfoTitle">rahimmia@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon'/>
                            <span className="userShowInfoTitle">Comilla | Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='rahimmia99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Birthday</label>
                                <input type="text" placeholder='12.07.1996' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="number" placeholder='+8801567897654' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder='rahimmia@gmail.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='Comilla | Bangladesh' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                <input type="file" id='file' style={{display: 'none'}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default User;
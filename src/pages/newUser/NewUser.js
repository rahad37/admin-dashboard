import React from 'react';
import './NewUser.css';

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">NEW USER</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='Rahim'/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Rahim Mia'/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='rahimmia@gmailcom'/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+8801488893113'/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="number" placeholder='Comilla | Bangladesh'/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male'/>
                        <label for="male">Male</label>
                        <input type="radio" name='gender' id='female' value='female'/>
                        <label for="female">Female</label>
                        <input type="radio" name='gender' id='other' value='other'/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
};

export default NewUser;
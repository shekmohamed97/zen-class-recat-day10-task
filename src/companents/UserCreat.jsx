import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserCreat = () => {
    const navigate = useNavigate()
    const [editData, setEditData] = useState({
        _name: '',
        user_name: '',
        user_email: '',
        user_phonenumper: '',
        user_cityname: '',
        user_countryname: '',
        user_countrycode: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditData((preData) => ({
            ...preData, [name]: value
        }))
    }

    const handleDetailsSubmit = async (e) => {
        e.preventDefault()
        await axios.post('https://662b8bf2de35f91de158a588.mockapi.io/api/usersdetails', editData)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))

        navigate('/')
    }


    return (
        <div>
            <h1>User Creation </h1>
            <div className='card'>
            <form onSubmit={handleDetailsSubmit}>
                <table>
                    <tr>
                        <td>  <label>Name:</label></td><td><input type="text" name="_name" value={editData._name} onChange={handleChange} placeholder='Enter Your Name'/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>User Name:</label></td><td><input type="text" name="user_name" value={editData.user_name} onChange={handleChange} placeholder='Enter Your User Name'/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>E-mail: </label></td><td><input type="text" name="user_email" value={editData.user_email} onChange={handleChange} placeholder='Enter Youe E-mail'/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>phone Numper:</label></td><td><input type="text" name="user_phonenumper" value={editData.user_phonenumper} onChange={handleChange} placeholder='Enter Your Phone Numper'/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>City Name:</label></td><td><input type="text" name="user_cityname" value={editData.user_cityname} onChange={handleChange} placeholder='Enter Your City Name'/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label> Country Name: </label></td><td><input type="text" name="user_countryname" value={editData.user_countryname} onChange={handleChange} placeholder='Enter Your Country Name'/></td>
                    </tr>
                    <br />
                    <tr>
                        <td><label> Country Code:</label></td><td> <input type="text" name="user_countrycode" value={editData.user_countrycode} onChange={handleChange} placeholder='Enter your Country Code'/></td>
                    </tr>
                    <br />
                    <button className="createdetails" type="submit"> creat</button>
                    
                </table>
            </form>
            <br />
            </div>
            
        </div>
    );
};

export default UserCreat;
import React, {useState} from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [fnameError, setFNameError] = useState("");
    const [lnameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmpassError, setConfirmPassError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpass };
        console.log("Welcome", newUser);
    };
    
    const handleFName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFNameError("First Name must be at least 2 characters")
        }
        else{
            setFNameError("")
        }
    }

    const handleLName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLNameError("Last Name must be at least 2 characters")
        }
        else{
            setLNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters")
        }
        else{
            setEmailError("");
        }
    }
    
    const handlePass = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 ||e.target.value != document.getElementById('Conpassid').value) {
            setPassError("Password must match and be at least 8 characters");
        }
        else{
            setPassError("");
            setConfirmPassError("");
        }
    }
    
    const handleConfirmPass =(e) => {
        setConfirmpass(e.target.value);
        if(e.target.value.length < 8 || e.target.value != document.getElementById('passid').value){
            setConfirmPassError("Password must match and be at least 8 characters")
        }
        else{
            setConfirmPassError("")
            setPassError("")
        }
    }

    return(
        <form onSubmit={ (e) => e.preventDefault()} className='container'>
            <div>
                <h1>User Form</h1>
            </div>
            <div>
                <label>First Name</label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value), handleFName } />
                {fnameError ?
                <p style={{color:'red'}}>{ fnameError }</p> :
                ''
                }
            </div>
            <div>
                <label>Last Name</label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value), handleLName }/>
                {lnameError ?
                <p style={{color:'red'}}>{ lnameError }</p> :
                ''
                }
            </div>
            <div>
                <label>Email</label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value), handleEmail } />
                {emailError ?
                <p style={{color:'red'}}>{ emailError }</p> :
                ''
                }
            </div>
            <div>
                <label>Password</label>
                <input type="text" id='passid' onChange={ (e) => setPassword(e.target.value), handlePass } />
                {passError ?
                <p style={{color:'red'}}>{ passError }</p> :
                ''
                }
            </div>
            <div>
                <label>Confirm Password</label> 
                <input type="text" id="Conpassid" onChange={ (e) => setConfirmpass(e.target.value), handleConfirmPass} />
                {confirmpassError ?
                <p style={{color:'red'}}>{ confirmpassError }</p> :
                ''
                }
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpass}</p>
            </div>
            <input type="submit" className='btn btn-primary' value="Create User" />
        </form>
    );
};
    
export default UserForm;
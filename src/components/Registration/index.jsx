import React, {useState} from 'react';
import './style.css';

const Registration = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     });

    {/* const [error, setError] = useState(null); */}

    {/* && user.username === '') */}


    const isEmailValid = (email) => email.includes('@');

    const handleEmail = (event) => {

        setUser({...user, email: event.target.value})

     }


    const handleClickXXX = () => {
        if (isEmailValid(user.email) && user.username === '') {
            setUser({...user, username: user.email.substring(0,user.email.indexOf('@'))})
     }
    }

    const handleClick = () => {
        if (isEmailValid(user.email)) {
            console.log('email is valid');
        } else {
            console.log('email is not valid');
        }

        if (isEmailValid(user.email) && user.username === '') {
            console.log('funguje to?');
            setUser({...user, username: user.email.substring(0,user.email.indexOf('@'))})
            console.log(user.username);
        }  

        if (user.password === user.passwordConfirm && isEmailValid(user.email)) {
            alert('User can be successfully registered');
        } else {
            alert('Something went wrong. Try again!');
        }
    }
 
     const handleSubmit = () => {

        {/*if (isEmailValid(user.email)) {
            console.log('email is valid');
            handleClick();
        } else {
            console.log('email is not valid');
        }

        if (isEmailValid(user.email) && user.username === '') {
            console.log('funguje to?');
            setUser({...user, username: user.email.substring(0,user.email.indexOf('@'))})
            console.log(user.username);
        }  

        if (user.password !== user.passwordConfirm) {
            alert('confirmation of password is not correct');
        } else {
            alert('User was successfully registered');
        } */}


        console.log('User Name:',user.username, 'Email:', user.email, 'Password:',user.password, 'PasswordConfirm:',user.passworConfirm);
        alert(`UserName: ${user.username};` + ` Email: ${user.email};` + ` Password: ${user.password};` + ` PasswordConfirm: ${user.passwordConfirm}`);
     }


    return(
        <>
            <h2>Registration</h2>
            <form className="form">

                <label><input type="text" placeholder="Email Address*" value={user.email} onChange={handleEmail} /></label>
                <label><input type="text" placeholder="User Name" value={user.username} onChange={(event) => {setUser({...user, username: event.target.value})}} /></label>
                <button type="button" onClick={handleClickXXX}>Generate User Name</button><hr />
                <label><input type="text" placeholder="Password*" value={user.password} onChange={(event) => {setUser({...user, password: event.target.value})}} /></label>
                <label><input type="text" placeholder="Confirm Password*" value={user.passwordConfirm} onChange={(event) => {setUser({...user, passwordConfirm: event.target.value})}} /></label>
                <button type="button" onClick={handleClick}>Check registration details</button><hr />
                <input type="submit" value="SUBMIT" onClick={handleSubmit} />
            </form>
        </>

    )
};

export default Registration;
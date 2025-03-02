
//!Register.jsx Component
import React, { useState } from 'react';
import { Services } from '../Services/Services';
import styles from "./Register.module.css";
import { Link } from 'react-router-dom';

const Register = () => {
    let [state, setState] = useState({
        email: "",
        password: "",
        gender: ""
    });
    let [checkbox, setCheckBox] = useState([]);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    let handleCheckbox = (e) => {
        let { checked, value } = e.target;
        checked
            ? setCheckBox((prev) => [...prev, value])
            : setCheckBox(checkbox.filter((val) => val !== value));
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        let { email, password, gender } = state;
        let payload = { email, password, gender, skills: checkbox };
        Services.userRegister(payload);
    };

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.registerContainer}>
                <h2>Create Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} required />

                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} required />

                    <label>Gender:</label>
                    <div className={styles.radioGroup}>
                        <label>
                            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                        </label>
                    </div>

                    <label>Skills:</label>
                    <div className={styles.checkboxGroup}>
                        <label>
                            <input type="checkbox" value="CSS" onChange={handleCheckbox} /> CSS
                        </label>
                        <label>
                            <input type="checkbox" value="HTML" onChange={handleCheckbox} /> HTML
                        </label>
                        <label>
                            <input type="checkbox" value="JS" onChange={handleCheckbox} /> JS
                        </label>
                        <label>
                            <input type="checkbox" value="ReactJS" onChange={handleCheckbox} /> ReactJS
                        </label>
                    </div>

                    <button type="submit">Register</button>
                </form>
                <p>Already signed up? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;

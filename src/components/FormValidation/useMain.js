import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRole } from "../Admin/adminSlice";

const validateEmail = (email) => {
    const emailRegex = /^.+@.+\..+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
};

const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-ЯіІєЄґҐ'ʼ]{3,}$/;
    return nameRegex.test(name);
};

export const useMain = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [name, setName] = useState("");
    const [isNameValid, setIsNameValid] = useState(true);
    const [role, setRoleLocal] = useState('')

    const dispatch = useDispatch()

    const handleRoleChange = (e) => {
        setRoleLocal(e.target.value)
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setIsPasswordValid(validatePassword(value));
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setIsNameValid(validateName(value));
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setName("");
        setIsEmailValid(true);
        setIsPasswordValid(true);
        setIsNameValid(true);
        setRoleLocal('')
    };

    const handleSubmit = () => {
        if (isEmailValid && isPasswordValid && isNameValid && email && password && name) {
            if (role === 'user') {
                alert(`Welcome, ${name}! You are logger in as a User.`);
            } else if (role === 'admin') {
                alert(`Welcome, ${name}! Redirecting to Admin dashboard.`)
                dispatch(setRole('admin'))
            }
            resetForm();
        } else {
            alert("Please fill out all fields correctly.");
        }
    };

    return {
        email,
        password,
        name,
        role,
        isEmailValid,
        isPasswordValid,
        isNameValid,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleRoleChange,
        handleSubmit,
    };
};

import React from "react";
import './ValForm.scss'
import { useMain } from "./useMain";
import { Typography, List, ListItem, Select, MenuItem, TextField, Button } from '@mui/material';

export const ValForm = ({ items }) => {
    const {
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
    } = useMain();

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={onSubmit} className="custom-form">
            <List className="custom-list">
                {items.map((item) => (
                    <ListItem key={item.id} className="custom-list-item">
                        {item.type === "button" ? (
                            <Button
                                type="submit"
                                variant="contained"
                                color={item.color || "primary"}
                                fullWidth
                                className="custom-button"
                            >
                                {item.label}
                            </Button>
                        ) : item.id === "title" ? (
                            <Typography variant="h2"  className="custom-title">{item.label}</Typography>
                        ) : (
                            <TextField
                                label={item.label}
                                type={item.type}
                                variant="outlined"
                                fullWidth
                                name={item.id}
                                className="custom-text-field"
                                value={
                                    item.id === "inputName"
                                        ? name
                                        : item.id === "inputEmail"
                                        ? email
                                        : password
                                }
                                onChange={
                                    item.id === "inputName"
                                        ? handleNameChange
                                        : item.id === "inputEmail"
                                        ? handleEmailChange
                                        : handlePasswordChange
                                }
                                error={
                                    (item.id === "inputName" && !isNameValid) ||
                                    (item.id === "inputEmail" && !isEmailValid) ||
                                    (item.id === "inputPassword" && !isPasswordValid)
                                }
                                helperText={
                                    (item.id === "inputName" && !isNameValid)
                                        ? "The name must be at least 3 characters long"
                                        : (item.id === "inputEmail" && !isEmailValid)
                                        ? "Enter a valid email, for example: example@mail.com"
                                        : (item.id === "inputPassword" && !isPasswordValid)
                                        ? "Password must contain at least 8 characters, including uppercase and lowercase letters"
                                        : ""
                                }
                            />
                        )}
                    </ListItem>
                ))}
                 <ListItem className="custom-list-item">
                    <Select
                        value={role}
                        onChange={handleRoleChange}
                        fullWidth
                        className="custom-select"
                    >
                        <MenuItem value="" disabled>
                            Select Role
                        </MenuItem>
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </ListItem>
                <ListItem className="custom-list-item">
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className="custom-button"
                    >
                        Submit
                    </Button>
                </ListItem>
            </List>
        </form>
    );
};



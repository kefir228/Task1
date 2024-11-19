import React from "react";
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
        <form onSubmit={onSubmit}>
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f5f5f5',
                    boxShadow: 1,
                    gap: 2,
                    padding: 2,
                    width: '100%',
                    maxWidth: 500,
                    margin: '0 auto',
                    minHeight: '70vh',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}
            >
                {items.map((item) => (
                    <ListItem key={item.id}>
                        {item.type === "button" ? (
                            <Button
                                type="submit"
                                variant="contained"
                                color={item.color || "primary"}
                                fullWidth
                                sx={{
                                    fontSize: '1rem',
                                    padding: '10px',
                                }}
                            >
                                {item.label}
                            </Button>
                        ) : item.id === "title" ? (
                            <Typography variant="h2"
                                sx={{
                                    textAlign: 'center',
                                    fontSize: { xs: '1.5rem', sm: '2rem' },
                                    marginBottom: 2,
                                }}>
                                {item.label}
                            </Typography>
                        ) : (
                            <TextField
                                label={item.label}
                                type={item.type}
                                variant="outlined"
                                fullWidth
                                name={item.id}

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
                                sx={{
                                    padding: '0',
                                    marginBottom: 2,
                                    fontSize: '1rem',
                                }}
                            />
                        )}
                    </ListItem>
                ))}
                <ListItem>
                    <Select
                        value={role}
                        onChange={handleRoleChange}
                        fullWidth
                        sx={{
                            marginBottom: 2,
                            fontSize: '1rem',
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Role
                        </MenuItem>
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </ListItem>
                <ListItem>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{
                            fontSize: '1rem',
                            padding: '10px',
                        }}
                    >
                        Submit
                    </Button>
                </ListItem>
            </List>
        </form>
    );
};



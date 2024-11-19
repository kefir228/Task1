import React, { useState } from "react";
import { List, ListItem, TextField, Button } from '@mui/material';

export const ListOfItem = ({ initialItems }) => {
    const [value, setValue] = useState('')
    const [items, setItems] = useState(initialItems || [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        if (value.trim()) {
            setItems(prevItems => [...prevItems, value])
            setValue('')
        }
    }

    const handleDelete = () => {
        setItems(prevItems => prevItems.slice(0, -1))
    }

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px',
            maxWidth: '500px',
            margin: '0 auto',
            minHeight: '70vh',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column', 
                    gap: 2, 
                    padding: 2, 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '8px', 
                    boxShadow: 1, 
                    maxWidth: '400px', 
                    margin: 'auto', 
                }}
            >
                {items.map((item, index) => (
                    <ListItem key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between', 
                            padding: '10px', 
                            backgroundColor: '#fff', 
                            borderRadius: '4px', 
                            boxShadow: 1, 
                            '&:hover': {
                                backgroundColor: '#e0e0e0', 
                            },
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
                <TextField
                    name="input"
                    label='input'
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        marginBottom: 2, 
                        width: '100%', 
                    }}
                >
                    Input
                </TextField>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between', 
                        gap: 2,
                        flexWrap:'wrap'
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}

                        sx={{
                            width: '48%',
                            height: '40px', 
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleDelete}
                        sx={{
                            width: '48%',
                            height: '40px', 
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </List>
        </div>
    )
}
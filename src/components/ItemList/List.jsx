import React, { useState } from "react";
import './List.scss'
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
        <div className="container">
            <List className="list">
                {items.map((item, index) => (
                    <ListItem key={index} className="list-item">{item}</ListItem>
                ))}
                <TextField
                    name="input"
                    label='input'
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    className="input-field"
                >
                    Input
                </TextField>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className="add-button"
                >
                    Add
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleDelete}
                    className="delete-button"
                >
                    Delete
                </Button>
            </List>
        </div>
    )
}
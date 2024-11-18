import React, { useState } from "react";
import './Admin.scss'
import { useDispatch, useSelector } from "react-redux";
import { selectAdminProps, setPostDogSelected, addDogComponent,removeDogComponent } from "./adminSlice";
import { setAnimalType } from "../Edit/editSlice";
import { Typography, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';

export const AdminComponent = () => {
    const adminProps = useSelector(selectAdminProps)
    const dispatch = useDispatch()
    const [create, setCreate] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')


    const handleCreateButton = () => {
        setCreate(prev => !prev)
    }
    const handleOptionChange = (e) => {
        const selectedValue = e.target.value
        setSelectedOption(selectedValue)
        dispatch(setAnimalType(selectedValue))
    }

    const handlePostButtonClick = () => {
        if (selectedOption === 'dog') {
            dispatch(setPostDogSelected(true))
            dispatch(addDogComponent())
        } 
        setSelectedOption('')
    }

    const handleDeleteDogComponent = () => {
        dispatch(removeDogComponent())
    }

    return (
        <div className="admin-container">
            {adminProps.map((prop) => {
                if (prop.id === 'title') {
                    return <Typography variant="h4"
                        key={prop.id}>{prop.label}
                    </Typography>;
                }
                if (prop.id === 'questionButton' || prop.id === 'postButton') {
                    return (
                        <div className="admin-buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                key={prop.id}
                                onClick={prop.id === 'questionButton' ? handleCreateButton : handlePostButtonClick}
                            >
                                {prop.label}
                            </Button>
                        </div>
                    );
                }
            })}
            {create && (
                <FormControl className="form-control">
                    <InputLabel>Select Option</InputLabel>
                    <Select
                        value={selectedOption}
                        label="Select Option"
                        onChange={handleOptionChange}
                    >
                        <MenuItem value="dog">Dog</MenuItem>
                        <MenuItem value="none">None</MenuItem>
                    </Select>
                </FormControl>
            )}
            <Button
                variant="contained"
                color="secondary"
                onClick={handleDeleteDogComponent}
            >
                Delete Dog Component
            </Button>
        </div>
    )
};



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdminProps, setPostDogSelected, addDogComponent, removeDogComponent } from "./adminSlice";
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
            }}
        >
            {adminProps.map((prop) => {
                if (prop.id === 'title') {
                    return <Typography variant="h4"
                        key={prop.id}
                        sx={{
                            textAlign: 'center',
                            marginBottom: '16px',
                        }}
                    >
                        {prop.label}
                    </Typography>;
                }
                if (prop.id === 'questionButton' || prop.id === 'postButton') {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                sx={{
                                    minWidth: '150px',
                                    fontSize: '0.9rem',
                                    padding: '8px 16px',
                                }}
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
                <FormControl
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        margin: '0 auto',
                    }}
                >
                    <InputLabel>Select Option</InputLabel>
                    <Select
                        value={selectedOption}
                        label="Select Option"
                        onChange={handleOptionChange}
                        sx={{
                            width: '100%',
                        }}
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



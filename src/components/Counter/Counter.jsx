import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Typography, List, TextField, Button } from '@mui/material';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice'

export const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('5')

    return (
        <List
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                padding: 2,
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: 1,
                maxWidth: '400px',
                margin: 'auto',
                minHeight: '70vh',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    width: '100%',
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    color={"primary"}
                    aria-label="increment value"
                    onClick={() => dispatch(increment())}
                    sx={{
                        flex: '1',
                        maxWidth: '60px',
                    }}
                >
                    +
                </Button>
                <Typography
                    sx={{
                        flex: '2',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    {count}
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color={"primary"}
                    aria-label="decrement"
                    onClick={() => dispatch(decrement())}
                    sx={{
                        flex: '1',
                        maxWidth: '60px',
                    }}
                >
                    -
                </Button>
            </div>
            <TextField
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
                sx={{
                    width: '100%',
                    maxWidth: '300px',
                    margin: '0 auto',
                    '& .MuiInputBase-input': {
                        textAlign: 'center',
                        fontSize: '1rem',
                    },
                }}
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                    width: '100%',
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    color={"primary"}
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                    sx={{
                        flex: '1',
                    }}
                >
                    Add Amount
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color={"primary"}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                    sx={{
                        flex: '1',
                    }}
                >
                    Add Async
                </Button>
            </div>
        </List>
    )
}
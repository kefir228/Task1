import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './Counter.scss'
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
        <List className="custom-list">
            <div className="button-group">
                <Button
                    className="increment-button"
                    type="submit"
                    variant="contained"
                    color={"primary"}
                    aria-label="increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
                <Typography className="counter-display">
                    {count}
                </Typography>
                <Button
                    className="decrement-button"
                    type="submit"
                    variant="contained"
                    color={"primary"}
                    aria-label="decrement"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
            </div>
            <TextField
                className="custom-textfield"
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <Button
                className="add-amount-button"
                type="submit"
                variant="contained"
                color={"primary"}
                onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
                Add Amount
            </Button>
            <Button
                className="add-async-button"
                type="submit"
                variant="contained"
                color={"primary"}
                onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
                Add Async
            </Button>
        </List>
    )
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimalImage } from './editSlice'
import { selectPostDogSelected, selectDogComponentVisible } from "../Admin/adminSlice";
import './Edit.scss'
import { Typography, Box, CircularProgress, CardContent, Card, Button } from '@mui/material';


export const Edit = () => {
    const dispatch = useDispatch()
    const postDogSelected = useSelector(selectPostDogSelected)
    const isDogComponentVisible = useSelector(selectDogComponentVisible)
    const { images, loading, error } = useSelector((state) => state.api)

    useEffect(() => {
        dispatch(fetchAnimalImage({ animalType: 'cat' }))
    }, [dispatch])

    const handleLoadNewCat = () => {
        dispatch(fetchAnimalImage({ animalType: 'cat' }))
    }
    const handleLoadNewDog = () => {
        dispatch(fetchAnimalImage({ animalType: 'dog' }))
    }

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Typography variant="h6" color="error">Error: {error}</Typography>
            </Box>
        )
    }
    return (
        <Box className='edit-container'>
            <Card className="edit-card">
                <CardContent className="card-content">
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        Animal Images
                    </Typography>
                    <Box className="images-container">
                        <Box className="imaged">
                            {images.cat.length > 0 && (
                                <Box className="image-box">
                                    <img
                                        src={images.cat[images.cat.length - 1]}
                                        alt="Random Cat"
                                    />
                                </Box>
                            )}
                            {isDogComponentVisible && images.dog.length > 0 && (
                                <Box className="image-box">
                                    <img
                                        src={images.dog[images.dog.length - 1]}
                                        alt="Random Dog"
                                    />
                                </Box>
                            )}
                        </Box>
                        <Box className="buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleLoadNewCat}
                            >
                                Load New Cat
                            </Button>
                            {postDogSelected && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleLoadNewDog}
                                >
                                    Load New Dog
                                </Button>
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
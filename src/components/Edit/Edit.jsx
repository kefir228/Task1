import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimalImage } from './editSlice'
import { selectPostDogSelected, selectDogComponentVisible } from "../Admin/adminSlice";
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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0px',
                margin:'20px',
                flexWrap: 'wrap',
            }}
        >
            <Card
                sx={{
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <CardContent
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        Animal Images
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box className="imaged">
                            {images.cat.length > 0 && (
                                <Box
                                    sx={{
                                        maxWidth: '300px',
                                        maxHeight: '250px',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <img
                                        src={images.cat[images.cat.length - 1]}
                                        alt="Random Cat"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                    />
                                </Box>
                            )}
                            {isDogComponentVisible && images.dog.length > 0 && (
                                <Box
                                    sx={{
                                        maxWidth: '300px',
                                        maxHeight: '250px',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <img
                                        src={images.dog[images.dog.length - 1]}
                                        alt="Random Dog"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                    />
                                </Box>
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleLoadNewCat}
                                sx={{
                                    width: '150px',
                                    padding: '10px',
                                    fontSize: '16px',
                                }}
                            >
                                Load New Cat
                            </Button>
                            {postDogSelected && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleLoadNewDog}
                                    sx={{
                                        width: '150px',
                                        padding: '7px',
                                        fontSize: '16px',
                                    }}
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
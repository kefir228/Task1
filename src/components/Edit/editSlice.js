import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAnimalImage = createAsyncThunk('api/fetchAnimalImage', async ({ animalType }) => {
    const url =
        animalType === 'cat'
            ? 'https://api.thecatapi.com/v1/images/search'
            : 'https://api.thedogapi.com/v1/images/search';
    const apiKey =
        animalType === 'cat'
            ? 'live_voRJDQfqz0cSlMFCKEv7kcxA6TZaNl9BMuvwdVn7qG06MzX5bFw05JBDPt9SYnNp'
            : 'live_Tyl9OSw4QDaKg60JR4L4zdkno1ZH67wXh6S6JHxF7opZGTFoczqwBhRVp2BTTHDJ';

    const response = await fetch(url, { headers: { 'x-api-key': apiKey } });
    const data = await response.json();
    return { animalType, url: data[0].url };
});


const apiSlice = createSlice({
    name: 'api',
    initialState: {
        images: { cat: [], dog: [] },
        loading: false,
        error: null,
    },
    reducers: {
        setAnimalType: (state, action) => {
            state.animalType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimalImage.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAnimalImage.fulfilled, (state, action) => {
                state.loading = false;
                state.images[action.payload.animalType] = [ 
                    action.payload.url,
                ]
            })
            .addCase(fetchAnimalImage.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})
export const { setAnimalType } = apiSlice.actions;
export const apiReducer = apiSlice.reducer
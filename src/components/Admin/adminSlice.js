import { createSlice } from '@reduxjs/toolkit';

const adminProps = [
    { id: 'title', label: 'Welcome to the Admin Dashboard' },
    { id: 'questionButton', label: 'Create' },
    { id: 'postButton', label: 'Post' }
]

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        role: '',
        adminProps: adminProps,
        postDogSelected: false,
        isDogComponentVisible: false,
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
        clearRole: (state) => {
            state.role = '';
        },
        setPostDogSelected: (state, action) => {
            state.postDogSelected = action.payload
        },
        addDogComponent: (state) => {
            state.isDogComponentVisible = true
        },
        removeDogComponent: (state) => {
            state.isDogComponentVisible = false
            state.postDogSelected = false
        }
    },
});

export const { setRole, clearRole, setPostDogSelected, addDogComponent, removeDogComponent } = authSlice.actions;
export const selectRole = (state) => state.auth.role;
export const selectAdminProps = (state) => state.auth.adminProps
export const selectPostDogSelected = (state) => state.auth.postDogSelected
export const selectDogComponentVisible = (state) => state.auth.isDogComponentVisible
export const authReducer = authSlice.reducer;

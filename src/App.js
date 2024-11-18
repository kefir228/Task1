import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store'
import { Routes, Route, HashRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu } from './components/Menu/Menu';
import { ValForm } from './components/FormValidation/ValForm';
import { ListOfItem } from './components/ItemList/List';
import { Counter } from './components/Counter/Counter';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminComponent } from './components/Admin/Admin'
import { Edit } from './components/Edit/Edit';

const navProps = [
  { id: 'valid', label: 'Validation', path: '/valid' },
  { id: 'changeElements', label: 'Change Elements', path: "/change" },
  { id: "editingValidation", label: "Counter", path: "/counter" },
  { id: "list", label: "List of Post", path: "/list" },
  { id: "guardRoute", label: "Admin", path: '/admin' },
]

const validProps = [
  { id: 'title', label: 'Validation Inputs' },
  { id: 'inputName', label: 'Name', type: 'text' },
  { id: 'inputEmail', label: 'Email', type: 'email' },
  { id: 'inputPassword', label: 'Password', type: 'password' },
]

const changeProps = ['a', 1,]

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <div className="App">
            <Menu items={navProps} />
            <Routes>
              <Route path='/valid' element={<ValForm items={validProps} />} />
              <Route path='/change' element={<ListOfItem initialItems={changeProps} />} />
              <Route path='/counter' element={<Counter />} />
              <Route
                path='/admin'
                element={
                  <PrivateRoute requiredRole="admin">
                    <AdminComponent />
                  </PrivateRoute>
                }
              />
              <Route path='/list'element={<Edit />}/>
            </Routes>
          </div>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

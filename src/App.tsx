import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePages from './pages/Home';
import NewPage from './pages/New';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {

  const theme = {
    primary: "#322153",
    secondary: "#6c63ff",
    background: "#f0f0f5",
    white: "#fff;"
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePages />
          </Route>
          <Route path="/new">
            <NewPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;

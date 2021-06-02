import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/NewProjectPage'
import HomePage from './pages/HomePage'
import FooterImage from './images/footer.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Footer = styled.footer`
  background-image: url(${FooterImage});
  background-repeat: repeat-x;
  height: 236px;

`

function App() {
  return <Router>
    <Switch>
      <Route path="/new-project">
        <HomePage></HomePage>
      </Route>
      <Route>
        <NewProjectPage></NewProjectPage>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
}

export default App;

import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/NewProjectPage'
import HomePage from './pages/HomePage'
import FooterImage from './images/footer.svg'
import i18n from './i18n';
import { withTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`
const NavLi = styled.li`
  float: left;
`

const Footer = styled.footer`
  background-image: url(${FooterImage});
  background-repeat: repeat-x;
  height: 236px;
`

const Right = styled.div`
  float: right
`

export const MainContainer = styled.main`
  padding: 1rem;
  flex-grow: 1;
`

const Header = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  
  return <div className='nav'>
    <NavUl role="nav">
      <NavLi><Link to="/home">home</Link></NavLi>
      <NavLi><Link to="/new-project">new project</Link></NavLi>
      <Right><NavLi><a onClick={() => changeLanguage('de')}>DE</a></NavLi></Right>
      <Right><NavLi><a onClick={() => changeLanguage('fr')}>FR</a></NavLi></Right>
    </NavUl>
  </div>
}

function App() {
  return <Router>
    <Header></Header>
    <Switch>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>
      <Route>
        <NewProjectPage></NewProjectPage>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
}

export default withTranslation()(App);

import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/NewProjectPage'
import HomePage from './pages/HomePage'
import FooterImage from './images/footer.svg'
import i18n from './i18n';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
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
  float: right;
`

const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  color: white;
  padding: 14px 5px;

  &:hover {
    color: white;
    opacity: 0.5;
  }
`

export const MainContainer = styled.main`
  padding: 1rem;
  flex-grow: 1;
`

const Header = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  const { t } = useTranslation()
  const lang = i18n.language

  return <div className='nav'>
    <NavUl role="nav">
      <NavLi><Link to="/home">{t('home_page.title')}</Link></NavLi>
      <NavLi><Link to="/new-project">{t('new_project_page.title')}</Link></NavLi>
      <Right><NavLi><Button className={lang === 'de' ? 'active' : ''} onClick={() => changeLanguage('de')}>DE</Button></NavLi></Right>
      <Right><NavLi><Button className={lang === 'fr' ? 'active' : ''} onClick={() => changeLanguage('fr')}>FR</Button></NavLi></Right>
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

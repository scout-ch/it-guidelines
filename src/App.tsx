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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary);

  &>ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
  }

  a, button {
    color: white;
    opacity: 1;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:focus, button:focus,
  a:hover, button:hover,
  a:active, button:active,
  a.active, button.active {
    color: white;
    opacity: 0.5;
  }

  .active {
    text-decoration: underline;
  }
}
`

const Footer = styled.footer`
  background-image: url(${FooterImage});
  background-repeat: repeat-x;
  height: 236px;
`

const Button = styled.button`
  border: none;
  background: none;
  color: white;

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
    <Nav role="nav">
      <ul>
        <li><Link to="/home">{t('home_page.title')}</Link></li>
        <li><Link to="/new-project">{t('new_project_page.title')}</Link></li>
      </ul>
      <ul>
        <li><Button className={lang === 'de' ? 'active' : ''} onClick={() => changeLanguage('de')}>DE</Button></li>
        <li><Button className={lang === 'fr' ? 'active' : ''} onClick={() => changeLanguage('fr')}>FR</Button></li>
      </ul>
    </Nav>
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

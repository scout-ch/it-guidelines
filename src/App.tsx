import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/NewProjectPage'
import PrinciplesPage from './pages/PrinciplesPage';
import SecurityPage from './pages/SecurityPage';
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
import AcquisitionPage from './pages/AcquisitionPage';
import CommunityPage from './pages/CommunityPage';
import { faScroll, faLock, faTools, faShoppingCart, faUsers, faHandsHelping, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

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

  library.add(faScroll, faLock, faTools, faShoppingCart, faUsers, faHandsHelping, faCalendarAlt)

  return <div className='nav'>
    <Nav role="nav">
      <ul>
        <li><Link to="/it-guidelines/home">{t('home_page.title')}</Link></li>
        <li><Link to="/it-guidelines/new-project">{t('new_project_page.title')}</Link></li>
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
      <Route path="/it-guidelines/priciples">
        <PrinciplesPage/>
      </Route>
      <Route path="/it-guidelines/acquisition">
        <AcquisitionPage/>
      </Route>
      <Route path="/it-guidelines/community">
        <CommunityPage/>
      </Route>
      <Route path="/it-guidelines/security">
        <SecurityPage/>
      </Route>
      <Route path="/it-guidelines/new-project">
        <NewProjectPage></NewProjectPage>
      </Route>
      <Route path="/it-guidelines/">
        <HomePage></HomePage>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
}

export default withTranslation()(App);

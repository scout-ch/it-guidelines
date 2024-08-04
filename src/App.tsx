import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/it-guidelines/NewProjectPage'
import PrinciplesPage from './pages/it-guidelines/PrinciplesPage';
import SecurityPage from './pages/it-guidelines/SecurityPage';
import HomePage from './pages/HomePage'
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AcquisitionPage from './pages/it-guidelines/AcquisitionPage';
import CommunityPage from './pages/it-guidelines/CommunityPage';
import { faScroll, faLock, faTools, faShoppingCart, faUsers, faHandsHelping, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Footer from './components/Footer';
import ImpressumPage from './pages/ImpressumPage';
import ItGuidelinesPage from './pages/ItGuidelinesPage';
import DigitalisationPage from './pages/DigitalisationPage';
import NewDigitalisationProjectPage from './pages/digitalisation/NewDigitalisationProjectPage';


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

export const MainContainer = styled.main`
  padding: 1rem;
  margin: 0 1.8rem 0 2rem;
  flex-grow: 1;
  @media (min-width:1100px) {
    margin: 0 9rem 0 2rem;
  }
`

export const Ol = styled.ol`
  @media (max-width:1100px) {
    padding: 8px;
  }
`

export const Ul = styled.ul`
  @media (max-width:1100px) {
    padding: 8px;
  }
`
export const A = styled.a`

`

export const Infobox = styled.p`
background: rgba(250, 250, 250, 0.8);
border: 1px solid;
color: black;
padding: 9px;
width: 70%;
border-radius: 8px;
`

export const Box = styled.div`
display: flex;
margin-top: 60px;
border-top: 1px solid white;
`

const Header = () => {
  const { t } = useTranslation()

  library.add(faScroll, faLock, faTools, faShoppingCart, faUsers, faHandsHelping, faCalendarAlt)

  return <div className='nav'>
    <Nav role="nav">
      <ul>
        <li><Link to="/">{t('home_page.title')}</Link></li>
        <li><Link to="/digitalisation">{t('digitalisation_page.title')}</Link></li>
        <li><Link to="/it-guidelines">{t('it_guidelines_page.title')}</Link></li>
      </ul>
    </Nav>
  </div>
}

function App() {
  return <Router basename="/">
    <Header></Header>
    <Routes>
      <Route path="/it-guidelines" element={<ItGuidelinesPage/>}/>
      <Route path="/digitalisation" element={<DigitalisationPage/>}/>
      <Route path="/digitalisation/new-project" element={ <NewDigitalisationProjectPage/>}/>
      <Route path="/it-guidelines/priciples" element={<PrinciplesPage/>}/>
      <Route path="/it-guidelines/acquisition" element={<AcquisitionPage/>}/>
      <Route path="/it-guidelines/community" element={<CommunityPage/>}/>
      <Route path="/it-guidelines/security" element={<SecurityPage/>}/>
      <Route path="/it-guidelines/new-project" element={ <NewProjectPage/>}/>
      <Route path="/impressum" element={<ImpressumPage/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    <Footer></Footer>
  </Router>
}

export default withTranslation()(App);

import styled from '@emotion/styled';
import React from 'react';
import NewProjectPage from './pages/it-guidelines/NewProjectPage';
import PrinciplesPage from './pages/it-guidelines/PrinciplesPage';
import SecurityPage from './pages/it-guidelines/SecurityPage';
import HomePage from './pages/HomePage';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AcquisitionPage from './pages/it-guidelines/AcquisitionPage';
import CommunityPage from './pages/it-guidelines/CommunityPage';
import { faScroll, faLock, faTools, faShoppingCart, faUsers, faHandsHelping, faCalendarAlt, faCompass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Footer from './components/Footer';
import ImpressumPage from './pages/ImpressumPage';
import ItGuidelinesPage from './pages/ItGuidelinesPage';
import DigitalisationPage from './pages/DigitalisationPage';
import NewDigitalisationProjectPage from './pages/digitalisation/NewDigitalisationProjectPage';
import DocumentationPage from './pages/digitalisation/DocumentationPage';
import CompletionPage from './pages/CompletionPage';
import OrganisationPage from './pages/it-guidelines/OrganisationPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    li {
      border-right: 1px solid white;
      margin: 5px 0;
      &:hover ul:first-of-type {
        display: block;
      }
    }
  }

  a, button {
    color: white;
    opacity: 1;
    display: block;
    color: white;
    padding: 0.7rem 0.8rem;
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
`;
const SubNav = styled.ul`
  display: none;
  position: absolute;
  background-color: var(--color-primary);
  list-style-type: none;
  padding-left: 0;
`;

export const NavLocation = styled.div`
  font-size: 0.8rem;
`;

export const MainContainer = styled.main`
  padding: 1rem;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 1300px) {
    max-width: 1300px;
    margin: 0 auto;
  }
`;

export const Ol = styled.ol`
  @media (max-width: 1100px) {
    padding: 8px;
  }

  li {
    margin-bottom: 1em;
  }
`;

export const Ul = styled.ul`
  @media (max-width: 1100px) {
    padding: 8px;
  }

  li {
    margin-bottom: 1em;
  }
`;
export const A = styled.a``;

export const Infobox = styled.p`
  // background: rgba(250, 250, 250, 0.8);
  background: var(--color-secondary-light);
  // border: 1px solid;
  color: black;
  padding: 1em;
  border-radius: 8px;
  margin: 1em 0;
`;

export const Box = styled.div`
  display: flex;
  margin-top: 60px;
  border-top: 1px solid white;
`;

const Header = () => {
  const { t } = useTranslation();

  library.add(faScroll, faLock, faTools, faShoppingCart, faUsers, faHandsHelping, faCalendarAlt, faCompass);

  return (
    <div className="nav">
      <Nav role="nav">
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="compass" /> {t('home_page.title')}
            </Link>
          </li>
          <li>
            <Link to="/digitalisation">{t('digitalisation_page.title')}</Link>
            <SubNav>
              <li>
                <Link to="/digitalisation/new-project">{t('new_project_digitalisation_page.title')}</Link>
              </li>
              <li>
                <Link to="/digitalisation/documentation">{t('documentation_page.title')}</Link>
              </li>
            </SubNav>
          </li>
          <li>
            <Link to="/it-guidelines">{t('it_guidelines_page.title')}</Link>
            <SubNav>
              <li>
                <Link to="/it-guidelines/new-project">{t('new_project_guidelines_page.title')}</Link>
              </li>
              <li>
                <Link to="/it-guidelines/principles">{t('principles_page.title')}</Link>
              </li>
              <li>
                <Link to="/it-guidelines/security">{t('security_page.title')}</Link>
              </li>
              <li>
                <Link to="/it-guidelines/acquisition">{t('acquisition_page.title')}</Link>
              </li>
              <li>
                <Link to="/it-guidelines/community">{t('community_page.title')}</Link>
              </li>
              <li>
                <Link to="/it-guidelines/organisation">{t('organisation_page.title')}</Link>
              </li>
            </SubNav>
          </li>
          <li>
            <Link to="/completion">{t('completion_page.title')}</Link>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

function App() {
  return (
    <Router basename="/">
      <Header></Header>
      <Routes>
        <Route path="/it-guidelines" element={<ItGuidelinesPage />} />
        <Route path="/digitalisation" element={<DigitalisationPage />} />
        <Route path="/completion" element={<CompletionPage />} />
        <Route path="/digitalisation/new-project" element={<NewDigitalisationProjectPage />} />
        <Route path="/digitalisation/documentation" element={<DocumentationPage />} />
        <Route path="/it-guidelines/principles" element={<PrinciplesPage />} />
        <Route path="/it-guidelines/acquisition" element={<AcquisitionPage />} />
        <Route path="/it-guidelines/community" element={<CommunityPage />} />
        <Route path="/it-guidelines/organisation" element={<OrganisationPage />} />
        <Route path="/it-guidelines/security" element={<SecurityPage />} />
        <Route path="/it-guidelines/new-project" element={<NewProjectPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default withTranslation()(App);

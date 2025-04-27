// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function SecurityPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('security_page.title')}</title>
  </Helmet>
  <NavLocation>{`${t('it_guidelines_page.title')} - ${t('security_page.title')}`}</NavLocation>
  
    <h1><FontAwesomeIcon icon={faLock} /> {t('security_page.title')}</h1>
    <p>
      <ul>
        <li>{t('security_page.one')}</li>
        <li>{t('security_page.two')}</li>
        <li>{t('security_page.three')}</li>
        <li>{t('security_page.four')}</li>
        <li>{t('security_page.five')}</li>
        <li>{t('security_page.six')}</li>
        <li>{t('security_page.seven')}</li>
        <li>{t('security_page.eight')}</li>
        <li>{t('security_page.nine')}</li>
        <li>{t('security_page.ten')}</li>
      </ul>
    </p>
    <Link to="/it-guidelines">{t('back')}</Link>
  </MainContainer>
}

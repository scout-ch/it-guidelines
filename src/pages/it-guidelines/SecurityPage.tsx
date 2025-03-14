// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation, Ul } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default function SecurityPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('security_page.title')}</title>
  </Helmet>
  <NavLocation>{`${t('it_guidelines_page.title')} - ${t('security_page.title')}`}</NavLocation>
  
    <h1><FontAwesomeIcon icon={faLock} /> {t('security_page.title')}</h1>
    <p>
      <Ul>
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
      </Ul>
    </p>
  </MainContainer>
}

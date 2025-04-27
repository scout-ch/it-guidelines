// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function CommunityPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('community_page.title')}</title>
  </Helmet>
  <NavLocation>{`${t('it_guidelines_page.title')} - ${t('community_page.title')}`}</NavLocation>
    <h1><FontAwesomeIcon icon={faUsers} /> {t('community_page.title')}</h1>
    <p>
      {t('community_page.intro')}
      <ul>
        <li>{t('community_page.one')}</li>
        <li>{t('community_page.two')}</li>
      </ul>
    </p>
    <p>
      {t('community_page.intro2')}
      <ul>
        <li>{t('community_page.three')}</li>
        <li>{t('community_page.four')}</li>
      </ul>
    </p>
    <Link to="/it-guidelines">{t('back')}</Link>
  </MainContainer>
}

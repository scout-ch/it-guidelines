// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation, Ul } from '../../App'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

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
      <Ul>
        <li>{t('community_page.one')}</li>
        <li>{t('community_page.two')}</li>
      </Ul>
    </p>
    <p>
      {t('community_page.intro2')}
      <Ul>
        <li>{t('community_page.three')}</li>
        <li>{t('community_page.four')}</li>
      </Ul>
    </p>
  </MainContainer>
}

// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { Box, Infobox, MainContainer } from '../App'
import { useTranslation } from 'react-i18next'
import {
  Link,
} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import completionContentDe from './completion/completion-content.de.md?raw';
import completionContentFr from './completion/completion-content.fr.md?raw';
import i18n from '../i18n';


export default function CompletionPage() {
  const { t } = useTranslation()
  const [markdown, setMarkdown] = useState(i18n.language === 'fr' ? completionContentFr : completionContentDe);

  useEffect(() => {
    setMarkdown(i18n.language === 'fr' ? completionContentFr : completionContentDe);
  }, [i18n.language]);

  return <MainContainer>
  <Helmet>
    <title>{t('completion_page.title')}</title>
  </Helmet>
    <h1>{t('completion_page.title')}</h1>
    <p>{t('completion_page.introduction')}</p>
    <Infobox>
      <Link to="/completion/tbd">{t('completion_page.complete_project')}</Link>
    </Infobox>
    
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>

    <Box>
      <div>
        <h3>{t('completion_page.downloads')}</h3>
        <ul>
          {/* <li><A href={'/docs/guidelines_de.pdf'} download>Hilfsblatt DE</A></li>
          <li><A href={'/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li> */}
        </ul>
      </div>
    </Box>

  </MainContainer>
}

// import styled from '@emotion/styled'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Infobox, MainContainer, Ul } from '../App'
import { useTranslation } from 'react-i18next'
import {
  Link,
} from "react-router-dom";


export default function CompletionPage() {
  const { t } = useTranslation()

  return <MainContainer>
  <Helmet>
    <title>{t('completion_page.title')}</title>
  </Helmet>
    <h1>{t('completion_page.title')}</h1>
    <p>{t('completion_page.introduction')}</p>
    <Infobox>
      <Link to="/completion/tbd">{t('completion_page.complete_project')}</Link>
    </Infobox>
    <p>
      Die vorliegenden Grundsätze fokussieren sich auf folgende zentrale Aspekte des Abschlusses von IT-Projekten: 
      <ul>
        <li>Leitlinien zur Sicherstellung der im Projekt erstellten Artefakte</li>
        <li>Diese Leitlinien definieren, wie sicherzustellen ist, dass alle erstellten Dokumentationen, Quellcodes, technischen Spezifikationen und weiteren Projektergebnisse vollständig und in geeigneter Form verfügbar bleiben. Dies umfasst sowohl die ordnungsgemäße Archivierung als auch den Zugriff durch berechtigte Parteien. </li>
        <li>Wissenssicherung und Übergabe in den Betrieb</li>
        <li>Gewährleistung eines sicheren Betriebes der Lösung</li>
      </ul>

      Ein erfolgreicher Projektabschluss erfordert eine umfassende Wissensübergabe an den Betrieb. Hierbei ist sicherzustellen, dass alle relevanten Projektbeteiligten, insbesondere die Betriebsteams, über das notwendige Wissen zur fortlaufenden Wartung und Weiterentwicklung
    </p>
    <div>
      <h2>{t('completion_page.content')}</h2>
      <ul>
        <li>Allgmeines</li>
        <ul>
          <li>Lifecycle-Überlegungen</li>
          <li>Stakeholder</li>
          <li>Spezifische Rollen definieren</li>
        </ul>
        <li>Betrieb</li>
        <ul>
          <li>Betriebskosten Budget / Ressourcen klären</li>
          <li>Wartungskosten Budget</li>
          <li>Sicherheit / Geschäftskritikalität</li>
        </ul>
        <li>Organisatorisches</li>
      </ul>
    </div>

    <Box>
      <div>
        <h3>{t('completion_page.downloads')}</h3>
        <Ul>
          {/* <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_de.pdf'} download>Hilfsblatt DE</A></li> */}
          {/* <li><A href={process.env.PUBLIC_URL + '/docs/guidelines_fr.pdf'} download>Lignes directrices FR</A></li> */}
        </Ul>
      </div>
    </Box>

  </MainContainer>
}

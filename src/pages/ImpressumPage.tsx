import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import { MainContainer } from '../App'

export default function ImpressumPage() {
  const { t } = useTranslation()

  return <MainContainer>
    <Helmet>
      <title>{t('impressum_page.title')}</title>
    </Helmet>
    <h1>{t('impressum_page.title')}</h1>
    <table>
      <thead>
        <tr>
          <th>Original:</th>
          <th>IT-Richtlinien / Lignes directrices IT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ausgabe:</td>
          <td>Version 16, 2021</td>
        </tr>
        <tr>
          <td>Referenznummer / Référence MSdS:</td>
          <td>1072.01.de / 1072.01.fr </td>
        </tr>
        <tr>
          <td>Referenznummer / Responsable:</td>
          <td>IT-Kommission (ITKom) / Commission informatique (CoIT) </td>
        </tr>
        <tr>
          <td>Copyright:</td>
          <td>Pfadibewegung Schweiz, Speichergasse 31, 3011 Bern</td>
        </tr>
      </tbody>
    </table>

  </MainContainer >
}

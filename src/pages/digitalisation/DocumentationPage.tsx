// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation, Ul } from '../../App'
import { useTranslation } from 'react-i18next'


export default function DocumentationPage() {
  const { t } = useTranslation()

  return <MainContainer>
    <Helmet>
      <title>{t('documentation_page.title')}</title>
    </Helmet>
    <NavLocation>{`${t('it_guidelines_page.title')} - ${t('documentation_page.title')}`}</NavLocation>

    <h1>{t('documentation_page.title')}</h1>
    <p>{t('documentation_page.introduction')}</p>

    <h2>Digitaler Nutzen</h2>
    <Ul>
      <li>Welche konkreten Mehrwerte entstehen durch die Digitalisierung? Bietet die digitale Version einen Mehrwert, oder ist sie nur optisch ansprechend, aber nicht funktional besser?</li>
      <li>Kann ein komplexes Format (z.B. Video) durch einfachere Alternativen wie eine Bildergalerie ersetzt werden?</li>
      <li>Ist ein hybrider Ansatz sinnvoll (z.B. QR-Codes oder Links, die zu digitalen Inhalten führen)?</li>
      <li>Gibt es Best Practices oder bereits bestehende Lösungen, die als Vorbild dienen können?</li>
      <li>Wie wirkt sich der Digitalisierungsgrad auf die Nachhaltigkeit aus?</li>
    </Ul>

    <h2>Interaktionen</h2>
    <Ul>
      <li>Sind Interaktionen geplant? Wie intensiv sollen die Nutzer*innen einbezogen werden (z.B. Kommentarfunktionen, Foren)?</li>
      <li>Wie garantieren wir, dass die Inhalte sicher und sauber bleiben? Wer übernimmt die Überwachung und wie werden problematische Inhalte gemanagt?</li>
      <li>Wie lassen sich Interaktionen sinnvoll steuern, um ein positives Nutzer*innenerlebnis zu schaffen?</li>
      <li>Wie wird die längerfristige Moderation sichergestellt?</li>
      <li>Ist das Projekt längerfristig budgetiert, damit eine professionelle Moderation sichergestellt ist?</li>
    </Ul>

    <h2>Anwender*innen</h2>
    <Ul>
      <li>Wird das Tool in Gruppenarbeit oder Einzelarbeit genutzt?</li>
      <li>Wie viele Geräte sind vorhanden, und können alle gleichzeitig zugreifen?</li>
      <li>Wie sind die Altersstruktur und Durchmischung der Gruppe? Gibt es unterschiedliche Bedürfnisse je nach Altersgruppe?</li>
      <li>Wer soll das Tool nutzen? Welche spezifischen Anforderungen und Erwartungen hat diese Zielgruppe?</li>
      <li>Werden Anleitungen benötigt (z.B. Videos)? Sind diese nur zu Beginn wichtig oder ständig erforderlich?</li>
      <li>Welche Anwendungskenntnisse hat die Zielgruppe? Einteilung nach Erfahrungsgrad: <br />Wolf: Keine Vorkenntnisse<br />
        Pfadis/Pios: Grundkenntnisse vorhanden<br />
        Rover: Umfangreiche Erfahrung, kennen sich mit der Technik aus</li>
      <li>Welche Ressourcen stehen zur Verfügung (z.B. IT-Kapazitäten, Schulungen)?</li>
      <li>Steht der Zeitaufwand für die Einführung bzw. Einarbeitung im Verhältnis zum Nutzen? Welche Anforderungen und Erwartungen haben die Nutzer*innen an das System?</li>
      <li>Wie wird die Akzeptanz und Zufriedenheit der Anwender*innen sichergestellt?</li>
    </Ul>

    <h2>Verfügbarkeit</h2>
    <Ul>
      <li>Haben alle in der Gruppe die gleichen Bedingungen für den Zugriff (z.B. drin- nen/draussen, Internetverbindung)?</li>
      <li>Wenn mehrere Personen gleichzeitig ein Video schauen, wird eine ausreichende Inter- netbandbreite benötigt. Ist das gewährleistet?</li>
      <li>Muss das Tool auf verschiedenen Bildschirmgrössen funktionieren (Responsive Design)? Wie gut ist die mobile Nutzbarkeit (z.B. auf Smartphones)?</li>
      <li>Braucht man für die Anwendung Internetzugriff?</li>
      <li>Wie gut lässt sich das Tool in die bestehende IT-Landschaft integrieren? Wende dich da- für an die ITKom und schau in den IT-Richtlinien nach.</li>
      <li>Gibt es Schnittstellen zu anderen Systemen, die zwingend notwendig sind?</li>
      <li>Welche Abhängigkeiten bestehen hinsichtlich der Verfügbarkeit von Drittanbietern oder externen Systemen? (Cloud-Services, externe Datenquellen)</li>
      <li>Wie schnell und flexibel kann bzw. muss auf Änderungen oder Ausfälle reagiert werden?</li>
    </Ul>

    <h2>Barrierefreiheit</h2>
    <p>Digitale Inhalte können Barrierefreiheit unterstützen, indem rein digitale Inhalte die Standards einhalten oder indem digitale Zusatzinhalte gedruckte Inhalte zugänglicher machen.</p>
    <Ul>
      <li>Können digitale Inhalte euer Projekt barrierefreier zugänglich machen?</li>
      <li>Verwendet ihr gut lesbare Schriften in lesbarer Grösse?</li>
      <li>Haben eure Inhalte genügend Kontrast? Ihr könnt dies z.B. mit Tools wie dem Colour Contrast Analyser testen.</li>
      <li>Eignen sich eure digitalen Inhalte für einen Screenreader? Ihr könnt dies z.B. mit einem Bookmarklet wie h123 testen.</li>
      <li>Haben eure digital verwendeten Grafiken einen ALT-Text?</li>
      <li>Sind eure Diagramme und ähnliche Inhalte auch bei Farbblindheit lesbar?</li>
      <li>Haben eure Videos Untertitel?</li>
    </Ul>
    <p>Eine Sammlung der Barrierefreiheit-Anforderungen findet ihr in dieser Checkliste.</p>

    <h2>Wartung und Pflege, Kosten, Externe</h2>
    <Ul>
      <li>Könnt ihr die Inhalte selbst anpassen oder braucht es Externe für jede Korrektur?</li>
      <li>Wie häufig müssen die Inhalte aktualisiert werden?</li>
      <li>Fallen für die Aktualisierung von Inhalten Kosten an?</li>
      <li>Gibt es eine verantwortliche Person für die Pflege der Inhalte, die das Projekt überdau- ert? Braucht es spezielles Wissen, um die Inhalte zu pflegen?</li>
      <li>Wie schnell müssen Ausfälle behoben werden können?</li>
      <li>Braucht es ein SLA (Service Level Agreement = Dienstleistungsvertrag), der Punkte wie die Ausfallsicherheit regelt?</li>
      <li>Braucht euer Projekt eine Anbindung an MiData?</li>
    </Ul>

    <h2>Datenschutz</h2>
    <Ul>
      <li> Welche Daten sammelt ihr und wie schützenswert sind diese? Auf der Datenschutzseite der PBS findet ihr viele Informationen zu diesem Thema.</li>
      <li>Sammelt ihr nur die für das Projekt benötigen Daten? In der Datenschutz-Checkliste der PBS hat es Tipps, wie ihr die Datenmenge reduzieren könnt.</li>
      <li>Wo stehen die Server, auf denen eure Daten liegen?</li>
      <li>Könnt ihr sicherstellen, dass Daten auf Anfrage gelöscht werden können? Mehr zu die- sen Anforderungen findet ihr im Merkblatt Datenauskunft der PBS.</li>
      <li>Fallen die Inhalte des Projekts unter das Schweizer Datenschutzgesetz? Jede Web- seite braucht beispielsweise ein Impressum, eine Datenschutzerklärung (ihr könnt die Vorlage der PBS anpassen) und muss zur Sammlung von Cookies um Erlaubnis bitten (siehe dazu das Merkblatt Einverständnis und Banner der PBS).</li>
      <li>Habt ihr die Rechte für verwendete Bilder abgeklärt und haben die Personen, die auf den Bildern zu sehen sind, der Verwendung zugestimmt? Im Merkblatt Recht am Bild der PBS findet ihr mehr Informationen über das Fotografieren und Abbilden von Personen. Weitere Informationen liefert euch die Broschüre Öffentlichkeitsarbeit in der Pfadi.</li>
      <li>Es ist wichtig, dass ihr die Anforderungen des Schweizer Datenschutzgesetzes erfüllt. Wenn ihr euch unsicher seid, meldet euch unter datenschutz@pbs.ch.</li>
    </Ul>

  </MainContainer>
}

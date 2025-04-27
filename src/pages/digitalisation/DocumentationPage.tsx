// import styled from '@emotion/styled'

import { Helmet } from 'react-helmet'
import { MainContainer, NavLocation } from '../../App'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

export default function DocumentationPage() {
  const { t } = useTranslation()
  const lang = i18n.language

  return <MainContainer>
    <Helmet>
      <title>{t('documentation_page.title')}</title>
    </Helmet>
    <NavLocation>{`${t('it_guidelines_page.title')} - ${t('documentation_page.title')}`}</NavLocation>

    <h1>{t('documentation_page.title')}</h1>
    <p>{t('documentation_page.introduction')}</p>

    {lang == 'fr' ? contentFr() : contentDe()}

  </MainContainer>

  function contentFr() {
    return <div>
      <h2>Avantages de la numérisation</h2>
      <ul>
        <li>Quelle est la valeur ajoutée concrète apportée par la numérisation ? La version numérique offre-t-elle une plus-value ou est-elle seulement visuellement attrayante, mais pas fonctionnellement meilleure ?</li>
        <li>Un format complexe (par ex : vidéo) peut-il être remplacé par des alternatives plus simples comme une galerie d’images ?</li>
        <li>Une approche hybride est-elle pertinente (par ex : des QR codes ou des liens menant à des contenus numériques) ?</li>
        <li>Existe-t-il des meilleures pratiques ou des solutions déjà existantes qui peuvent servir de modèle ?</li>
        <li>Quel est l’impact du degré de numérisation sur la durabilité ?</li>
      </ul>

      <h2>Interactions</h2>
      <ul>
        <li>Des interactions sont-elles prévues ? Avec quelle intensité les utilisateur·ice·s doivent-iels être impliqué·e·s (par ex : fonctions de commentaires, forums) ?</li>
        <li>Comment garantissons-nous que les contenus restent sûrs et propres ? Qui se charge de la surveillance et comment les contenus problématiques sont-ils gérés ?</li>
        <li>Comment les interactions peuvent-elles être gérées de manière judicieuse afin de créer une expérience utilisateur positive ?</li>
        <li>Comment la modération sur le long terme est-elle assurée ?</li>
        <li>Le projet est-il budgétisé sur le long terme afin de garantir une modération professionnelle ?</li>
      </ul>

      <h2>Utilisateur·ice·s</h2>
      <ul> 
        <li>L’outil est-il utilisé dans le cadre d’un travail de groupe ou d’un travail individuel ?</li>
        <li>Combien d’appareils sont disponibles et peuvent-ils tous être utilisés en même temps ?</li>
        <li>Quelle est la structure d’âge et la mixité du groupe ? Y a-t-il des besoins différents selon le groupe d’âge ?</li>
        <li>Qui doit utiliser l’outil ? Quelles sont les exigences et les attentes spécifiques de ce groupe cible ?</li>
        <li>Des instructions sont-elles nécessaires (par ex : des vidéos) ? Sont-elles importantes uniquement au début ou sont-elles nécessaires en permanence ?</li>
        <li>Quelles sont les connaissances d’utilisation du groupe cible ? Classement selon le niveau d’expérience :</li>
        <ul>
          <li>Louveteaux: Aucune connaissance préalable</li>
          <li>Eclais/Picos: Connaissances de base existantes</li>
          <li>Routier: Expérience étendue, connaissent la technique</li>
        </ul>
        <li>Quelles sont les ressources disponibles (par ex : capacités informatiques, formations) ?</li>
        <li>Le temps nécessaire à l’introduction ou à la formation est-il proportionnel à l’utilité ?</li>
        <li>Quelles sont les exigences et les attentes des utilisateur·ice·s vis-à-vis du système ?</li>
        <li>Comment l’acceptation et la satisfaction des utilisateur·ice·s sont-elles assurées ?</li>
      </ul>

      <h2>Disponibilité</h2>
      <ul>
        <li>Tou·te·s les membres du groupe bénéficient-iels des mêmes conditions d’accès (par ex : intérieur/extérieur, connexion internet) ?</li>
        <li>Si plusieurs personnes regardent une vidéo en même temps, une bande passante internet suffisante est nécessaire. Cela est-il garanti ?</li>
        <li>L’outil doit-il fonctionner sur différentes tailles d’écran (Responsive Design) ? Quelle est la qualité de l’utilisation mobile (par ex : sur les smartphones) ?</li>
        <li>L’application nécessite-elle un accès à Internet ?</li>
        <li>L’outil s’intègre-t-il bien dans l’environnement informatique existant ? Adresse-toi pour cela à la ComIT et consulte les directives informatiques.</li>
        <li>Y a-t-il des interfaces avec d’autres systèmes qui sont absolument nécessaires ?</li>
        <li>Quelles sont les dépendances par rapport à la disponibilité de fournisseurs tiers ou de systèmes externes ? (Services cloud, sources de données externes)</li>
        <li>Avec quelle rapidité et quelle flexibilité peut-on ou doit-on réagir aux modifications ou aux pannes ?</li>
      </ul>

      <h2>Accessibilité</h2>
      <p>
        Les contenus numériques peuvent soutenir l’accessibilité en respectant les normes des contenus purement numériques ou en rendant les contenus imprimés plus accessibles grâce à des contenus numériques supplémentaires.
      </p>
      <ul>
        <li>Le contenu numérique peut-il rendre votre projet plus accessible ?</li>
        <li>Utilisez-vous des polices de caractères faciles à lire et de taille lisible ?</li>
        <li>Vos contenus sont-ils suffisamment contrastés ? Vous pouvez le tester à l’aide d’outils tels que <a target='_blank' href='https://www.accessibility-developer-guide.com/setup/helper-tools/colour-contrast-analyser/'>Colour Contrast Analyser</a>.</li>
        <li>Vos contenus numériques sont-ils adaptés à un lecteur d’écran ? Vous pouvez le tester par exemple avec un Bookmarklet comme <a href='https://www.accessibility-developer-guide.com/setup/helper-tools/bookmarklets/h123/' target='_blank'>h123</a>.</li>
        <li>Vos graphiques numériques ont-ils un texte ALT ?</li>
        <li>Vos diagrammes et autres contenus sont-ils lisibles pour les daltonien·ne·s ?</li>
        <li>Vos vidéos ont-elles des sous-titres ?</li>
      </ul>
      <p>Vous trouverez un recueil des exigences en matière d’accessibilité dans cette checklist.</p>

      <h2>Maintenance et entretien, coûts, externes</h2>
      <ul>
        <li>Pouvez-vous adapter les contenus vous-même ou faut-il faire appel à des externes pour chaque correction ?</li>
        <li>À quelle fréquence les contenus doivent-ils être mis à jour ?</li>
        <li>La mise à jour des contenus est-elle payante ?</li>
        <li>Y a-t-il une personne responsable de la maintenance des contenus qui survive au projet ? Faut-il des connaissances spécifiques pour mettre à jour les contenus ?</li>
        <li>Dans quel délai les pannes doivent-elles pouvoir être résolues ?</li>
        <li>Faut-il un SLA (Service Level Agreement = contrat de service) qui règle des points tels que la sécurité en cas de panne ?</li>
        <li>Votre projet a-t-il besoin d’une connexion à MiData ?</li>
      </ul>
      
      <h2>Protection des données</h2>
      <ul>
        <li>Quelles sont les données que vous collectez et dans quelle mesure doivent-elles être protégées ? Vous trouverez de nombreuses informations à ce sujet sur la page <a href='https://pfadi.swiss/fr/association/protection-des-donnees/' target='_blank'>protection des données du MSdS</a>.</li>
        <li>Ne collectez-vous que les données nécessaires au projet ? Dans  <a href='https://pfadi.swiss/media/files/66/dse_checklist_fr.pdf' target='_blank'>la checklist</a> sur la protection des données du MSdS, vous trouverez des conseils pour réduire la quantité de données.</li>
        <li>Où se trouvent les serveurs sur lesquels vos données sont stockées ?</li>
        <li>Pouvez-vous garantir que les données peuvent être effacées sur demande ? Vous trouverez plus d’informations sur ces exigences dans la <a href='https://pfadi.swiss/media/files/ad/merkblatt_-_datenauskunft_fr.pdf' target='_blank'>fiche d’information sur les données</a> du MSdS.</li>
        <li>Le contenu du projet est-il soumis à la <a href='https://youtu.be/jXjSGKIwcDU' target='_blank'>loi suisse sur la protection des données</a> ? Chaque site internet a par exemple besoin d’un Impressum, d’une déclaration de protection des données (vous pouvez adapter le <a href='https://pfadi.swiss/fr/association/protection-des-donnees/dpd/' target='_blank'>modèle du MSdS</a>) et doit demander l’autorisation de collecter des cookies (voir à ce sujet la <a href='https://pfadi.swiss/media/files/15/einverstandnis_webseite_fr.pdf' target='_blank'>fiche d’information accord et bannières</a> du MSdS).</li>
        <li>Avez-vous vérifié les droits des images utilisées et les personnes qui apparaissent sur les images ont-elles donné leur accord pour utilisation ? Dans <a href='https://pfadi.swiss/media/files/15/802202fr_aide_memoire_drot_a_limage.pdf' target='_blank'>la fiche d’information Droit à l’image</a> du MSdS, vous trouverez plus d’informations sur la prise de photos et la représentation de personnes. <a href='https://pfadi.swiss/media/files/92/cudesch_oeffentlichtkeitsarbeit_2022_f.pdf' target='_blank'>La brochure Relations Publiques dans le scoutisme</a> vous fournit de plus amples informations.</li>
        <li>Il est important que vous respectiez les exigences de la loi suisse sur la protection des données. Si vous n’êtes pas sûr·e·s, contactez datenschutz@pbs.ch.</li>
      </ul>
    </div>
  }

  function contentDe() {
    return <div>
      <h2>Digitaler Nutzen</h2>
      <ul>
        <li>Welche konkreten Mehrwerte entstehen durch die Digitalisierung? Bietet die digitale Version einen Mehrwert, oder ist sie nur optisch ansprechend, aber nicht funktional besser?</li>
        <li>Kann ein komplexes Format (z.B. Video) durch einfachere Alternativen wie eine Bildergalerie ersetzt werden?</li>
        <li>Ist ein hybrider Ansatz sinnvoll (z.B. QR-Codes oder Links, die zu digitalen Inhalten führen)?</li>
        <li>Gibt es Best Practices oder bereits bestehende Lösungen, die als Vorbild dienen können?</li>
        <li>Wie wirkt sich der Digitalisierungsgrad auf die Nachhaltigkeit aus?</li>
      </ul>

      <h2>Interaktionen</h2>
      <ul>
        <li>Sind Interaktionen geplant? Wie intensiv sollen die Nutzer*innen einbezogen werden (z.B. Kommentarfunktionen, Foren)?</li>
        <li>Wie garantieren wir, dass die Inhalte sicher und sauber bleiben? Wer übernimmt die Überwachung und wie werden problematische Inhalte gemanagt?</li>
        <li>Wie lassen sich Interaktionen sinnvoll steuern, um ein positives Nutzer*innenerlebnis zu schaffen?</li>
        <li>Wie wird die längerfristige Moderation sichergestellt?</li>
        <li>Ist das Projekt längerfristig budgetiert, damit eine professionelle Moderation sichergestellt ist?</li>
      </ul>

      <h2>Anwender*innen</h2>
      <ul>
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
      </ul>

      <h2>Verfügbarkeit</h2>
      <ul>
        <li>Haben alle in der Gruppe die gleichen Bedingungen für den Zugriff (z.B. drin- nen/draussen, Internetverbindung)?</li>
        <li>Wenn mehrere Personen gleichzeitig ein Video schauen, wird eine ausreichende Inter- netbandbreite benötigt. Ist das gewährleistet?</li>
        <li>Muss das Tool auf verschiedenen Bildschirmgrössen funktionieren (Responsive Design)? Wie gut ist die mobile Nutzbarkeit (z.B. auf Smartphones)?</li>
        <li>Braucht man für die Anwendung Internetzugriff?</li>
        <li>Wie gut lässt sich das Tool in die bestehende IT-Landschaft integrieren? Wende dich da- für an die ITKom und schau in den IT-Richtlinien nach.</li>
        <li>Gibt es Schnittstellen zu anderen Systemen, die zwingend notwendig sind?</li>
        <li>Welche Abhängigkeiten bestehen hinsichtlich der Verfügbarkeit von Drittanbietern oder externen Systemen? (Cloud-Services, externe Datenquellen)</li>
        <li>Wie schnell und flexibel kann bzw. muss auf Änderungen oder Ausfälle reagiert werden?</li>
      </ul>

      <h2>Barrierefreiheit</h2>
      <p>Digitale Inhalte können Barrierefreiheit unterstützen, indem rein digitale Inhalte die Standards einhalten oder indem digitale Zusatzinhalte gedruckte Inhalte zugänglicher machen.</p>
      <ul>
        <li>Können digitale Inhalte euer Projekt barrierefreier zugänglich machen?</li>
        <li>Verwendet ihr gut lesbare Schriften in lesbarer Grösse?</li>
        <li>Haben eure Inhalte genügend Kontrast? Ihr könnt dies z.B. mit Tools wie dem <a target='_blank' href='https://www.accessibility-developer-guide.com/setup/helper-tools/colour-contrast-analyser/'>Colour Contrast Analyser</a> testen.</li>
        <li>Eignen sich eure digitalen Inhalte für einen Screenreader? Ihr könnt dies z.B. mit einem Bookmarklet wie <a href='https://www.accessibility-developer-guide.com/setup/helper-tools/bookmarklets/h123/' target='_blank'>h123</a> testen.</li>
        <li>Haben eure digital verwendeten Grafiken einen ALT-Text?</li>
        <li>Sind eure Diagramme und ähnliche Inhalte auch bei Farbblindheit lesbar?</li>
        <li>Haben eure Videos Untertitel?</li>
      </ul>
      <p>Eine Sammlung der Barrierefreiheit-Anforderungen findet ihr in dieser Checkliste.</p>

      <h2>Wartung und Pflege, Kosten, Externe</h2>
      <ul>
        <li>Könnt ihr die Inhalte selbst anpassen oder braucht es Externe für jede Korrektur?</li>
        <li>Wie häufig müssen die Inhalte aktualisiert werden?</li>
        <li>Fallen für die Aktualisierung von Inhalten Kosten an?</li>
        <li>Gibt es eine verantwortliche Person für die Pflege der Inhalte, die das Projekt überdauert? Braucht es spezielles Wissen, um die Inhalte zu pflegen?</li>
        <li>Wie schnell müssen Ausfälle behoben werden können?</li>
        <li>Braucht es ein SLA (Service Level Agreement = Dienstleistungsvertrag), der Punkte wie die Ausfallsicherheit regelt?</li>
        <li>Braucht euer Projekt eine Anbindung an MiData?</li>
      </ul>

      <h2>Datenschutz</h2>
      <ul>
        <li> Welche Daten sammelt ihr und wie schützenswert sind diese? Auf der <a href='https://pfadi.swiss/de/verband/datenschutz/' target='_blank'>Datenschutzseite der PBS</a> findet ihr viele Informationen zu diesem Thema.</li>
        <li>Sammelt ihr nur die für das Projekt benötigen Daten? In der <a href='https://pfadi.swiss/media/files/4b/dse_checklist_de.pdf' target='_blank'>Datenschutz-Checkliste</a> der PBS hat es Tipps, wie ihr die Datenmenge reduzieren könnt.</li>
        <li>Wo stehen die Server, auf denen eure Daten liegen?</li>
        <li>Könnt ihr sicherstellen, dass Daten auf Anfrage gelöscht werden können? Mehr zu diesen Anforderungen findet ihr im <a href='https://pfadi.swiss/media/files/df/merkblatt_-_datenauskunft_de.pdf' target='_blank'>Merkblatt Datenauskunft</a> der PBS.</li>
        <li>Fallen die Inhalte des Projekts unter <a href='https://www.youtube.com/watch?v=wMg5dahdWFM'>das Schweizer Datenschutzgesetz</a>? Jede Webseite braucht beispielsweise ein Impressum, eine Datenschutzerklärung (ihr könnt <a href='https://pfadi.swiss/de/verband/datenschutz/dse/' target='_blank'>die Vorlage</a> der PBS anpassen) und muss zur Sammlung von Cookies um Erlaubnis bitten (siehe dazu das <a href='https://pfadi.swiss/media/files/70/einverstandnis_webseite_de.pdf' target='_blank'>Merkblatt Einverständnis und Banner</a> der PBS).</li>
        <li>Habt ihr die Rechte für verwendete Bilder abgeklärt und haben die Personen, die auf den Bildern zu sehen sind, der Verwendung zugestimmt? Im <a href='https://pfadi.swiss/media/files/61/802202de_merkblatt_recht_am_bild.pdf' target='_blank'>Merkblatt Recht am Bild</a> der PBS findet ihr mehr Informationen über das Fotografieren und Abbilden von Personen. Weitere Informationen liefert euch die <a href='https://pfadi.swiss/media/files/ec/cudesch_oeffentlichtkeitsarbeit_2022_d.pdf' target='_blank'>Broschüre Öffentlichkeitsarbeit</a> in der Pfadi.</li>
        <li>Es ist wichtig, dass ihr die Anforderungen des Schweizer Datenschutzgesetzes erfüllt. Wenn ihr euch unsicher seid, meldet euch unter datenschutz@pbs.ch.</li>
      </ul>
    </div>
  }
}

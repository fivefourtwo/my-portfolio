
---
*Seite 1*


1


---
*Seite 2*


AI-gestütztes Tool zur Katalogisierung und Vewaltung von Musikbibliotheken für DJs


Studierende Jannik Aßfalg Fabrice Rio


Betreuer Prof. David Oswald Prof. Michael Schuster


Bachelor Interaktionsgestaltung SS 2025/2025


2 3


---
*Seite 3*


Inhaltsverzeichnis


Inhaltsverzeichnis


01 Einführung


05 Prototyping & Validation


Projektkontext


8


130


Projektplanung


12


136


Tools zur Planung und Umsetzung


14


140


Entwicklungsprozess  Framework  Fortgeschrittener Prototyp  Testergebnisse und Erkenntnisse


142


02 Recherche


06 Visual Design


Interviews


18


146


Personas


24


148


User Journey


30


150


Pain Points


42


152


How Might We‘s


48


Color Guide  Typografie  Design Filters  Komponenten  Finale Screens


158


Organisationstechniken


50


Zielgruppendefinition


52


Marktanalyse


56


07 Evaluation & Ausblick


160


03 Konzeption


Reflexion Ausblick


164


Kano-Modell


66


Metadaten


72


Grundlagen der KI-Musikklassifizierung


74


07 Evaluation & Ausblick


Mentale Modelle der Klassifizierung


82


168


Wireframes


84


170


174


175


04 Finales Konzept


176


Abbildungsverzeichnis Quellenverzeichnis Musikverzeichnis Danksagung  Anmerkungen  Eidesstattliche Versicherung


177


Standalone App


88


Trackanalyse


90


KI als Werkzeug


92


Adaptives Tagging


93


Tagkategorien


94


Aufbau mentaler Modelle


96


Exploration der Musikbibliothek


98


Organisationsebenen


106


Datenbank


122


Filtermechanismen


124


Nutzung nach der Organisation


126


4 5


---
*Seite 4*


6 7


---
*Seite 5*


01 Einführung


01 Einführung


Projektkontext


Projektkontext


Die unsichtbare Arbeit des  DJing


Es ist 2 Uhr morgens im Club. Die Tanzfläche ist voller Menschen,  der Bass ist zu spüren, die Stimmung erreicht ihren Höhepunkt.  Der DJ meistert einen Übergang nach dem anderen, liest die  Crowd und baut geschickt Spannung auf. Was das Publikum nicht  sieht: die stundenlange Vorbereitung, die diesen Moment erst  möglich macht.


Abstract Die digitale Revolution veränderte das DJing fundamental. Wo früher physische Plattensammlungen natürliche Grenzen  setzten, haben DJs heute Zugriff auf praktisch unbegrenzte Musik­ mengen. Diese Fülle bringt neue Möglichkeiten, schafft aber auch  ein Paradoxon: Je mehr Musik verfügbar ist, desto schwieriger  wird es, den Überblick zu behalten und im entscheidenden Mo­ ment den perfekten Track zu finden.


Die eigentliche Arbeit passiert zu Hause - das Durchhören neuer  Releases, das Kategorisieren von Tracks, das Erstellen von Play­ lists. Die Digitalisierung verschärfte dieses Problem. Früher pass­ ten auf eine Plattentasche vielleicht 50 Scheiben. Heute tragen  DJs Festplatten mit 30.000+ Tracks zum Gig. Die schiere Menge  überfordert selbst erfahrene Profis.


Diese Arbeit dokumentiert die Entwicklung eines AI-gestützten  Tools zur Musikorganisation für DJs. Durch Interviews mit sechs  DJs unterschiedlicher Genres und Erfahrungsstufen identifizier­ ten wir ein zentrales Problem: DJs verbringen 5-10 Stunden pro  Woche mit manueller Musikorganisation. Zeit, die der Kreativität  fehlt. Bestehende DJ-Software fokussiert auf Live-Performance,  vernachlässigt aber die kritische Vorbereitungsphase.


Wenn Technologie zum  Hindernis wird


Rekordbox, Serato und Traktor bieten Features, von denen DJs  der 90er nur träumen konnten: automatische Beatgrids, Key-De­ tection, nahtlose Loops. Doch all diese Innovation konzentriert  sich auf den Moment der Performance. Die Organisation? Ein Stiefkind der Entwicklung.


Unser Ansatz nutzt künstliche Intelligenz nicht als Ersatz für  menschliche Kreativität, sondern als Werkzeug zur Befreiung  kreativer Energie. Das entwickelte System analysiert Musikdateien  automatisch, extrahiert über 400 Audio-Features und visualisiert  Musiksammlungen als navigierbare 2D-Landkarten. DJs behalten  dabei die volle kurative Kontrolle - das System schlägt vor, der  Mensch entscheidet.


KI als kreativer Assistent


Künstliche Intelligenz in der Musik weckt gemischte Gefühle.  Die Angst vor Automatisierung ist real. Unser System versteht  KI anders: nicht als Ersatz, sondern als Verstärker menschlicher  Fähigkeiten. Die entwickelte Lösung analysiert Tracks, extrahiert  musikalische Eigenschaften, erkennt Ähnlichkeiten. Aber sie trifft  keine Entscheidungen. Sie zeigt Möglichkeiten auf, sortiert vor,  macht Verbindungen sichtbar. Die kreative Kontrolle bleibt beim  Menschen.


8 9


---
*Seite 6*


01 Einführung


01 Einführung


Projektkontext


Projektkontext


DJ-Workflow


Dokumentationsstruktur


Unsere Forschung identifizierte einen fünfstufigen Kernwork­ flow, der alle DJ-Aktivitäten umfasst und einen kontinuierlichen  Kreislauf bildet:


Kapitel 2: Recherche  Detaillierte Auswertung der DJ-Interviews, Persona-Entwick­ lung, Marktanalyse bestehender Tools


Kapitel 3: Konzeption Technische Architektur, Feature-Priorisierung nach Kano-Modell,  Metadaten-Kategorisierung


Phase 1: Discovery/Digging Die Musikentdeckung steht am Anfang jeder DJ-Tätigkeit. DJs  nutzen verschiedene Quellen wie SoundCloud für kostenlose  Promotion-Tracks, Beatport und Bandcamp für Käufe, sowie  soziale Medien wie Instagram für Inspiration. Dieser Prozess ist  stark von persönlichen Netzwerken und kuratorischen Fähigkei­ ten geprägt.


Kapitel 4: Finales Konzept Systemarchitektur, AI-Pipeline, Interface-Design, Organisations­ ebenen


Kapitel 5: Prototyping & Validierung Zweiphasige Entwicklung vom MVP zum High-Fidelity-Prototyp,  Usability-Tests


Phase 2: Import & technische Analyse Neue Tracks müssen technisch analysiert werden. BPM-Er­ kennung, Tonart-Analyse und Wellenform-Generierung erfolgen  meist automatisch durch die DJ-Software. Problematisch wird  es bei der emotionalen und kontextuellen Bewertung der Musik.


Kapitel 6: Visual Design Dark Theme, Typografie, Komponenten-System, finale Screens


Kapitel 7: Evaluation & Ausblick   Erkenntnisse, Limitationen, mögliche Weiterentwicklung


Phase 3: Library-Verwaltung & Organisation Die Organisation der Musiksammlung erweist sich als zeitauf­ wändigste Phase. Tracks müssen kategorisiert, getaggt und in  sinnvolle Ordnungsstrukturen eingeordnet werden. Hier zeigen  sich die größten Schwächen aktueller Software-Lösungen.


Phase 4: Set-Planung & Vorbereitung Vor jedem Auftritt erfolgt eine mehr oder weniger detaillierte  Vorbereitung. Diese reicht von kompletten Setlists bis zu groben  thematischen Orientierungen, abhängig vom DJ-Stil und Anlass.


Projektziel Diese Arbeit zeigt, wie AI-Technologie konkrete Workflow-Prob­ leme von DJs lösen kann. Der entwickelte Prototyp demonst­ riert die Machbarkeit räumlicher Musikvisualisierung für große  Sammlungen. Die Erkenntnisse sind auf andere Bereiche der  Musikorganisation übertragbar.


Phase 5: Live-Performance Die Live-Performance ist der Moment, in dem sich die Qualität  der vorangegangenen Organisation zeigt. Spontane Entschei­ dungen erfordern schnellen Zugriff auf passende Tracks aus der  vorbereiteten Sammlung.


10 11


---
*Seite 7*


01 Einführung Projektplanung


Abb.1 Projektplanung


12 13


---
*Seite 8*


01 Einführung Tools zur Planung und Umsetzung


Für die erfolgreiche Planung und Umsetzung unseres Bache­ lor-Projekts haben wir eine Reihe von digitalen Werkzeugen  genutzt, die uns in verschiedenen Phasen des Arbeitsprozesses  unterstützt haben.


Zur Organisation und Aufgabenverwaltung diente uns Notion als  zentrale Plattform. Hier haben wir regelmäßig unsere Aufgaben  erfasst, geplant und den Fortschritt verfolgt. Das herunterbre­ chen zentraler Aufgaben in kleinere ToDos hat uns geholfen,  stets einen klaren Überblick zu behalten. Darüber hinaus nutz­ ten wir Notion für die kollaborative Erstellung von Textinhalten,  wie beispielsweise der Leitfäden für unsere Interviews und  Usability-Tests.


Die Kommunikation im Team und mit externen Partnern wurde  durch verschiedene Kanäle sichergestellt. Slack diente uns als  offizieller Kommunikationskanal, um mit unseren betreuen­ den Professoren in Kontakt zu treten. Für die schnelle interne  Absprache, Terminvereinbarungen und den unkomplizierten  Austausch mit unseren Interviewpartnern und DJs haben wir  WhatsApp verwendet.


Die visuelle Gestaltung aller Elemente wurde in Figma umge­ setzt. Für die Synthese unserer Forschungsergebnisse, wie das  Clustern von Erkenntnissen aus Interviews und anderen Re­ search-Methoden, haben wir Miro verwendet. Zur Erstellung des  funktionalen Prototyps wurde Cursor verwendet.


Abschließend wurde die gesamte Projektdokumentation mit  Adobe InDesign erstellt, um ein sauberes Druckergebnis zu ge­ währleisten.


14 15


---
*Seite 9*


16 17


---
*Seite 10*


02 Recherche


Interviews


Interviews mit Experten aus  unterschiedlichen Bereichen


Sechs DJs mit unterschiedlichen Profilen und Erfahrungsstufen  bildeten die Grundlage unserer user-zentrierten qualitativen  Forschung:


Abb. 2 Pino Pena Abb. 3 DJ Danik


Pino Peña (29, fortgeschritten)  14 Jahre Erfahrung, vielseitiger Stil von Techno und breakiger  Bassmusik bis Jazz, Hip-Hop und Reggae. Spielt in Clubs, bei  privaten Events und im Radio. Organisiert hauptsächlich über  iTunes, exportiert mit Rekordbox für Live-Sets.


DJ Danik (Event-DJ, semi-professionell) Hauptberuflich Speditionskaufmann, nebenbei DJ für Hochzei­ ten und Events. Fokus auf Discofox, Malle-Musik, 90er-Hits und  gelegentlich elektronische Musik. Nutzt Virtual DJ und organi­ siert nach Jahrzehnten.


Concussion (23, semi-professionell) 4-5 Jahre DJ-Erfahrung, 9-10 Jahre Produzent. Spezialisiert auf  klassischen Techno und Schranz. Nutzt Rekordbox und experi­ mentiert mit verschiedenen Organisationssystemen nach Artists.


Abb. 5 Townes


Abb. 4 Concussion


Townes (24, Vinyl-DJ) 7 Jahre Erfahrung (5 Jahre Vinyl-Only, 2 Jahre Hybrid). Semiprofessionell, legt hauptsächlich in Clubs auf. Fokus auf hy­ pnotic Techno mit Einflüssen aus House, Ambient und Breaks.  Arbeitet ausschließlich mit Vinyl über Discogs.


Polygonia (29, professionell) 7 Jahre Erfahrung, lebt von DJ- und Produktionstätigkeit. Spielt  in Clubs und auf Festivals. Vielseitiger Stil mit Techno, House,  Breakbeat, Bassmusik und psychedelischen Elementen. Nutzt  umfangreiches Tagging-System in Rekordbox.


Toobris (24, Club-DJ) 7 Jahre Erfahrung, spielt hauptsächlich in Clubs. Fokus auf  Techno mit starkem Groove. Nutzt Rekordbox mit detailliertem  Tag-System für Mood und Genre-Kategorisierung.


Abb. 6 Polygonia


Abb. 7 Toobris


18 19


---
*Seite 11*


02 Recherche


Interviews


02 Recherche Interviews


„Nach welchen Kriterien entscheidest du, ob ein


Aufbau des Leitfadens


neuer Track relevant für deine Sets ist?“


Um einen umfassenden Einblick in die zentralen Arbeitsbereiche  und Prozesse eines DJs zu gewinnen, wurde der Interviewleitfa­ den methodisch und chronologisch aufgebaut. Die Struktur folg­ te dem logischen Arbeitsablauf eines DJs – von der Entdeckung  neuer Musik bis hin zur Live-Performance. Dieser Aufbau stellte  sicher, dass wir ein ganzheitliches Verständnis für die einzelnen  Phasen entwickelten und die spezifischen Herausforderungen  sowie Bedürfnisse in jedem Schritt systematisch erfassten.


„Welche Herausforderungen begegnen dir am


häufigsten beim Digging-Prozess?“


Einstieg & Allgemeines Wir begannen mit allgemeinen Fragen zum Hintergrund des DJs.  Dies schuf eine gute Gesprächsbasis und lieferte wichtigen Kon­ text für seine späteren Antworten.


„Wie organisierst du aktuell deine Musikbibliothek?“


Digging-Prozess Anschließend fragten wir, wie neue Musik entdeckt und ausge­ wählt wird. Hier wollten wir die ersten Hürden und Frustrationen  im Workflow identifizieren.


„Hast du während des Auftritts Zugriff auf deine  komplette Musikbibliothek, oder arbeitest du mit


Vorbereitungsprozess Dieser Abschnitt behandelte die Organisation der Musikbiblio­ thek und die Set-Planung. Das Ziel war, organisatorische Proble­ me und zeitintensive Aufgaben aufzudecken.


vorbereiteten Playlists?“


Durchführung des Gigs Hier fokussierten wir uns auf die Live-Performance, um die  praktischen Herausforderungen zu verstehen, die während eines  Auftritts auftraten.


„Wenn du dir das ideale Tool zur Organisation deiner


Musikbibliothek vorstellen könntest – was müsste


es unbedingt können?“


Wünsche & Bedürfnisse Nachdem alle Prozesse besprochen worden waren, fragten wir  gezielt nach Ideen für zukünftige Lösungen und ideale Werk­ zeuge.


20 21


---
*Seite 12*


02 Recherche


Interviews


Ablauf der Interviews


Jedes Interview dauerte 45-90 Minuten und wurde remote über  Zoom durchgeführt. Die Gespräche wurden aufgezeichnet und  vollständig transkribiert. Ein semi-strukturierter Ansatz erlaubte  spontane Nachfragen bei interessanten Erkenntnissen.


Von Interviews zu Personas


Abb. 8 Interview Pino Pena


Die DJs wurden ermutigt, ihre Bildschirme zu teilen und ihre ak­ tuellen Organisationssysteme zu zeigen. Diese Show-and-TellMethode offenbarte oft mehr als reine Beschreibungen. Aus den sechs durchgeführten Interviews kristallisierten sich  drei charakteristische Nutzertypen heraus, die unterschiedli­ che Herangehensweisen an DJ-Workflows repräsentieren. Diese  Personas fassen die wichtigsten Erkenntnisse zu Arbeitsweisen,  Bedürfnissen und Frustrationen zusammen und dienten als  Grundlage für alle weiteren Design-Entscheidungen.


Abb. 9 Interview Polygonia


22 23


---
*Seite 13*


02 Recherche Personas


02 Recherche Personas


Jasmin


Persona-Story


Alter: 29


Geschlecht: Weiblich


Wohnort: München


Jasmin ist eine sehr strukturierte DJ und Produzentin, 29  Jahre alt, und lebt von ihren Auftritten und Produktionen. Sie ist  routinierte Planerin und mag es, den Überblick zu behalten. Als  Organisationstalent sucht sie nach einem System, mit dem Sie  ihre Musikbibliothek personalisiert organisieren kann und dabei  Unterstützung bekommt


Beruf: DJ und Produzentin


Über Jasmin


Chaotisch


Organisiert


Abb. 10 Jasmin


Technisch unerfahren


Technisch versiert


Jasmin ist seit 7 Jahren als DJ aktiv und hat sich über die Jahre  von reinem Auflegen hin zu eigenen Produktionen entwickelt.  Sie ist eine leidenschaftliche Künstlerin, die sich durch ihren  vielseitigen Musikstil auszeichnet. Ihre Sets umfassen Genres  wie Techno, House, Breakbeat, Bassmusik und psychedelische  Elemente mit gelegentlichen jazzy Einflüssen. Sie ist sehr orga­ nisiert und investiert viel Zeit in das Tagging und Sortieren ihrer  Musik, um eine intuitive Auswahl während ihrer Performances zu


Gestresst


Entspannt


Was will Jasmin?


Analytisch


Kreativ


Jasmin möchte ihre Musikbibliothek ordentlich halten und  dabei aber nicht eingeschränkt werden. Am liebsten arbeitet  sie mit eigenen Tags um damit zum Beispiel bei Live Auf­ tritten schnellen Zugriff auf ihre Tracks zu haben. Während  Gigs möchte sie spontan sein und auf die Crowd reagieren  können.


24 25


---
*Seite 14*


02 Recherche Personas


02 Recherche Personas


Lio


Persona-Story


Alter: 26


Geschlecht: Männlich


Wohnort: Berlin


Lio ist ein vielseitiger DJ und Produzent, 26 Jahre alt, der in Ber­ lin lebt. Er kombiniert eine Leidenschaft für Techno und breakige  Beats mit einem pragmatischen Ansatz bei der Organisation sei­ ner Sets. Seine Sets sind geprägt von einem starken Groove und  einer flexiblen Track-Auswahl, die er spontan an die Stimmung  des Publikums anpasst.


Beruf: DJ und Produzent


Über Lio


Chaotisch


Organisiert


Abb. 11 Lio


Technisch unerfahren


Technisch versiert


Gestresst


Entspannt


Lio ist ein kreativer Künstler, der seine musikalische Vielsei­ tigkeit schätzt. Seine Inspiration zieht er aus Plattformen wie  Instagram, Bandcamp und Spotify, wobei er großen Wert auf  kuratierte Inhalte legt. Sein Stil reicht von Techno mit komplexen  Grooves bis hin zu Jazz-Elementen und House. Lio beschreibt  sich selbst als „Finder“: Seine Musikbibliothek ist über die Jahre gewachsen und um­ fasst eine Vielzahl von Genres. Die Organisation erfolgt über­ wiegend in Rekordbox, wo er Tags wie „Mood“ oder „Energy  Level“ verwendet. Dennoch empfindet er die Struktur seiner  Library als unzureichend, was ihn bei der Live-Performance ge­ legentlich ausbremst.


Kreativ


Analytisch


Was will Lio?


Lio möchte eine effizientere Möglichkeit, seine Musikbiblio­ thek zu organisieren, ohne dabei die Kontrolle über seine krea­ tive Auswahl zu verlieren. Er sucht nach Tools, die ihm helfen,  Tracks schneller zu taggen und Playlists intuitiver zu erstellen.  Besonders wichtig ist ihm eine bessere Integration zwischen  Inspirationsquellen (z. B. Instagram) und seiner DJ-Software (z.  B. Rekordbox). Für die Live-Performance wünscht er sich eine  Funktion, die passende Track-Vorschläge basierend auf Stim­ mung und Energielevel liefert.


Bei was hat Lio Probleme?


Lio hat Schwierigkeiten, den Überblick über seine große Musik­ bibliothek zu behalten. Das manuelle Tagging ist zeitaufwändig  und oft fehleranfällig. Während seiner Gigs erlebt er regelmäßig  Stressmomente, wenn er den passenden Track nicht schnell  findet oder wenn Übergänge nicht optimal harmonieren. Der  Wechsel zwischen Plattformen wie Instagram und Bandcamp  sowie das Importieren neuer Tracks in Rekordbox gestaltet sich


26 27


---
*Seite 15*


02 Recherche Personas


02 Recherche Personas


Samuel


Persona-Story


Alter: 43


Samuel ist ein nebenbruflicher Event-DJ, 38 Jahre alt und  arbeitet als Speditionkaufmann. Er hat die meisten Tracks die er  braucht schon auf seiner Festplatte. Seine Musikbibliothek ist  nach Jahrzehnten sortiert weshalb sich in den Ordnern nicht viel


Geschlecht: Männlich


Wohnort: Leipzig


Beruf: Speditionskaufmann / Event-DJ


Über Samuel


Chaotisch


Organisiert


Abb. 12 Samuel


Technisch unerfahren


Technisch versiert


Samuel ist ein leidenschaftlicher DJ, der sich über die Jahre von  einer akribischen Vorbereitung hin zu einem flexibleren Ansatz  entwickelt hat. Während er früher Stunden in die Erstellung  fester Setlists investierte, verlässt er sich heute stärker auf sein  Bauchgefühl und spontane Anpassungen während des Events.  Seine Musikbibliothek umfasst eine Vielzahl von Genres, dar­ unter Discofox für Hochzeiten, Malle-Musik, 90er-Hits sowie  gelegentlich elektronische Musik. Extreme Elektro-Tracks und  bestimmte Hip-Hop-Stile vermeidet er bewusst. Für die Vorbe­ reitung nutzt er Fragebögen, um Musikwünsche und No-Gos von  Brautpaaren zu erfassen, und erstellt darauf basierend Must-


Gestresst


Entspannt


Was will Samuel?


Analytisch


Kreativ


Samuel möchte seine Musikbibliothek effizienter organisieren und  den manuellen Aufwand bei der Pflege reduzieren. Er sucht nach  Tools, die ihm helfen, doppelte Dateien automatisch zu erken­ nen und zu entfernen. Zudem wünscht er sich Unterstützung bei  der Erstellung von Playlists, die sowohl vorab geplante Wünsche  als auch spontane Anpassungen ermöglichen. Eine verbesserte  Backup-Lösung für seine Festplatte wäre ebenfalls hilfreich, um  technische Ausfälle zu vermeiden.


Bei was hat Samuel Proble­ me?


Die manuelle Sortierung seiner umfangreichen Musikbiblio­ thek ist zeitaufwendig und wird als lästig empfunden. Doppelte  Dateien erschweren den Workflow zusätzlich. Während seiner  Live-Auftritte steht er vor der Herausforderung, die Balance zwi­ schen den vorab erfassten Wünschen des Brautpaars und der  Stimmung des Publikums zu finden. Technische Probleme wie  ein möglicher Festplattenausfall stellen ein weiteres Risiko dar.


28 29


---
*Seite 16*


02 Recherche User Journey – Jasmin


30 31


---
*Seite 17*


02 Recherche User Journey – Jasmin


32 33


---
*Seite 18*


02 Recherche User Journey – Jasmin


34 35


---
*Seite 19*


02 Recherche User Journey – Samuel


36 37


---
*Seite 20*


02 Recherche User Journey – Samuel


38 39


---
*Seite 21*


02 Recherche User Journey – Samuel


40 41


---
*Seite 22*


02 Recherche Pain Points


02 Recherche Pain Points


Die vier systematischen  Hauptprobleme


Unsere Analyse identifizierte vier zentrale Problemkomplexe,  die sich durch alle Interviews zogen und unabhängig von Erfah­ rungslevel oder Musikrichtung auftraten:


Problem 4: Unzureichende Analyse emotionaler und kontex­ tueller Eigenschaften Wichtige musikalische Eigenschaften wie Stimmung, Energiele­ vel oder Groove-Charakteristika werden von aktueller Software  nur oberflächlich erfasst. Diese qualitativen Aspekte sind aber  entscheidend für DJ-Entscheidungen, besonders bei Live-Auf­ tritten. Während die Software technische Parameter wie BPM  und Tonart automatisch analysiert, bleiben emotionale und kon­ textuelle Eigenschaften weitgehend unberücksichtigt.


Problem 1: Hoher Zeitaufwand für manuelle Organisation Die manuelle Organisation von Musikbibliotheken verschlingt  enorme Zeitressourcen. DJs berichten von mehreren Stunden  wöchentlichem Aufwand für das Sortieren neuer Tracks und  die Bereinigung ihrer Sammlungen. Diese Zeit fehlt für kreative  Tätigkeiten wie Set-Vorbereitung oder musikalische Weiter­ entwicklung. Der Zeitaufwand steigt linear mit der Größe der  Sammlung. Was bei wenigen hundert Tracks noch händisch  funktioniert, wird bei mehreren tausend Songs zur Sisyphus­ arbeit.


Fragmentierung zwischen  verschiedenen Plattformen  und Tools


Eine strukturelle Herausforderung liegt in der mangelnden Ver­ bindung zwischen den einzelnen Workflow-Phasen. DJs wech­ seln konstant zwischen verschiedenen Plattformen und Tools,  ohne dass diese miteinander kommunizieren.


Discovery-Tools vs. Organisation Instagram-Posts oder Spotify-Playlists inspirieren zu neuen  Tracks, aber der Weg vom Entdecken zum organisierten Import  erfordert mehrere manuelle Schritte. Screenshots, Notizen oder  Browser-Bookmarks dienen als primitive Brücken zwischen den  Systemen.


Problem 2: Limitierte Tagging-Prozesse durch Software-Be­ schränkungen Bestehende DJ-Software zwängt Nutzer in vordefinierte Kate­ goriesysteme, die selten zu individuellen Arbeitsweisen passen.  Rekordbox bietet beispielsweise nur begrenzte Tag-Kategorien,  während Serato zwar flexiblere Tagging-Optionen hat, aber die  Benutzeroberfläche dafür unzureichend gestaltet ist. DJs ent­ wickeln oft eigene Organisationssysteme, die jedoch nicht von  der Software unterstützt werden.


Organisation vs. Live-Performance Selbst sorgfältig organisierte Musikbibliotheken versagen oft  unter dem Zeitdruck eines Live-Auftritts. Die Ordnungsstruktu­ ren, die bei ruhiger Vorbereitung sinnvoll erscheinen, erweisen  sich in stressigen Situationen als ungeeignet.


Fehlender Feedback-Loop Live-Erfahrungen fließen selten zurück in die Organisations­ struktur. Tracks, die in bestimmten Situationen gut funktionieren,  werden nicht systematisch für ähnliche Kontexte markiert.


Problem 3: Inkonsistenz bei der Verwaltung ohne systemati­ sche Unterstützung Ohne systematischen Ansatz werden Musikbibliotheken schnell  chaotisch. DJs beginnen oft mit einem Organisationssystem,  das sie aber im Laufe der Zeit nicht konsequent durchhalten  können. Neue Tracks landen in „Sammelbecken-Playlists“, alte  Ordnungsstrukturen werden nicht gepflegt. Das Problem ver­ stärkt sich durch verschiedene Importquellen: Bandcamp-Käufe,  Promo-Downloads, Streaming-Rips und eigene Produktionen  folgen unterschiedlichen Namenskonventionen und MetadatenStandards.


42 43


---
*Seite 23*


02 Recherche Pain Points


Medienwechsel unterbricht  Workflow


Manueller Tagging-Aufwand  als Zeitfresser


Der Wechsel zwischen verschiedenen Plattformen unterbricht  den kreativen Flow und kostet wertvolle Zeit. Ein typischer DJArbeitsplatz umfasst gleichzeitig geöffnet:


Das Taggen von Musik erfordert sowohl technisches Verständ­ nis als auch musikalische Expertise. DJs müssen für jeden Track  entscheiden:


•	 Welche Genres und Subgenres treffen zu? •	 Welche Stimmung vermittelt der Track? •	 In welchen Set-Kontexten funktioniert er? •	 Welche BPM-Range und Tonart hat er? •	 Wie ist das Energielevel einzuschätzen?


•	 DJ-Software (Rekordbox, Serato) •	 Browser mit mehreren Tabs (Bandcamp, SoundCloud,  Label-Websites) •	 Social Media Apps (Instagram, Twitter) •	 Kommunikations-Tools (WhatsApp, E-Mail für PromoKontakte) •	 File-Management (Finder/Explorer für Download-Ord­ ner)


Diese Entscheidungen können nur getroffen werden, wenn der  Track vollständig gehört wurde. Ein zeitaufwändiger Prozess,  der sich bei hunderten neuen Tracks pro Monat zu einem erheb­ lichen Arbeitsaufwand summiert. DJs investieren einen Haupt­ teil ihrer musikbezogenen Zeit in organisatorische Aufgaben.  Bei professionellen DJs entspricht das mehreren Stunden pro  Woche, Zeit, die für andere kreative Aktivitäten verloren geht.


Jeder Wechsel zwischen diesen Tools erfordert einen mentalen  Kontextwechsel und vergrößert die Wahrscheinlichkeit, wichtige  Tracks oder Informationen zu verlieren. Ein typischer Track-Dis­ covery-Prozess durchläuft mehrere Plattformen: InstagramPost, Shazam/SoundHound, Streaming-Dienst zum Anhören,  Online-Store zum Kauf, Download-Ordner, DJ-Software. Jeder  Schritt bietet Verlustpotential und Frustrationsmöglichkeiten.


44 45


---
*Seite 24*


02 Recherche Pain Points


02 Recherche Pain Points


UI/UX-Probleme aktueller  Software-Lösungen


Bestehende DJ-Software wurde primär für die Live-Perfor­ mance entwickelt, nicht für die organisatorischen Aufgaben  davor. Die Benutzeroberflächen sind oft:


Stress bei der Live-Perfor­ mance durch ineffiziente  Tracksuche


Der kritischste Moment im DJ-Workflow: Während eines LiveAuftritts den passenden nächsten Track zu finden. DJs berich­ ten regelmäßig von Situationen, in denen sie unter Zeitdruck den  gewünschten Song nicht schnell genug lokalisieren können.


Zu dunkel und unübersichtlich Mehrere DJs bemängeln, dass Rekordbox zu wenig Kontrast  bietet und wichtige Informationen schwer erkennbar sind.


Zu klein skaliert Coverbilder und Waveforms sind oft so klein, dass schnelle visu­ elle Orientierung schwierig wird.


Diese Situationen entstehen durch: •	 Unzureichende Vorbereitung aufgrund zeitaufwändiger  Organisation •	 Starre Playlist-Strukturen, die spontane Anpassungen erschweren •	 Langsame Such- und Filterfunktionen in der Live-Soft­ ware •	 Fehlende intelligente Vorschläge basierend auf dem aktuellen Track


Zu langsam Relinking-Prozesse und Datenbankabfragen dauern zu lange für  effizientes Arbeiten.


Unzureichend für verschiedene Nutzungsszenarien Was bei detaillierter Set-Vorbereitung funktioniert, ist für  schnelle Live-Entscheidungen ungeeignet.


Der Stress solcher Momente kann die gesamte Performance be­ einträchtigen und das Vertrauen des DJs in sein System unter­ graben. Der Übergang zwischen zwei Tracks ist der stressinten­ sivste Moment im DJ-Workflow, wo sich alle organisatorischen  Schwächen komprimiert in wenigen Sekunden zeigen.


46 47


---
*Seite 25*


02 Recherche How Might We‘s


02 Recherche How Might We‘s


Wie können wir die Musikbibliothek für DJs visuell  aufbereiten, sodass sie neue Zusammenhänge ent­


How Might We‘s als  Leitplanken


decken und vergessene Tracks wiederfinden?


Die How Might We-Statements dienten während des gesamten  Entwicklungsprozesses als konstante Referenz und Orientie­ rung. Wir kamen immer wieder auf sie zurück - bei Feature-Ent­ scheidungen, UI-Entwürfen und technischen Implementierungen.


Wie können wir die Bibliotheksorganisation für DJs


flexibilisieren, sodass sie ihre Musik nach eigenen,


Kontinuierliche Validierung Bei vielen Design-Entscheidungen stellten wir die Frage:  „Welches How Might We adressiert das?“ Features, die keines  der identifizierten Probleme lösten, wurden hinterfragt oder ver­ worfen.


kreativen Kriterien organisieren können?


Inspiration für konkrete Lösungen Statt abstrakte Anforderungen zu bleiben, inspirierten die How  Might We‘s konkrete Features: „Individuelle Organisationssyste­ me unterstützen“ führte zum MY TAGS System, „AI-Unterstüt­ zung ohne Kontrollverlust“ zum Augmentation-statt-Automa­ tion-Prinzip.


Wie können wir die Suche nach passenden Tracks  für DJs beschleunigen, sodass sie mehr Zeit für die


kreative Set-Vorbereitung haben?


Wie können wir KI-Vorschläge für DJs gestalten,  sodass sie auf neue Ideen kommen, ohne ihre kreati­


ve Kontrolle zu verlieren?


48 49


---
*Seite 26*


02 Recherche Organisationstechniken


02 Recherche Organisationstechniken


Tagging


Visuelle Marker


DJs nutzen die Tagging-Funktionen von Programmen wie Re­ kordbox und Serato, um ihre Musik nach einer Vielzahl von Kri­ terien zu ordnen. Dazu gehören objektive Merkmale wie Genre  oder Instrumentierung, aber auch subjektive Bewertungen wie  Energielevel Peak Time, Warm-up oder Stimmung melancho­ lisch, treibend. Viele DJs entwickeln hochgradig personalisierte  Systeme, die zum Beispiel den Einsatzort („Festival Mainstage“,  „Bar-Lounge“), die Tonart für harmonisches Mixing oder die  rhythmische Struktur („breakbeat“, „4-to-the-floor“) kodieren.


Visuelle Marker wie Sternebewertungen und Farbkodierungen  sind ein Werkzeug zur schnellen qualitativen Einschätzung. DJs  weisen Tracks beispielsweise eine Bewertung von 1 bis 5 Ster­ nen zu, um die persönliche Relevanz oder die Tanzbarkeit eines  Tracks zu bewerten. Farb-Tags werden oft genutzt, um Ener­ gielevel oder Stimmungen zu visualisieren. Ein gängiges System  ist beispielsweise die Zuweisung von Farben für verschiedene  Phasen eines Sets: Blau für ruhige „Warm-up“-Tracks, Grün und  Gelb für den Aufbau und Rot für energiegeladene „Peak-Time“Tracks. Diese visuellen Hinweise ermöglichen es, während eines  Live-Sets auf einen Blick passende Optionen zu identifizieren.


Ordnerstrukturen


Eine grundlegende und weit verbreitete Methode ist die Orga­ nisation in hierarchischen Ordnerstrukturen direkt im Datei­ system oder innerhalb der DJ-Software. Viele DJs legen Ordner  für Genres an (z.B. „Techno“, „House“, „Ambient“), die weiter in  Sub-Genres unterteilt werden („Melodic Techno“, „Hardgroove“).  Andere strukturieren ihre Sammlung nach Anwendungsfall, mit  Ordnern wie „Warm-up Sets“, „Peak Time Tracks“ oder „After­ hour“. Auch temporäre Ordner wie „Neue Tracks dieser Woche“  oder „Für Gig in Club X“ sind üblich, um den Überblick über neu  erworbene Musik zu behalten und sie für bestimmte Anlässe zu  gruppieren.


Kommentare


Handschriftliche Ergänzungen sind besonders bei Vinyl-DJs ver­ breitet: Sticker und Notizen auf Plattenhüllen mit Informationen  wie „Works after dark bassline track“ oder „Good for summer  sets“.


Digital nutzen DJs Kommentar-Felder für kontextuelle Infor­ mationen: „Played at Club X 2023“, „Good transition from Artist  Y“, „Crowd went wild“. Diese wertvollen Metadaten sind schwer  systematisch auswertbar.


50 51


---
*Seite 27*


02 Recherche Zielgruppendefinition


02 Recherche Zielgruppendefinition


Die DJ-Kultur umfasst verschiedene musikalische Ausrichtun­ gen und Auftrittskontexte:


Genre-spezifische  Anforderungen


Die Grundprobleme der Musikorganisation betreffen alle DJ-Ka­ tegorien, unterscheiden sich aber in Intensität und Schwerpunk­ ten.


Professionelle vs.  Semi-professionelle vs.  Hobby-DJs


Electronic Music DJ arbeiten mit komplexen Genre-Hybriden  und benötigen nuancierte Kategorisierung für Subgenres, Ener­ gie-Level und Mix-Kompatibilität.


Professionelle DJs haben größere Musikmengen zu verwalten  und stehen unter höherem Zeitdruck. Ihr Lebensunterhalt hängt  direkt von der Effizienz ihrer Organisationssysteme ab. Sie be­ nötigen hochentwickelte Tools, die große Datenmengen schnell  verarbeiten können.


Event-DJs müssen diverse Musikstile für verschiedene Ziel­ gruppen organisieren und benötigen klare Kategorien nach An­ lass, Altersgruppe und kulturellem Kontext.


Genre-übergreifende DJs kombinieren verschiedene Stile und  benötigen flexible Organisationssysteme, die musikalische Ver­ bindungen zwischen unterschiedlichen Genres erkennen können.


Semi-professionelle DJs navigieren zwischen kreativen Ambi­ tionen und zeitlichen Beschränkungen. Sie wollen professionelle  Ergebnisse erzielen, haben aber begrenzte Zeit für organisatori­ sche Aufgaben. Für sie sind automatisierte Lösungen besonders  wertvoll.


Performance-KontextUnterschiede


Club-DJs fokussieren sich auf längere Sets mit dramaturgi­ schem Aufbau und benötigen Tools für Energy-Management und  Crowd-Reaktion.


Hobby-DJs haben spezifische Anforderungen je nach Einsatz­ gebiet. Event-DJs brauchen verlässliche Kategorisierung nach  Anlass und Publikum, während Hobby-DJs oft mit kleineren,  aber dennoch unübersichtlichen Sammlungen kämpfen.


Diese Diversität zeigt, dass eine erfolgreiche Lösung ver­ schiedene Unterschiede berücksichtigen muss. Ein System für  Electronic Music DJs muss andere Prioritäten setzen als eines  für Hochzeits-DJs, trotz gemeinsamer Grundprobleme in der  Musikorganisation.


52 53


---
*Seite 28*


02 Recherche Zielgruppendefinition


02 Recherche Zielgruppendefinition


Zielgruppen-Charakteristika unserer Hauptnutzer


Primäre Zielgruppe


•	 2+ Jahre DJ-Erfahrung mit regelmäßigen Auftritten •	 Musiksammlung von 1.000+ Tracks mit kontinuierlichem  Wachstum •	 Interesse an fortgeschrittenen Features und Semi-Auto­ matisierung


Primärer Fokus auf erfahrene DJs basierend auf InterviewErkenntnissen Unsere Interviews mit sechs DJs verschiedener Erfahrungs­ stufen zeigten eine klare Bereitschaft bei semi-professionellen  und professionellen DJs, Zeit und Aufwand in bessere Organi­ sationstools zu investieren. Diese DJs verstehen den direkten  Zusammenhang zwischen effizienter Musikorganisation und  Auftrittserfolg - für sie ist Zeit, die in Organisation investiert wird,  eine berufliche Notwendigkeit, keine lästige Pflicht.


Diese strategische Priorisierung ermöglicht es uns, ein tief­ greifendes, funktionsreiches Tool zu entwickeln, das primär für  engagierte DJs optimiert ist, aber durch AI-Features auch für  weniger erfahrene Nutzer wertvoll sein kann.


Die Professionelle Plattform-Positionierung Wir entwickeln eine professionelle Lösung für DJs, die bereits  über fundierte Musikkenntnis und etablierte Workflows ver­ fügen. Diese Zielgruppe schätzt fortgeschrittene Features und  ist bereit, eine Lernkurve zu durchlaufen, wenn der langfristige  Nutzen klar erkennbar ist. Sie investieren regelmäßig in Hard­ ware, Software und Musik und sehen Tools als business-kriti­ sche Investitionen.


Potential für Einsteiger-DJs durch AI-Klassifizierung Während erfahrene DJs unsere Primärzielgruppe darstellen,  schließen wir Anfänger nicht aus. Gerade die automatische AIKlassifizierung könnte für Einsteiger besonders wertvoll sein, da  sie ohne tiefes Musikwissen präzise Kategorisierung und Emp­ fehlungen erhalten. Anfänger-DJs haben oft weniger etablierte  Organisationsmuster und könnten daher offener für neue An­ sätze sein.


54 55


---
*Seite 29*


02 Recherche Marktanalyse


Methodisches Vorgehen


Die Marktanalyse umfasste eine systematische Unter­ suchung von über 20 Tools aus zwei Hauptkategorien:  Performance-orientierte DJ-Software und reine Musikver­ waltungssoftware. Mittels einer Feature-Matrix wurden die  Kernfunktionalitäten, Automatisierungs- und KI-Features  analysiert, um Marktlücken und Probleme zu identifizieren.


Performance-orientierte DJSoftware


Diese Kategorie dominiert Rekordbox von Pioneer DJ, das eine  faktische Monopolstellung in der Club-Infrastruktur innehat.  Pioneer DJ-Hardware (CDJ-Serie, DJM-Mixer) ist der de-facto  Standard in Clubs weltweit, wodurch Rekordbox als primäre Vor­ bereitungssoftware etabliert wurde.


Abb. 13 Screenshot von Rekordbox


Hauptvertreter: Rekordbox, Serato DJ Pro, Traktor Pro (Native  Instruments), VirtualDJ, Beatport DJ, Cross DJ, Mixxx


Kerncharakteristika •	 Fokus auf Live-Performance und Set-Vorbereitung •	 Integrierte Analyse-Tools für BPM, Key, Waveforms •	 Hardware-Integration und Controller-Support •	 Export-Funktionen für DJ-Hardware


KI/Automatisierungs-Features •	 Automatische Track-Analyse (BPM, Key, Beatgrid) •	 Vocal Detection und Stems Separation (VirtualDJ) •	 Smart Crates und intelligente Playlist-Vorschläge •	 Cloud-Sync für Multi-Device-Workflows


Die Performance-Software konzentriert sich primär auf die un­ mittelbare Set-Vorbereitung und Live-Mixing, bietet aber be­ grenzte Discovery- und Deep-Organisation-Features.


Abb. 14 Screenshot von VirtualDJ


56 57


---
*Seite 30*


02 Recherche Marktanalyse - Vorgehen


Diese Kategorie addressiert die Organisationsbedürfnisse gro­ ßer Musiksammlungen ohne Performance-Fokus.


Reine Musikverwaltungs­ software


Hauptvertreter: MP3Tag, MediaMonkey, MusicBee, Lexicon,  Helium Music Manager, iTunes/Musik, Foobar2000, Taganana


Kerncharakteristika: •	 Umfangreiche Metadaten-Verwaltung und Batch-Processing •	 Online-Datenbank-Integration (Discogs, MusicBrainz) •	 Erweiterte Tagging-Funktionen und Automatisierung •	 Cross-Platform-Kompatibilität und Export-Optionen


Abb. 15 Screenshot von Apple Music


KI/Automatisierungs-Features •	 Fingerprint-basierte Track-Identifikation •	 Automatisches Tagging über Online-Datenbanken •	 Intelligente Playlist-Erstellung •	 Batch-Verarbeitung und Fehleranalyse


Diese Tools excellieren in der detaillierten Organisation und  Anreicherung an Metadaten, aber bieten keine DJ-spezifischen  Performance-Features.


Abb. 16 Screenshot von Lexicon


58 59


---
*Seite 31*


02 Recherche Marktanalyse - Erkenntisse


02 Recherche Marktanalyse - Erkenntisse


Tool-Fragmentierung


Probleme in der Übersicht Durch die Marktanalyse bestätigte sich die Vermutung einer  fundamentale Lücke zwischen Performance-orientierten und  Verwaltungs-orientierten Tools. DJs sind gezwungen, mehrere  Software-Kategorien parallel zu nutzen, was zu Medienwech­ seln, Metadaten-Verlust und ineffizienten Arbeitsprozessen  führt.


In unsere Marktanalyse fielen immer wieder durchgängige  Schwächen in der Gestaltung der Benutzeroberflächen auf.  Unabhängig vom jeweiligen Programm zeigte sich ein wieder­ kehrendes Muster: Die Oberflächen wirken oft überladen und  unaufgeräumt, weil sie versuchen, zu viele Informationen und  Schalter auf einmal darzustellen. Dies erschwert es Nutzern, den  Überblick zu behalten und wichtige Bedienelemente schnell zu  finden.


!


Strukturelle Marktbarrieren für Defragmentierung Eine vollständige Integration aller Tools ist strukturell problema­ tisch: Musik wird über verschiedene Anbieter mit unterschiedli­ chen Bezahlsystemen bereitgestellt. Rechtliche, technische und  kommerzielle Barrieren verhindern eine einheitliche Plattform.


Dieser unruhige Gesamteindruck wird durch eine fehlende visu­ elle Struktur verstärkt. Dem Auge fehlt eine klare Führung, da  oft nicht auf den ersten Blick ersichtlich ist, welche Bereiche der  Oberfläche am wichtigsten sind. Hinzu kommen häufig schwa­ che Kontraste, die das Lesen und die Orientierung zusätzlich  erschweren, besonders bei längerer Arbeit am Bildschirm.


Fokussierung auf  Vorbereitung


Basierend auf dieser Analyse konzentriert sich unser  Projekt bewusst auf den Vorbereitungsprozess nach der  Discovery-Phase. Statt die unlösbare Discovery-Fragmen­ tierung anzugehen, optimieren wir die Organisation und SetPlanung bereits erworbener Musik.


Fehlende Features


Auffällig war zudem die verbreitete Nutzung von Symbolen, die  ohne eine zusätzliche Texterklärung kaum zu verstehen sind.  Statt die Bedienung zu beschleunigen, erfordern sie vom Nutzer,  ihre jeweilige Funktion zu erraten oder auswendig zu lernen.  Zusammengenommen führen diese gestalterischen Mängel zu  einem potenziell anstrengenden und fehleranfälligen Nutzerer­ lebnis, das den kreativen Prozess eher stört als unterstützt.


Räumliche Musikexploration Keine existierende Software bietet intuitive, räumliche Visu­ alisierung von Musikähnlichkeiten. Alle Tools verwenden Lis­ ten- oder Ordnerstrukturen, die für Exploration (>5.000 Tracks)  ungeeignet sind.


Adaptives Lernen Während KI-Features wie Fingerprinting existieren, fehlen ad­ aptive Systeme, die aus individuellem Nutzerverhalten lernen.  Tagging-Präferenzen und Set-Muster werden nicht für persona­ lisierte Empfehlungen genutzt.


60 61


---
*Seite 32*


02 Recherche Marktanalyse - Erkenntisse


02 Recherche Marktanalyse - Erkenntisse


Rekordbox Monopolposition  als Marktbarriere


Fokussierung auf Vorberei­ tung statt Live-Performance


Pioneer DJ‘s Hardware-Dominanz in Clubs schafft einen fak­ tischen Lock-in-Effekt. DJs müssen ihre Bibliotheken Rekord­ box-kompatibel organisieren, selbst wenn sie andere Software  bevorzugen würden. Dies hemmt Innovation in der DJ-SoftwareLandschaft.


Die Marktlücke liegt nicht in direkter Konkurrenz zu Rekordbox,  sondern in der Vorbereitung und Organisation vor dem Ex­ port. Ein Tool, das Deep-Organisation und intelligente Set-Pla­ nung integriert, würde den Workflow vereinheitlichen, ohne die  etablierte Club-Infrastruktur zu stören.


DJOID als direkter Competitor


DJOID stellt den direktesten Competitor zu unserer entwickel­ ten Lösung dar, da es ähnliche Kernkonzepte verfolgt: AI-ge­ stützte Musikanalyse, Graph-basierte Visualisierung und auto­ matische Set-Planung. Die Analyse zeigt jedoch signifikante  Marktlücken auf:


Ähnliche Ansätze •	 Graph Playlists für visuelle Set-Planung •	 AI-Tagging für automatische Musikanalyse   •	 Auto-Grouping für Bibliotheksorganisation •	 Fokus auf DJ-Workflow-Integration


Identifizierte Schwächen •	 Ungenauigkeit bei AI-Klassifizierung (Nutzerfeedback) •	 Node-basierte UI führt zu Usability-Problemen und steiler  Lernkurve •	 Beta-Status mit Stabilitätsproblemen •	 Fehlende Erklärbarkeit der AI-Empfehlungen •	 Workflow-Fragmentierung: Fokus nur auf Set-Planung •	 Untergräbt kurative DJ-Kontrolle durch Vollautomatisie­ rung


62 63


---
*Seite 33*


64 65


---
*Seite 34*


03 Konzeption Kano-Modell


03 Konzeption Feature Ideation und Priorisierung


Must-Have Features


Feature-Recherche •	 BPM- & Key-Analyse für Mix-Kompatibilität   •	 Such- & Filteroptionen für große Bibliotheken   •	 Cover-Art-Anzeige und integrierter Music-Player   •	 Verwaltung von Playlisten sowie M3U-Import / Export   •	 Duplikaterkennung und sauberes Relinking verlorener  Dateien


Nach der umfangreichen Recherche mit den sechs DJ-Inter­ views und der Analyse bestehender Tools entstanden zahlreiche  Feature-Ideen für das AI-gestützte Musikverwaltungssystem.  Das Kano-Modell bot einen systematischen Rahmen, um aus  dieser Fülle von Möglichkeiten die richtige Priorisierung zu ent­ wickeln.


Performance Features


Warum das Kano-Modell für DJ-Software relevant ist DJs haben unterschiedliche Erwartungen an neue Tools. Manche  Features sind selbstverständlich erwartet (Must-Haves), andere  schaffen echten Mehrwert (Performance Features), und wenige  erzeugen Begeisterung (Excitement Features). Das Kano-Mo­ dell hilft dabei, diese Kategorien zu unterscheiden und Entwick­ lungsressourcen strategisch zu verteilen.


•	 Unterstütztes Tagging (User- & System-Tags) mit Bulk-Editing   •	 Smart-Crates & Drag-and-Drop-Organisation   •	 Library-Synchronisation & Cloud-Verwaltung   •	 Third-Party-Integration (Streaming-Dienste, Analyse-Tools)  •	 Erweiterte Track-Analyse (Energy-, Timbre-, RhythmusMetriken)   •	 Steuerbare Empfehlungsfunktionen & Track-Vorschläge   •	 Automix-/Playlist-Funktionen für Background-Sets


Excitement Features


Anwendung auf DJ-Tool-Entwicklung Basierend auf den Interview-Erkenntnissen und Nutzererwar­ tungen kategorisierten wir alle potentiellen Features nach ihrer  Wirkung auf die Nutzerzufriedenheit. Diese Kategorisierung  wurde zur Grundlage für die MVP-Definition und die Entwick­ lungsphasen-Planung.


•	 Visuelle Track-Landkarte als 2D-Explorer für die gesamte  Sammlung   •	 Integration von Set-Feedback zur kontinuierlichen AI-Op­ timierung   •	 Echtzeit-Streaming-Integration für nahtlose DiscoveryWorkflows   •	 Notizfunktionen & In-Track-Comments als digitales Ge­ dächtnis


66 67


---
*Seite 35*


03 Konzeption Kano-Modell


Abb. 17 Screenshot von Lexicon


68 69


---
*Seite 36*


03 Konzeption Kano-Modell


Priorisierung


Die Priorisierung folgte den Persona-Bedürfnissen und techni­ scher Machbarkeit:


Phase 1: Kern-Funktionalität (MVP) Basis-Audio-Analyse, einfache Ähnlichkeitsberechnung, rudi­ mentäre Organisation. Fokus auf technische Validierung der  AI-Pipeline und Machbarkeitsbeweis.


Phase 2: Vollständige Feature-Implementierung  MY TAGS System, 2D-Map-Visualisierung, adaptive Lernsys­ teme, erweiterte Filter und Export-Integration. Schwerpunkt  auf Nutzer-Experience, Workflow-Integration und vollständige  Feature-Set-Umsetzung.


Diese zweiphasige Entwicklung ermöglichte iterative Entwick­ lung mit kontinuierlicher Nutzer-Validierung.


Von Feature-Priorisierung zu Metadaten-Architektur Die Kano-Analyse zeigte, dass alle priorisierten Features - von  Basic Audio-Analyse bis hin zur 2D-Visualisierung - auf einer  fundierten Metadaten-Grundlage basieren. Intelligente GenreKlassifikation, personalisierbare Tags und ähnlichkeits-basierte  Empfehlungen erfordern verschiedene Arten von Musik-Meta­ daten. Bevor die Features implementiert werden konnten, muss­ ten wir verstehen: Welche Metadaten lassen sich automatisch  extrahieren? Welche erfordern menschliche Interpretation? Und  wie können beide Arten intelligent kombiniert werden?


70 71


---
*Seite 37*


03 Konzeption Metadaten


03 Konzeption Metadaten


Objektive Metadaten


Subjektive Metadaten


Bereits in der Datei vorhandene Metadaten ID3-Tags enthalten Künstlername, Titel, Album, Jahr und teil­ weise Genre-Angaben. Diese Grunddaten sind oft unvollständig  oder inkonsistent formatiert, besonders bei Promo-Downloads  oder selbst erstellten Rips.


Genre und Stil-Klassifikation  Musikstile (House, Techno, Ambient) sind kulturelle Konstrukte  ohne eindeutige technische Definition. Subgenre-Zuordnungen  (Deep House, Progressive Techno) variieren zwischen DJs und  Regionen. Diese Kategorisierung ist stark subjektiv und zeitab­ hängig.


Technische Parameter BPM (Beats per Minute) bestimmen Mix-Kompatibilität. Tonart  ermöglicht harmonische Übergänge. Lautstärke-Normalisierung  verhindert Sprünge in der Wiedergabe. Dateiformat und Bitrate  beeinflussen Klangqualität. Track-Dauer und Sample-Rate sind  weitere messbare Eigenschaften.


Emotionale Eigenschaften und Stimmung Stimmung (happy, melancholic, aggressive) beeinflusst Publi­ kumsreaktion. Energie-Level bestimmt Position im Set. Groo­ ve-Charakter unterscheidet zwischen treibend und entspannt.  Atmosphäre reicht von intim bis euphorisch. Diese Bewertungen  sind stark vom Kontext und der momentanen Verfassung des  DJs abhängig.


Spektrale Eigenschaften Frequenzverteilung charakterisiert den Klang. Bassanteil dif­ ferenziert zwischen verschiedenen Genres. Höhenanteil beein­ flusst Wahrnehmung von Helligkeit oder Dunkelheit. Dynamik­ umfang zeigt Komprimierung an. Spektrale Rolloff-Frequenz und  Zero-Crossing-Rate bieten weitere Klangcharakteristika.


Instrumentenerkennung Dominante Instrumente (Drums, Bass, Synthesizer, Vocals)  lassen sich durch AI-Modelle automatisch identifizieren. Unter­ scheidung zwischen elektronischen und akustischen Instru­ menten. Percussion-Pattern und melodische Elemente werden  erkannt und klassifiziert.


Abb. 18  Info Clustering


72 73


---
*Seite 38*


03 Konzeption Grundlagen der KI-Musikklassifizierung


03 Konzeption Low-Level Features


Audio Feature Extraktion


Audio-zu-Bild-Transformation Ein Schlüsselkonzept moderner KI-Musikklassifizierung ist die  Umwandlung von Audiosignalen in visuelle Repräsentationen.  Dabei werden Tracks in 2D-“Bilder“ transformiert.


Diese Features werden in einem mehrstufigen Prozess von  messbaren Eigenschaften zu semantischen Bedeutungen trans­ formiert


Low-Level Features (Grundlegende Klangeigenschaften)


Abb. 19 Spektrogramm


Spektrogramme Zeit-Frequenz-Darstellungen zeigen, welche Frequenzen zu wel­ chen Zeitpunkten auftreten. Diese 2D-Matrizen ähneln SchwarzWeiß-Bildern, wobei Helligkeit die Intensität verschiedener  Frequenzen anzeigt.


Mel-Frequency Cepstral Coefficients (MFCCs) erfassen die  Klangfarbe ähnlich wie das menschliche Ohr - sie unterscheiden  beispielsweise zwischen dem warmen Klang einer Trompete und  dem metallischen einer E-Gitarre. Rhythmische Features wie  Onset-Detektion und Beat-Tracking erfassen zeitliche Struktu­ ren und identifizieren charakteristische Drum-Patterns.


Abb. 20 Mel-Spektrogramm


74 75


---
*Seite 39*


03 Konzeption Mid-Level-Features


03 Konzeption High-Level-Features


Abb. 21 Chromagramm


Abb. 22 Wordcloud


Mid-Level Features (Musikalische Eigenschaften) Chromas und Tonhöhenklassen-Profile erfassen harmonische  Inhalte - ob ein Track in Moll (melancholisch) oder Dur (fröhlich)  steht, welche Akkordprogressionen verwendet werden. Timbrale  Eigenschaften unterscheiden zwischen organischen (Gitarre,  Klavier) und synthetischen (Synthesizer, Drum-Machine) Klän­ gen.


High-Level Features (Semantische Bedeutungen) Durch Deep Learning werden aus den Grundeigenschaften  semantische Features wie Genre-Zugehörigkeit, emotionale  Stimmung und spezifische Instrumente abgeleitet. Diese ent­ sprechen dem, was DJs intuitiv beim Hören wahrnehmen und  sind für den DJ-Workflow besonders relevant:  Genre-Klassifikation ermöglicht schnelle Stilzuordnung, MoodDetection hilft bei der Set-Dramaturgie, und Energy-LevelAnalyse unterstützt beim Aufbau von Spannungsbögen. Diese  semantischen Features überbrücken die Lücke zwischen techni­ schen Messwerten und musikalischer Praxis.


76 77


---
*Seite 40*


03 Konzeption High-Level-Features


Diese visuellen Repräsentationen ermöglichen es, bewährte  Computer Vision-Techniken auf Musik anzuwenden. CNNs,  die ursprünglich für Bilderkennung entwickelt wurden, können  Muster in Spektrogrammen genauso identifizieren wie Objekte  in Fotos. Filter lernen musikalische „Texturen“ wie Drumpatterns,  Basslinien oder harmonische Progressionen zu erkennen.


Von Features zu Embeddings Alle extrahierten Features werden in hochdimensionale Vekto­ ren (Embeddings) mit 400+ Dimensionen umgewandelt. Jede  Dimension repräsentiert eine spezifische musikalische Eigen­ schaft. Ähnliche Tracks erhalten ähnliche Embedding-Werte -  dadurch kann das System automatisch erkennen, welche Songs  gut zusammenpassen.


Die 400+-dimensionalen Embeddings erfassen musikalische  Ähnlichkeiten, die Menschen intuitiv wahrnehmen. Ähnliche  Embeddings bedeuten ähnlich klingende Tracks. Das System be­ rechnet Cosinus-Ähnlichkeit zwischen Feature-Vektoren.


Embedding-basierte Ähn­ lichkeitsberechnung


Robuste Normalisierung Musiksammlungen haben natürliche Ungleichgewichte. TechnoDJs besitzen mehr Electronic Tracks, Event-DJs mehr Pop-Mu­ sik. Das System kompensiert durch adaptive Genre-Gewichtung  und robuste Statistiken.


Style-Features erhalten Gewichtung 1.0 als primärer Differen­ zierungsfaktor. Genre-Features bekommen Gewichtung 0.2 um  Dominanz einzelner Genres zu reduzieren. Mood-Features er­ halten Gewichtung 0.1 als ergänzende Information. Nach Spekt­ ralen Eigenschaften wird nicht geclustert, da die Gewichtung zu  schlechterer Clusterbildung führt.


78 79


---
*Seite 41*


03 Konzeption Grundlagen der KI-Musikklassifizierung


Abb. 23 Wahrscheinlichkeitsverteilung für „Techno“


Abb. 24 Wahrscheinlichkeitsverteilung für „Electro“


Class-Imbalance


Die Analyse einer repräsentativen DJ-Library mit 1.346 Tracks  offenbarte signifikante Ungleichgewichte in der Genre-Vertei­ lung, die typisch für spezialisierte DJ-Sammlungen sind.


Extreme Schiefe Im Gegensatz dazu zeigt Electro (Rang #2, 1.160 Titel) eine stark  verzerrte Verteilung mit einem massiven Peak bei sehr niedrigen  Wahrscheinlichkeiten (nahe 0.0). Diese extreme Linksschiefe  deutet auf problematische Genre-Überschneidungen hin - vie­ le als „Electro“ klassifizierte Tracks werden vom AI-Modell als  stilistisch inkonsistent bewertet.


Techno-Dominanz mit solider Ähnlichkeitsverteilung  Techno als dominierendes Genre (Rang #1, 1.317 Titel) zeigt eine  bemerkenswert gleichmäßige Wahrscheinlichkeitsverteilung mit  einem Peak um 0.85. Diese normalverteilte Kurve deutet auf eine  kohärente, stilistisch konsistente Sammlung hin, bei der die AIModelle zuverlässige Ähnlichkeitsbewertungen liefern können.


Class-Balancing als Lösungsansatz Diese Analyse verdeutlichte ein fundamentales Problem bei der  automatischen Musikklassifikation: Während etablierte, kohä­ rente Genres wie Techno zuverlässig organisiert werden können,  leiden weniger konsistente oder überlappende Kategorien unter  der dominanten Genre-Gewichtung. In den analysierten Top 10  Genres zeigt keiner eine so solide, normalverteilte Ähnlichkeits­ struktur wie Techno.


80 81


---
*Seite 42*


03 Konzeption Mentale Modelle der Klassifizierung


03 Konzeption Mentale Modelle der Klassifizierung


Verschiedene Verständnisse  von Genres & Subgenres


Räumliche Visualisierung als  Designlösung


DJs denken hierarchisch über Musik. Hauptgenres (House,  Techno, Hip-Hop) gliedern sich in Subgenres mit spezifi­ schen Charakteristika.


Das zentrale How Might We „Wie können wir DJs helfen, große  Musiksammlungen visuell zu erkunden?“ führte uns zu einer  räumlichen Visualisierungsstrategie. Listen-Ansichten versagen  bei 10.000+ Tracks, daher entwickelten wir eine 2D-Map als  alternative Explorationsmethode.


House-Familie Deep House: Warme Bässe, entspannte Atmosphäre, 120-125  BPM   Tech House: Treibende Percussion, minimalistische Elemente,  125-130 BPM   Progressive House Längere Tracks, emotionale Aufbauten, 128132 BPM


Unser Interface-Design nutzt räumliche Konsistenz strategisch:  „Techno ist immer oben links, Deep House immer unten rechts“  schafft vorhersagbare Navigation. Diese Designentscheidung  ermöglicht es DJs, räumliche Orientierung zu entwickeln - ein  Konzept, das von physischen Plattensammlungen bekannt ist.


Spatial Memory kann durch konsistente Interface-Positionie­ rung entstehen. DJs können sich Positionen von Track-Clustern  relativ zueinander merken. Eine stabile räumliche Anordnung  ermöglicht schnelle Navigation ohne textuelle Suche.


Techno-Familie Minimal Techno: Reduzierte Elemente, subtile Veränderungen,  128-135 BPM   Hard Techno: Aggressive Kicks, Industrial-Einflüsse, 135-150  BPM   Dub Techno: Halliger Sound, Detroit-Einflüsse, 120-130 BPM


Cluster-Bildung geschieht organisch durch AI-Features. GenreTerritorien entstehen automatisch durch die Feature-Analyse,  aber vorhersagbar durch konsistente Algorithmen. DJs können  schnell zu relevanten Bereichen navigieren und von dort aus die  AI-angereicherten Metadaten explorieren.


Genre-Grenzen verschwimmen Moderne Musik mischt Genres häufig. Melodic Techno kombi­ niert Techno-Rhythmen mit House-Harmonien. Future Bass ver­ bindet elektronische Produktion mit Hip-Hop-Strukturen.


Das System muss flexible Genre-Zuordnungen ermöglichen statt  starrer Kategorien. Multi-Label-Klassifikation bildet diese Reali­ tät besser ab als Single-Label-Zuordnung.


82 83


---
*Seite 43*


03 Konzeption Wireframes


Design-Iteration


Erste Wireframes Simple Listen-Ansicht mit Filter-Optionen an der Seite. TrackDetails in der Hauptansicht. Player-Controls am unteren Rand.  Diese Layouts orientierten sich an bekannten Musik-Tools.


Problem der Listen-Darstellung Tests zeigten: Listen funktionieren schlecht bei großen Musik­ mengen. 10.000+ Tracks sind nicht scrollbar durchsuchbar.  Nutzer verlieren schnell die Orientierung.


Abb. 25 Wireframes 1


2D-Visualisierung entwickelt Die How Might We‘s aus der Recherche führten direkt zur 2D-Vi­ sualisierung als Lösung: „Wie können wir die Musikbibliothek für  DJs visuell aufbereiten, sodass sie neue Zusammenhänge ent­ decken und vergessene Tracks wiederfinden?“


Räumliche Anordnung ersetzt eindimensionale Listen Tracks werden als Punkte auf einer Karte dargestellt. Ähnliche  Musik clustert räumlich. Zoom und Pan ermöglichen Navigation.  Diese Lösung nutzt die extrahierten AI-Features intelligent für  intuitive Exploration.


Hybride Lösung  Finale Wireframes kombinieren Listen- und Map-Ansicht. TabNavigation ermöglicht Wechsel zwischen Darstellungsformen.  Sidebar zeigt Crates und Tags. Detailansicht öffnet bei TrackSelektion.


Abb. 26 Wireframes 2


84 85


---
*Seite 44*


04 Finales Konzept


86 87


---
*Seite 45*


04 Finales Konzept Standalone App


Desktop-First Architektur


Die strategische Entscheidung für eine Desktop-Anwendung  basiert auf technischen und workflow-spezifischen Vortei­ len:


Performance-Überlegenheit Audio-Analyse erfordert intensive CPU-Nutzung. Desktop-Pro­ cessing übertrifft Cloud-Lösungen bei Batch-Verarbeitung gro­ ßer Sammlungen. Keine Latenz durch Upload/Download-Zyklen.


Offline-Funktionalität DJs arbeiten oft in Umgebungen mit schlechter Internetverbin­ dung. Vollständige Offline-Funktionalität gewährleistet zuver­ lässigen Zugriff auf organisierte Sammlungen.


Datenhoheit Musiksammlungen bleiben lokal gespeichert. Keine Cloud-Ab­ hängigkeiten oder Datenschutz-Probleme. DJs behalten voll­ ständige Kontrolle über ihre wertvollen Bibliotheken.


88 89


---
*Seite 46*


04 Finales Konzept Trackanalyse


Abb. 27 Multi-Modell-Analyse


Multi-Model Audio-Analyse


Das finale System analysiert jeden Track auf vier parallelen  Ebenen mit spezialisierten AI-Modellen und nutzt erweiterte  Modelle im Vergleich zum MVP


Discogs-EffNet als erweiterte Backbone  EfficientNet-Architektur, trainiert auf über 400 Genres des  Discogs-Datensatzes. Besondere Stärke bei elektronischer  Musik und historischen Releases der 80er/90er Jahre. Statt nur  Klassifikation extrahieren wir die internen 400-dimensionalen  Embeddings für Ähnlichkeitsberechnungen.


Stil-Klassifikation (400+ Kategorien) Automatische Stilzuordnung von Ambient bis Drum & Bass. Mul­ ti-Label-Ansatz ermöglicht Hybrid-Genres wie „Melodic Techno“  oder „Progressive House“. Besonders präzise bei elektronischen  Genres durch Discogs-Training.


Mood-Analyse (Emotionale Dimensionen) Erkennung von happy, aggressive, relaxed, sad und weiteren  Stimmungen. Basis für Set-Dramaturgie und Crowd-Manage­ ment. Kontextuelle Faktoren werden berücksichtigt.


Instrument-Recognition (MTG-Jamendo-Modell) Identifikation dominanter Instrumente: Drums, Bass, Synths, Vo­ cals. Unterscheidung zwischen elektronischen und akustischen  Elementen. Hilfreich für Mix-Kompatibilität und musikalische  Bridges.


Spektrale Analyse (Klangcharakteristika) Bright/Dark-Klassifikation, Bassanteil, Höhenverteilung. Dy­ namikumfang zeigt Komprimierung. Diese Features ergänzen  Genre-Information um klangliche Nuancen.


90 91


---
*Seite 47*


04 Finales Konzept KI als Werkzeug


04 Finales Konzept Adaptives Tagging


Das Grundprinzip: AI unterstützt DJs, ersetzt sie aber nicht.  Kurative Kontrolle bleibt beim Menschen.


Augmentation statt  Automation


Abb. 28 Recommendations


Vorschlagen, nicht entscheiden AI analysiert und kategorisiert, aber finale Entscheidungen  trifft der DJ. Automatische Tag-Vorschläge können akzeptiert,  modifiziert oder abgelehnt werden. Vollautomatisierung wird  bewusst vermieden.


Dazulernende Tags


Das MY TAGS System ermöglicht vollständig personalisierte  Organisation


Transparente Empfehlungen Statt Black-Box-Algorithmen werden AI-Entscheidungen er­ klärbar gemacht. DJs verstehen, warum bestimmte Tracks als  ähnlich vorgeschlagen werden. Feature-basierte Begründungen  erhöhen Vertrauen.


Beliebige Tag-Erstellung DJs definieren eigene Kategorien ohne Software-Limitierungen.  „Afterhour Vibes“, „Summer Festival“, „Emotional Builds“ - indivi­ duelle DJ-Sprache wird unterstützt.


Lernende Anpassung Das System lernt aus DJ-Entscheidungen ohne diese zu über­ schreiben. Verworfene Vorschläge verbessern zukünftige Emp­ fehlungen. Individuelle Präferenzen werden berücksichtigt.


Transparenz


Automatisches Profil-Lernen Wenn DJs Tracks zu selbsterstellten Tags hinzufügen, analysiert  das System deren Audio-Features. Für jedes Tag entsteht ein  charakteristisches Profil der assoziierten musikalischen Eigen­ schaften.


Feature-Visualisierung DJs sehen, welche Audio-Eigenschaften zu Ähnlichkeits-Emp­ fehlungen führen. BPM-Kompatibilität, Genre-Überschneidun­ gen, Mood-Ähnlichkeiten werden transparent dargestellt.


Intelligente Vorschläge Basierend auf gelernten Tag-Profilen schlägt das System auto­ matisch passende Tracks vor. Ähnlichkeit zu bereits kategori­ sierten Tracks bestimmt Empfehlungen.


Konfidenz-Scores  AI-Empfehlungen haben Vertrauenswerte. Hohe Konfidenz =  wahrscheinlich relevant. Niedrige Konfidenz = experimenteller  Vorschlag. DJs können Risiko-Level selbst wählen.


92 93


---
*Seite 48*


04 Finales Konzept Tagkategorien


Dazulernende Tags


DJs können hier ihrer Kreativität freien Lauf lassen und völlig  eigene Organisationssysteme entwickeln. Jeder DJ spricht seine  eigene „Musiksprache“ - diese individuellen Begriffe und Kate­ gorien spiegeln persönliche Erfahrungen, musikalische Präferen­ zen und Workflow-Gewohnheiten wider. Das System lernt diese  persönlichen Ordnungsstrukturen und schlägt automatisch  passende Tracks für die selbst erstellten Kategorien vor.


Beispielhafte Hierarchische Organisation Tags können in Kategorien angelegt werden: •	 Style-Tags: Chunky-Bass, Floaty, Stomper, Rolly-Groove •	 Context-Tags: Opening-Set, Prime-Time, Cool-Down, Tran­ sition-Perfect   •	 Situation-Tags: Crowd-Tester, Floor-Filler, Hands-Up-Track,  Surprise-Drop •	 Mood-Tags: Dreamy-Breakdown, Driving-Hypnosis, FeelGood-Vibes, Dark-Journey


Abb. 29 Sidebar


94 95


---
*Seite 49*


04 Finales Konzept Aufbau mentaler Modelle


Räumliche Visualisierung als  Lösungsansatz


Listen-Ansichten versagen bei großen Libraries und räumliche  Visualisierung kann Überblick schaffen. Die Visualisierung war  unsere Designlösung, um explorative Navigation zu ermöglichen  und die neu angereicherten AI-Metadaten optimal nutzbar zu  machen, anstatt sie in starren Listen zu verstecken.


Konsistente Genre-Territorien als Interface-Design Unser System positioniert Techno-Tracks immer im gleichen  Kartenbereich, Deep House erhält ein festes Gebiet. Diese räum­ liche Konsistenz ist eine bewusste Interface-Entscheidung, um  DJs zu ermöglichen, räumliche Orientierung zu entwickeln - ein  Konzept, das von physischen Plattensammlungen bekannt ist.


Übergangszonen für AI-Feature-Exploration Zwischen Genre-Clustern entstehen automatisch Hybrid-Be­ reiche durch die AI-Analyse. Melodic Techno positioniert sich  zwischen Techno und Progressive House. Diese Zonen machen  die komplexen AI-Features explorierbar und ermöglichen das  Entdecken unerwarteter musikalischer Verbindungen, die in tra­ ditionellen Listen-Ansichten verborgen blieben.


Abb. 30 Map


96 97


---
*Seite 50*


04 Finales Konzept Exploration der Musikbibliothek


Abb. 31 Similarity Map


98 99


---
*Seite 51*


04 Finales Konzept Exploration der Musikbibliothek


Similarity Map


Map (Hauptvisualisierung) Die große 2D-Visualisierung auf der rechten Seite zeigt die Mu­ siksammlung als Punktwolke. Jeder Punkt repräsentiert einen  Track. Die Punkte sind in zwei Farben dargestellt: Orange für  ausgewählte/gefilterte Tracks und Grau für nicht-ausgewählte  Tracks. Die Punkte bilden natürliche Cluster und Verteilungs­ muster über die gesamte Fläche.


Filterpanel (Unterer Bereich) Das Filterpanel ist dazu da, Tracks zu highlighten. Es ist in drei  gleichmäßig aufgeteilte Bereiche gegliedert, jeweils mit dunklem  Hintergrund und eigener Suchfunktion für Features.


Confidence Slider (Oben rechts) Der Confidence Slider kontrolliert das Highlighting der Punkte.  Wird die Confidence hoch eingestellt, werden Tracks gehighl­ ighted, die mit hoher Konfidenz der Auswahl aus dem Filter-Pa­ nel entspricht.


Abb. 31 Similarity Map


Lasso und Path Tool (Oben rechts) Das Lasso-Tool ermöglicht die freie Auswahl mehrerer Tracks  durch Aufziehen einer beliebigen Form auf der 2D-Map. DJs  können mit der Maus eine Auswahlkontur um Gruppen von  Tracks ziehen, um diese gemeinsam zu selektieren. Das PathTool bietet eine präzisere lineare Auswahl entlang eines definier­ ten Pfades.


Selected Tracks Container (Links) Der Selected Tracks Container dient der temporären Speiche­ rung von Tracks und zeigt die aktuelle Auswahl an. Hier werden  manuell ausgewählte Tracks gesammelt, um sie später zu Cra­ tes hinzuzufügen, zu exportieren oder anderweitig zu verwalten.  Der Container fungiert als Zwischenspeicher für die Arbeit mit  mehreren Tracks gleichzeitig.


100 101


---
*Seite 52*


04 Finales Konzept Exploration der Musikbibliothek


Abb. 32 XY Map


102 103


---
*Seite 53*


04 Finales Konzept Exploration der Musikbibliothek


XY Map


Der XY Mode ergänzt die Similarity Map um eine interpretierbare  Alternative für gezielte Musikexploration. Während die Similarity  Map auf abstrakten PCA-Dimensionen basiert, ermöglicht der  XY Mode die bewusste Auswahl spezifischer Audio-Features für  die X- und Y-Achse.


Set-Planung mit fließenden Stilübergängen Der XY Mode eignet sich vor allem gut für die Set-Planung, weil  man konkrete Werte gegeneinanderstellen kann - zum Bei­ spiel zwei verschiedene Musikstile. Dadurch kann man Sets mit  fließenden Stilübergängen erstellen. DJs können gezielt Tracks  identifizieren, die zwischen zwei Genres oder Stimmungen ver­ mitteln, indem sie die Übergangszonen auf der Map nutzen.


Abb. 32 XY Map


104 105


---
*Seite 54*


04 Finales Konzept Organisationsebenen


Library


Gesamtsammlung mit vier Ansichten Alle importierten Tracks in einer zentralen Datenbank, orga­ nisiert in vier Hauptkategorien: Tracks, Albums, Artists und  Labels. Jede Ansicht bietet spezifische Navigation für unter­ schiedliche Organisationsbedürfnisse.


Tracks-Ansicht Vollständige Track-Liste mit allen Metadaten, sortierbar nach  BPM, Key, Genre, Import-Datum. Basis für detaillierte Track-Ver­ waltung und -Analyse.


Albums-Ansicht Gruppierung nach Releases und EPs, nützlich für kohärente  Album-Präsentation und Set-Planung mit thematischen Zusam­ menhängen.


Artists-Ansicht Organisation nach Produzenten und Remixern, ideal für Artistfokussierte Set-Vorbereitung und Entdeckung neuer Tracks  bekannter Künstler.


Labels-Ansicht Gruppierung nach Plattenlabels mit MusicBrainz-Integration, er­ möglicht stilorientierte Navigation und Label-Discovery.


Import-Pipeline Drag & Drop für einzelne Files oder komplette Ordner. Automa­ tische Duplikatserkennung. Background-Analyse neuer Tracks.  Batch-Import für große Sammlungen. Metadaten werden auto­ matisch allen vier Ansichten zugeordnet.


Abb. 33 Albums


106 107


---
*Seite 55*


04 Finales Konzept Exploration der Musikbibliothek


Abb. 34 Tracks


108 109


---
*Seite 56*


04 Finales Konzept Exploration der Musikbibliothek


Abb. 35 Albums


110 111


---
*Seite 57*


04 Finales Konzept Exploration der Musikbibliothek


Abb. 36 Labels


112 113


---
*Seite 58*


04 Finales Konzept Exploration der Musikbibliothek


Abb. 37 Artists


114 115


---
*Seite 59*


04 Finales Konzept Organisationsebenen


Labels


Label-basierte Gruppierung Automatische Gruppierung von Releases nach Plattenlabel (z.B.  Afterlife, Kompakt, Drumcode). Labels repräsentieren oft ähn­ liche Musikstile und Qualitätsstandards, wodurch sie wertvolle  Orientierungspunkte für DJs darstellen.


Metadata-Extraktion Label-Informationen werden aus ID3-Tags oder Dateinamen  extrahiert. Zusätzlich nutzt das System die MusicBrainz API für  erweiterte Label-Metadaten und Beziehungen zwischen Labels.  Manuelle Zuordnung und Korrektur bei unvollständigen Metada­ ten möglich. Label-Profile entwickeln sich aus den enthaltenen  Track-Eigenschaften.


MusicBrainz-Integration für Label-Clustering Die MusicBrainz API liefert umfangreiche Daten über Label-Hie­ rarchien, Sub-Labels und Verwandtschaften. Das System nutzt  diese Informationen für intelligentes Label-Clustering - Major  Labels werden mit ihren Sub-Labels verknüpft, verwandte Im­ prints werden gruppiert und Label-Familien werden automatisch  erkannt.


Abb. 38 Labels 2


116 117


---
*Seite 60*


04 Finales Konzept Organisationsebenen


Crates


Container-System Klassische Ordner-Metapher aus der Vinyl-Ära. Tracks können in  mehreren Crates gleichzeitig sein.


Drag & Drop Organisation Tracks aus Library in Crates ziehen. Zwischen Crates verschie­ ben. Visual Feedback bei gültigen Drop-Zonen. Intuitive Organi­ sation ohne Menü-Navigation. Hinzufügen zu Crates und Tags  auch über das Kontextmenü möglich.


Smart Crates


Abb. 39 Crates


Regelbasierte Automatisierung Crates befüllen sich automatisch basierend auf Kriterien. „Alle  Techno-Tracks über 130 BPM und Energy > 0.7“. Dynamische  Updates bei neuen Imports.


Live-Updates Smart Crates aktualisieren sich automatisch. Neue Tracks er­ scheinen sofort bei Kriterien-Match. Keine manuelle Pflege nötig.


Abb. 40 Smart-Crates


118 119


---
*Seite 61*


04 Finales Konzept Organisationsebenen


Tags


Flexible Metadaten-Schicht Tags überlappen Crate-Grenzen. Ein Track kann mehrere Tags  haben. Ermöglicht facettierte Klassifikation statt hierarchischer  Ordner.


Cross-Referenzierung Tags verbinden Tracks über Crate-Grenzen hinweg. „Favorites“  kann Tracks aus verschiedenen Genre-Crates enthalten. Multidimensionale Organisation.


Abb. 41 Tags


120 121


---
*Seite 62*


04 Finales Konzept Datenbank


04 Finales Konzept Datenbank


Abb. 42 SQL Schema


Hybride Datenstruktur


SQLite für Metadaten Lokale Datenbank für Track-Informationen, Tags, Crates. JSONBLOBs für komplexe Feature-Arrays. Schnelle Queries auch bei  50.000+ Tracks.


Abb. 43 Vektor-Index


Vektordatenbank für Ähnlichkeitsberechnungen  Spezialisierte Vektordatenbank für hochdimensionale AudioFeatures. Jeder Track wird als 400-dimensionaler Vektor ge­ speichert, der die kombinierten Embeddings aus Genre-, Mood-,  Instrument- und spektralen Modellen enthält.


Optimierte Similarity Search Approximate Nearest Neighbor (ANN) Algorithmen für schnelle  Ähnlichkeitssuche auch bei großen Sammlungen. Cosine-Simi­ larity für musikalische Verwandtschaft. Indexierung ermöglicht  Sub-Sekunden-Queries bei 50.000+ Tracks.


Vektorraum-Struktur Die 400-dimensionalen Vektoren organisieren sich in einem  komplexen Raum, wo musikalische Ähnlichkeit durch räumliche  Nähe repräsentiert wird. Diese Struktur ermöglicht die automa­ tische Erkennung von Musik-Clustern und Stilübergängen ohne  manuelle Kategorisierung.


122 123


---
*Seite 63*


04 Finales Konzept Filtermechanismen


04 Finales Konzept Waveforms


Abb. 45 Waveforms


Abb. 44 Filterpanel


Dynamische Filter


Interaktive Waveforms


Feature-basierte Filter Genre-Checkboxes, Mood-Auswahl. Live-Updates der Ergebnis­ se bei Filter-Änderungen.


Adaptive Filter-Optionen   Verfügbare Filter generieren sich dynamisch aus vorhandenen  Track-Features. Nur tatsächlich vorhandene Genres/Moods  werden angeboten.


Dynamische Sortierung Features werden Grundlegend nach Frequenz im Datensatz  sortiert, um schnellen Zugriff zu gewährleisten


Die interaktiven Waveforms ermöglichen DJs schnell in relevante  Abschnitte des Tracks zu springen, um schnell die charakteris­ tischen Momente eines Songs zu identifizieren. Durch Klick auf  die Wellenform können DJs direkt zu Drops, Breaks, Vocal-Parts  oder anderen markanten Stellen navigieren, ohne den gesamten  Track durchhören zu müssen. Dies beschleunigt den Bewer­ tungsprozess erheblich - besonders bei der Organisation großer  Musiksammlungen oder der spontanen Track-Auswahl während  Live-Sets. Die visuellen Peaks und Strukturen der Waveform ge­ ben dabei zusätzliche Hinweise auf Energie-Level und Songauf­ bau, was DJs bei der schnellen Einschätzung der Track-Eignung  für bestimmte Set-Momente unterstützt.


124 125


---
*Seite 64*


04 Finales Konzept Nutzung nach der Organisation


Export


M3U Playlist Export Standardisierte M3U-Dateien für breite Kompatibilität mit DJSoftware. Crates werden zu .m3u-Playlists exportiert. Funktio­ niert mit Rekordbox, Serato, Traktor und den meisten anderen  DJ-Programmen. Da Rekordbox closed source und proprietär ist,  setzen wir auf offene Standards. DJs müssen im Voraus durch­ dachte Crates und Playlists erstellen, da erweiterte Metadaten  wie Tags nur begrenzt übertragbar sind.


Ordner-basierter Export   Traditionelle Verzeichnisstruktur für USB-Sticks. Crate-Namen  werden zu Ordnern. Datei-Kopien mit konsistenter Benennung.  Kompatibel mit CDJ-Hardware.


Die finale Lösung integriert alle Workflow-Phasen von der  AI-Analyse bis zum Hardware-Export. DJs behalten kurative  Kontrolle bei gleichzeitiger Automatisierung repetitiver Auf­ gaben.


126 127


---
*Seite 65*


128 129


---
*Seite 66*


05 Prototyping & Validation Entwicklungsprozess


Entwicklungsprozess


Phase 1: MVP-Validierung der AI-Klassifizierung Der erste Prototyp hatte ein klares Validierungsziel: Herausfin­ den, ob automatische semantische Musikklassifizierung präzi­ se genug ist, um DJs echten Mehrwert zu bieten. Dieses MVP  mit einfacher Listendarstellung und Style-Analyse bewies die  Grundannahme: AI-basierte Feature-Extraktion funktioniert zu­ verlässig für DJ-Anwendungen.


Abb. 46 MVP


Phase 2: Vollständiger Prototyp mit 2D-Visualisierung   Basierend auf den MVP-Erkenntnissen entwickelten wir einen  High-Fidelity-Prototyp mit räumlicher Track-Visualisierung,  erweiterten AI-Features (Instruments + Moods + Spectral) und  interaktiver 2D-Map-Navigation. Diese fortgeschrittene Version  wurde in strukturierten Usability-Tests mit Steve und Carsten  validiert.


Abb. 47 Finaler Prototyp


130 131


---
*Seite 67*


05 Prototyping & Validation MVP


Abb. 48 MVP 2


132 133


---
*Seite 68*


05 Prototyping & Validation Entwicklungsprozess


Von Liste zu räumlicher  Exploration


MVP-Erkenntnisse: Technische Machbarkeit bestätigt   Die ersten Tests mit Discogs-EffNet und MTG-Jamendo-Model­ len zeigten vielversprechende Klassifizierungsgenauigkeit. DJs  erkannten die AI-generierten Empfehlungen als sinnvoll und  präzise. Diese Validierung der Kernhypothese ermöglichte die  Weiterentwicklung zum vollständigen Prototyp.


Eindimensionale Darstellung unzureichend Das MVP offenbarte ein kritisches Interface-Problem: Die Lis­ tendarstellung war nicht explorativ genug für DJ-Workflows.  DJs benötigen räumliche Orientierung in ihren Musiksammlun­ gen, um Ähnlichkeiten und Cluster zu erkennen. Diese Erkenntnis  führte zur Entwicklung der PCA-basierten 2D-Visualisierung.


Skalierungs-Anforderungen für professionelle Libraries  Professionelle DJs verwalten oft Sammlungen von 20.000+  Tracks. Unsere Implementierung berücksichtigt diese Realität  durch optimierte Algorithmen: PCA-Berechnung, Clustering und  Ähnlichkeitssuche bleiben auch bei extremen Datenmengen  responsive.


Praxistauglichkeit statt  akademischer Isolation


Integration in reale DJ-Workflows Ein zentrales Designprinzip war die Entwicklung eines Produkts,  das außerhalb des „luftleeren Raums“ funktioniert. Der Ansatz  priorisierte von Anfang an Kompatibilität mit bestehenden DJÖkosystemen und echten Musiksammlungen.


Proof of Concept für Marktintegration Die umfangreiche Competitive Analysis war praktische Not­ wendigkeit für realistische Produktentwicklung. Nur durch  detailliertes Verständnis bestehender Tools konnten wir Integ­ rationsmöglichkeiten identifizieren und Alleinstellungsmerkmale  entwickeln.


134 135


---
*Seite 69*


05 Prototyping & Validation Framework


ReactJS


Python


Komponentenbasierte Architektur React ermöglichte modulare UI-Entwicklung für komplexe  DJ-Interfaces. Track-Komponenten lassen sich wiederverwen­ den, Filter-Panels sind dynamisch anpassbar, Visualisierungen  reagieren interaktiv auf Benutzereingaben.


Audio-Analyse Backend Essentia-Framework für Feature-Extraktion läuft im PythonBackend. Discogs-EffNet und MTG-Jamendo-Modelle verarbei­ ten Audio-Dateien. Separate Prozesse verhindern UI-Blocking  bei intensiven Berechnungen.


SQLite Datenbank-Integration Python verwaltet lokale Musikdatenbank. JSON-BLOBs spei­ chern komplexe Feature-Arrays. Optimierte Queries auch bei  10.000+ Track-Sammlungen.


State-Management für große Datenmengen   React Context verwaltet Track-Libraries zentral. Optimistic Up­ dates sorgen für responsive Bedienung auch bei 10.000+ Tracks.  Lazy Loading verhindert Performance-Probleme bei großen  Sammlungen.


IPC-Kommunikation Inter-Process Communication zwischen React-Frontend und  Python-Backend. Asynchrone Nachrichtenaustausch für respon­ sive UI. Error-Handling für robuste Audio-Verarbeitung.


Virtual DOM Performance Nur sichtbare Tracks werden gerendert. Ermöglicht flüssiges  Scrollen durch endlose Listen. Memory-effiziente Darstellung  auch bei extremen Bibliothekengrößen.


Electron


Cross-Platform Desktop-Anwendung Eine Codebasis funktioniert auf Windows, macOS und Linux.  Native OS-Integration für Drag & Drop-Operationen. Direkter  Dateisystem-Zugriff für Musiksammlungen ohne Browser-Si­ cherheitsbeschränkungen.


Native Desktop-Features Menüleisten, Keyboard-Shortcuts, Systembenachrichtigungen.  Integration mit OS-Medien-Controls. Window-Management für  Multi-Monitor-DJ-Setups.


Performance-Vorteile   Dedicated Prozesse für UI und Audio-Analyse. Keine Upload/ Download-Latenz wie bei Web-Apps. Vollständige Offline-Funk­ tionalität ohne Internet-Abhängigkeit.


136 137


---
*Seite 70*


05 Prototyping & Validation Stack


Abb. 49 Stack


138 139


---
*Seite 71*


05 Prototyping & Validation Fortgeschrittener Prototyp


05 Prototyping & Validation Fortgeschrittener Prototyp


Testkonzept und erweiterte  Feature-Validierung


Testdesign für vollständigen Funktionsumfang   Der zweite Usability-Test validierte den fortgeschrittenen  Prototyp mit vollständiger 2D-Map-Visualisierung, erweiterten  AI-Features (Instruments + Moods + Spectral) und interaktiven  Explorations-Tools. Das strukturierte Think-Aloud-Protokoll um­ fasste sechs definierte Aufgaben:


Abb. 50 Usability-Test Steve


Teilnehmer-Profile und  Testgruppe


Diverse Erfahrungslevel und Arbeitsweisen  Die Testgruppe umfasste DJs mit unterschiedlichen Erfahrungs­ leveln und Organisationsansätzen. Das Spektrum reichte von  semi-professionellen DJs mit 3-4 Jahren Erfahrung bis zu er­ fahrenen Anwendern mit 8+ Jahren praktischer Erfahrung.


•	 Spezifische Track-Suche mit Multi-Feature-Filter-Kom­ binationen   •	 Tag-Erstellung und -Management für personalisierte Orga­ nisation   •	 AI-Empfehlungssystem Bewertung mit erweiterten Fea­ tures   •	 2D-Map-Visualisierung für räumliche Musikexploration   •	 XY-Modus für parametrische Set-Planung mit interpretier­ baren Achsen


Verschiedene Organisationsphilosophien •	 Genre-orientierte Organisation: Mit zusätzlichen Mood-Ka­ tegorien und Hot-Cue-Sets   •	 Event-basierte Strukturierung: Funktionale Organisation  nach Auftrittskontext   •	 Tool-Präferenzen: Hauptsächlich Rekordbox-Nutzer, teilwei­ se mit Traktor-Erfahrung   •	 Library-Größen: Von mittleren Sammlungen bis zu 5.000+  Track-Libraries


Diese Diversität ermöglichte die Validierung verschiedener  Nutzungsszenarien und Workflow-Präferenzen innerhalb  einer kontrollierten Testumgebung.


Kontrollierte Umgebung •	 Setting: Desktop-Computer mit Screen-Recording   •	 Software: High-Fidelity Prototyp mit vollständiger 2D-MapFunktionalität   •	 Dauer: 45-60 Minuten pro Session inklusive Nachbespre­ chung   •	 Dokumentation: Think-Aloud-Protokoll + Beobachtungs­ notizen


140 141


---
*Seite 72*


05 Prototyping & Validation Testergebnisse und Erkenntnisse


Übergreifende Validierung  der Kernkonzepte


Durchweg positive Resonanz auf 2D-Visualisierung   Die Teilnehmer zeigten erkennbare Begeisterung für die räum­ liche Musikexploration. Die Map-Visualisierung löste „Aha-Mo­ mente“ aus und wurde als innovativ und hilfreich bewertet. Kom­ mentare wie „krasses Programm“ und „mega geil“ verdeutlichten  die positive Aufnahme des Visualisierungskonzepts.


Die Fähigkeit, große Musikmengen visuell zu erfassen und  Ähnlichkeits-Cluster zu erkennen, traf genau den identifi­ zierten Pain Point des Überblicks in großen Libraries.


Bestätigung des Hybrid-Ansatzes: Augmentation statt Auto­ mation Die Testpersonen lehnten Vollautomatisierung entschieden ab  und bestätigten unser Designprinzip der kurativen Kontrolle. Die  Sorge vor vollständiger Automatisierung wurde deutlich formu­ liert - DJs wollen die finale Entscheidungshoheit behalten, um  ihre kurative Rolle zu bewahren.


Das AI-Empfehlungssystem wurde als hilfreich empfunden,  solange der DJ die finale Entscheidungskontrolle behält.


Validierung der Drag & Drop-Interaktion Das zentrale Interaction Pattern des Drag & Drop wurde erfolg­ reich validiert, besonders bei Nutzern ohne tiefe Legacy-Soft­ ware-Gewohnheiten. Die intuitive Erkennbarkeit des Tag-Sys­ tems und die Erwartung, Tracks direkt zu Tags ziehen zu können,  bestätigte die Designentscheidung für diese Interaktionsform.


Erfahrungslevel-spezifische Erkenntnisse Beginner-DJs zeigten weniger Widerstand gegen neue Inter­ face-Paradigmen und adaptierten innovative Features schneller.  Erfahrene DJs brachten wertvollen Kontext mit, hatten aber  stärkere Erwartungen basierend auf bestehender Software.  Diese Diversität validierte die Notwendigkeit flexibler Onboar­ ding-Strategien.


142 143


---
*Seite 73*


144 145


---
*Seite 74*


06 Visual Design Color Guide


Designphilosophie


Das Interface basiert auf einem konsequenten Dark Theme,  orientiert an professionellen DJ-Arbeitsumgebungen. Clubs  und Studios arbeiten bei gedämpftem Licht, DJ-Hardware nutzt  dunkle Oberflächen für Augenkomfort.


146 147


---
*Seite 75*


06 Visual Design Typografie


„Geist“ als charakteristi­ sche Schriftfamilie


Primäre Schriftfamilie  Geist von Vercel als moderne, technische Schriftfamilie für das  gesamte Interface. Die geometrische Sans-Serif bietet hohe  Lesbarkeit bei verschiedenen Schriftgrößen und verleiht dem  Tool einen zeitgemäßen, professionellen Charakter.


Typographische Hierarchie  Klare Größenabstufungen optimiert für DJ-Workflows: •	 Hauptüberschriften: 24px, Medium Weight für Bereichstitel •	 Track-Titel: 12px, Bold Weight für primäre Identifikation   •	 Künstlernamen: 12px, Regular Weight für sekundäre Infor­ mation •	 Metadaten: 12px, Regular Weight für BPM, Key, Genre •	 UI-Labels: 10px, Bold Weight für Interface-Elemente


Funktionale Typografie für  Live-Umgebungen


Performance-optimierte Darstellung  Größere Schriftgrößen für kritische Informationen wie Track-Ti­ tel und BPM-Werte. Reduzierte Informationsdichte verhindert  kognitive Überlastung während stressiger Live-Situationen.


Accessibility-Features   Skalierbare Schriftgrößen für verschiedene Bildschirmauflösun­ gen. Keyboard-Navigation mit visuellen Fokus-Indikatoren.


148 149


---
*Seite 76*


06 Visual Design Design Filters


150 151


---
*Seite 77*


06 Visual Design Atoms


152 153


---
*Seite 78*


06 Visual Design Molecules


154 155


---
*Seite 79*


06 Visual Design Organisms


156 157


---
*Seite 80*


158 159


---
*Seite 81*


07 Evaluation & Ausblick Reflexion


07 Evaluation & Ausblick Reflexion


Validierte Designprinzipien


Unsere empirische Forschung bestätigte vier zentrale Design­ prinzipien, die für DJ-Software-Entwicklung entscheidend sind:


Zentrale Forschungser­ kenntnisse


DJ-Workflows sind fragmentierter als angenommen  Unsere Interviews offenbarten, dass DJs durchschnittlich 8-12  verschiedene Tools parallel nutzen. Diese Fragmentierung ist  historisch gewachsen und strukturell schwer auflösbar.


Augmentation statt Automation DJs wollen kurative Kontrolle behalten und lehnen Vollautomati­ sierung ab. AI soll unterstützen, nicht ersetzen. Diese Erkenntnis  zieht sich durch alle Interviews und wurde in den Usability-Tests  deutlich bestätigt.


Organisationszeit übersteigt Performance-Zeit deutlich Der Großteil der musikbezogenen Zeit fließt in organisatorische  Aufgaben. Dieses Verhältnis wurde unterschätzt und zeigt enor­ mes Optimierungspotential.


Hybride Visualisierung löst das Usability-Funktionalität-Di­ lemma Die Kombination aus automatischer Exploration (Similarity Mode)  und interpretierbarer Darstellung (XY Mode) erfüllt sowohl ex­ plorative als auch gezielte Nutzungsszenarien.


Live-Performance-Stress entsteht durch unzureichende  Vorbereitung Die kritischen Momente beim Live-DJing sind direkte Folge  organisatorischer Schwächen. Bessere Tools zur Vorbereitung  reduzieren Performance-Stress erheblich.


Personalisierung ist entscheidend   Das adaptive MY TAGS System, das individuelle DJ-Terminologie  lernt, traf die Nutzeranforderungen präzise. Jeder DJ entwickelt  eigene Organisationssprache, die von Software unterstützt  werden muss.


Genre-übergreifende Problempatterns Trotz verschiedener Musikrichtungen zeigen alle DJs ähnliche  Organisationsprobleme. Die Lösungsansätze sind daher breit  anwendbar.


Marktlücke konkretisiert


Workflow-Integration beats Feature-Maximierung  Statt maximaler Funktionalität benötigen DJs nahtlose Integ­ ration zwischen den Workflow-Phasen Discovery, Organisation  und Performance.


Die strategische Fokussierung auf Vorbereitung statt Live-Per­ formance ermöglicht Koexistenz mit etablierten Playern (Re­ kordbox, Serato) ohne direkte Konfrontation. DJs können unser  Tool für Organisation nutzen und trotzdem ihre gewohnte Per­ formance-Software beibehalten.


160 161


---
*Seite 82*


07 Evaluation & Ausblick Reflexion


07 Evaluation & Ausblick Reflexion


User Centered Design Er­ kenntnisse


Design-Iteration basierend  auf Nutzer-Feedback


Die Usability-Tests führten zu konkreten Interface-Opti­ mierungen


Übergang von Listen- zu räumlicher Visualisierung Eine reine eindimensionale Listendarstellung erwies sich als  unzureichend für explorative Library-Erkundung und verhinderte  die optimale Nutzung der neu angereicherten Metadaten


Vielzahl user-zentrierter Forschungsmethoden bewährt  sich Durch den Einsatz verschiedener aufeinander abgestimm­ ter User Research-Methoden - von tiefgehenden qualitativen  Interviews über systematische Competitive Analysis bis hin  zu iterativen Usability-Tests - konnten wir sowohl emotionale  Nutzerinsights als auch objektive Marktdaten erfassen. Diese  triangulative Herangehensweise ermöglichte ein umfassendes  Verständnis der DJ-Bedürfnisse, das reine quantitative Umfra­ gen nicht hätten liefern können.


Reduzierte AI-Bevormundung bei Genre-Klassifikation  DJs fühlten sich durch vorgegebene AI-ermittelte Stile bevor­ mundet, was zur Entwicklung des personalisierbaren MY TAGS  Systems führte


Personas als Design-Anker   Die drei entwickelten Personas (Jasmin, Lio, Samuel) dienten  durchgängig als Referenz für Design-Entscheidungen. Konkrete  Nutzerbilder verhindern Feature-Inflation und technologie-ge­ triebene Entwicklung.


Diese Iterationen zeigen den Wert früher Nutzer-Einbindung  und bestätigen die Effektivität der eingesetzten user-zen­ trierten Forschungsmethoden im Design-Prozess.


Technische Validierung


Prototyping ermöglicht frühe Validierung Der funktionsfähige bewies die Machbarkeit unserer Konzepte  und identifizierte Usability-Probleme vor aufwändiger Vollent­ wicklung.


Audio-Feature-Extraction bewährt sich Die Extraktion von über 400 Audio-Features pro Track liefert  nutzbare Similarity-Berechnungen. Cosine-Similarity zwischen  Feature-Vektoren korreliert gut mit subjektiven DJ-Einschät­ zungen.


Überraschende Erkennt­ nisse


Kreativität durch Beschränkung Viele DJs schätzen die Beschränkungen ihrer aktuellen Tools, da  diese kreative Lösungen fordern. Vollständige Automation würde  diese geschätzte Herausforderung eliminieren.


Similarity-Visualization funktioniert t-SNE-basierte 2D-Projektionen preservieren lokale Ähnlich­ keitsstrukturen ausreichend für intuitive Navigation. Nutzer  erkannten musikalische Cluster ohne Erklärung.


Community-Aspekte unterschätzt Musik-Discovery erfolgt stark über soziale Netzwerke und DJCommunities. Rein technische Lösungen greifen zu kurz.


Adaptive Tagging zeigt Potential MY TAGS System lernte individuelle Nutzersprache innerhalb  weniger Beispiele. Konfidenz-Scores helfen bei der Bewertung  automatischer Vorschläge.


Performance-Kontext beeinflusst Organisation Club-DJs organisieren anders als Event-DJs oder Producer.  Diese kontextuellen Unterschiede sind für Software-Design  relevanter als Genre-Präferenzen.


162 163


---
*Seite 83*


07 Evaluation & Ausblick Ausblick


07 Evaluation & Ausblick Ausblick


Unser Anspruch Mögliche Weiterentwick­ lung


Das entwickelte Konzept und der funktionsfähige Prototyp stel­ len eine mögliche Grundlage für eine Weiterentwicklung dar. Die  Usability-Tests zeigten grundsätzliches Interesse der Nutzer an  der Lösung.


Ein zentraler Anspruch unseres Bachelorprojekts war es, eine  praxistaugliche Lösung zu entwickeln, die sich nahtlos in beste­ hende DJ-Workflows integrieren lässt. Statt disruptiver Innova­ tion setzten wir bewusst auf evolutionäre Verbesserung - das  Tool ergänzt etablierte DJ-Software, ersetzt sie aber nicht.


Integration in bestehende  Strukturen


Kompatibilität mit etablierten Tools Der M3U-Export ermöglicht problemlose Übergabe an Rekord­ box, Serato oder Traktor. DJs können ihre gewohnte Perfor­ mance-Software weiternutzen und profitieren trotzdem von der  AI-gestützten Organisation. Diese pragmatische Herangehens­ weise erhöht die Marktchancen erheblich.


Das Tool deckt zentrale Aspekte wie die AI-gestützte Musikana­ lyse und räumliche Visualisierung ab, bietet aber auch Potenzial  für zukünftige Erweiterungen. Weiteres Potenzial sehen wir  durch die Integration unseres Konzepts in ein umfassendes DJEcosystem, wie es bereits bei etablierten Plattformen wie Native  Instruments oder Pioneer DJ mit ihren vernetzten Software- und  Hardware-Landschaften existiert. Über eine solche Plattform  könnten DJs alle Aspekte ihres Workflows - von der Musikent­ deckung bis zur Live-Performance - zentral abwickeln.


Schrittweise Adoption Das Tool kann als reines Organisationswerkzeug eingesetzt  werden, ohne dass DJs ihre gesamte Arbeitsweise umstellen  müssen. Die 2D-Visualisierung bietet einen optionalen, aber  nicht zwingenden Workflow-Baustein.


Langfristig wäre eine Entwicklung denkbar, bei der die AI-Analy­ se auch Streaming-Dienste in Echtzeit klassifiziert und automa­ tisch kompatible Tracks für geplante Sets vorschlägt. Ergänzend  könnte das System Hardware-Integration für Live-Performance  bieten, um die organisierte Musikbibliothek nahtlos in DJ-Con­ troller und CDJs zu übertragen.


Mit dem in dieser Bachelorarbeit entwickelten Konzept wird eine  Grundlage geschaffen, auf der schrittweise weitere Funktio­ nen und Workflows realisiert werden können - mit dem Ziel, die  Organisationszeit zu reduzieren und die kreative Freiheit für DJs  zu erhöhen.


164 165


---
*Seite 84*


166 167


---
*Seite 85*


08 Anhang Abbildungsverzeichnis


08 Anhang Abbildungsverzeichnis


Abb. 45 Interaktive Waveform, Eigene Darstellung Abb. 46 MVP-Prototyp (Light-Theme), Eigene Darstellung Abb. 47 Finaler Prototyp (Dark-Theme), Eigene Darstellung Abb. 48 MVP-Prototyp (Detailansicht), Eigene Darstellung Abb. 49 Technischer Stack des Prototyps, Eigene Darstellung Abb. 50 Usability-Test mit Steve, Eigene Darstellung


Abb. 1 Projektplanung, Eigene Darstellung Abb. 2 Pino Peña, Eigene Darstellung Abb. 3 DJ Danik, Eigene Darstellung Abb. 4 Concussion, Eigene Darstellung Abb. 5 Townes, Eigene Darstellung Abb. 6 Polygonia, Eigene Darstellung Abb. 7 Toobris, Eigene Darstellung Abb. 8 Interview mit Pino Peña (Screenshot), Eigene Darstellung Abb. 9 Interview mit Polygonia (Screenshot), Eigene Darstellung Abb. 10 Persona Jasmin, Eigene Darstellung Abb. 11 Persona Lio, Eigene Darstellung Abb. 12 Persona Samuel, Eigene Darstellung Abb. 13 Screenshot von Rekordbox, Rekordbox Abb. 14 Screenshot von VirtualDJ, VirtualDJ Abb. 15 Screenshot von Apple Music, Apple Music Abb. 16 Screenshot von Lexicon, Lexicon Abb. 17 Kano-Modell zur Feature-Priorisierung, Eigene Darstellung Abb. 18 Info Clustering auf dem Whiteboard, Eigene Darstellung Abb. 19 Standard-Spektrogramm (Zeit-Frequenz-Darstellung), Eigene Darstellung Abb. 20 Mel-Spektrogramm (Menschliches Hörmodell), Eigene Darstellung Abb. 21 Chromagramm (Harmonische Inhalte), Eigene Darstellung Abb. 22 Wordcloud der Genre-Tags, Eigene Darstellung Abb. 23 Wahrscheinlichkeitsverteilung für den Stil „Techno“, Eigene Darstellung Abb. 24 Wahrscheinlichkeitsverteilung für den Stil „Electro“, Eigene Darstellung Abb. 25 Wireframes (Listen- und 2D-Map-Ansicht), Eigene Darstellung Abb. 26 Wireframes (Detailansicht 2D-Map), Eigene Darstellung Abb. 27 Multi-Modell-Analyse eines Tracks, Eigene Darstellung Abb. 28 Recommendations-Komponente, Eigene Darstellung Abb. 29 Sidebar mit MYTAGS, Eigene Darstellung Abb. 30 Visualisierung der Musikbibliothek als 2D-Map, Eigene Darstellung Abb. 31 Similarity Map Ansicht, Eigene Darstellung Abb. 32 XY Map Ansicht, Eigene Darstellung Abb. 33 Albums-Ansicht, Eigene Darstellung Abb. 34 Tracks-Ansicht, Eigene Darstellung Abb. 35 Albums-Ansicht (Detail), Eigene Darstellung Abb. 36 Labels-Ansicht, Eigene Darstellung Abb. 37 Artists-Ansicht, Eigene Darstellung Abb. 38 Labels-Ansicht (Detail), Eigene Darstellung Abb. 39 Crates-Ansicht, Eigene Darstellung Abb. 40 Smart-Crates-Regelwerk, Eigene Darstellung Abb. 41 Tag-Spalte in der Track-Liste, Eigene Darstellung Abb. 42 SQL-Schema der Datenbank, Eigene Darstellung Abb. 43 3D-Visualisierung des Vektor-Index, Eigene Darstellung Abb. 44 Filterpanel, Eigene Darstellung


168 169


---
*Seite 86*


08 Anhang Quellenverzeichnis


08 Anhang Quellenverzeichnis


Primärquellen


Performance-Tools


Interviews


Pioneer DJ RekordboxVersion  https://rekordbox.com


Pino Peña (29 Jahre, fortgeschrittener DJ)   Interview durchgeführt am 02.04.2025, Dauer: 28 Minuten   [Transkription verfügbar im Projektarchiv]


Serato DJ Pro https://serato.com


DJ Danik (Event-DJ, semi-professionell)   Interview durchgeführt am 03.04.2025, Dauer: 25 Minuten


Native Instruments Traktor Pro https://traktor.com


VirtualDJ https://virtualdj.com


Concussion  (23 Jahre, semi-professioneller DJ)  Interview durchgeführt am 01.04.2025, Dauer: 24 Minuten   [Transkription verfügbar im Projektarchiv]


Beatport DJ https://beatport.com


Townes (24 Jahre, Vinyl-DJ)   Interview durchgeführt am 01.04.2025, Dauer: 23 Minuten   [Transkription verfügbar im Projektarchiv]


Musikverwaltungs-Tools


MP3Tag https://mp3tag.de


Polygonia (29 Jahre, professionelle DJ)   Interview durchgeführt am 01.04.2025, Dauer: 32 Minuten   [Transkription verfügbar im Projektarchiv]


MediaMonkey  https://mediamonkey.com


Toobris (24 Jahre, Club-DJ)   Interview durchgeführt am 26.03.2025, Dauer: 30 Minuten   [Transkription verfügbar im Projektarchiv]


Lexicon https://lexicondj.com


Usability-Tests


Mixed In Key https://mixedinkey.com


DJOID https://djoid.com


Steve (28 Jahre, Hobby-DJ)   Usability-Test durchgeführt am 19.06.2025, Dauer: 99 Minuten   MVP-Prototyp-Test mit Think-Aloud-Protokoll  [Transkription verfügbar im Projektarchiv]


Carsten Usability-Test durchgeführt am 12.05.2024, Dauer: 48 Minuten   MVP-Prototyp-Test mit Think-Aloud-Protokoll [Transkription verfügbar im Projektarchiv]


Lisa Friedrich Usability-Test durchgeführt am 27.06.2024, Dauer: 23 Minuten   MVP-Prototyp-Test mit Think-Aloud-Protokoll [Transkription verfügbar im Projektarchiv]


170 171


---
*Seite 87*


08 Anhang Quellenverzeichnis


08 Anhang Quellenverzeichnis


Datenbanken und APIs


Essentia Open-Source-Framework für Audio-Feature-Extraktion   Entwickelt von Music Technology Group (MTG), Universitat Pompeu Fabra   GitHub: https://github.com/MTG/essentia   Dokumentation: https://essentia.upf.edu


MusicBrainz API  Open Music Encyclopedia für Metadaten-Anreicherung   API-Dokumentation: https://musicbrainz.org/doc/MusicBrainz_API   Verwendung für Label-Hierarchien und Artist-Informationen


Discogs-EffNet Modell EfficientNet-Architektur, trainiert auf Discogs-Datensatz   400+ Genre-Kategorien, spezialisiert auf elektronische Musik   Basis für Genre-Klassifikation im entwickelten System


SQLite Lokale Datenbank für Metadaten-Speicherung   https://sqlite.org


MTG-Jamendo-Modell Instrument-Recognition-Modell der Music Technology Group   Trainiert auf Jamendo-Datensatz für Instrumentenerkennung   Verwendung für Drums, Bass, Synths, Vocals Detection


Discogs API Musik-Datenbank für Vinyl-Releases und Label-Informationen   API-Dokumentation: https://discogs.com/developers   Referenz für Vinyl-DJ-Workflows und Label-Clustering


Entwicklungsframeworks


Musik-Plattformen (Research-Kontext)


Bandcamp Indie-Musik-Plattform für DJ-Discovery-Workflows   Referenz für Metadaten-Qualität und Künstler-Information


React JavaScript-Framework für Frontend-Entwicklung   Offizielle Website: https://react.dev   Komponenten-basierte Architektur für komplexe DJ-Interfaces


Beatport Electronic Music Store für DJ-Musik   Referenz für Genre-Kategorisierung und DJ-Charts


Electron Cross-Platform Desktop-Anwendungsentwicklung   Offizielle Website: https://electronjs.org   Ermöglicht native OS-Integration für Dateisystem-Zugriff


SoundCloud Audio-Streaming-Plattform   Referenz für Promo-Tracks und Musik-Discovery


Python Backend-Sprache für Audio-Analyse und Datenbankmanagement   Offizielle Website: https://python.org   Integration mit Essentia für Audio-Feature-Extraktion


Hardware-Referenzen


Pioneer DJ CDJ-Serie Club-Standard-Hardware für USB-Export-Kompatibilität   Referenz für Export-Format-Anforderungen


172 173


---
*Seite 88*


08 Anhang Musikverzeichnis


08 Anhang Danksagung


Danke


Dub Schneider, Skee Mask, ISS010, 2024


Soap Bubbles, Move D, Kunststoff, 1995


Silent Now, Andrea, Due in Color, 2023


Besonderer Dank gilt allen DJ-Interview-Teilnehmern, die ihre  Zeit und Expertise großzügig geteilt haben: Pino Peña, DJ Danik,  Concussion, Townes, Polygonia und Toobris. Ihre ehrlichen Ein­ blicke in DJ-Workflows und -Probleme bildeten das Fundament  dieser Arbeit.


Hedonic Setpoint, Malin Genie, Hedonic Setpoint III, 2024


Freak, Tils, MP07, 2023


Faith in Strangers, Andy Stott, Faith in Strangers, 2014


Live Wire, Lucas Rodenbush, Rodenbush EP, 2002


Wir danken unseren Betreuern Prof. David Oswald und Prof.  Michael Schuster für ihre methodische Unterstützung und  kritische Reflexion der Forschungsansätze. Die interdisziplinä­ re Perspektive zwischen Design, Technologie und Musikkultur  war entscheidend für den Projekterfolg. Zusätzlich danken wir  Prof. Jens Döring und Prof. Ulf Harr für ihre wertvollen Exper­ teninterviews und Einschätzungen, die zur Vertiefung unserer  Forschung beitrugen.


Funky Nassau, The Beginning of the End, Funky Nassau, 1971


Atlas, Blawan, Nutrition, 2017


Den Usability-Test-Teilnehmern Stefan, Carsten und Lisa danken  wir für ihr konstruktives Feedback und ihre geduldige Unterstüt­ zung während der Prototyping-Phase.


Joy, Shakti, Shakti with John McLaughlin, 1976


Darkstar System Malfunction, Fields Of Mist, Secrets Of The Nebula, 2025


Metamorphosis, Arthur Robert, Metamorphosis, 2021


Quadrant Dub, Basic Channel, Quadrant Dub, 1994


Besonderer Dank gilt auch Bryan Müller (Skee Mask) für seine  kritische Einschätzung zur Nutzung von KI in der Musikklassi­ fizierung. Seine Perspektive trug maßgeblich zur Weiterent­ wicklung unseres zweiten Prototyps bei und lenkte den Fokus  darauf, DJs beim Aufbau eigener Terminologien zu unterstützen  und einen tieferen Bezug zur Musik zu schaffen, anstatt sich auf  automatisierte Klassifizierung zu beschränken.


Amber, Autechre, Amber, 1994


MP06, Tils & Maxim Vukovic, MP06, 2025


Lifeforms, Future Sound of London, Lifeforms, 1994


Waveform Transmission, Jeff Mills, Waveform Transmission Vol. 1, 1992


Make This Party Live, Cybonix, Make This Party Live, 2001


Ship-Scope, Shinichi Atobe, Ship-Scope, 2001


174 175


---
*Seite 89*


08 Anhang Eidesstattliche Versicherung


08 Anhang Anmerkungen


Sprachlich optimierte Texte


Eidesstattliche  Versicherung


Für die Erstellung der Dokumentation nahmen wir Claude von  Anthropic zur Hilfe. Das Tool half uns, Texte zu verfassen, zu  strukturieren und Argumentationen zu verfeinern.


Hiermit versichern wir, dass wir die vorliegende Arbeit selbst­ ständig verfasst und keine anderen als die angegebenen Quellen  und Hilfsmittel verwendet habeb. Alle Ausführungen, die wörtlich  oder sinngemäß übernommen wurden, sind als solche gekenn­ zeichnet.


Gendererklärung


Aus Gründen der besseren Lesbarkeit wird in dieser Bachelorar­ beit auf die gleichzeitige Verwendung der Sprachformen männ­ lich, weiblich und divers (m/w/d) verzichtet.  Sämtliche Formulierungen gelten gleichermaßen für alle Ge­ schlechter.


Ort, Datum Jannik Aßfalg


Schwäbisch Gmünd, 04.07.25


Ort, Datum Fabrice Rio


176 177

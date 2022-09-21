"use-strict";
// -----------------------------------
const titel = 'Das "kleine" Quiz 🤔'
// -----------------------------------
// 
// ein kleines Quiz von "Neo van Terra"

class Frage{
	constructor (frage, lösung, antwortA, antwortB, antwortC, antwortD){
		this.frage = frage;
		this.lösung = lösung
		this.antwortA = antwortA;
		this.antwortB = antwortB;
		this.antwortC = antwortC;
		this.antwortD = antwortD;
	}
}


const frageA1 = new Frage ('Wie heißt die Hauptstadt des Fürstentums Monaco?','Monaco','Paris','Sofia','Havanna','Monaco')
const frageA2 = new Frage ('Wie bezeichnet man einen Fehlschlag oder Misserfolg?','Fiasko','Fiskus','Figaro','Ferment','Fiasko')
const frageA3 = new Frage ('Durch welche Krankheit wurde im Mittelalter fast halb Europa entvölkert?','Pest','Typhus','Malaria','Kindbettfieber','Pest')
const frageA4 = new Frage ('Wie nennt man die Linie des größten Erdumfangs?','Äquator','Äquorin','Apsis','Viadukt','Äquator')
const frageA5 = new Frage ('Welcher der folgenden Begriffe beschreibt ein soziales Netzwerk?','Instagram','Instasnap','Instalike','Instadaily','Instagram')
const frageA6 = new Frage ('Welcher Begriff steht für eine Luftspiegelung?','Fata Morgana','Pappa Morgana','Mutta Morgana','Omma Morgana','Fata Morgana')
const frageA7 = new Frage ('Recep Tayyip Erdoğan ist seit 2014 der zwölfte Präsident der Republik ..?','Türkei','Bulgarien','Irak','Moldau','Türkei')
const frageA8 = new Frage ('Was bedeutet "Spider-Man" übersetzt?','Spinnen-Mann','Wolf-Mann','Schlangen-Mann','Ratten-Mann','Spinnen-Mann')
const frageA9 = new Frage ('In welcher italienischen Stadt steht ein sehr bekannter, schiefer Turm?','Pisa','Wisa','Lisa','Visa','Pisa')
const frageA10 = new Frage ('Ein Kinderlied aus dem 18. Jh., welches als 4-stimmiger Kanon gesungen wird, heißt "Bruder .."?','Jakob','Jonas','Johannes','Jack','Jakob')
const frageA11 = new Frage ('Was machen Personen, die "die Seele baumeln lassen"?','sich entspannen','sich aufregen','eskalieren','arbeiten','sich entspannen')
const frageA12 = new Frage ('Eine Arbeit oder Tätigkeit, die man zum Erwerb des Lebensunterhaltes ausübt, nennt man auch ..?','Broterwerb','Fleischerwerb','Wassererwerb','Obsterwerb','Broterwerb')
const frageA13 = new Frage ('Die Buchstabensuppe ist eine ..?','Nudelsuppe','Kartoffelsuppe','Reissuppe','Gulaschsuppe','Nudelsuppe')
const frageA14 = new Frage ('Zu den gartenbaulichen Maßnahmen zählt u. a. das ..?','Kompostieren','Kolportieren','Kompromittieren','Korrumpieren','Kompostieren')
const frageA15 = new Frage ('Einen schlecht geführten Betrieb bezeichnet man als ..?','Saftladen','Wasserbude','Teegeschäft','Biermarkt','Saftladen')
const frageA16 = new Frage ('Wie wird eine berühmte Persönlichkeit auch bezeichnet?','Star','Taube','Kiebitz','Kuckuck','Star')
const frageA17 = new Frage ('Manche Menschen klagen ständig über ihre ..?','Wehwehchen','Teeteechen','Effeffchen','Cecehchen','Wehwehchen')
const frageA18 = new Frage ('Was gehört nicht in ein Müsli?','Trockenfleisch','Haferflocken','Trockenobst','Nüsse','Trockenfleisch')
const frageA19 = new Frage ('Was können sich "Temposünder" einfangen?','Punkte','Striche','Klekse','Kommata','Punkte')
const frageA20 = new Frage ('Ein Mensch, der ausgiebig reist um des Reisens willen, ist ein ..?','Weltenbummler','Weltentrödler','Weltenschlenderer','Weltenklüngeler','Weltenbummler')
const frageA21 = new Frage ('Deutschland bezeichnet man auch als "Land der .."?','Dichter und Denker','Berichter und Lenker','Richter und Henker','Schlichter und Schenker','Dichter und Denker')
const frageA22 = new Frage ('Wie heißt eine 1982 gegründete, deutschsprachige Band aus Berlin?','Die Ärzte','Die Köche','Die Maurer','Die Schornsteinfeger','Die Ärzte')
const frageA23 = new Frage ('Wenn jemand begeistert ist, ist er laut einer Redewendung ..?','Feuer und Flamme','Wasser und Tropfen','Luft und Wind','Erde und Boden','Feuer und Flamme')
const frageA24 = new Frage ('Wie wird das mit einem Innengewinde versehene Gegenstück einer Schraube bezeichnet?','Mutter','Tante','Bruder','Vater','Mutter')
const frageA25 = new Frage ('Wer für Neues offen ist, schaut redensartlich über ..?','den Tellerrand','den Krugdeckel','die Besteckbegrenzung','die Glasgrenze','den Tellerrand')
const frageA26 = new Frage ('Bevor die Titanic unterging, rammte sie ..?','einen Eisberg','ein anderes Schiff','den Meeresboden','ein U-Boot','einen Eisberg')
const frageA27 = new Frage ('Das "C" in der Partei "CDU" steht für ..?','Christlich','Chronisch','Charmant','Chaotisch','Christlich')
const frageA28 = new Frage ('"Morgenstund .."?','hat Gold im Mund','tut Neues kund','macht alles rund','ist sehr gesund','hat Gold im Mund')
const frageA29 = new Frage ('Matthias Reim landete 1990 einen Hit mit "Verdammt, ich .."?','lieb’ Dich','seh´nix','mag nicht','frag´mich','lieb’ Dich')
const frageA30 = new Frage ('Der Valentinstag am 14. Februar gilt in einigen Ländern als Tag der ..?','Liebenden','Geschiedenen','Väter','Hundertjährigen','Liebenden')

const fragenA = [frageA1,frageA2,frageA3,frageA4,frageA5,frageA6,frageA7,frageA8,frageA9,frageA10,frageA11,frageA12,frageA13,frageA14,frageA15,frageA16,frageA17,frageA18,frageA19,frageA20,frageA21,frageA22,frageA23,frageA24,frageA25,frageA26,frageA27,frageA28,frageA29,frageA30]



const frageB1 = new Frage ('Kaiserin Elisabeth von Österreich nannte man auch ..?','Sisi','Elli','Susi','Lisa','Sisi')
const frageB2 = new Frage ('Wo beginnt der Fackellauf vor jedem Olympischen Spiel?','in Olympia','in Saloniki','in Cephalonia','in Piräus','in Olympia')
const frageB3 = new Frage ('Wie lautet ein anderes Wort für Volksabstimmung oder Wahl?','Urnengang','Laufbestattung','Sargrennen','Grabgesang','Urnengang')
const frageB4 = new Frage ('Wie nennt man einen pyrotechnischen Artikel, der zu Boden geworfen einen Knall auslöst?','Knallerbse','Knallbohne','Knalllinse','Knallkartoffel','Knallerbse')
const frageB5 = new Frage ('Welches Produkt von Ferrero darf in Deutschland nicht an Jugendliche unter 18 J. verkauft werden?','Mon Chéri','Rocher','Giotto','Hanuta','Mon Chéri')
const frageB6 = new Frage ('Pippilotta Viktualia Rollgardina Pfefferminz Efraimstochter ist der vollständige Vorname von ..?','Pippi Langstrumpf','Kalle Blomquist','Michel aus Lönneberga','Madita','Pippi Langstrumpf')
const frageB7 = new Frage ('Für welchen Club sind die "Gelben Engel" tätig?','ADAC','Rotaract','Rotes Kreuz','Lions','ADAC')
const frageB8 = new Frage ('Welche Frage gehört nicht zu den "W"-Fragen bei einem Notruf?','Wie ist das Wetter?','Wie viele Verletzte?','Wo ist es geschehen?','Was ist geschehen?','Wie ist das Wetter?')
const frageB9 = new Frage ('Mit welchem Schlüssel kann man innerhalb einer Schließanlage alle Schließzylinder öffnen?','Generalschlüssel','Admiralschlüssel','Feldwebelschlüssel','Maatschlüssel','Generalschlüssel')
const frageB10 = new Frage ('Für welche Produkte ist die Firma "Danone" in Haar bei München bekannt?','Molkereiprodukte','Damenunterwäsche','Korbwaren','Kosmetikartikel','Molkereiprodukte')
const frageB11 = new Frage ('Sind sich zwei nicht grün, sind sie ..?','wie Hund und Katz','verlobt','farbenblind','beste Freunde','wie Hund und Katz')
const frageB12 = new Frage ('Was ist ein "Zwetschgendatschi"?','Pflaumenkuchen','Rübenkraut','Apfelkuchen','Kartoffelbrei','Pflaumenkuchen')
const frageB13 = new Frage ('Am Ende verwandelt sich das Biest in "Die Schöne und das Biest" in einen ..?','schönen Prinzen','klugen Anwalt','grünen Frosch','reichen Müller','schönen Prinzen')
const frageB14 = new Frage ('Wie nennt man ein schlaues, kluges, mitunter berechnendes Verhalten einfacher Leute?','Bauernschläue','Müllerpfiffigkeit','Bäckerbegabung','Malerintelligenz','Bauernschläue')
const frageB15 = new Frage ('Die Mehrzahl von Kuchen ist ..?','Kuchen','Küchen','Küchenkuchen','Küchle','Kuchen')
const frageB16 = new Frage ('Der menschliche Körper besteht zum größten Teil aus ..?','Wasser','Muskelmasse','Bindegewebe','Fett','Wasser')
const frageB17 = new Frage ('Wenn etwas als unverständlich oder seltsam erscheint, dann kommt es einem ..?','spanisch vor','belgisch vor','französisch vor','englisch vor','spanisch vor')
const frageB18 = new Frage ('Wer im Mittelalter ausgestoßen oder geächtet wurde, der war danach ..?','vogelfrei','wurmfrei','keimfrei','astrein','vogelfrei')
const frageB19 = new Frage ('Ein Scherzartikel, der zum Mitmachen anregt, ist der ..?','Lachsack','Grinssack','Spottsack','Witzsack','Lachsack')
const frageB20 = new Frage ('"Hätte, hätte, .."?','Fahrradkette','lieber `ne Nette','miese Wette!','Marionette','Fahrradkette')
const frageB21 = new Frage ('Wie nennt man einen Zustand völliger Hoffnungslosigkeit?','Verzweiflung','Besserung','Ahnungslosigkeit','Drama','Verzweiflung')
const frageB22 = new Frage ('Die typischen IKEA-Farben sind ..?','blau + gelb','violett + blau','rot + gelb','rot + grün','blau + gelb')
const frageB23 = new Frage ('Welches der folgenden Spiele ist kein Kartenspiel?','Roulette','Mau-Mau','Quartett','Uno','Roulette')
const frageB24 = new Frage ('Redensartlich kommt man vom Regen in ..?','die Traufe','die Sonne','den Schneesturm','das Gewitter','die Traufe')
const frageB25 = new Frage ('Wie heißt ein Unterarmknochen?','Speiche','Spucke','Spalte','Sperre','Speiche')
const frageB26 = new Frage ('Wie heißt die Lebkuchen-Spezialität, die der Dresdner Herbert Wendler 1936 erfand?','Dominosteine','Stolpersteine','Backsteine','Nierensteine','Dominosteine')
const frageB27 = new Frage ('Wie lautet ein Synonym von "stolpern", "scheitern" oder "zu Fall kommen"?','straucheln','bäumeln','büscheln','ästeln','straucheln')
const frageB28 = new Frage ('Wie nennt man eine auffallend große, unförmige Nase?','Zinken','Zotte','Zänker','Zarge','Zinken')
const frageB29 = new Frage ('Welchen Zustand bezeichnet das Wort "liquide"?','flüssig','gefroren','kalt','heiß','flüssig')
const frageB30 = new Frage ('Wie viele Kerzen hat ein handelsüblicher Adventskranz?','4','24','2','17','4')

const fragenB = [frageB1,frageB2,frageB3,frageB4,frageB5,frageB6,frageB7,frageB8,frageB9,frageB10,frageB11,frageB12,frageB13,frageB14,frageB15,frageB16,frageB17,frageB18,frageB19,frageB20,frageB21,frageB22,frageB23,frageB24,frageB25,frageB26,frageB27,frageB28,frageB29,frageB30]



const frageC1 = new Frage ('Bei welcher Wintersportart benötigt man einen "Wettkampfbesen"?','Curling','Biathlon','Rennrodeln','Eishockey','Curling')
const frageC2 = new Frage ('Welche Titulierung ist positiv besetzt?','Pfiffikus','Warmduscher','Zappelphilipp','Angsthase','Pfiffikus')
const frageC3 = new Frage ('Wer die Wahl hat zwischen "Alles oder Nichts", entscheidet sich redensartlich zwischen "Sekt und ..?','Selters','Kranenwasser','Spülwasser','Galle','Selters')
const frageC4 = new Frage ('Welcher der folgenden Tänze stammt aus Brasilien?','Samba','Jive','Bolero','Charleston','Samba')
const frageC5 = new Frage ('Wo liegt die Halbinsel "Istrien"?','Mittelmeer','Südsee','Indischer Ozean','Karibik','Mittelmeer')
const frageC6 = new Frage ('Worin legt man ein "Solei" ein?','Kochsalzlösung','Wodka','Kaffee','Rum','Kochsalzlösung')
const frageC7 = new Frage ('Welchen Vogel gibt es nicht?','Schnapsente','Höckerschwan','Haubentaucher','Kiwi','Schnapsente')
const frageC8 = new Frage ('Welche Abkürzung steht für "Peer-to-Peer"?','P2P','PP8','C3PO','R2D2','P2P')
const frageC9 = new Frage ('Wie wird das Zentrum eines Hurrikans genannt?','Auge','Ohr','Nase','Lunge','Auge')
const frageC10 = new Frage ('Wenn man jemandem etwas sagt, was ihn aus der Ruhe bringt, setzt man ihm was ins Ohr?','einen Floh','einen Ohrwurm','eine Fliege','eine Hummel','einen Floh')
const frageC11 = new Frage ('Welcher "Schaden" meint metaphorisch eine geistige Krankheit?','Dachschaden','Wildschaden','Blechschaden','Kollateralschaden','Dachschaden')
const frageC12 = new Frage ('Welche Straße ist beim deutschen "Monopoly" die teuerste?','Schlossallee','Rathausplatz','Opernplatz','Goethestraße','Schlossallee')
const frageC13 = new Frage ('Wie wird ein unbeabsichtigter Verstoß gegen ungeschriebene Umgangsformen genannt?','Fauxpas','Hommage','Avantgarde','Chiffre','Fauxpas')
const frageC14 = new Frage ('Welche Autos benötigen weder Auspuff, Motoröl, Zündkerzen oder Keilriemen?','Elektroautos','Benziner','Dieselautos','Lastwagen','Elektroautos')
const frageC15 = new Frage ('In welchem Organ wird der Urin bis zu seiner Ausscheidung angesammelt?','Harnblase','Leber','Milz','Gallenblase','Harnblase')
const frageC16 = new Frage ('Was dient der Abgrenzung von Wörtern oder anderen Informationen innerhalb eines Textes?','Leerzeichen','Spaltzeichen','Lückezeichen','Breschezeichen','Leerzeichen')
const frageC17 = new Frage ('Wie bezeichnet man umgangssprachlich ein "unerforschtes Gebiet"?','weißer Fleck','grüner Punkt','blauer Flicken','roter Klecks','weißer Fleck')
const frageC18 = new Frage ('Was steht sinnbildlich für die Verfälschung von Nachrichten durch mehrfache informelle Weitergabe?','Stille Post','Leise Post','Ruhige Post','Laute Post','Stille Post')
const frageC19 = new Frage ('Was beschreibt einen Preisnachlass bei Zahlung innerhalb einer bestimmten Frist?','Skonto','Disagio','Kredit','Netto','Skonto')
const frageC20 = new Frage ('Welches "Loch" könnte für die Lebewesen auf der Erde unmittelbar zur Gefahr werden?','Ozonloch','Wurmloch','Sommerloch','Funkloch','Ozonloch')
const frageC21 = new Frage ('Wie nennt man einen mehrstimmigen Gesang ohne Instrumente?','a cappella','multi singalis','a capulco','accelerando','a cappella')
const frageC22 = new Frage ('"Bescheidenheit ist eine Zier, doch weiter .."?','kommt man ohne ihr','trink ich kein Bier','ist es aus mit dir','weiß ich nicht hier','kommt man ohne ihr')
const frageC23 = new Frage ('Was vermittelt das Buch von Adolph Freiherr Knigge?','Umgangsformen','Wissen über ferne Länder','Klatsch und Tratsch','Klatsch und Tratsch','Umgangsformen')
const frageC24 = new Frage ('Wo existieren keine tropischen Regenwälder?','Europa','Afrika','Mittelamerika','Südamerika','Europa')
const frageC25 = new Frage ('Wie nennt man den Schwanz des Pferdes?','Schweif','Wedel','Rute','Lunte','Schweif')
const frageC26 = new Frage ('Wie heißt ein bekannter deutscher Hersteller für Schusswaffen?','Walther','Wolfgang','Wilhelm','Werner','Walther')
const frageC27 = new Frage ('Was versteht man unter Krähenfüßen?','Augenfältchen','Zeltnägel','Ohrpiercings','Papierknicke','Augenfältchen')
const frageC28 = new Frage ('Wie heißt ein Bauelement zur unterbrechungsfreien Verbindung zweier Rohre oder Kabel?','Muffe','Puffe','Tuffe','Knuffe','Muffe')
const frageC29 = new Frage ('Als "Greenhorn" bezeichnet man ..?','Neulinge','Beulen am Kopf','Blasinstrumente','Nashörner','Neulinge')
const frageC30 = new Frage ('Die Beschreibung einer Immobilie bezeichnet man auch als ..?','Exposé','Exekutive','Exergie','Exaptation','Exposé')

const fragenC = [frageC1,frageC2,frageC3,frageC4,frageC5,frageC6,frageC7,frageC8,frageC9,frageC10,frageC11,frageC12,frageC13,frageC14,frageC15,frageC16,frageC17,frageC18,frageC19,frageC20,frageC21,frageC22,frageC23,frageC24,frageC25,frageC26,frageC27,frageC28,frageC29,frageC30]



const frageD1 = new Frage ('Wie heißt ein bekanntes Gütesiegel, das für fairen Handel wirbt?','FAIRTRADE','FAIRWORLD','FAIRPLAY','FAIRBUY','FAIRTRADE')
const frageD2 = new Frage ('Welches Kleidungsstück war von Joschka Fischer 1985 bei seiner Vereidigung ungewöhnlich?','die Turnschuhe','das Hemd','der Hut','das Sakko','die Turnschuhe')
const frageD3 = new Frage ('Wie heißt das mündlich übermittelte "Passwort" beim Militär?','Parole','Parade','Motto','Phishing','Parole')
const frageD4 = new Frage ('Welches Gebäude stürzte am 3. März 2009 beim Ausbau der Kölner U-Bahn ein?','Stadtarchiv','Heumarkt','Finanzamt','Kölner Dom','Stadtarchiv')
const frageD5 = new Frage ('Wie heißt laut Medien eine der bekanntesten Handgesten der Welt?','Merkel-Raute','Merkel-Quadrat','Merkel-Rechteck','Merkel-Kreis','Merkel-Raute')
const frageD6 = new Frage ('Von welchem Maler stammt das Bild "Betende Hände"?','Albrecht Dürer','Raffael','Jan van Eyck','Albrecht Altdorfer','Albrecht Dürer')
const frageD7 = new Frage ('Wie viele Buchstaben hat die englische Übersetzung von "Eins"?','3','1','2','4','3')
const frageD8 = new Frage ('Welcher dieser Kuchen ist schichtweise aufgebaut und wird über offener Flamme gebacken?','Baumkuchen','Sandkuchen','Stollen','Mooskuchen','Baumkuchen')
const frageD9 = new Frage ('Wie nennt man sämtliche, in einer Wohnung befindlichen Gebrauchs- und Verbrauchsgüter?','Hausrat','Wohnsitz','Vorrat','Heimstatt','Hausrat')
const frageD10 = new Frage ('Ins Fitnessstudio gehen viele laut Umgangssprache zum ..?','Pumpen','Abheben','Leihen','Borgen','Pumpen')
const frageD11 = new Frage ('Wie heißt die 1979 erstmals gestartete europäische Trägerrakete?','Ariane1','Venera1','Prima1','Europa1','Ariane1')
const frageD12 = new Frage ('Wie wird ein vertrauliches Zwiegespräch oder ein "Stelldichein" genannt?','Tête-à-Tête','Crème de la Crème','Vis-à-vis','Prêt-à-porter','Tête-à-Tête')
const frageD13 = new Frage ('Welcher Buchstabe ist seit dem 29. Juni 2017 Bestandteil der amtlichen deutschen Rechtschreibung?','das große ẞ','das kleine ᛉ','das große Ω','das kleine Σ','das große ẞ')
const frageD14 = new Frage ('Die Lehre von den Krankheiten des alternden Menschen bezeichnet man als ..?','Geriatrie','Enzyklopädie','Telekinese','Physiotherapie','Geriatrie')
const frageD15 = new Frage ('Ableger bzw. Absenker gibt es bei ..?','Pflanzen','Streichinstrumenten','der Pyrotechnik','Landkarten','Pflanzen')
const frageD16 = new Frage ('Welches ist das Lieblingsgetränk von "James Bond"?','Wodka Martini','Bloody Mary','Tequila Sunrise','Caipirinha','Wodka Martini')
const frageD17 = new Frage ('Welcher Begriff bezeichnet umgangssprachlich einen dicken Bauch?','Wampe','Wamme','Wams','Wobler','Wampe')
const frageD18 = new Frage ('Was ist der gegenteilige Begriff von Export?','Import','Ixport','Emport','Inport','Import')
const frageD19 = new Frage ('Welches "Nagetier" frisst sich durch die Weltliteratur?','Leseratte','Steinbeißer','Buchdrucker-Käfer','Schmökermaus','Leseratte')
const frageD20 = new Frage ('"Ranzen" beschreibt nicht nur eine auf dem Rücken getragene Schultasche, sondern auch ..?','einen voluminösen Bauch','ein Automodell','einen Speisepilz','eine fette Made','einen voluminösen Bauch')
const frageD21 = new Frage ('Wo war der "Bruderkuss" früher sehr verbreitet?','Ostblock','Commonwealth','Tirol','Lateinamerika','Ostblock')
const frageD22 = new Frage ('Welches Wort ist kein Synonym für eine handgreifliche Auseinandersetzung mehrerer Personen?','Schweinerei','Rauferei','Balgerei','Keilerei','Schweinerei')
const frageD23 = new Frage ('Wie heißt die beste Freundin Harry Potters?','Hermine','Dabney','Sibyll','Minerva','Hermine')
const frageD24 = new Frage ('Ein Synonym für eine vorbeugende Maßnahme heißt ..?','Prophylaxe','Implikation','Ataxie','Prävalenz','Prophylaxe')
const frageD25 = new Frage ('Das Ausplündern von Toten oder Schlafenden nennt man ..?','fleddern','flatten','fleuten','flecken','fleddern')
const frageD26 = new Frage ('Im Hintergrund von Microsoft Windows laufen diverse ..?','Dienste','Ämter','Posten','Pflichten','Dienste')
const frageD27 = new Frage ('In welchem Land hat der Hinduismus seinen Ursprung?','Indien','China','Kuba','Thailand','Indien')
const frageD28 = new Frage ('Was ist ein aus Zitaten bekannter Melodien zusammengestelltes Musikstück?','Potpourri','Purpurit','Parade','Poitou','Potpourri')
const frageD29 = new Frage ('Eine griechische Anisspirituose heißt ..?','Ouzo','Pastis','Aperol','Absinth','Ouzo')
const frageD30 = new Frage ('Eine Hasenpfote gilt im Volksmund als ..?','Glücksbringer','Kinderbringer','Unglücksbringer','Regenbringer','Glücksbringer')

const fragenD = [frageD1,frageD2,frageD3,frageD4,frageD5,frageD6,frageD7,frageD8,frageD9,frageD10,frageD11,frageD12,frageD13,frageD14,frageD15,frageD16,frageD17,frageD18,frageD19,frageD20,frageD21,frageD22,frageD23,frageD24,frageD25,frageD26,frageD27,frageD28,frageD29,frageD30]



const frageE1 = new Frage ('Ein "Ohrenkneifer" ist ..?','ein Insekt','ein Hörgerät','eine Brille','eine Erinnerungshilfe','ein Insekt')
const frageE2 = new Frage ('Welche Himmelsrichtung gibt es nicht?','Ostsüdnord','Südsüdwest','Nordnordost','Westnordwest','Ostsüdnord')
const frageE3 = new Frage ('Wie lautet eine andere Bezeichnung für "Lauch"?','Porree','Püree','Zucchini','Stangensellerie','Porree')
const frageE4 = new Frage ('Was bedeutet das Adjektiv "gebenedeit"?','gesegnet, gepriesen','verfolgt, vertrieben','gegessen, verspeist','verloren, vergessen','gesegnet, gepriesen')
const frageE5 = new Frage ('Mit welchem Gerät wird die Rasenfläche bearbeitet, um den Boden zu lockern und Moos zu entfernen?','Vertikutierer','Handerdbohrer','Vertiko','Rasentrimmer','Vertikutierer')
const frageE6 = new Frage ('Welcher Fisch lebt ausschließlich im Süßwasser?','Goldfisch','Clownfisch','Thunfisch','Schwertfisch','Goldfisch')
const frageE7 = new Frage ('In welcher Stadt befindet sich der "Platz des himmlischen Friedens"?','Peking','Hongkong','Paris','Tokio','Peking')
const frageE8 = new Frage ('Welches Element gehört nicht zu der "Fünf-Elemente-Lehre" im Buddhismus?','Stein','Erde','Feuer','Wasser','Stein')
const frageE9 = new Frage ('Bei welchen technischen Geräten gibt es "Dockingstations" als Zubehör?','Notebooks','Toaster','Mixer','Kaffeemaschinen','Notebooks')
const frageE10 = new Frage ('Wie wird das Fremdwort von "Zusammenarbeit" richtig geschrieben?','Kollaboration','Kollibaroration','Kolorboration','Kollborotion','Kollaboration')
const frageE11 = new Frage ('Wie nennt man die Ablagerungen eines Gletschers?','Moräne','Meringe','Migräne','Malteser','Moräne')
const frageE12 = new Frage ('Welche Farbe hat der Umschlagdeckel des deutschen Reisepasses?','Bordeauxrot','Parisgrün','Nizzaorange','Marseilleblau','Bordeauxrot')
const frageE13 = new Frage ('Eine andere Formulierung für "kurz und treffend" ist ..?','prägnant','exzessiv','dezidiert','transparent','prägnant')
const frageE14 = new Frage ('Was ist ein anderer Begriff für "Weltanschauung"?','Ideologie','Agitation','Religion','Propaganda','Ideologie')
const frageE15 = new Frage ('Auf welchem physikalischen Prinzip basiert der Flaschenzug?','Hebelgesetz','Reibung','Drehmoment','Auftrieb','Hebelgesetz')
const frageE16 = new Frage ('Welches Gericht ist nach einer russischen Adelsfamilie benannt?','Bœuf Stroganoff','Pirogge','Bliný','Borschtsch','Bœuf Stroganoff')
const frageE17 = new Frage ('Wo gibt es die "Federwipptiere"?','Kinderspielplatz','Berge','Wüste','Wald','Kinderspielplatz')
const frageE18 = new Frage ('Wer leitete im März 2017 den Austritt des Vereinigten Königreichs aus der EU in die Wege?','Theresa May','Peggy March','Vanessa-Mae','Vanessa Mai','Theresa May')
const frageE19 = new Frage ('Aus welcher Religion oder Weltanschauung stammt der Begriff "Messias"?','Judentum','Islam','Hinduismus','Buddhismus','Judentum')
const frageE20 = new Frage ('Welches Bundesland gehört erst seit 1957 zur BRD?','Saarland','Hessen','Niedersachsen','Bremen','Saarland')
const frageE21 = new Frage ('Karl Valentin war ein deutscher ..?','Komiker','Arzt','Sportler','Politiker','Komiker')
const frageE22 = new Frage ('Wie hieß die Hauptstadt des Oströmischen Reiches?','Byzanz','Smyrna','Ravenna','Thessaloniki','Byzanz')
const frageE23 = new Frage ('Welche Zweige befinden sich auf der UN-Flagge?','Olivenzweige','Weidenzweige','Buchenzweige','Birkenzweige','Olivenzweige')
const frageE24 = new Frage ('Welches Gemüse wird nicht für "Mixed Pickles" aus dem mitteleuropäischen Raum verwendet?','Avocado','Blumenkohl','Silberzwiebel','Möhre','Avocado')
const frageE25 = new Frage ('Welchen US-Bundesstaat kauften die Vereinigten Staaten 1867 von Russland?','Alaska','Rhode Island','Maine','Hawaii','Alaska')
const frageE26 = new Frage ('Wie nennt man das Ortungsverfahren im Raum und unter Wasser mittels Schallimpulsen?','Sonar','Polar','Solar','Modular','Sonar')
const frageE27 = new Frage ('Hosen aus Denim und Cord haben auch heute noch typischerweise einen ..?','Metallknopf','Goldknopf','Holzknopf','Glasknopf','Metallknopf')
const frageE28 = new Frage ('Was bedeutet "Blasphemie"?','Gotteslästerung','Heuschnupfen','Untreue','Glasbläserei','Gotteslästerung')
const frageE29 = new Frage ('Aus welchem Land stammt die Lehre "Feng Shui"?','China','Malaysia','Thailand','Türkei','China')
const frageE30 = new Frage ('In welchem Bundesland liegt die Stadt Jena?','Thüringen','Brandenburg','Nordrhein-Westfalen','Rheinland-Pfalz','Thüringen')

const fragenE = [frageE1,frageE2,frageE3,frageE4,frageE5,frageE6,frageE7,frageE8,frageE9,frageE10,frageE11,frageE12,frageE13,frageE14,frageE15,frageE16,frageE17,frageE18,frageE19,frageE20,frageE21,frageE22,frageE23,frageE24,frageE25,frageE26,frageE27,frageE28,frageE29,frageE30]




const frageF1 = new Frage ('Wer leitet die Musikgruppe "Die Orthopädischen Strümpfe"?','Guildo Horn','Campino','Roman Lob','Peter Maffay','Guildo Horn')
const frageF2 = new Frage ('Whoopi Goldbergs erste erfolgreiche Hauptrolle spielte sie 1985 im Film "Die Farbe .."?','Lila','Schwarz','Rosa','Blau','Lila')
const frageF3 = new Frage ('Ein Schaumgebäck aus gezuckertem Eischnee heißt ..?','Baiser','Flammeri','Brownie','Éclair','Baiser')
const frageF4 = new Frage ('In der Stratosphäre gut, am Boden schlecht für die Umwelt ist die Sauerstoffverbindung ..?','Ozon','Peroxid','UVC','Schwefeldioxid','Ozon')
const frageF5 = new Frage ('In welchem Land liegt Bagdad?','Irak','Kuwait','Oman','Syrien','Irak')
const frageF6 = new Frage ('In welchem Land liegt der südwestlichste Punkt des europäischen Festlands?','Portugal','Deutschland','Italien','Frankreich','Portugal')
const frageF7 = new Frage ('Glucose ist ein natürlich vorkommendes ..?','Kohlenhydrat','Natriumnitrat','Eisensulfat','Phosphat','Kohlenhydrat')
const frageF8 = new Frage ('Was zählt nicht zu den fünf Grundidealen der Freimaurer?','Stolz','Brüderlichkeit','Gleichheit','Freiheit','Stolz')
const frageF9 = new Frage ('Eine Bildfolge aus Einzelbildern zur Darstellung einer "Bewegung" nennt man auch ..?','Animation','Information','Dokumentation','Modulation','Animation')
const frageF10 = new Frage ('Welcher Schnellzug wurde 1991 in Deutschland eingeführt?','Intercity-Express','D-Zug','TGV','Interregio','Intercity-Express')
const frageF11 = new Frage ('Welcher fiktive Ort ist die legendäre Heimat der "Schildbürger"?','Schilda','Schildbach','Schilddorf','Schilderstadt','Schilda')
const frageF12 = new Frage ('In welcher Stadt in Italien befindet sich das "Museo Nazionale Romano"?','Rom','Venedig','Neapel','Mailand','Rom')
const frageF13 = new Frage ('Die beiden größten Städte Australiens heißen Sydney und ..?','Melbourne','Canberra','Perth','Brisbane','Melbourne')
const frageF14 = new Frage ('Welche Hard-Rock-Band zeigte sich bis 1983 in der Öffentlichkeit nur geschminkt?','Kiss','Scorpions','Black Sabbath','Uriah Heep','Kiss')
const frageF15 = new Frage ('Ein bekanntes Frühlingsgedicht beginnt mit: "Der Mai ist gekommen, die Bäume .."?','schlagen aus','grünen schon','treiben aus','blühen all','schlagen aus')
const frageF16 = new Frage ('Welche "Mäuse" sind keine Nagetiere?','Fledermäuse','Wühlmäuse','Springmäuse','Maushamster','Fledermäuse')
const frageF17 = new Frage ('Was trifft auf das Mittel E 605 zu?','giftig','aphrodisierend','beruhigend','leistungssteigernd','giftig')
const frageF18 = new Frage ('Welches der Schlagworte hört man nicht bei Pokerspielen?','Love','Fold','Call','All in','Love')
const frageF19 = new Frage ('Was kennzeichnet einen hohen Ton gegenüber einem tiefen Ton?','eine höhere Frequenz','größere Wellenlänge','die gespielte Tonlänge','größere Amplitude','eine höhere Frequenz')
const frageF20 = new Frage ('Wie heißt das Staatsoberhaupt der Bermuda-Inselgruppe?','König Charles III.','Wladimir Putin','Joe Biden','König Mswati III.','König Charles III.')
const frageF21 = new Frage ('Wie bezeichnet man eine defensive Spielerposition im Fußball und Volleyball?','Libero','Kreisläufer','Quarterback','Concierge','Libero')
const frageF22 = new Frage ('Was ist ein "Willibecher"?','Standardglas','Regenschirm','Gartentür','Limousine','Standardglas')
const frageF23 = new Frage ('Wie heißt eine Reformbewegung innerhalb des deutschen Protestantismus?','Rosenkreuzer','Nelkenmarker','Veilchencents','Tulpenpfennige','Rosenkreuzer')
const frageF24 = new Frage ('Welches deutsche Bundesland ist kein Freistaat?','Baden-Württemberg','Thüringen','Sachsen','Bayern','Baden-Württemberg')
const frageF25 = new Frage ('In welchem Jahr begann der Zweite Weltkrieg?','1939','1933','1935','1941','1939')
const frageF26 = new Frage ('Was war die "Schlacht von Trafalgar"?','Seeschlacht','Panzerschlacht','Wüstenschlacht','Luftangriff','Seeschlacht')
const frageF27 = new Frage ('Was dient bei Armbanduhren zum Verstellen der Zeiger und des Datums?','Krone','Siegel','Schwert','Zepter','Krone')
const frageF28 = new Frage ('Ein "Adverb" ist ein ..?','Umstandswort','Anstandswort','Abstandswort','Beistandswort','Umstandswort')
const frageF29 = new Frage ('Welcher Schauspieler wurde nach seiner Filmkarriere auch Präsident der USA?','Ronald Reagan','Arnold Schwarzenegger','Cary Grant','John F. Kennedy','Ronald Reagan')
const frageF30 = new Frage ('Was wird gelegentlich "gechippt"?','Haus- und Nutztiere','Roulettetische','Landvermessungsmarken','Sparbücher','Haus- und Nutztiere')

const fragenF = [frageF1,frageF2,frageF3,frageF4,frageF5,frageF6,frageF7,frageF8,frageF9,frageF10,frageF11,frageF12,frageF13,frageF14,frageF15,frageF16,frageF17,frageF18,frageF19,frageF20,frageF21,frageF22,frageF23,frageF24,frageF25,frageF26,frageF27,frageF28,frageF29,frageF30]




const frageG1 = new Frage ('Zu den bekanntesten deutschen Künstlerinnen des 20. Jh. zählt ..?','Käthe Kollwitz','Annemarie Renger','Clara Zetkin','Doris Lessing','Käthe Kollwitz')
const frageG2 = new Frage ('In welcher Sportart gewann Magdalena Neuner olympisches Gold?','Biathlon','Speerwurf','Ski Alpin','Handball','Biathlon')
const frageG3 = new Frage ('Wie hieß der Öltanker, der 1989 vor Alaska auf Grund lief und eine Umweltkatastrophe auslöste?','Exxon Valdez','Exxon Morales','Exxon Rodríguez','Exxon de Lozada','Exxon Valdez')
const frageG4 = new Frage ('Welcher kleine, gelbe Vogel ist der beste Freund von Snoopy aus den "Peanuts"?','Woodstock','Live Aid','Tomorrowland','Goofy','Woodstock')
const frageG5 = new Frage ('Was hat der amerikanische Redakteur Arthur Wynne 1913 erfunden?','Kreuzworträtsel','Spaghetti Eis','Straßenbahn','Google','Kreuzworträtsel')
const frageG6 = new Frage ('Wer war von 1985 bis 2020 Sprecher der Tagesschau im Ersten Deutschen Fernsehen?','Jan Hofer','Heinz Wolf','Claus Kleber','Christian Sievers','Jan Hofer')
const frageG7 = new Frage ('Welche Süßigkeit besteht traditionell aus Mandeln?','Marzipan','Karamell','Nougat','Schokokuss','Marzipan')
const frageG8 = new Frage ('Auf welcher Insel befindet sich der Stützpunkt der US Navy "Guantanamo Bay Naval Base"?','Kuba','Haiti','Hawaii','Philippinen','Kuba')
const frageG9 = new Frage ('"Griechischer Fuchsschwanz" ist ..?','eine Pflanzenart','eine Musikrichtung','eine Obstsorte','eine Tierart','eine Pflanzenart')
const frageG10 = new Frage ('Welche Apfelsorte gibt es wirklich?','Geheimrat Dr. Oldenburg','Dr. phil. Braunschweig','Dr. med. Niedersachsen','Professor Dr. Osnabrück','Geheimrat Dr. Oldenburg')
const frageG11 = new Frage ('Hinter welchem Namen verbirgt sich kein Buchverlag?','Lenovo','Ullstein','Piper','dtv','Lenovo')
const frageG12 = new Frage ('Wie heißt die Skala zur Abschätzung der Schärfe von Früchten der Paprikapflanze?','Scoville-Skala','UIAA-Skala','Beaufortskala','Richterskala','Scoville-Skala')
const frageG13 = new Frage ('Von welchem Tier kann man ein "Entrecôte" zubereiten?','Rind','Ente','Huhn','Lamm','Rind')
const frageG14 = new Frage ('	Wer war vor der Kanzlerschaft niemals Regierungschef bzw. -chefin eines Bundeslandes?','Angela Merkel','Kurt-Georg Kiesinger','Willy Brandt','Helmut Kohl','Angela Merkel')
const frageG15 = new Frage ('Der "PONS"-Verlag mit Sitz in Stuttgart ist spezialisiert auf ..?','Wörterbücher','Soziologiebücher','Belletristik','Notenhefte','Wörterbücher')
const frageG16 = new Frage ('Wie heißt sowohl ein Mond des Uranus als auch eine Figur aus Goethes "Faust II"?','Ariel','Odol','Lenor','Persil','Ariel')
const frageG17 = new Frage ('"Saccharide" ist ein anderer Begriff für ..?','Kohlenhydrate','Vitamine','Fett','Proteine','Kohlenhydrate')
const frageG18 = new Frage ('Welcher Fußballtrainer trägt den Spitznamen "Quälix"?','Felix Magath','Jupp Heynckes','Florian Kohfeldt','Julian Nagelsmann','Felix Magath')
const frageG19 = new Frage ('Wie heißt die Parteizeitung der Sozialdemokratischen Partei Deutschlands?','Vorwärts','Links herum','In die Zukunft','Bewegung','Vorwärts')
const frageG20 = new Frage ('Was ist der "Schopfkarakara"','falkenartiger Vogel','irischer Volkstanz','russische Pelzmütze','Sternbild','falkenartiger Vogel')
const frageG21 = new Frage ('Welche Pasta ist keine Hohlnudel?','Farfalle','Bucatini','Maccharoni','Penne','Farfalle')
const frageG22 = new Frage ('In welchem Frühjahr fand der "Prager Frühling" statt?','1968','1974','1989','1947','1968')
const frageG23 = new Frage ('In welchem Land spielt das moderne Märchen "Die unendliche Geschichte"?','Phantásien','Trantor','Elbenland','Moria','Phantásien')
const frageG24 = new Frage ('Von wem ist der Rocksong "It`s my Life"?','Bon Jovi','David Bowie','Elvis Presley','Paul McCartney','Bon Jovi')
const frageG25 = new Frage ('Welche Stadt liegt am Zusammenfluss von Donau, Inn und Ilz und wird darum "Dreiflüssestadt" genannt?','Passau','Regensburg','Ulm','Donauwörth','Passau')
const frageG26 = new Frage ('Als "Bügelfahrt" bezeichnet man die erste Testfahrt eines elektrischen ..?','Schienenfahrzeugs','Omnibusses','Autos','Fahrrades','Schienenfahrzeugs')
const frageG27 = new Frage ('Von welchem Baum wird "Weihrauch" gewonnen?','Weihrauchbaum','Mandelbaum','Weihnachtsbaum','Olivenbaum','Weihrauchbaum')
const frageG28 = new Frage ('Bei welchem dieser Staaten kann man den König des Landes auf der Geldmünze erkennen?','Belgien','Vatikanstadt','Finnland','Estland','Belgien')
const frageG29 = new Frage ('Welches ist beim Skat eine Spielvariante für 2 Personen?','Offiziersskat','Magisterskat','Kapitänsskat','Mannschaftsskat','Offiziersskat')
const frageG30 = new Frage ('Die englischen Grafschaften Middlesex, Sussex, Wessex und Essex haben ihren Wort-Ursprung in ..?','Sachsen','Fortpflanzung','Siebenbürgen','Aufklärung','Sachsen')

const fragenG = [frageG1,frageG2,frageG3,frageG4,frageG5,frageG6,frageG7,frageG8,frageG9,frageG10,frageG11,frageG12,frageG13,frageG14,frageG15,frageG16,frageG17,frageG18,frageG19,frageG20,frageG21,frageG22,frageG23,frageG24,frageG25,frageG26,frageG27,frageG28,frageG29,frageG30]


const frageH1 = new Frage ('Wovor haben Personen Angst, wenn sie unter "Hippopoto&shy;monstroses&shy;quippeda&shy;liophobie" leiden?','vor langen Wörtern','vor Glatzköpfigkeit','vor dem Weltuntergang','vor hohen Brücken','vor langen Wörtern')
const frageH2 = new Frage ('Michael Faraday gilt als einer der bedeutendsten ..?','Experimentalphysiker','Meeresbiologen','Operettenkomponisten','Kriegsberichterstatter','Experimentalphysiker')
const frageH3 = new Frage ('Gegen welche Krankheit wurde die hervorragende Wirksamkeit von Lebertran 1824 entdeckt?','Rachitis','Röteln','Windpocken','Mumps','Rachitis')
const frageH4 = new Frage ('Wenn etwas nur in Ansätzen vorhanden ist, so ist es ..?','rudimentär','populär','alimentär','komplimentär','rudimentär')
const frageH5 = new Frage ('Welcher Sportartikel wurde in den 1970ern oft durch Fuchsschwänze "verschönert"?','Bonanzarad','Tretroller','Seifenkiste','Trainingsanzug','Bonanzarad')
const frageH6 = new Frage ('Die "Repetition" bezeichnet eine rhetorische Figur der ..?','Wiederholung','Entschlossenheit','Vergeltung','Verwundbarkeit','Wiederholung')
const frageH7 = new Frage ('An welchem Datum war die "Flugschau-Katastrophe von Ramstein"?','28. August 1988','10. Juni 1979','3. September 1996','7. Juli 1972','28. August 1988')
const frageH8 = new Frage ('Wie viele Tage hat der August im gregorianischen Kalender?','31','33','29','30','31')
const frageH9 = new Frage ('Welches Gewürz hat auf Grund des enthaltenen Myristicins in hoher Dosis eine berauschende Wirkung?','Muskatnuss','Kerbel','Safran','Lorbeerblatt','Muskatnuss')
const frageH10 = new Frage ('Was bedeutet das veraltete Wort "Pläsier"?','Vergnügen','Leichtsinn','Blessur','Verliebtheit','Vergnügen')
const frageH11 = new Frage ('Zu welchem Staat gehört die Insel "Tasmanien"','Australien','Rumänien','Kroatien','Argentinien','Australien')
const frageH12 = new Frage ('Wie heißt die Hauptstadt von Libyen?','Tripolis','Dakar','Maputo','Algier','Tripolis')
const frageH13 = new Frage ('Welcher Likör gehört zur "Crêpe Suzette"?','Orangenlikör','Nusslikör','Cassislikör','Mokkalikör','Orangenlikör')
const frageH14 = new Frage ('Welche deutsche Fußballmannschaft wird auch die "Roten Teufel" genannt?','1. FC Kaiserslautern','Werder Bremen','Bayern München','Eintracht Frankfurt','1. FC Kaiserslautern')
const frageH15 = new Frage ('Wie heißt der höchste Berg in Sachsen?','Fichtelberg','Auersberg','Lilienstein','Kaiserkrone','Fichtelberg')
const frageH16 = new Frage ('Wie nennt man eine ringförmige Scheibe, mit deren Hilfe Rohrleitungen miteinander verbunden werden?','Flansch','Öse','Lasche','Klemme','Flansch')
const frageH17 = new Frage ('Wie wird der Schwanz des Feldhasen in der Jägersprache genannt?','Blume','Wedel','Rute','Löffel','Blume')
const frageH18 = new Frage ('Der Cheddar Käse stammt ursprünglich aus ..?','Großbritannien','der Schweiz','den USA','Litauen','Großbritannien')
const frageH19 = new Frage ('Welcher griechische Buchstabe wird auch "Summenzeichen" genannt?','Σ (Sigma)','Ω (Omega)','Δ (Delta)','Γ (Gamma)','Σ (Sigma)')
const frageH20 = new Frage ('In welchem Land fand die Fußball-EM der Männer 2016  statt?','Frankreich','Italien','Niederlande','Spanien','Frankreich')
const frageH21 = new Frage ('Wer steht in der Hierarchie der Küche an höchster Stelle?','Maître de Cuisine','Commis de Cuisine','Souschef','Chef de Partie','Maître de Cuisine')
const frageH22 = new Frage ('Aus welchem Land stammt das Tuborg-Pilsener?','Dänemark','Schweden','Finnland','Norwegen','Dänemark')
const frageH23 = new Frage ('Wie heißt eine alkoholhaltige "Bowle", die im Wesentlichen aus Wein und Sekt besteht?','Kalte Ente','Strammer Max','Lange Anna','Grüner Hund','Kalte Ente')
const frageH24 = new Frage ('Die Bryologie ist die Wissenschaft von den ..?','Moosen','Steinen','Bäumen','Sternen','Moosen')
const frageH25 = new Frage ('In der Rockoper "Jesus Christ Superstar" verliebt sich Jesus in ..?','eine Prostituierte','eine Priesterin','eine Tänzerin','eine Pharisäerin','eine Prostituierte')
const frageH26 = new Frage ('Einen Schläger Namens "Putter" benutzt man beim ..?','Golf','Cricket','Curling','Eishockey','Golf')
const frageH27 = new Frage ('Durch welche Frucht verlieh "Idun" in der nordischen Mythologie den Göttern ewige Jugend?','Äpfel','Kirschen','Pflaumen','Birnen','Äpfel')
const frageH28 = new Frage ('Wie heißt das Ermitteln eines geeigneten Wegs für die Übertragung von Daten in einem Netzwerk?','Routing','Scouting','Boarding','Triggering','Routing')
const frageH29 = new Frage ('Welche Gesamtlänge hat die "Tower Bridge" in London?','244 m','500 m','68 m','100 m','244 m')
const frageH30 = new Frage ('Ein humoristischer Ansager in Varietés, Kabarette, Revuen oder Shows ist ein ..?','Conférencier','Garçon','Manifestant','Concierge','Conférencier')

const fragenH = [frageH1,frageH2,frageH3,frageH4,frageH5,frageH6,frageH7,frageH8,frageH9,frageH10,frageH11,frageH12,frageH13,frageH14,frageH15,frageH16,frageH17,frageH18,frageH19,frageH20,frageH21,frageH22,frageH23,frageH24,frageH25,frageH26,frageH27,frageH28,frageH29,frageH30]


const frageI1 = new Frage ('Eine unangemessen hohe Selbstbeurteilung nennt man ..?','Dünkel','Itüpferl','Klüngel','Klöppel','Dünkel')
const frageI2 = new Frage ('Sir Arthur Conan Doyle war ein britischer Arzt und ..?','Schriftsteller','Schauspieler','Naturforscher','Mathematiker','Schriftsteller')
const frageI3 = new Frage ('Wie heißt der offizielle staatliche Auslandssender der USA seit 1942?','Voice of America','Stars and Stripes','White House','Liberty Broadcast','Voice of America')
const frageI4 = new Frage ('Was ist ein "Flinkwallaby"?','Känguru','Echsenart','Meerschnecke','Singvogel','Känguru')
const frageI5 = new Frage ('Um die Sitzungsorte Bundestag, Bundesrat und Bundesverfassungsgericht erstreckt sich ..?','die Bannmeile','der Speckgürtel','die waffenfreie Zone','die Todeszone','die Bannmeile')
const frageI6 = new Frage ('In welchem dieser Länder darf man im Ortsgebiet nur 48 km/h fahren?','Vereinigtes Königreich','Russland','Schweden','Frankreich','Vereinigtes Königreich')
const frageI7 = new Frage ('Wo liegen die Tonga-Inseln?','Südpazifik','Atlantik','Indischer Ozean','Arktischer Ozean','Südpazifik')
const frageI8 = new Frage ('Aus welcher Teigart wird der klassische "Stollen" hergestellt?','Hefeteig','Rührteig','Mürbeteig','Blätterteig','Hefeteig')
const frageI9 = new Frage ('Eine andere Bezeichnung für Stoffwechsel ist ..?','Metabolismus','Hypnotismus','Narzissmus','Botulismus','Metabolismus')
const frageI10 = new Frage ('Wie bezeichnet man eine Person, die zu niedrigen Diensten missbraucht wird?','Büttel','Jüngling','Mündel','Findel','Büttel')
const frageI11 = new Frage ('Wie heißt ein kleines Beiboot, welches durch eine einzelne Person bedient werden kann?','Dingi','Jully','Buddi','Mami','Dingi')
const frageI12 = new Frage ('Wie muss sich ein Sprengstoffspürhund verhalten, wenn er fündig geworden ist?','hinsetzen','weglaufen','kratzen','bellen','hinsetzen')
const frageI13 = new Frage ('Was ist eine Funkie?','Herzblattlilie','Spargelsorte','Ananasgewächs','Brombeere','Herzblattlilie')
const frageI14 = new Frage ('In welchem Drama kommt die "Ringparabel" vor? ','Nathan der Weise','Urfaust','Don Carlos','Penthesilea','Nathan der Weise')
const frageI15 = new Frage ('Wie bezeichnet man die dünne, harte, trockene Hülse des Getreidekorns?','Spelze','Rispe','Traube','Speike','Spelze')
const frageI16 = new Frage ('Wie heißt ein Teil der Ostsee zwischen Finnland, Estland und Russland?','Finnischer Meerbusen','Estnisches Haff','Russischer Bodden','Drei-Länder-Fjord','Finnischer Meerbusen')
const frageI17 = new Frage ('Durch welchen Fluss werden zwei deutsche Landeshauptstädte getrennt?','Rhein','Donau','Ruhr','Weser','Rhein')
const frageI18 = new Frage ('"Colitis ulcerosa" ist eine chronische Erkrankung des ..?','Darms','Gehirns','Herzens','Magens','Darms')
const frageI19 = new Frage ('Wie bezeichnet die Botanik den Teil eines Stempels, der den Fruchtknoten mit der Narbe verbindet?','Griffel','Stift','Finger','Stichel','Griffel')
const frageI20 = new Frage ('Welcher Gegenstand spielt im südafrikanischen Film "Die Götter müssen verrückt sein" eine Rolle?','Cola-Flasche','Stofftier','Hundemarke','Kassettenrekorder','Cola-Flasche')
const frageI21 = new Frage ('Wer malte "Der abgefangene Liebesbrief", "Der ewige Hochzeiter" und "Der Bücherwurm"?','Carl Spitzweg','Max Beckmann','Johannes Fabricius','Albrecht Dürer','Carl Spitzweg')
const frageI22 = new Frage ('Was bedeutet das "Kar" in Karfreitag?','Trauer','Bangen','Hoffen','Warten','Trauer')
const frageI23 = new Frage ('Welche Insel/Halbinsel liegt nicht in der Ostsee?','Amrum','Usedom','Hiddensee','Darß','Amrum')
const frageI24 = new Frage ('"Ein Schnupfen hätte auch gereicht" ist ein autobiographisches Buch von ..?','Gabi Köster','Andrea Sawatzki','Hella von Sinnen','Christine Urspruch','Gabi Köster')
const frageI25 = new Frage ('Das Pfannengericht "Berliner Schnitzel" besteht aus ..?','gekochtem Kuheuter','gegrilltem Gemüse','getrockneten Feigen','gereiftem Käse','gekochtem Kuheuter')
const frageI26 = new Frage ('"Liber scivias", auf Deutsch "Wisse die Wege" ist die wichtigste religiöse Schrift von ..?','Hildegard von Bingen','Hildegard Hamm-Brücher','Jeanne d’Arc','Bernadette Soubirous','Hildegard von Bingen')
const frageI27 = new Frage ('Wer schwor die Bevölkerung ein mit der Losung "We Shall Fight on the Beaches"?','Winston Churchill','Clement Attlee','Franklin D. Roosevelt','Neville Chamberlain','Winston Churchill')
const frageI28 = new Frage ('Welches dieser Werke stammt nicht von Umberto Eco?','Der Butt','Das Foucaultsche Pendel','Der Name der Rose','Baudolino','Der Butt')
const frageI29 = new Frage ('Welches Tier hat der Naturschutzbund Deutschland (NABU) in seinem Logo?','Vogel','Käfer','Hund','Wolf','Vogel')
const frageI30 = new Frage ('Eine blau oder lila blühende, bei uns heimische Pflanze nennt sich "Gewöhnlicher .."?','Natternkopf','Vipernhals','Pythonbauch','Kobraschwanz','Natternkopf')

const fragenI = [frageI1,frageI2,frageI3,frageI4,frageI5,frageI6,frageI7,frageI8,frageI9,frageI10,frageI11,	frageI12,frageI13,frageI14,frageI15,frageI16,frageI17,frageI18,frageI19,frageI20,frageI21,frageI22,frageI23,frageI24,frageI25,frageI26,frageI27,frageI28,frageI29,frageI30]


const frageJ1 = new Frage ('Wie werden Verfahren genannt, um Rechenfehler zu erkennen?','Neuner- und Elferprobe','Plan–Do–Check–Act','Lochkreismuster','Lackmustest','Neuner- und Elferprobe')
const frageJ2 = new Frage ('Baryonen, Hadronen und Mesonen sind allesamt ..?','subatomare Teilchen','Klingonen','Kathionen','Anionen','subatomare Teilchen')
const frageJ3 = new Frage ('Was ist der "Unterberger-Tretversuch"?','neurologischer Test','Geschicklichkeitsspiel','Prüfung des Schuhprofils','Alkohol-Untersuchung','neurologischer Test')
const frageJ4 = new Frage ('Nach den drei "Punischen Kriegen" hatten die Römer welchen Gegner besiegt?','Karthager','Spartaner','Barbaren','Langobarden','Karthager')
const frageJ5 = new Frage ('Welches gehört nicht zu den üblichen Angeltechniken eines Fischers?','Vogelfischen','Spinnfischen','Eisangeln','Fliegenfischen','Vogelfischen')
const frageJ6 = new Frage ('Gewaltsame Ausschreitung gegen ethnische, politische oder religiöse Minderheiten nennt man ..?','Pogrom','Revolte','Aufstand','Randale','Pogrom')
const frageJ7 = new Frage ('Welchen Fisch gibt es wirklich?','Adlerfisch','Bussardfisch','Falkenfisch','Habichtfisch','Adlerfisch')
const frageJ8 = new Frage ('Welcher bekannte Begriff der Datenverarbeitung beschreibt gekoppelte Leiterbahnen zum Datentransfer?','Bus','Zug','Auto','Rad','Bus')
const frageJ9 = new Frage ('Wie bezeichnet man beim Bergsteigen glatte Eisflächen auf Gletschern?','Blankeis','Blitzeis','Roheis','Dauereis','Blankeis')
const frageJ10 = new Frage ('Nicht Schokolade war die erste Produktion der Firma Stollwerck 1839 in Köln, es waren ..?','Hustenbonbons','Zuckerstangen','Marzipankugeln','gefüllte Kuchen','Hustenbonbons')
const frageJ11 = new Frage ('Wobei wird zwischen transitiven und intransitiven Exemplaren unterschieden?','Verben','Priesteranwärtern','Otto-Motoren','Mücken','Verben')
const frageJ12 = new Frage ('In welcher Stadt befindet sich das "Schloss Nymphenburg"?','München','Leipzig','Dreden','Würzburg','München')
const frageJ13 = new Frage ('Was versteht man unter der "Petersburger Hängung"?','Präsentation von Gemälden','Vernichtung von Gemälden','Übermalen von Gemälden','Schaffung von Gemälden','Präsentation von Gemälden')
const frageJ14 = new Frage ('Wie wird im Englischen der Spielstand "0" beim Tennis bezeichnet?','Love','Null','Hate','Empty','Love')
const frageJ15 = new Frage ('Wie hieß ein Prinzip der Welt- und Kolonialherrschaft im 19. Jahrhundert?','Pax Britannica','Rex Francia','Lex Americana','Dax Germanica','Pax Britannica')
const frageJ16 = new Frage ('Was meint der Engländer wenn er von "daisy" spricht?','Gänseblümchen','Schulmädchen','adlige Frauen','Puppen','Gänseblümchen')
const frageJ17 = new Frage ('Wie heißt ein Nebenfluss der Elbe?','Bille','Balle','Bulle','Belle','Bille')
const frageJ18 = new Frage ('Wofür ist die Londoner Straße "Savile Row" bekannt?','Herren-Maßschneider','Theaterhäuser','Bäckereien','Kneipen','Herren-Maßschneider')
const frageJ19 = new Frage ('Welche Schauspielerin stand 1960 in dem Thriller "Psycho" unter der Dusche?','Janet Leigh','Daryl Hannah','Barbra Streisand','Raquel Welch','Janet Leigh')
const frageJ20 = new Frage ('Aus welchem dieser Bereiche kennt man die “Neue Sachlichkeit“?','Kunst','Mathematik','Informatik','Biologie','Kunst')
const frageJ21 = new Frage ('Welche Kampfsportart stammt ursprünglich nicht aus Japan?','Wing Chun','Kendō','Karate','Judo','Wing Chun')
const frageJ22 = new Frage ('Wo befindet sich das "Deutsche Raumfahrt-Kontrollzentrum" (GSOC)?','Oberpfaffenhofen','Oberstdorf','Oberammergau','Oberwiesenthal','Oberpfaffenhofen')
const frageJ23 = new Frage ('Wie heißt ein linker Nebenfluss der Mosel in Belgien, Luxemburg und Deutschland?','Sauer','Bitter','Süß','Salzig','Sauer')
const frageJ24 = new Frage ('Was ist die Bedeutung des veralteten Wortes "tumb"?','einfältig','gewitzt','schwer','unbeweglich','einfältig')
const frageJ25 = new Frage ('Wo sind Kanaldeckel und Mülleimer mit dem Signum "S.P.Q.R." gekennzeichnet?','Rom','Venedig','Madrid','Straßburg','Rom')
const frageJ26 = new Frage ('Wer oder was ist eine "Nuckelpinne"?','motorschwaches Auto','dreckige Kneipe','billiges Hotel','Drückeberger','motorschwaches Auto')
const frageJ27 = new Frage ('Wie lautete der Vorname des deutschen Psychiaters und Neuropathologen "Alzheimer"?','Alois','Michael','Franz','Peter','Alois')
const frageJ28 = new Frage ('Wie heißt der Gürtel, den man traditionell zu einem japanischen Kimono trägt?','Obi','Wan','Ke','Nobi','Obi')
const frageJ29 = new Frage ('Wenn jemand megaloman ist, so ist er mit anderen Worten ..?','größenwahnsinnig','polygam','störrisch','stark pigmentiert','größenwahnsinnig')
const frageJ30 = new Frage ('Die Stadt "Varosia" ist eine Geisterstadt am Stadtrand von Famagusta im Osten der Insel ..?','Zypern','Manila','Tansania','Honshū','Zypern')

const fragenJ = [frageJ1,frageJ2,frageJ3,frageJ4,frageJ5,frageJ6,frageJ7,frageJ8,frageJ9,frageJ10,frageJ11,frageJ12,frageJ13,frageJ14,frageJ15,frageJ16,frageJ17,frageJ18,frageJ19,frageJ20,frageJ21,frageJ22,frageJ23,frageJ24,frageJ25,frageJ26,frageJ27,frageJ28,frageJ29,frageJ30]


const alleFragen =[fragenA,fragenB,fragenC,fragenD,fragenE,fragenF,fragenG,fragenH,fragenI,fragenJ]


const rot = "rgb(225, 22, 53)";
const grün = "rgb(12, 196, 70)";
const szene = document.querySelector("#szene");
const overlay = document.querySelector("#overlay");
const button = document.querySelector("button");
const hud = document.querySelector("#hud");
const reihenfolge = document.createElement("div");
reihenfolge.setAttribute("id", "reihenfolge")
const frage = document.createElement("div")
frage.classList.add("frage")
const timer = document.querySelector("#timer");
const punkteZahler = document.querySelector("#punkte");
const fragenFeld = document.querySelector("#fragenFeld");
const hr = document.createElement("hr")
fragenFeld.append(reihenfolge, hr, frage)
const anwortenFeld = document.querySelector("#antwortenFeld");
const eins = document.querySelector("#eins");
const zwei = document.querySelector("#zwei");
const drei = document.querySelector("#drei");
const vier = document.querySelector("#vier");
const ABCD = document.querySelectorAll(".antwort")

const divLösung = document.createElement("div")
const liste = document.createElement("div")
const jokerDiv = document.createElement("div")
const joker50 = document.createElement("div")
const jokerZeit = document.createElement("div")
hud.insertBefore(jokerDiv, punkteZahler)
jokerDiv.classList.add("jokerdiv")
jokerDiv.append(joker50, jokerZeit)
joker50.classList.add("joker")
joker50.innerHTML="50:50"
jokerZeit.classList.add("joker")
jokerZeit.innerHTML="⏱ Pause"
const zeitproFrage = 30

let Fragen = []
let ergebnisse = []
let reihenfolgeNummer = 0
let punkte = 0
let fragenAnzahl = 10
let richtigOderFalsch = ""
let joker50Benutzt = false
let jokerZeitBenutzt = false
let antwortenArr = []
let ergebnisStart = 0
let ergebnisEnde = 25



const endText = ()=>{
	if (fragenAnzahl===10){
		return `${punkte<=5?"Das war nicht so gut. 😥":punkte<7?"Das kannst du doch besser. 🤗":punkte<9?"Das war schon ganz ok. 😉":punkte<10?"Das war eine sehr gute Leistung. 😃":"😎 Respekt mein/e Liebe/r! 👍"}`
	} else {
		return `${punkte<=10?"Das war nicht so gut. 😥":punkte<14?"Das kannst du doch besser. 🤗":punkte<17?"Das war schon ganz ok. 😉":punkte<20?"Das war eine sehr gute Leistung. 😃":"😎 Respekt mein/e Liebe/r! 👍"}`
	}
}
const startText1 = 'Das ist ein kleines Quiz mit verschiedenen "❓", deren Schwierigkeitsgrad sich im Laufe steigert.'
const startText2 = 'Zum beantworten der einzelnen "❓", stehen dir 30 Sekunden zur Verfügung.'
const startText3 = `Bei 10 Fragen erhälst du einen 50:50 Joker und bei 20 Fragen darfst du zusätzlich einmal die Zeit pausieren.`
const weiterText =  ()=> richtigOderFalsch==="richtig"?"👍 ★·.·´¯`·.·★ RICHTIG ★·.·´¯`·.·★ 👍":richtigOderFalsch==="falsch"?"👎 ★·.·´¯`·.·★ FALSCH ★·.·´¯`·.·★ 👎":"🙄 Deine Zeit war leider abgelaufen."
const endText1 = ()=>`Du hast ${punkte} von ${fragenAnzahl} Fragen richtig beantwortet.<br/>`
const endText2 = 'Probier es doch gleich noch einmal.'
 
	
// ------------------------------------------------------------------
// die Funktionen in folgender Reihenfolge:
// shuffel(), appStart(), fragenLaden(), checkAntwort(), abgelaufen(),
// weiter(), klickbarNein(), klickbarJa(), falscheAntwortenlöschen(),
// jokerRefresh(), endeLaden(), ergebnisseLaden()
// ------------------------------------------------------------------

const zeitLeiste = document.createElement("div")
zeitLeiste.classList.add("zeitLeiste")
// mischen eines Arrays
function shuffel(arr){		
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}


// Die App wird gestartet
function appStart(){
	hud.style.display="none"
	fragenFeld.style.display="none"
	anwortenFeld.style.display="none"
	jokerDiv.style.display="none"
	overlay.style.display="grid"
	const spielName = document.createElement("h2")
	const p1 = document.createElement("p")
	const p2 = document.createElement("p")
	const p3 = document.createElement("p")
	const startButtonDiv = document.createElement("div")
	startButtonDiv.classList.add("startButtonDiv")
	const button10 = document.createElement("div")
	const button20 = document.createElement("div")
	overlay.append(spielName, p1, p2, p3, startButtonDiv)
	startButtonDiv.append(button10, button20)
	spielName.innerHTML = titel
	p1.innerHTML=startText1
	p2.innerHTML=startText2
	p3.innerHTML=startText3
	button10.innerHTML='10 Fragen'
	button10.setAttribute("id", "buttonStart")
	button20.innerHTML='20 Fragen'
	button20.setAttribute("id", "buttonStart")
	button10.addEventListener("click", function (){
		fragenAnzahl=10
		overlay.replaceChildren()
		alleFragen.forEach((fragenArr) => {
			shuffel(fragenArr)
		})
		Fragen=[alleFragen[0][0],alleFragen[1][0],alleFragen[2][0],alleFragen[3][0],alleFragen[4][0],alleFragen[5][0],alleFragen[6][0],alleFragen[7][0],alleFragen[8][0],alleFragen[9][0]]
		jokerZeitBenutzt=true
		jokerZeit.classList.add("gesperrt")
		fragenLaden()
	})
	button20.addEventListener("click", function (){
		fragenAnzahl=20
		overlay.replaceChildren()
		alleFragen.forEach((fragenArr) => {
			shuffel(fragenArr)
		})
		Fragen=[alleFragen[0][0],alleFragen[0][1],alleFragen[1][0],alleFragen[1][1],alleFragen[2][0],alleFragen[2][1],alleFragen[3][0],alleFragen[3][1],alleFragen[4][0],alleFragen[4][1],alleFragen[5][0],alleFragen[5][1],alleFragen[6][0],alleFragen[6][1],alleFragen[7][0],alleFragen[7][1],alleFragen[8][0],alleFragen[8][1],alleFragen[9][0],alleFragen[9][1]]
		fragenLaden()
	})
}
appStart()

// Die Fragen und Antworten werden geladen und angezeigt
// ebenso wie das HUD mit Joker, Timer und Punkten
function fragenLaden(){
	zeit = zeitproFrage
	if (reihenfolgeNummer===fragenAnzahl){
		endeLaden()
	}
	else {
		timer.innerHTML=zeit+"s";
		interval1 = setInterval(function (){
			zeit --
			timer.innerHTML=zeit+"s";
			if (zeit<1){
				abgelaufen()
			}
		}, 1000)
		if (joker50Benutzt){
			eins.classList.add("eins_before")
			zwei.classList.add("zwei_before")
			drei.classList.add("drei_before")
			vier.classList.add("vier_before")
		}
		overlay.style.display="none"
		hud.style.display="grid"
		fragenFeld.style.display="grid"
		jokerDiv.style.display="grid"
		anwortenFeld.style.display="grid"
		zeitLeiste.remove()
		hud.append(zeitLeiste)
		zeitLeiste.classList.remove("pause")
		fragenFeld.replaceChildren()
		fragenFeld.append(reihenfolge, hr, frage)
		antwortenArr = [];
		antwortenArr.push(Fragen[reihenfolgeNummer].antwortA)
		antwortenArr.push(Fragen[reihenfolgeNummer].antwortB)
		antwortenArr.push(Fragen[reihenfolgeNummer].antwortC)
		antwortenArr.push(Fragen[reihenfolgeNummer].antwortD)
		shuffel(antwortenArr)
		punkteZahler.textContent= `Punkte: ${punkte+"/"+reihenfolgeNummer}`;
		reihenfolge.innerHTML="FRAGE: " + (reihenfolgeNummer + 1)
		frage.innerHTML=Fragen[reihenfolgeNummer].frage
		divLösung.innerHTML = Fragen[reihenfolgeNummer].lösung
		eins.innerHTML=antwortenArr[0]
		zwei.innerHTML=antwortenArr[1]
		drei.innerHTML=antwortenArr[2]
		vier.innerHTML=antwortenArr[3]
		klickbarJa()
	}
}

// prüfen ob die angeklickte Antwort auch die Lösung ist
function checkAntwort(){
	ergebnisse.push(reihenfolgeNummer, Fragen[reihenfolgeNummer].frage, antwortenArr, divLösung.innerHTML, this.innerHTML)
	möglichkeit = this
	klickbarNein()
	clearInterval(interval1)
	zeitLeiste.classList.add("pause")
	if (möglichkeit.innerHTML===divLösung.innerHTML){
		richtigOderFalsch = "richtig"
		punkte += 1;
		setTimeout(function (){
			möglichkeit.classList.add("korrekt")
			weiter()
		}, 5)
	} else {
			richtigOderFalsch = "falsch"
			setTimeout(function (){
				möglichkeit.classList.add("unkorrekt")
				if(eins.innerHTML===divLösung.innerHTML){
					eins.classList.add("korrekt")
				}
				else if(zwei.innerHTML===divLösung.innerHTML){
					zwei.classList.add("korrekt")
				}
				else if(drei.innerHTML===divLösung.innerHTML){
					drei.classList.add("korrekt")
				}
				else{
					vier.classList.add("korrekt")
				}
				weiter()
			}, 5)	
		}
}

// Aktion die ausgeführt wird wenn der Timer abgelaufen ist
function abgelaufen(){
	clearInterval(interval1)
	klickbarNein()
	if(eins.innerHTML===divLösung.innerHTML){
		eins.classList.add("korrekt")
	}
	else if(zwei.innerHTML===divLösung.innerHTML){
		zwei.classList.add("korrekt")
	}
	else if(drei.innerHTML===divLösung.innerHTML){
		drei.classList.add("korrekt")
	}
	else{
		vier.classList.add("korrekt")
	}
	richtigOderFalsch = "zeit"
	ergebnisse.push(reihenfolgeNummer, Fragen[reihenfolgeNummer].frage, antwortenArr, divLösung.innerHTML, "Zeit")
	weiter()
}

// Kleine Pause zum weiter klicken für die nächste Frage
function weiter(){
	reihenfolgeNummer += 1;
	fragenFeld.innerHTML= `<span class="weiterText">${weiterText()}</span>`
	const button = document.createElement("button")
	button.innerHTML=reihenfolgeNummer===fragenAnzahl?"ERGEBNIS":"weiter"
	fragenFeld.append(button)
	button.setAttribute("id", "buttonWeiter")
	button.addEventListener("click", fragenLaden)
}

// Einbau einer Sperre zum Klickaktionen
function klickbarNein(){
	jokerZeit.removeEventListener("click", zeitStoppen)
	joker50.removeEventListener("click", falscheAntwortenLöschen)
	ABCD.forEach(antwort => {
		antwort.removeEventListener("click", checkAntwort)
		antwort.classList.remove("antwort_hover")
	});
}

// die Sperre wird wieder aufgehoben 
function klickbarJa(){
	jokerZeitBenutzt?jokerZeit.removeEventListener("click", zeitStoppen):jokerZeit.addEventListener("click", zeitStoppen)
	joker50Benutzt?1:joker50.addEventListener("click", falscheAntwortenLöschen)
	ABCD.forEach(antwort => {
		antwort.addEventListener("click", checkAntwort)
		antwort.classList.add("antwort_hover")
		antwort.classList.remove("korrekt")
		antwort.classList.remove("unkorrekt")
	});
}

function zeitStoppen (){
	clearInterval(interval1)
	jokerZeitBenutzt = true
	jokerZeit.removeEventListener("click", zeitStoppen)
	jokerZeit.classList.add("gesperrt")
	zeitLeiste.classList.add("pause")
}

function jokerZeitRefresh(){
	jokerZeit.addEventListener("click", zeitStoppen)
	jokerZeit.classList.remove("gesperrt")
	jokerZeitBenutzt = false
}

// Hier entscheidet sich was passiert wenn man den Joker auslöst
function falscheAntwortenLöschen(){
	joker50Benutzt = true
	joker50.removeEventListener("click", falscheAntwortenLöschen)
	joker50.classList.add("gesperrt")
	const zufall = []
	if(eins.innerHTML!==divLösung.innerHTML){
		zufall.push("A")
	}
	if(zwei.innerHTML!==divLösung.innerHTML){
		zufall.push("B")
	}
	if(drei.innerHTML!==divLösung.innerHTML){
		zufall.push("C")
	}
	if(vier.innerHTML!==divLösung.innerHTML){
		zufall.push("D")
	}
	shuffel(zufall)
	if(zufall[0]==="A" || zufall[1]==="A"){
		eins.innerHTML=""
		eins.classList.remove("antwort_hover")
		eins.classList.remove("eins_before")
		eins.removeEventListener("click", checkAntwort)
	}
	if(zufall[0]==="B" || zufall[1]==="B"){
		zwei.innerHTML=""
		zwei.classList.remove("antwort_hover")
		zwei.classList.remove("zwei_before")
		zwei.removeEventListener("click", checkAntwort)
	}
	if(zufall[0]==="C" || zufall[1]==="C"){
		drei.innerHTML=""
		drei.classList.remove("antwort_hover")
		drei.classList.remove("drei_before")
		drei.removeEventListener("click", checkAntwort)
	}
	if(zufall[0]==="D" || zufall[1]==="D"){
		vier.innerHTML=""
		vier.classList.remove("antwort_hover")
		vier.classList.remove("vier_before")
		vier.removeEventListener("click", checkAntwort)
	}
}

// eine Funktion um den Joker wieder ins Spiel zu bringen
function joker50Refresh(){
	joker50.addEventListener("click", falscheAntwortenLöschen)
	joker50.classList.remove("gesperrt")
	joker50Benutzt = false
}

// Hier wird nur der obere Teil des Endbildschirms geladen
function endeLaden(){
	ergebnisStart = 0
	ergebnisEnde = 25
	liste.replaceChildren()
	hud.style.display="none"
	fragenFeld.style.display="none"
	anwortenFeld.style.display="none"
	overlay.style.display="grid"
	const ansage = document.createElement("h2")
	const p1 = document.createElement("p")
	const p2 = document.createElement("p")
	const buttonDiv = document.createElement("div")
	buttonDiv.classList.add("startButtonDiv")
	const button10 = document.createElement("button")
	const button20 = document.createElement("button")
	const seitenWahl = document.createElement("div")
	seitenWahl.classList.add("seitenWahlDiv")
	const seite1 = document.createElement("div")
	const seite2 = document.createElement("div")
	const seite3 = document.createElement("div")
	const seite4 = document.createElement("div")
	if (fragenAnzahl===10){
		seitenWahl.append(seite1, seite2)
	} else if (fragenAnzahl===20) {
		seitenWahl.append(seite1, seite2, seite3, seite4)
	}
	seite1.innerHTML = "Frage 1-5"
	seite1.classList.add("seitenWahlInaktiv")
	seite1.classList.add("seitenWahl")
	seite1.addEventListener("click", ()=>{
		seite1.classList.add("seitenWahl")
		seite2.classList.remove("seitenWahl")
		seite3.classList.remove("seitenWahl")
		seite4.classList.remove("seitenWahl")
		ergebnisStart = 0; ergebnisEnde = 25; liste.replaceChildren() ;ergebnisseLaden()
	})
	seite2.innerHTML = "Frage 6-10"
	seite2.classList.add("seitenWahlInaktiv")
	seite2.addEventListener("click", ()=>{
		seite1.classList.remove("seitenWahl")
		seite2.classList.add("seitenWahl")
		seite3.classList.remove("seitenWahl")
		seite4.classList.remove("seitenWahl")
		ergebnisStart = 25; ergebnisEnde = 50; liste.replaceChildren() ;ergebnisseLaden()
	})
	seite3.innerHTML = "Frage 11-15"
	seite3.classList.add("seitenWahlInaktiv")
	seite3.addEventListener("click", ()=>{
		seite1.classList.remove("seitenWahl")
		seite2.classList.remove("seitenWahl")
		seite3.classList.add("seitenWahl")
		seite4.classList.remove("seitenWahl")
		ergebnisStart = 50; ergebnisEnde = 75; liste.replaceChildren() ;ergebnisseLaden()
	})
	seite4.innerHTML = "Frage 16-20"
	seite4.classList.add("seitenWahlInaktiv")
	seite4.addEventListener("click", ()=>{
		seite1.classList.remove("seitenWahl")
		seite2.classList.remove("seitenWahl")
		seite3.classList.remove("seitenWahl")
		seite4.classList.add("seitenWahl")
		ergebnisStart = 75; ergebnisEnde = 100; liste.replaceChildren() ;ergebnisseLaden()
	})
	
	let buttonsSeitenWahl = []
	overlay.append(ansage, p1, p2, buttonDiv, seitenWahl)
	buttonDiv.append(button10, button20)
	
	ansage.innerHTML = endText()
	p1.innerHTML= endText1()
	p2.innerHTML= endText2
	button10.innerHTML='10 Fragen'
	button10.setAttribute("id", "buttonStart")
	button20.innerHTML='20 Fragen'
	button20.setAttribute("id", "buttonStart")
	ergebnisseLaden()
	button10.addEventListener("click", function (){
		ergebnisse=[]
		reihenfolgeNummer = 0;
		punkte = 0;
		fragenAnzahl=10
		overlay.replaceChildren()
		alleFragen.forEach((fragenArr) => {
			shuffel(fragenArr)
		})
		Fragen=[alleFragen[0][0],alleFragen[1][0],alleFragen[2][0],alleFragen[3][0],alleFragen[4][0],alleFragen[5][0],alleFragen[6][0],alleFragen[7][0],alleFragen[8][0],alleFragen[9][0]]
		fragenLaden()
		joker50Refresh()
		jokerZeitBenutzt=true
		jokerZeit.classList.add("gesperrt")
	})
	button20.addEventListener("click", function (){
		ergebnisse=[]
		reihenfolgeNummer = 0;
		punkte = 0;
		fragenAnzahl=20
		overlay.replaceChildren()
		alleFragen.forEach((fragenArr) => {
			shuffel(fragenArr)
		})
		Fragen=[alleFragen[0][0],alleFragen[0][1],alleFragen[1][0],alleFragen[1][1],alleFragen[2][0],alleFragen[2][1],alleFragen[3][0],alleFragen[3][1],alleFragen[4][0],alleFragen[4][1],alleFragen[5][0],alleFragen[5][1],alleFragen[6][0],alleFragen[6][1],alleFragen[7][0],alleFragen[7][1],alleFragen[8][0],alleFragen[8][1],alleFragen[9][0],alleFragen[9][1]]
		fragenLaden()
		joker50Refresh()
		jokerZeitRefresh()
	})

}

// Anzeige der Ergebnisse im Endbildschirm
function ergebnisseLaden(){
	for (let i = ergebnisStart;i<ergebnisEnde;i+=5){
		const block = document.createElement("div")
		block.classList.add("ergebnisBlock")
		const ergebnis1 = document.createElement("span")
		ergebnis1.style.display="block"
		const ergebnis2 = document.createElement("span")
		ergebnis2.style.display="block"
		const ergebnis3 = document.createElement("span")
		ergebnis3.style.display="block"
		const ergebnis4 = document.createElement("span")
		ergebnis4.style.display="block"
		const anzeige = document.createElement("span")
		ergebnis1.innerHTML = ergebnisse[i+2][0]
		ergebnis2.innerHTML = ergebnisse[i+2][1]
		ergebnis3.innerHTML = ergebnisse[i+2][2]
		ergebnis4.innerHTML = ergebnisse[i+2][3]
		block.innerHTML=`
		<span>Frage ${ergebnisse[i]+1}:</span>
		<span>Dein Ergebnis:</span>
		<span>${ergebnisse[i+1]}</span>`
		overlay.append(liste)
		liste.append(block)
		block.append(anzeige)
		anzeige.append(ergebnis1, ergebnis2, ergebnis3, ergebnis4)
		if(ergebnisse[i+2][0]===ergebnisse[i+3]){
			ergebnis1.style.color=grün
		}
		else if(ergebnisse[i+2][1]===ergebnisse[i+3]){
			ergebnis2.style.color=grün
		}
		else if(ergebnisse[i+2][2]===ergebnisse[i+3]){
			ergebnis3.style.color=grün
		}
		else {
			ergebnis4.style.color=grün
		}

		if(ergebnisse[i+2][0]===ergebnisse[i+4] && ergebnis1.style.color===""){
			ergebnis1.style.color=rot
		}
		else if(ergebnisse[i+2][1]===ergebnisse[i+4] && ergebnis2.style.color===""){
			ergebnis2.style.color=rot
		}
		else if(ergebnisse[i+2][2]===ergebnisse[i+4] && ergebnis3.style.color===""){
			ergebnis3.style.color=rot
		}
		else if(ergebnisse[i+2][3]===ergebnisse[i+4] && ergebnis4.style.color===""){
			ergebnis4.style.color=rot
		}

		if(ergebnisse[i+4]==="Zeit" && ergebnis1.style.color===""){
			ergebnis1.style.color=rot
		}
		if(ergebnisse[i+4]==="Zeit" && ergebnis2.style.color===""){
			ergebnis2.style.color=rot
		}
		if(ergebnisse[i+4]==="Zeit" && ergebnis3.style.color===""){
			ergebnis3.style.color=rot
		}
		if(ergebnisse[i+4]==="Zeit" && ergebnis4.style.color===""){
			ergebnis4.style.color=rot
		}
	}
	
}


// responsiv und verschönern
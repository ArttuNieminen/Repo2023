# Repo2023
Tutustutaan git komentoihin ja githubiin

## Git komentoja 
git clone "linkki repoon" = teki cloonin reposta.
git branch develop = loi uuden branchin develop
git checkout develop= siirtyy develop branchiin
git checkout -b develop = tekee develop branchin ja siirtyy sinne
git add --all = lisää kaikki muutokset
git commit -m "otsikko" = valmistelee pull requestin
git push = työnnä requesti git hubiin.
git diff = näyttää muutokset committien välillä
git reset = palauttaa pää branching tiettyyn pisteeseen
git revert = paulauttaa edellisestä muutoksesta.

Konfliktin saa aikaseksi jos teet kaksi pull requestia samasta tekstistä mutta muutaat tekstiä/ poistat sitä. Tee toisella merge jolloin toisesta tulee konflikti 
koska muutettava teksi on muuttunut ja näin toinen pull requesti ei onnistu.

-MongoDB on dokumentti tietokata. MongoDB:n asennus tästä linkistä https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
 MongoDB atlas on taas cloud palvelulla toimiva mikä voi olla hyödyllinen jos tarvitsee tietokantojen jakamista.


-Json on javascript object notation. Se on rakennettu kahdesta rakenteesta.
  * kollaasi nimistä/arvoista pareina. Monissa kielissä tämä on objecti,tallenne,rakenne,sanakirja,ruututaulukko, avain lista tai vastaava järjestetty jono.
  * Järjestetty lista arvoista. Monissa kielissä tämä on järjestetty jono, vektorit, lista tai jono.


# mongoDB

Ideana on rakentaa ohjelma, johon annetaan nimi ja tietokantaan.
tutustukaa koodiin ja selvittäkää errorit

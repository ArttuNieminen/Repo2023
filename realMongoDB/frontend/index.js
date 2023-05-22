
let people = [];
let newPerson = {
  name: "",
  id: "",
};



/* List people */
const listPeople = async () => {
  try {
    const response = await fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
    });
    
  } catch (error) {
    console.error("No list", error);
  }
};

async function otaViimeisimmatArvot(maara){
  let mainDiv = document.querySelector('#insertDiv'); //div mihin sisällytetään tietoa
  let jaotteluRivi = document.createElement('tr'); //rivi joka lisätään
  while (mainDiv.firstChild) { // tämä poistaa kaikki maindivin sisällöt niinkauan kuin sisältöä 
    mainDiv.removeChild(mainDiv.firstChild); // poista ensimmäinen sisältö
  };
  const tulos = await fetch("http://localhost:3000/"); //hae osoite data
  const arvot = await tulos.json();
   // ota json data
  for(let i = 0; i < maara; i++){ //for luuppi määrän mukaan mikä kerrotaan kutsuessa
    //console.log(arvot.list[arvot.list.length -1-i] ); // consoli logi testaustavarten
    let idrivi = document.createElement("tr"); //eri elemntit mitä luodaan
    let nimirivi = document.createElement("tr");
    let aikarivi = document.createElement("tr");
    let vali = document.createElement('br');
    idrivi.innerText = "Id: " +arvot.list[arvot.list.length -1-i].id; //ekan rivin sisältö
    jaotteluRivi.appendChild(idrivi); //lisää rivi pääriviin
    nimirivi.innerText = "Nimi: "+arvot.list[arvot.list.length -1-i].name ; //samat asiat
    jaotteluRivi.appendChild(nimirivi);
    aikarivi.innerText = `Aika: ${arvot.list[arvot.list.length -1-i].time ? new Date(arvot.list[arvot.list.length -1-i].time) : new Date()}`;
    jaotteluRivi.appendChild(aikarivi); // yllä olevalla muutetaan aika erittäin tarkkaan luettavaan mjuotoon
    jaotteluRivi.appendChild(vali); // lisää väli
  };
  mainDiv.appendChild(jaotteluRivi); // lisää päärivi diviin
};

function teeLista(maara){ //kutsutaan html:stä
  otaViimeisimmatArvot(maara);
};



/* Lisätään uusi henkilö listaan */

const addPerson = async (newPersonAdd) => {
  //person object
  try {
    if (!newPerson) { // jos ei listaa 
      console.log("not post: " + newPerson);  //kerro konsolissa
      return;
    } else {
      newPerson.name = newPersonAdd; // vaiha newpersonin nimi osio annetula arvolla
      const response = await fetch("http://localhost:3000/", {  
        method: "POST", // käytetään komentoa postaa
        body: JSON.stringify({people: newPerson}), // laitetaan arvot 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        },
      });
      const y = await response.json(); // odotetaan laitettua arvoa loppuun
      const human = { // uus objekti mistä oisi helppo ottaa viimeisimmät tiedot mitkä laitettu
        id: y.person.id,
        name: y.person.name,
        time: y?.person?.time ? new Date(y.person.time) : new Date(),
      };
      
      

    }
  } catch (error) {
    console.error(error);
  }
};

const DeleteObjectByID= async(id) =>{
  try{
    const response = await fetch(`http://localhost:3000/${id}`, {  
        method: "DELETE", 
        body: JSON.stringify({people: newPerson}), 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        },
      });
      const y = await response.json();
      console.log("deleted");
      otaViimeisimmatArvot(4);
  }
  catch(error){
    console.error("Delete error:",error);
  }
};

const UpdateObjectNameByID= async(id, nameValue) =>{
  try{
    newPerson.name = nameValue;
    newPerson.id = id;
    const response = await fetch(`http://localhost:3000/`, {  
        method: "PUT", 
        body: JSON.stringify({people: newPerson}), 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS, PUT",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        },
      });
      
      const x = await response.json();
      console.log(x);
      console.log("Updatet");
      otaViimeisimmatArvot(2);
  }
  catch(error){
    console.error("Update error:",error);
  }
};

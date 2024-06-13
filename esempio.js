const isLoading = bool => {
  const spinner = document.querySelector(".spinner-border");

  if (bool) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  // al caricamento del dom (pagina), avviamo una chiamata HTTP di tipo GET (implicito)
  fetch("https://striveschool-api.herokuapp.com/api/agenda/")
    .then(resp => {
      if (resp.ok) {
        // restituiamo il dato convertito in array da JSON
        return resp.json();
      }
    })
    .then(appointments => {
      // otteniamo l'array come parametro appointments
      // qui dentro ci saremo nel momento esatto in cui avremo ricevuto il dato,
      // è il punto giusto per fare tutta la dom manipulation che serve
      isLoading(false); // stiamo rendendo invisibile lo spinner perché in qualche istante verranno generati gli elementi

      const list = document.getElementById("appointments-list");

      // cicliamo appointments per generare tanti elementi "li" nella pagina quanti sono gli oggetti contenuti nell'array
      appointments.forEach(app => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex align-items-center";
        listItem.innerHTML = `<span>${app.name}</span> <span class="badge ms-auto me-2 ${app.price ? "text-bg-dark" : "text-bg-success"}">${
          app.price ? app.price + "€" : "gratis"
        }</span> <a href="./details.html?appointmentId=${app._id}">VEDI DETTAGLI</a>`;

        list.appendChild(listItem);
      });
    })
    .catch(err => console.log(err));
});





// ALTRO

const params = new URLSearchParams(window.location.search); // oggetto costruito a partire dai parametri nella URL es. ?appointmentId=2938123
const id = params.get("appointmentId"); // metodo sull'oggetto URLSearchParams che
// ci estrae il valore corrispondente alla chiave "appointmentId" da noi scelta e applicata al link in homepage

console.log("RESOURCE ID: ", id);
// al caricamento della pagina facciamo richiesta al server di tornarci i dati specifici della risorsa con l'id che troviamo nella URL
window.addEventListener("DOMContentLoaded", function () {
  fetch("https://striveschool-api.herokuapp.com/api/agenda/" + id)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })
    .then(appointmentObj => {
      const container = document.getElementById("appointments-details");
      // destrutturazione dell'oggetto appointmentObj
      const { name, description, price, time, _id, createdAt, updatedAt } = appointmentObj;
      // svuotiamo il contenitore (togliendo anche lo spinner di conseguenza) e creiamo la struttura già con i dati ottenuti dal server
      container.innerHTML = `
                    <h1 class="display-5">${name}</h1>
                    <p class="font-monospace">${new Date(time).toLocaleString("it-IT")}</p>
                    <p class="lead">${description}</p>
                    <p class="display-6 text-primary">${price ? price + "€" : "gratis"}</p>
                    <h6 class="bg-light ps-2 py-3">Server Details:</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item ps-2"><strong>id:</strong> ${_id}</li>
                        <li class="list-group-item ps-2"><strong>createdAt:</strong> ${new Date(createdAt).toLocaleString("it-IT")}</li>
                        <li class="list-group-item ps-2"><strong>updatedAt:</strong> ${new Date(updatedAt).toLocaleString("it-IT")}</li>
                    </ul>
                    <button class="btn btn-success mt-4" onclick="handleEditBtnClick()">Modifica Appuntamento</button>
    `;
    })
    .catch(err => console.log(err));
});

const handleEditBtnClick = () => {
  window.location.assign("./backoffice.html?appointmentId=" + id);
};
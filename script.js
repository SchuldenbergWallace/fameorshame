document.getElementById("generateButton").addEventListener("click", async () => {
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const dataNascita = document.getElementById("dataNascita").value;
    const ruolo = document.getElementById("ruolo").value;
    const dataInizio = document.getElementById("dataInizio").value;
    const dataFine = document.getElementById("dataFine").value;
    const stipendio = document.getElementById("stipendio").value;
    const termini = document.getElementById("termini").value;

    // Aggiorna l'anteprima del contratto
    document.getElementById("previewNome").innerText = nome;
    document.getElementById("previewCognome").innerText = cognome;
    document.getElementById("previewDataNascita").innerText = dataNascita;
    document.getElementById("previewRuolo").innerText = ruolo;
    document.getElementById("previewDataInizio").innerText = dataInizio;
    document.getElementById("previewDataFine").innerText = dataFine;
    document.getElementById("previewStipendio").innerText = stipendio;
    document.getElementById("previewTermini").innerText = termini;

    // Mostra l'anteprima
    const contractPreview = document.getElementById("contractPreview");
    contractPreview.style.display = "block";

    // Cattura l'immagine dell'anteprima e caricala su imgbb
    html2canvas(contractPreview).then(async (canvas) => {
        const imageData = canvas.toDataURL("image/png");

        const formData = new FormData();
        formData.append("image", imageData.split(",")[1]); // Rimuovi la parte "data:image/png;base64,"

        // Chiamata API a imgbb
        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=2970b606faf3351a85bd7467ab5efd5b`, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                alert(`Immagine caricata con successo! Link: ${result.data.url}`);
            } else {
                alert("Errore nel caricamento dell'immagine.");
            }
        } catch (error) {
            alert("Errore nella chiamata a imgbb.");
        }
    });
});

(() => {
    document.addEventListener("DOMContentLoaded", async () => {
        try {
            //https://google.com/contador/registrar_visita.php
            const url = "http://localhost/Contador Visitas/contador/registrar_visita.php";
            const payload = {
                pagina: document.title,
                url: window.location.href,
            };
            const respuestaRaw = await fetch(url, {
                method: "POST",
                body: JSON.stringify(payload),
            });
            const respuesta = await respuestaRaw.json();
            if (!respuesta) {
                console.log("Error registrando visita");
            }
        } catch (e) {
            console.log("Error registrando visita: " + e);
        }
    });
})();
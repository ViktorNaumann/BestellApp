function menuRender() { // Erstellt eine Funktion renderBooks(), die die Bücher im HTML anzeigt.

    for (let i = 0; i < Steaks.length; i++) { // Eine for-Schleife läuft über alle Bücher im books-Array.
        let element = document.getElementById('content'); // Holt das HTML-Element mit der ID content, um dort die Bücher einzufügen.
        element.innerHTML += templateHtmlRender(i); // Fügt das Buch mit Hilfe der templateHtmlRender(i)-Funktion in das HTML ein.
    }
}

function templateHtmlRender(i) {
    return /*html*/`
        <div class="menu_steaks">
            <div class="steak_name">
                <h2>${Steaks[i].name}</h2>
                <img id="addMenu" class="plus_logo" src="./img/plus.png" alt="">
            </div>
            <div class="steak_info">
                <h3>Herkunft ${Steaks[i].info}</h3>
            </div>
            <div>
                <h4>${Steaks[i].amount} x ${Steaks[i].weight} g - ${Steaks[i].price.toFixed(2)} €</h4>
            </div>
        </div>
    `
}
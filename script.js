function menuRender() {
    let element = document.getElementById('content');
    for (let i = 0; i < Steaks.length; i++) {
        element.innerHTML += templateHtmlSteakRender(i);
    }
    
}

function warenkorbRender() {
    let element = document.getElementById(`warenkorb_content`);
    element.innerHTML = "";
    for (let j = 0; j < warenkorbMenus.length; j++) {
        element.innerHTML += templateHtmlRenderWarenkorb(j);
    }
    resultRender();
}

function resultRender() {
    let resultContent = document.getElementById('result_content');
    let result = 0;
    for (let index = 0; index < warenkorbPrices.length; index++) {
        result += warenkorbPrices[index]*warenkorbAmounts[index];
    }
    let lieferkosten = 9.90;
    let gesamt = result + lieferkosten;
    
    if (warenkorbMenus.length == 0) {
        resultContent.innerHTML = "";
    }else {
        resultContent.innerHTML = templateHtmlResultRender(result, lieferkosten, gesamt);
    }
}

function templateHtmlResultRender(result, lieferkosten, gesamt) {
    return /*html*/`
        <div class="result_content">
            <div class="line"></div>
            <ins>Zwischensumme: <span>${result.toFixed(2)} €</span></ins>
            <ins>Lieferkosten: <span>${lieferkosten.toFixed(2)} €</span></ins>
            <ins><b>Gesamt: <span>${gesamt.toFixed(2)} €</span></b></ins>
        </div>
        <div class="pay-button">
            <button class="btn">
                 Bezahlen
            </button>
        </div>
    `
}

function templateHtmlSteakRender(i) {
    return /*html*/`
        <div class="menu_steaks">
            <div class="steak_name">
                <h2>${Steaks[i].name}</h2>
                <img onclick="addMenu('${Steaks[i].name}', ${Steaks[i].price})" class="plus_logo" src="./img/plus.png" alt="addMenu">
            </div>
            <div class="steak_info">
                <h3>Herkunft: ${Steaks[i].info}</h3>
            </div>
            <div class="price_weight">
                <h4>${Steaks[i].amount} x ${Steaks[i].weight} g - ${Steaks[i].price.toFixed(2)} €</h4>
            </div>
        </div>
    `
}

function templateHtmlRenderWarenkorb(j) {
    return /*html*/`
        <div><h4>${warenkorbMenus[j]}</h4></div>
        <div class="menus_price">
            <p><p onclick="deleteAmount(${j})">-</p> ${warenkorbAmounts[j]} <p onclick="addAmount(${j})">+</p></p>
            <ins>${(warenkorbPrices[j] * warenkorbAmounts[j]).toFixed(2)} €</ins>
            <img class="delete_Menu" onclick="deleteAll(${j})" src="./img/mülleimer.png" height="40px" alt="deleteMenu">
        </div>
    `
}

function deleteAmount(j) {
    if (warenkorbAmounts[j] > 1) {
        warenkorbAmounts[j]--;
    } else {
        deleteAll(j);
    }
    warenkorbRender();
}

function addAmount(j) {
    warenkorbAmounts[j]++;
    warenkorbRender();
}

function deleteAll(j) {
    warenkorbMenus.splice(j, 1);
    warenkorbPrices.splice(j, 1);
    warenkorbAmounts.splice(j, 1);
    warenkorbRender();
}

function getMenuIndex(menuName) {
    return warenkorbMenus.indexOf(menuName);
}

function addMenu(menuName, menuPrice) {
    let index = getMenuIndex(menuName);

    if (index == -1) {
        warenkorbMenus.push(menuName);
        warenkorbPrices.push(menuPrice);
        warenkorbAmounts.push(1);
    } else {
        warenkorbAmounts[index]++;
    }
    warenkorbRender();
}

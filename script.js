function menuRender() {
    let element = document.getElementById('content');
    for (let i = 0; i < Steaks.length; i++) {
        element.innerHTML += templateSteakRender(i);
    }
    
}

function warenkorbRender() {
    let element = document.getElementById(`warenkorb_content`);
    element.innerHTML = "";
    for (let j = 0; j < warenkorbMenus.length; j++) {
        element.innerHTML += templateHtmlRenderWarenkorb(j);
    }

}

function templateSteakRender(i) {
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
        <div><p>${warenkorbMenus[j]}</p></div>
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

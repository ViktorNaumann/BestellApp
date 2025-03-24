function menuRender() {
    for (let i = 0; i < Steaks.length; i++) {
        let element = document.getElementById('content');
        element.innerHTML += templateSteakRender(i);
    }
    
    for (let y = 0; y < fish.length; y++) {
        let element = document.getElementById('content1');
        element.innerHTML += templateFishRender(y);
    } 
}

function warenkorbRender() {
    let element = document.getElementById(`warenkorb_content`);
    element.innerHTML = "";
    for (let j = 0; j < warenkorb.length; j++) {
        element.innerHTML += templateHtmlRenderWarenkorb(j);
    }

}

function templateSteakRender(i) {
    return /*html*/`
        <div class="menu_steaks">
            <div class="steak_name">
                <h2>${Steaks[i].name}</h2>
                <img onclick="addMenu(${i})" class="plus_logo" src="./img/plus.png" alt="">
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

function templateFishRender(i) {
    return /*html*/`
        <div class="menu_steaks">
            <div class="steak_name">
                <h2>${fish[i].name}</h2>
                <img onclick="addMenu(${i})" class="plus_logo" src="./img/plus.png" alt="">
            </div>
            <div class="steak_info">
                <h3>Herkunft: ${fish[i].info}</h3>
            </div>
            <div class="price_weight">
                <h4>${fish[i].amount} x ${fish[i].weight} g - ${fish[i].price.toFixed(2)} €</h4>
            </div>
        </div>
    `
}

function templateHtmlRenderWarenkorb(j){
    return /*html*/`
        <div>
            ${warenkorb[j].amount}
            ${warenkorb[j].name}
            ${warenkorb[j].price.toFixed(2)} €
        </div>
    `
}


function addMenu(i) {
    warenkorb.push ({
        amount: Steaks[i].amount,
        name: Steaks[i].name,
        price: Steaks[i].price
    });
    
    warenkorbRender();  
    
}

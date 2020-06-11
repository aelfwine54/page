document.addEventListener('DOMContentLoaded', function(){ 
    hashHandler();
}, false);

function chargerSousContenu(){
    let nom = "charger" + location.hash.replace('#/', '');
    window[nom]();
}

function remplacerContenu(idElement, contenu){
    let wrapper = document.getElementById(idElement);
    wrapper.innerHTML = contenu;
    chargerSousContenu();
}


async function hashHandler() {
    
    let hash = location.hash;
    console.log('The hash is ' + hash);
    let addr = '/static_pages' + hash.replace('#', '');
    console.log('The adress is ' + addr);
    try{
    let reponse = await fetch(addr);

    if(reponse.ok){
        contenu = await reponse.text();
        remplacerContenu("main_wrapper", contenu);
    }
}
catch(erreur){
    console.log(erreur.message);
}
  }
  
  window.addEventListener('hashchange', hashHandler, false);
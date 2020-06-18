let livres = []

function afficherListeLivres(livres, conteneur){
    const liste = document.getElementById(conteneur);
    const fragment = document.getElementById('livre-template');

    liste.innerHTML = '';

    livres.forEach(livre => {
            const instance = document.importNode(fragment.content, true);

            let image = instance.querySelector('img');
            image.src = livre.couverture;

            instance.querySelector('h1').innerHTML = livre.titre;
            instance.querySelector('.auteur').innerHTML = livre.auteur;
            instance.querySelector('.progression').innerHTML = "Page " + livre.progression + " de " + livre.pages;
            if('serie' in livre){
                instance.querySelector('.serie'). innerHTML = "[" + livre.rang + "] " + livre.serie;
                instance.querySelector('.serie').classList.remove('cache')
            }
            liste.appendChild(instance);
    });
}

function afficherListeLivresEnLecture(){
    let l = livres.filter(function(i) {return i.progression > 0});
    afficherListeLivres(l, 'listeEnLecture');
}

function afficherProchainLivre(){
    const liste = document.getElementById('listeProchain');
    const fragment = document.getElementById('livre-template');

    liste.innerHTML = "Vous n'avez pas de série en cours";
    //TODO
}

function afficherSeries(){
    const liste = document.getElementById('listeSerie');
    const fragment = document.getElementById('livre-template');

    liste.innerHTML = "Vous n'avez pas de série en cours";
    //TODO
}

function afficherBibliotheque(){
    afficherListeLivres(livres, 'listeBibliotheque');
}

async function chargerLivres(){
    const rep = await fetch('livres/');
    return rep.json();
}

async function chargerlire (){
    livres = await chargerLivres();
    afficherListeLivresEnLecture();
    afficherProchainLivre();
    afficherSeries();
    afficherBibliotheque();
}

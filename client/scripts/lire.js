let livres = [
    {
        "titre": "L'île mystérieuse",
        "auteur": "Jules Vernes",
        "progression": 1,
        "pages": 300,
        "couverture": "/images/couvertures/ileMysterieuse.jpg",
        "resume": "4 pecnos et un chien sur une île où il se passe de curieux trucs."
    },
    {
        "titre": "Adagio pour une ombre",
        "auteur": "Marion Zimmer Bradley",
        "progression": 120,
        "pages": 150,
        "couverture": "/images/couvertures/adagio.jpg",
        "resume": "Faut pas mélanger magie et piano."
    }
]

function afficherListeLivresEnLecture(){
    const liste = document.getElementById('listeEnLecture');
    const fragment = document.getElementById('livre-template');

    // Clear out the content from the ul
    liste.innerHTML = '';

    livres.forEach(livre => {
        const instance = document.importNode(fragment.content, true);

        let image = instance.querySelector('img');
        image.src = livre.couverture;

        instance.querySelector('h1').innerHTML = livre.titre;
        instance.querySelector('.auteur').innerHTML = livre.auteur;
        instance.querySelector('.progression').innerHTML = "Page " + livre.progression + " de " + livre.pages;

        liste.appendChild(instance);
    })
}

function chargerlire (){
    afficherListeLivresEnLecture();
}

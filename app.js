'use strict';

let tabCouleurs=['rouge','bleu','vert','jaune','orange','violet','noir','blanc','gris','rose'];
let tabAnimaux=['chien','chat','lion','girafe','tortue','tigre','ours','singe','renard','oiseau'];
let tabObjet=['table','chaise','lit','armoire','lampe','tapis','rideaux','four','aspirateur','fourchette'];

const body=document.querySelector('body')
const nouvelleDiv=document.createElement('div');
const nouveauH2=document.createElement('h2');
const contenuH2=document.createTextNode('Nouveau mot à trouver');
nouveauH2.appendChild(contenuH2)
nouvelleDiv.appendChild(nouveauH2);
const inputSaisieParUtilisteur=document.getElementById("lettre")
const divLettreInput=document.querySelector('.divLettreInput')

const recupererBoutonVoir=document.getElementById('voir')

// let recuperationInputUtilisateur=document.querySelectorAll('.inputsMots')

const categories=document.querySelectorAll(".categories");
categories.forEach((bouton)=>{

    bouton.addEventListener('click',choisirCategorie);

  
})

function choisirCategorie(e){
    
    faireApparaitreDivLettreInputActive();
    let quelCategories=e.target.dataset.categorie;
    let tableau=choisirTableau(quelCategories);
    let motsAleatoires=recupererMotAleatoire(tableau);
    // alert(motsAleatoires)
   
    let combienDeMots=compterLesMots(motsAleatoires);

    effacerElement();
    creationElement(combienDeMots);

    recupererBoutonVoir.addEventListener('click',function(e){
        recupererMot(combienDeMots,motsAleatoires);
        effacerInput();
       
    })

    // return [combienDeMots,motsAleatoires]
}

function choisirTableau(categorie){
    if(categorie ==='couleurs'){
        let recupererBouton1=document.querySelectorAll('.categories')[0]
        faireDisparaitreAutresClasses()
        faireApparaitreClasse(recupererBouton1)
        return tabCouleurs;
    }else if(categorie==='animaux'){
        faireDisparaitreAutresClasses()
        let recupererBouton2=document.querySelectorAll('.categories')[1]
        faireApparaitreClasse(recupererBouton2)
        return tabAnimaux;
    }else if(categorie==='objets'){
        let recupererBouton2=document.querySelectorAll('.categories')[2]
        faireDisparaitreAutresClasses()
        faireApparaitreClasse(recupererBouton2)
        return tabObjet;
    }
}

function recupererMotAleatoire(mots){
    let motsAleatoire=mots[Math.floor(Math.random() * mots.length)];

    return motsAleatoire;
   
}

function compterLesMots(motsAleatoire){
    let combienDeLettreMotAleatoire=motsAleatoire.length;
    return combienDeLettreMotAleatoire;
}

function creationElement(combienDeMots){
    for(let i=0 ; i<combienDeMots;i++){
                creerElement()
            }
}

function recupererMot(combienDeMots,motsAleatoires){
    const recupererSpanContenu=document.querySelectorAll('.spanContenu')
   
    for(let i=0;i<combienDeMots;i++){
        if(inputSaisieParUtilisteur.value===motsAleatoires[i]){    
           recupererSpanContenu[i].textContent=inputSaisieParUtilisteur.value
        }     
    } 
}

function creerElement(){
    const nouveauDivSpan=document.createElement('span');
    // const nouveauInput=document.createElement('input');
   
    const nouveauContenu=document.createTextNode('_ ');
    // nouveauDivSpan.appendChild(nouveauInput)
    nouveauDivSpan.appendChild(nouveauContenu);
    nouvelleDiv.appendChild(nouveauDivSpan);
    body.appendChild(nouvelleDiv)
    nouveauDivSpan.className="spanContenu";
    nouveauDivSpan.style.fontSize='50px'
    // nouveauInput.className='inputMots'
    // nouveauInput.value="s";

}

function effacerElement(){
    let recuperationSpan=document.querySelectorAll('.spanContenu');
    if(recuperationSpan.lenth !== 0 ){
        recuperationSpan.forEach((element)=>{
            element.remove();
        })      
    }

}

function enleverInput(i){
    let recuperationInputUtilisateur=document.querySelectorAll('.inputsMots')[i]
    recuperationInputUtilisateur.remove();
}

function effacerInput(){
    inputSaisieParUtilisteur.value="";
}

function faireApparaitreDivLettreInputActive(){
    divLettreInput.classList.remove('divLettreInput');
    divLettreInput.classList.add('divLettreInputActive')
    
} 

function faireApparaitreClasse(couleurs){
    couleurs.classList.add('choisirBoutonsActive')
}

function faireDisparaitreAutresClasses(){
    categories.forEach((element)=>{
        element.classList.remove('choisirBoutonsActive')
    })
}



// function recupererInputUtilisateur(motsAleatoire,combienDeLettreMotAleatoire){
//     let recuperationInputUtilisateur=document.querySelector('.inputsMots')
//     for(let i=0;i<combienDeLettreMotAleatoire;i++){
//        return motsAleatoire[i]
//     }
// }





// function choisirCategorie(e){
//     let quelCategories=e.target.dataset.categorie;
//     let tableau;

//     if(quelCategories==='couleurs'){
//         tableau=tabCouleurs;
//     }else if(quelCategories==='animaux'){
//         tableau=tabAnimaux;
//     }else if(quelCategories==='objets'){
//         tableau=tabObjet;
//     }

//     let motsAleatoires=tableau[Math.floor(Math.random() * tableau.length)];
//     alert(motsAleatoires)
//     let combienDeLettreMotAleatoire=motsAleatoires.length;
//     // alert(combienDeLettreMotAleatoire)

//     effacerElement();

   
//     for(let i=0 ; i<combienDeLettreMotAleatoire;i++){
//         creerElement()
//     }

    
//     let recuperationInputUtilisateur=document.querySelectorAll('.inputsMots')
//     for(let i=0;i<combienDeLettreMotAleatoire;i++){
//         alert(motsAleatoires[i])
       
//     } 
// }



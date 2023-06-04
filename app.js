'use strict';

let tabCouleurs=['rouge','bleu','vert','jaune','orange','violet','noir','blanc','gris','rose'];
let tabAnimaux=['chien','chat','lion','girafe','tortue','tigre','ours','singe','renard','oiseau'];
let tabObjet=['table','chaise','lit','armoire','lampe','tapis','rideaux','four','aspirateur','fourchette'];

const body=document.querySelector('body')
const nouvelleDiv=document.createElement('div');

const inputSaisieParUtilisteur=document.getElementById("lettre")
const divLettreInput=document.querySelector('.divLettreInput')

// let compteur=10;
let compteurGagner=0;

const recupererBoutonVoir=document.getElementById('voir')

// let recuperationInputUtilisateur=document.querySelectorAll('.inputsMots')

const categories=document.querySelectorAll(".categories");
categories.forEach((bouton)=>{
    
    bouton.addEventListener('click',choisirCategorie);
    
  
})

function choisirCategorie(e){
   
//    compteur=10;
    // compteur=10;
    supprimerCreerDivCompteur()
    effacerPerdu()
    // let compteurFonction=quiInitialiseCompteur();
  
   
 
    // alert(compteurFonction)
    
    faireApparaitreDivLettreInputActive();

    let quelCategories=e.target.dataset.categorie;
    let tableau=choisirTableau(quelCategories);
    let motsAleatoires=recupererMotAleatoire(tableau);
    // alert(motsAleatoires)
   
    let combienDeMots=compterLesMots(motsAleatoires);
    effacerH2()
    creerH2();
    effacerElement();
    creationElement(combienDeMots);

    let compteur=10;
    // let compteurActuel=compteur;
    // alert(compteur)
  


    recupererBoutonVoir.addEventListener('click',function(e){
        effacerPerdu();
        recupererMot(combienDeMots,motsAleatoires);
        effacerInput(); 
        
        compteur--
      
        // alert(compteur)
       
        // compteurActuel--;
        // recupererIdCompteur

        
       
        // compteurActuel=quiComptabiliseCompteur(compteurActuel)
        // alert(compteurActuel)
        supprimerCreerDivCompteur()
        creerDivCompteur(compteur)
        // alert(compteurFonction)
      

        if(compteur===0){
           compteur=10;
            faireDisparaitreDivLettreInputActive();
            effacerElement();
            supprimerCreerDivCompteur()
            effacerH2();
            perduOuGagner('perdu');
           
         
        }
    
        
       
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
        // alert(combienDeMots)
        if(inputSaisieParUtilisteur.value===motsAleatoires[i]){    
           recupererSpanContenu[i].textContent=inputSaisieParUtilisteur.value;
           compteurGagner++;

           if(compteurGagner===combienDeMots){
                compteur=10;
                faireDisparaitreDivLettreInputActive();
                effacerElement();
                supprimerCreerDivCompteur()
                effacerH2();
            perduOuGagner('gagner')
           }
         
        }    
        
    } 
}
function creerH2(){
    const nouveauH2=document.createElement('h2');
    const contenuH2=document.createTextNode('Nouveau mot à trouver');
    nouveauH2.appendChild(contenuH2)
    nouvelleDiv.appendChild(nouveauH2);
    nouveauH2.id='nouveauH2';
}

function effacerH2(){
    const nouveauH2=document.getElementById('nouveauH2')
    if(nouveauH2!==null){
        nouveauH2.remove();
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
    divLettreInput.classList.add('divLettreInputActive');
    
} 

function faireDisparaitreDivLettreInputActive(){
    const divLettreInputActive=document.getElementsByClassName('divLettreInputActive');
    divLettreInput.classList.remove('divLettreInputActive');
    divLettreInput.classList.add('divLettreInput')
    
}

function faireApparaitreClasse(couleurs){
    couleurs.classList.add('choisirBoutonsActive')
}

function faireDisparaitreAutresClasses(){
    categories.forEach((element)=>{
        element.classList.remove('choisirBoutonsActive')
    })
}

function creerDivCompteur(compteur){
    // alert(compteur)
    const creationDivCompteur=document.createElement("div");
    const creationContenuCompteur=document.createTextNode(`Il vous reste ${compteur} tentatives`);
    creationDivCompteur.appendChild(creationContenuCompteur);
    body.appendChild(creationDivCompteur);
    creationDivCompteur.id='divCompteur';


}

function supprimerCreerDivCompteur(){
    let recupererIdCompteur=document.getElementById('divCompteur');
    if(recupererIdCompteur!=null){
        recupererIdCompteur.remove();
    }
       
}

function perduOuGagner(perduOuGagner){
    let nouvelleDivPerdu=document.createElement('div');
    let nouveauPargraphePerdu=document.createElement('p');
    nouvelleDivPerdu.appendChild(nouveauPargraphePerdu);
    nouveauPargraphePerdu.textContent=`Vous avez ${perduOuGagner} .Cliquez sur un bouton pour recommencer`;
    body.appendChild(nouvelleDivPerdu);
    nouveauPargraphePerdu.id='nouveauParagraphePerduOuGagner'
}

function effacerPerdu(){
    const nouveauParagraphePerdu=document.getElementById('nouveauParagraphePerduOuGagner');
    if(nouveauParagraphePerdu!==null){
        nouveauParagraphePerdu.remove();
    }
}



// function quiComptabiliseCompteur(compteur){
    
//     compteur--;
//     if(compteur===0){
//         compteur=10;
//          faireDisparaitreDivLettreInputActive();
//          effacerElement();
//          supprimerCreerDivCompteur()
//          effacerH2();
//          perdu();
        
      
//      }

//      return compteur;
    
// }

// function quiInitialiseCompteur(){
//     let compteur=10;
//     return compteur
// }







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



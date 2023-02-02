import { useState } from "react";
//___________________________________________________________________________________________________________________________
function Test() {
// state (état, donnés)
  const [compteur, setCompteur] = useState(1);
//_________(part 1)____________ci_dessus_on_a_définis_un_(state)))_que_l'on_initialise_a_1_que_l'on_recupere___________________________________________________
//___________au niveau_du_compteur_puis_que_l'on_projete_a_l'affichage__________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________________________________
// comportements
const handleClick = () => {
  //compteur = compteur + 1
   setCompteur(compteur + 1);
};
//___________(part 3)__________dans_mon_(comportement_handlClick)))_je_lui_demande_de_modifier_mon_(State)))_______________________________________
//____________ et_de_l'incrémenter_de_1_via_le_(setter)))_dédier_(setCompteur)))_qui_vas_non_seulement_
//_____________modifier_la_valeur_du_(state)))_mais_en plus lorsque quil a finis de modifier la valeur du state
//______________il_vas_actualiser_l'affichage_avec_la_nouvel_valeur _______________________________________________________________________________________________________________
//_________________________________________________________________________________________________________________________________________
// affichage (render)
 return (
  <div>
  <h2>{compteur}</h2>
  <button onClick={handleClick} >Incrémenter</button>
  </div>
  );
}
//__________(part 2)___________je_le_project_au_niveau_de_mon_affichage_dans_le_titre_h2_j'ai_brancher_un_bouton_________________________________________
//____________lier_a_mon_(comportement_handlCclick)))_via_(l'evenement_onclick)))________________________________________________________________________
//_____________________________________________________________________________________________________________________________________________________
export default Test;



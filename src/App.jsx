import { useState } from 'react';
import Test from './Components/test';
import ComposantList from './Components/ComposantList';


function App()
{
//_________________________________________________________________________________________
// state (état,donnés)
const [list, setList ] = useState([
    {id: 1, nom: "item 1"},
    {id: 2, nom: "item 2"},
    {id: 3, nom: "item 3"}
]);
const [newItem, setNewItem] = useState("");
//const inputRef = useRef();
//__________________________________________________________________________________
//comportements

//const voiture = <li>Voiture 1</li>;
//const voitures = [
//<li>voiture 4</li>,
//<li>voiture 2</li>,
//<li>voiture 3</li>,
//];
  const handleDelete = (id) => {
   console.log(id)
  //1
  const listCopy = [...list];
  //2
  const listCopyUpdated = listCopy.filter((list) => list.id !== id)
  //3
   setList(listCopyUpdated, list)
};
  const handleSubmit = (event) => {
   event.preventDefault();
    //alert("handleSubmit")
    //console.log(inputRef.current.value);
//1. copie du state
  const listCopy = [...list];
//2. manipuler mon state
const id = new Date().getTime();
const nom = newItem;
const listAAjouter = { id, nom};
    listCopy.push({ id, nom });
//const listCopyUpdated = listCopy.filter((list) => list.id !== id)

//3. modifier mon state avec le setter
  setList(listCopy);
  setNewItem("")
};
const handleChange = (event) => {
  setNewItem(event.target.value);
};
//_____________________________________________________________________________________________________________________
// affichage (render)
return (
    <div>
   <center><h2>incrementation</h2></center>
    <h3><Test/></h3>

  <h1>_______________________________________________________________________________________________________________________________________________________________</h1>
    <br></br>
    <center><h2>list</h2></center>
        <ul>
        {list.map((list) => (
          //<li key={list.id}>
         //{list.nom} <button onClick={() => handleDelete(list.id)}>x</button>
         //</li>
         <ComposantList listInfos={list} onListDelete={handleDelete}/>
        ))
        }
   </ul>
     <form action="submit"
      onSubmit={handleSubmit}>
    <input value={newItem} type='text'
      placeholder='ajouter un item...'
      onChange={handleChange}/>
    <button>ajoutez +</button>
     </form>
 </div>
);
}
export default App;
// gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire (onSubmit / handleSubmit)
//3. collecte des données du formulaire
//3a. méthode 1: documentgetElementById "react" (useRef
//3b. méthode 2: sync descendante / ascendante (onChange / handleChange )

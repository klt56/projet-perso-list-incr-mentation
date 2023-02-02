import { useState } from 'react';

export default function ComposantForm(handleAdd) {
    const [newItem, setNewItem] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        //alert("handleSubmit")
        //console.log(inputRef.current.value);
     //2. manipuler mon state
    const id = new Date().getTime();
    const nom = newItem;
    const listAAjouter = { id, nom};
    //listCopy.push({ listAAjouter  });
    //const listCopyUpdated = listCopy.filter((list) => list.id !== id)
handleAdd(listAAjouter);
setNewItem("");
    //3. modifier mon state avec le setter
};
    const handleChange = (event) => {
      setNewItem(event.target.value);
    };

return (
    <form action="submit"
      onSubmit={handleSubmit}>
    <input
    value={newItem} type='text'
      placeholder='ajouter un item...'
      onChange={handleChange}/>
    <button>ajoutez +</button>
     </form>
);
}

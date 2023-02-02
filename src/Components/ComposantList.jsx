export default function ComposantList({ listInfos, onListDelete }) {
    //state
    //const listInfos = props.listInfos
    //const onListDelete = props.onListDelete
    //const { listInfos, onListDelete} = props;

    //comportements

    //affichage
    return (
   <li key={listInfos.id}>
    {listInfos.nom}{""}
    <button onClick={() => onListDelete(listInfos.id)}>x</button>
   </li>
    );
}

import { useState } from "react";
import { ListModel } from "../interfaces/ListModel";

interface ListViewProps{
    itemList: ListModel[],
    addNewItem: (passedName: string) => void
    deleteItem: (id: number) => void 
}

function ListView (prop:ListViewProps){

    const [newItemName, setNewItemName] = useState("");

    return <div>
        {
            prop.itemList.map(item => <li key={item.id}>{item.name} <span><button onClick={() => {prop.deleteItem(item.id)}} style={{ backgroundColor: 'red', color:'white', border:'white' }}>delete</button></span></li>)
        }

        <input placeholder="enter the name of the item here : " onChange={(event) => {setNewItemName(event.target.value)}}></input>
        {newItemName !== '' && <button onClick={() => {prop.addNewItem(newItemName); setNewItemName('')}}>new item add</button>}
        </div>
}

export default ListView;
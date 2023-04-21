import React, { useState } from "react";
import ListView from "../components/ListView";
import { ListModel } from "../interfaces/ListModel";

function MainPage (){

    const [itemList, setItemList] = useState<ListModel[]>([{id:1,name:'name one'},{id:2,name:'name two'},{id:3,name:'name three'}])
    const addNewItem = (passedName : string) => {
        setItemList([...itemList, {id: itemList.length + 1 , name: passedName}])
    }
    const deleteItem = (returnedId: number) => {
        const UpdatedItemList = [...itemList];
        const index = itemList.map(item => item.id).indexOf(returnedId);
        UpdatedItemList.splice(index,1);
        setItemList(UpdatedItemList)
    }

    return <div>
        <ListView itemList={itemList} addNewItem={addNewItem} deleteItem={deleteItem}></ListView>
    </div>
}

export default MainPage;
import React, {useState} from 'react';

function useLocalStorage(itemName, initialValue) {
    const localStarageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStarageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));                   //JSON.stringify() psa un objeto o arreglo a texto plano
        parsedItem = initialValue;
    }else {
        parsedItem = JSON.parse(localStarageItem)                             //Pasa texto plano a un objeto
    }
    
    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);

    }

    return [
        item,
        saveItem,
    ];
}

export {useLocalStorage};
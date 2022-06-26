import React, {useState,useEffect} from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() =>{
            try {
                const localStarageItem = localStorage.getItem(itemName);
                let parsedItem;
                
                if(!localStarageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));                   //JSON.stringify() psa un objeto o arreglo a texto plano
                    parsedItem = initialValue;
                }else {
                    parsedItem = JSON.parse(localStarageItem)                             //Pasa texto plano a un objeto
                }
    
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000)
    },[])


    

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);     
        } catch (error) {
            setError(error);
        }

    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export {useLocalStorage};
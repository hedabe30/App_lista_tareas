import React, {useState} from 'react';
import '../styles/TaskSearch.css';

const TaskSearch = () => {

    const [searchValue, setSearchValue] = useState('');

    const onSearchValueChange = (event) => {
        let change = event.target.value;
        console.log(change);
        setSearchValue(event.target.value);
    }

    return (
    <React.Fragment> 
        <input 
            className='TaskSearch'
            placeholder="Buscador" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
        <p>{searchValue}</p>
    </React.Fragment> 
    )
}
 
export {TaskSearch};
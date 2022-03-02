import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchForm =() =>{

let [categories, setCategories] = useState([]);
let [selectedCat, setSelectedCat] = useState('people');
let [id, setId] = useState(null);
const history = useHistory();

    useEffect(()=>{
        axios.get('https://swapi.dev/api/')
        .then(response=>{
            console.log(response);
            console.log(Object.keys(response.data))
            setCategories(Object.keys(response.data))
            setSelectedCat(Object.keys(response.data)[0])
        })
        .catch(err=>{
            console.log('error', err);
        })

    },[])

    const handleSubmit =(e)=>{
        e.preventDefault();
        history.push(`/${selectedCat}/${id}/`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className='d-flex justify-content-between'>
                <div className="form-group">
                    <label htmlFor="">Search for:</label>
                    <select onChange={(e)=>{setSelectedCat(e.target.value)}} className="form-select" name="" id="">
                        {
                            categories.map((cat,i)=>{
                                return(
                                    <option key={i} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID:</label>
                    <input onChange={(e)=>{setId(e.target.value)}} type="number" className="form-control" />
                </div>
                <input type="submit" className="btn btn-success" value="Search" />
            </form>
        </div>
    )
}

export default SearchForm;
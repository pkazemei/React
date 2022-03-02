import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';

const Detail =() =>{
    const { category, id } = useParams();

    let [info, setInfo] = useState({});
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)

        .then(response=>{
            console.log('Response from getting details', response)
            setInfo(response.data);
        })
        .catch(err=>console.log(err))
    },[category, id])

    return (
        <div><br />
            {
                category === 'people'?
                    <>
                    <h2>Name: {info.name}</h2>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    </>
                : category === 'planets'?
                    <>
                    <h2>Name: {info.name}</h2>
                    <p>Climate: {info.climate}</p>
                    <p>Terrain: {info.terrain}</p>
                    </>
                : category === 'films'?
                    <>
                    <h2>Title: {info.title}</h2>
                    <p>Opening Crawl: {info.opening_crawl}</p>
                    <p>Release Date: {info.release_date}</p>
                    </>
                : category === 'species'?
                    <>
                    <h2>Name: {info.name}</h2>
                    <p>Classification: {info.classification}</p>
                    <p>Average Lifespan: {info.average_lifespan}</p>
                    </>
                : category === 'vehicles'?
                    <>
                    <h2>Name: {info.name}</h2>
                    <p>Model: {info.model}</p>
                    <p>Manufacturer: {info.manufacturer}</p>
                    </>
                : category === 'starships'?
                    <>
                    <h2>Name: {info.name}</h2>
                    <p>Model: {info.model}</p>
                    <p>Manufacturer: {info.manufacturer}</p>
                    </>
                :   <>
                    <h2>These are not the droids you're looking for</h2>
                    </>
            }
        </div>
    );
};

export default Detail;
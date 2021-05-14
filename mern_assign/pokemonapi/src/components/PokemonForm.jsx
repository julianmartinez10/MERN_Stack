import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonForm = () => {

    const[allPlayers, setAllPlayers] = useState([])

    //  useEffect makes request one time
    //  takes a ( callback function: ()=>{}, empty arr to run once [] || with variable to request everytime var is changed/updated [var1])
    //  useEffect is saying, "run this code within the function, once (unless otherwise noted), when page is loaded"
    useEffect(()=>{
        // //  callbackFunction body
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=100&?")
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         console.log("*********")
        //         console.log(res.results)
        //          setAllPlayers(res.results) //   will send request on an infinite loop until computer crashes or you run out of requests from the API, unless inside useEffect callbackFunction
        //     })
        //     .catch(err => console.log("ERRRRRRROOOOOORRRRR", err))
    }, [])
    // console.log("Outside the fetch", res)

    const getPlayers = ()=>{
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=887&?")
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         console.log("*********")
        //         console.log(res.results)
        //          setAllPlayers(res.results) //   will send request on an infinite loop until computer crashes or you run out of requests from the API, unless inside useEffect callbackFunction
        //     })
        //     .catch(err => console.log("ERRRRRRROOOOOORRRRR", err))

        //  axios is clean version of fetch
        //  be sure when setting players that you add .data. otherwise expect an error
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=887&?")
        .then(res => {
            console.log("*********")
            console.log(res.results)
            setAllPlayers(res.data.results)})
        .catch(err => {console.log(err)})
    }


    return (
        <div>
            <h1 className="text-center">Here Are The Players</h1>
            <button onClick={getPlayers}>FETCH PLAYERS</button>
            {
            allPlayers.map((player, idx)=>{
                return <div key={idx} className="card col-6 offset-md-4">
                        <div  className="card-header">
                            {player.name}
                        </div>
                </div>
            })
            }
        </div>
    );
};


export default PokemonForm;
import { useEffect, useState } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke, setJoke] = useState({});

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    
    useEffect(() => {
        //async function getFirstJoke() {
        const getFirstJoke = async () => {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    }, []);

    return (
        <>
            <h2>Joker!</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </>
    )
}
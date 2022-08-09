import React, { useEffect, useState } from "react";

function App(){
    const [dogPicture, setDogPicture] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((r) => r.json())
            .then((data) => {
                setDogPicture(data.message)
            })
        }, []);

    if (!dogPicture) return <p>Loading ...</p>
    return (
        <img src={dogPicture} alt="A Random Dog"></img>
    );
}

export default App
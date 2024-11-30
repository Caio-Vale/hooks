import React, {useState,useEffect} from "react"

function Tables() {
    const [characters, setCharacter] = useState([])

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json()
            setCharacter(data.results)
        }
        fetchCharacters()

    }, [])
    console.log(characters)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Spices</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map((characters) => 
                            <tr key={characters.id}>
                                <td>{characters.id}</td>
                                <td>{characters.name}</td>
                                <td>{characters.status}</td>
                                <td>{characters.species}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Tables

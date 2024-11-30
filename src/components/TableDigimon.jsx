import React, {useState,useEffect} from "react"

function TableDigimon() {
    const [characters, setCharacter] = useState([])

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch("https://digimon-api.vercel.app/api/digimon")
            const data = await response.json()
            setCharacter(data.results)
        }
        fetchCharacters()

    }, [])
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Imagem</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                {
                        characters.map((characters) => 
                            <tr>
                                <td>{characters.name}</td>
                                <td>{characters.img}</td>
                                <td>{characters.level}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableDigimon

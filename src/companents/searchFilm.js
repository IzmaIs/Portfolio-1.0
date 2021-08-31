import {useEffect, useState} from "react";


export default function SearchFilms({keyword, page}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': '17d4a3d9-ab7d-4038-843b-8a95e22b6c7b'
        }
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())

            .then(data => setData(data.films))
    }, [keyword, page]);
    console.log("data", data)
    return (
        <div className="App">
            <h2 align="center">Results</h2>
            {data.map((films) =>
                <div align="center">
                    <p key={films}>Название на русском:{films.nameRu}</p>
                    <p key={films}>Название на английском:{films.nameEn}</p>
                    <img key={films} src={films.posterUrl} width="400" height="400"/>
                </div>
            )}
        </div>
    )
}
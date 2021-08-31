import SearchFilms from "./searchFilm";
import {useState} from "react";
import React from "react";
import {Container, TextField} from "@material-ui/core";


export default function FindFilm() {
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);

    function handleSearch(e) {
        setKeyword(e.target.value)
        setPage(1)
    }

    return (
        <div>
            <Container fixed style={{paddingTop: "9%"}}>
                <form align="center" className="" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Поиск" variant="outlined" onChange={handleSearch}/>
                </form>
                <SearchFilms keyword={keyword} page={page}/>
            </Container>
        </div>
    )
}
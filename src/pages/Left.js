import React, {Fragment, useState} from "react";
import FindFilm from "../companents/findFilm";

export const Left = () => {
    const [setKeyword] = useState('')
    const [setPage] = useState(1)

    function handleSearch(e) {
        setKeyword(e.target.value)
        setPage(1)
    }

    return (
        <Fragment>
            <FindFilm/>
        </Fragment>
    )
}
import React, {Fragment, useState} from "react";
import FindFilm from "../companents/findFilm";
import GoTop from "../companents/GoTop";
import Box from '@material-ui/core/Box';

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
            <Box textAlign='center'>
                <GoTop scrollStepInPx="100" delayInMs="5.50"/>
            </Box>
        </Fragment>
    )
}
import React, {Fragment} from "react";
import FindFilm from "../companents/findFilm";
import GoTop from "../companents/GoTop";
import Box from '@material-ui/core/Box';

export const Left = () => {
    return (
        <Fragment>
            <FindFilm/>
            <Box textAlign='center'>
                <GoTop scrollStepInPx="100" delayInMs="5.50"/>
            </Box>
        </Fragment>
    )
}
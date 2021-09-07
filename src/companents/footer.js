import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import React from "react";
import "../app.css";




export const Footer = () => {
    const [value, setValue] = React.useState("recents");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <footer>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
            </BottomNavigation>
        </footer>
    )
}
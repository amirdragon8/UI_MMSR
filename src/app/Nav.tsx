import { Box, List } from "@mui/material";
import { NavLink } from "./NavLink";

export default function Nav() {
    return (
        <Box sx={{ borderRight: 1, borderRightColor: 'divider',  width: 264, height: "calc(100vh - 64px)", overflow:'auto' }} >
            <List dense>
                <NavLink href={'/songs'}>{'Songs'}</NavLink>
            </List>
        </Box>
    )
};
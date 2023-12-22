import { AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
    return (
        <AppBar position="sticky" sx={{ top: 0 }}>
            <Toolbar sx={{columnGap: 1.5}}>
                <Image
                    src={process.env.NEXT_PUBLIC_LOGO as string}
                    alt='Logo'
                    width={24}
                    height={24}
                    priority={true}
                   // className={styles.image}
                />
                <Typography variant="h6">
                    {process.env.NEXT_PUBLIC_NAME}
                </Typography>
            </Toolbar>
        </AppBar>


    )


}
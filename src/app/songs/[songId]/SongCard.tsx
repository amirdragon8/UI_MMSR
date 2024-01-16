"use client"

import { TSong } from '@/lib/songs';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function SongCard({ song }: { song: TSong }) {
    const theme = useTheme();
    const [mute, setMute] = useState(1)


    return (
        <Card sx={{ display: 'flex' }} key={song.songid}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {song.song}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {song.artist}
                    </Typography>
                    <Typography>
                        {song.genre.map((x)=>x.replaceAll("'", "")).join(" • ")}
                    </Typography>
                    {/* <video controls={true}>
                        <source src={`https://www.youtube.com/watch?v=${song.url}`} type="video/mp4"/>
                    </video> */}
                    {/* {`https://www.youtube.com/watch?v=${song.url}?autoplay=1&mute=${mute}`} */}
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <iframe width="420" height="315"
                            src={`https://www.youtube.com/embed/${song.url}?enablejsapi=&autoplay=1&mute=1`}>
                        </iframe>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}

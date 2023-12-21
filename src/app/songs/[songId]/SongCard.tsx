"use client"

import { TSong } from '@/lib/songs';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SongCard({ song }: { song: TSong }) {
    const theme = useTheme();

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
                </CardContent>
            </Box>
        </Card>
    );
}

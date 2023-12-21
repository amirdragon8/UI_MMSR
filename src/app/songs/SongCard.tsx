"use client"

import Typography from '@mui/material/Typography';

import { Button, Card, CardActions, CardContent, Grid, Link } from '@mui/material';
import { TSong } from '@/lib/songs';


// function handleListen(e) {
//     e.preventDefault();
//     // "https://www.youtube.com/results?search_query=take+me+to+church+hozier"
//     console.log('You clicked listen.');
//   }

export default function SongCard({ song }: { song: TSong }) {
    return (
        <Card sx={{ display:'flex'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid key={song.songid} item xs={12}>
                <Grid container justifyContent="center" spacing={8} >
                    <Grid item>
                        <Typography variant="h5" component="div">
                            <Link href={`/${song.songid}/song`}>{song.song}</Link> 
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {song.artist}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">
                            {song.genre.join(" • ")}
                            <br />
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {song.album}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </CardContent>   
        <CardActions>
           
            <Button size="small">Recommendations</Button>
            <Button size="small">Listen</Button>
        </CardActions>
        </Card>
    );
}
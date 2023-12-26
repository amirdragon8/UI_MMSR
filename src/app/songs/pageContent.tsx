"use client"
import { TRetrievalsystem, TSong } from '@/lib/songs';
import SongCard from './SongCard';
import { Suspense, useCallback, useState, useTransition } from 'react';
import SearchSong from './SearchSong';
import SongTable from './SongTable';
import { Box } from '@mui/material';



export default function PageContent({ songs, artists }: { songs: TSong[],  artists:string[] }) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
     <SearchSong startTransition={startTransition} artists={artists} />
      <Box sx={{opacity:isPending?0.5:1}}>
        <SongTable songs={songs}></SongTable>        
      </Box>


      {/* <SongCard song={songs[0]}></SongCard> */}
    </>
  )
}
"use client"
import { TRetrievalsystem, TSong } from '@/lib/songs';
import { Suspense, useCallback, useState, useTransition } from 'react';
import SearchSong from './SearchSong';
import SongTable from './SongTable';
import { Box } from '@mui/material';



export default function PageContent({ songs, artists }: { songs: TSong[],  artists:string[] }) {
  const [isPending, startTransition] = useTransition();

  return (

     <Box display={"flex"} flexDirection={"column"} gap={2}>
     <SearchSong startTransition={startTransition} artists={artists} />
      <Box sx={{opacity:isPending?0.5:1}}>
        <SongTable songs={songs}></SongTable>        
      </Box>
     </Box>
  )
}
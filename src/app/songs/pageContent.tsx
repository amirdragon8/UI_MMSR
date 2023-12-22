"use client"
import { TRetrievalsystem, TSong } from '@/lib/songs';
import SongCard from './SongCard';
import { Suspense, useCallback, useState, useTransition } from 'react';
import SelectRetrievalsystem from './SelectRetrievalsystem';
import SearchSongGeneric from './SearchSongGeneric';
import SongTable from './SongTable';
import { Box } from '@mui/material';



export default function PageContent({ songs, retrievalsystems }: { songs: TSong[], retrievalsystems: TRetrievalsystem[] }) {
  const [isPending, startTransition] = useTransition();
  const [selectedRetrievalsystem, setSelectRetrievalsystem] = useState<string>((retrievalsystems[0]).retrievalsystemId.toString())


  return (
    <>
      <SelectRetrievalsystem retrievalsystems={retrievalsystems} selectedRetrievalsystem={selectedRetrievalsystem} setSelectRetrievalsystem={setSelectRetrievalsystem} />
      {/* <SearchSongGeneric searchSongGeneric={searchSongGeneric} setSearchSongGeneric={setSearchSongGeneric} /> */}
      
      <SearchSongGeneric startTransition={startTransition} />
      <Box sx={{opacity:isPending?0.5:1}}>
        <SongTable songs={songs}></SongTable>        
      </Box>


      {/* <SongCard song={songs[0]}></SongCard> */}
    </>
  )
}
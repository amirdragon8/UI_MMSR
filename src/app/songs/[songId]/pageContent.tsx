"use client"

import { TRetrievalsystem, TRetrievedSong, TSong, findSongById } from '@/lib/songs';
import SongCard from './SongCard'
import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import RetrievedSongAccordion from './RetrievedSongAccordion';
import { Divider, Typography } from '@mui/material';



export default function PageContent({ song, retrievalsystems, retrievedSongs }: { song: TSong,  retrievalsystems: TRetrievalsystem[], retrievedSongs:TRetrievedSong[]}) {

    const [selectedRetrievalsystem, setSelectRetrievalsystem] = useState<string>(retrievalsystems[0].retrievalsystemId.toString()) // ??
        
    // const handleRetrievalsystemChange = (selectedRetrievalsystem:string)=> {
    //     setSelectRetrievalsystem(selectedRetrievalsystem)
    //     //sessionStorage.setItem('retrievalsystem', selectedRetrievalsystem)
    //     //createQueryString('retrievalsystem', selectedRetrievalsystem)
    // }


    return (<>
        <SongCard song={song}></SongCard>
        <Divider orientation="vertical" flexItem sx={{p:5}}/>
        <Typography variant='h5' sx={{p:2}}>TOP 10 recommended songs</Typography>
        <RetrievedSongAccordion retrievalsystems={retrievalsystems} retrievedSongs={retrievedSongs}></RetrievedSongAccordion>
    </>

    )
}
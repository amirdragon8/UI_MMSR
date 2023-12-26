"use client"

import { TRetrievalsystem, TRetrievedSong, TSong, findSongById } from '@/lib/songs';
import SongCard from './SongCard'
import SelectRetrievalsystem from './SelectRetrievalsystem';
import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import RetrievedSongAccordion from './RetrievedSongAccordion';



export default function PageContent({ song, retrievalsystems, retrievedSongs }: { song: TSong,  retrievalsystems: TRetrievalsystem[], retrievedSongs:TRetrievedSong[]}) {

    const [selectedRetrievalsystem, setSelectRetrievalsystem] = useState<string>(retrievalsystems[0].retrievalsystemId.toString()) // ??
        
    // const handleRetrievalsystemChange = (selectedRetrievalsystem:string)=> {
    //     setSelectRetrievalsystem(selectedRetrievalsystem)
    //     //sessionStorage.setItem('retrievalsystem', selectedRetrievalsystem)
    //     //createQueryString('retrievalsystem', selectedRetrievalsystem)
    // }


    return (<>
        {/* <div>{sessionStorage.getItem('retrievalsystem')}</div>
         */}
        {/* <SelectRetrievalsystem retrievalsystems={retrievalsystems} selectedRetrievalsystem={selectedRetrievalsystem} setSelectRetrievalsystem={handleRetrievalsystemChange} />
        <SelectRetrievalsystem retrievalsystems={retrievalsystems} selectedRetrievalsystem={selectedRetrievalsystem} setSelectRetrievalsystem={setSelectRetrievalsystem} /> */}
        
        
        <SongCard song={song}></SongCard>
        <RetrievedSongAccordion retrievalsystems={retrievalsystems} retrievedSongs={retrievedSongs}></RetrievedSongAccordion>
    </>

    )
}
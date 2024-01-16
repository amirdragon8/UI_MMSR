import { useSearchParams } from 'next/navigation'
import PageContent from './pageContent'
import { Typography } from '@mui/material'
import { TRetrievalsystem, TRetrievedSong, TSong, findRetrievalsystem, findRetrievedSongs, findSongById } from '@/lib/songs'

import { NextResponse, NextRequest } from 'next/server'

export default async function Page({ params }: { params: { songId: string, retrievalsystem:string } }) {

    const retrievalsystems: TRetrievalsystem[] = await findRetrievalsystem()
    const songs: TSong[] = await findSongById({ songId: params.songId })
    const retrievedSongs: TRetrievedSong[] = await findRetrievedSongs({ songId: params.songId })

    // const filteredSongs = [...retrievedSongs.filter((row)=>{if (row.retrievalsystemId === 6) return row})]
    // console.log( filteredSongs)  
    return (
        <>  
            <script src="https://cdn.jsdelivr.net/gh/thelevicole/youtube-to-html5-loader@4.0.1/dist/YouTubeToHtml5.js"></script>
            <script>new YouTubeToHtml5();</script>
            <PageContent song={songs[0]} retrievalsystems={retrievalsystems} retrievedSongs={retrievedSongs}/>
        </>
    )
}





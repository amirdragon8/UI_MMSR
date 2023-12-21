
"use server"


import { TSong, findSongById } from '@/lib/songs';
import SongCard from './SongCard'



export default async function PageContent({ songId }: { songId: string }) {

    const songs: TSong[] = await findSongById({ songId: "01Yfj2T3YTwJ1Yfy" })

    return <SongCard song={songs[0]}></SongCard>
}
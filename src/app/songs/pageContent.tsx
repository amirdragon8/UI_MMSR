"use server"

import { TSong, findSongs } from '@/lib/songs';
import SongCard from './SongCard'

export default async function PageContent(){
  
  const songs:TSong[] = await findSongs({song:"Ta"})
  const song = songs[0]

  return <SongCard song={song}></SongCard>
}
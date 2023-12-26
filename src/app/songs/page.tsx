import { Typography } from '@mui/material'
import PageContent from './pageContent'
import { TRetrievalsystem, TSong, findArtists, findRetrievalsystem, findSongs } from '@/lib/songs';
import { useSearchParams } from 'next/navigation';

export default async function Page({ searchParams }: { searchParams: { title: string, artist: string } }) {

  // const searchParams = useSearchParams()!
  const title = searchParams.title // "Take" undefined //
  const artist = searchParams.artist
  const songs: TSong[] = await findSongs({ song: title , artist:artist})
  const artists: string[] = await findArtists({ song: title })
  
  // const artists = [...new Set(songs.map(item => item.artist))]

  return <>
    <Typography>Hello, Next.js! </Typography>
    <PageContent songs={songs} artists={artists} />
  </>
}

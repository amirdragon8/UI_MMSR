import { Typography } from '@mui/material'
import PageContent from './pageContent'
import { TRetrievalsystem, TSong, findRetrievalsystem, findSongs } from '@/lib/songs';
import { useSearchParams } from 'next/navigation';

export default async function Page({ searchParams }: { searchParams: { search: string } }) {

  // const searchParams = useSearchParams()!
  const search = searchParams.search // "Take" undefined //
  const songs: TSong[] = await findSongs({ searchSongGeneric: search })
  const retrievalsystems: TRetrievalsystem[] = await findRetrievalsystem()

  return <>
    <Typography>Hello, Next.js! </Typography>
    <PageContent songs={songs} retrievalsystems={retrievalsystems}/>
  </>
}

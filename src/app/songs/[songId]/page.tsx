import { useSearchParams } from 'next/navigation'
import PageContent from './pageContent'
import { Typography } from '@mui/material'

export default function Page({ params }: { params: { songId: string } }) {

    return (
        <>
            <Typography>Hello, Next.js! </Typography>
            <PageContent songId={params.songId} />
        </>
    )
}





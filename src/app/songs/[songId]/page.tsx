"use client"

import { useSearchParams } from 'next/navigation'
import PageContent from './pageContent'
import { Typography } from '@mui/material'

export default function Page() {
    const searchParams = useSearchParams()
    const songId = searchParams.get('songId')!

    return (
        <>
            <Typography>Hello, Next.js! </Typography>
            <PageContent songId={songId} />
        </>
    )
}





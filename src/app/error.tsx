'use client'

import React, { useEffect, useTransition } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import CircularProgress from '@mui/material/CircularProgress'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const { refresh } = useRouter()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    console.error(error)
  }, [error])

  const retry = () =>
    startTransition(() => {
      refresh()
      reset()
    })
// height='100vh'
  return (
    <Box display='flex' flexDirection='column' gap={1} alignItems='center' justifyContent='center' > 
      {!isPending && (
        <>
          <Typography align='center' variant='subtitle2'>
            Something went wrong!
          </Typography>
          <Button color='info' onClick={retry}>
            Try again
          </Button>
        </>
      )}
      {isPending && <CircularProgress color='inherit' />}
    </Box>
  )
}

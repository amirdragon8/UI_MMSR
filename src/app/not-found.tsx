import { Box, Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
  return (
    <Box display='flex' flexDirection='column' gap={1} alignItems='center' justifyContent='center'>
      <Typography align='center' variant='h6'>
        {404}
      </Typography>
      <Typography align='center' variant='subtitle2'>
        {'This page could not be found.'}
      </Typography>
    </Box>
  )
}

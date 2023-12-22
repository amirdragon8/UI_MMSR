"use client"

import { useCallback, useState, useTransition } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { write } from 'fs';
import { Input, OutlinedInput } from '@mui/material';

// import { useRouter } from 'next/router';

//export default function SearchSongGeneric({searchSongGeneric, setSearchSongGeneric}: {searchSongGeneric:string, setSearchSongGeneric: Dispatch<SetStateAction<string>>}) {
export default function SearchSongGeneric({ startTransition }: { startTransition: any }) {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const [searchSongGeneric, setSearchSongGeneric] = useState<string>()


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search song database"
        inputProps={{ 'aria-label': 'search song database' }}
        value={searchSongGeneric}
        onChange={(e) => {
          console.log('SearchSongGeneric target: ', e.target.value)
          setSearchSongGeneric(e.target.value)
        }}

        //onChange={(e)=> router.push(pathname + '?' + createQueryString('search', e.target.value)) }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            startTransition(() => {
              if (typeof searchSongGeneric === 'string' && searchSongGeneric != "")
                router.push(pathname + '?' + createQueryString('search', searchSongGeneric))
              else {
                router.push(pathname)
              }
            })
          }
        }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );


  // return (
  //   <Paper
  //     component="form"
  //     sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
  //   >
  //     <IconButton sx={{ p: '10px' }} aria-label="menu">
  //       <MenuIcon />
  //     </IconButton>
  //     <InputBase
  //       sx={{ ml: 1, flex: 1 }}
  //       placeholder="Search song database"
  //       inputProps={{ 'aria-label': 'search song database' }}
  //       value={searchSongGeneric}
  //       onChange={(e)=> setSearchSongGeneric(e.target.value)}
  //     />
  //     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
  //       <SearchIcon />
  //     </IconButton>
  //   </Paper>
  // );
}

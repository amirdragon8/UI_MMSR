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
import { Autocomplete, Box, Input, OutlinedInput, Popover, TextField } from '@mui/material';
import React from 'react';

// import { useRouter } from 'next/router';


export default function SearchSong({ startTransition, artists }: { startTransition: any, artists: string[] }) {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const [searchSong, setSearchSong] = useState<string | null>("")

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams)
      if (value)
        params.set(name, value)
      else
        params.delete(name)
      return params.toString()
    },
    [searchParams]
  )

  function handleSearch(name: string, value: string | null) {
    startTransition(() => {
      if (typeof value === 'string' || value === null)
        router.push(pathname + '?' + createQueryString(name, value))
    })
  }


  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <SearchPopover handleSearch={handleSearch} artists={artists} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search song by title"
        inputProps={{ 'aria-label': 'search song by title' }}
        value={searchSong}
        onChange={(e) => {
          //console.log('SearchSong target: ', e.target.value)
          setSearchSong(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch('title', searchSong)
          }
        }}
      />
      <IconButton onClick={() => handleSearch('title', searchSong)}
        type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

function SearchPopover({ handleSearch, artists }: { handleSearch: any, artists: string[] }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [searchArtist, setSearchArtist] = useState<string | null>(null)
  const [searchArtistInput, setSearchArtistInput] = useState<string>("")
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2, p: '10px' }}
        aria-controls={open ? 'search-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        id="filter-menu"
        open={open}
        onClose={handleClose}

        //onClick={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >

        {/* <div>{`value: ${searchArtist !== null ? `'${searchArtist}'` : 'null'}`}</div>
        <div>{`inputValue: '${searchArtistInput}'`}</div>
        <br /> */}
        <Box sx={{ p: 4 }}>
          <Autocomplete
            id="combo-box-artist"
            options={artists}
            sx={{ width: 300 }}
            value={searchArtist}
            onChange={(event: any, newValue: string | null) => {
              setSearchArtist(newValue);
              handleSearch('artist', newValue)
            }}
            inputValue={searchArtistInput}
            onInputChange={(event, newInputValue) => {
              setSearchArtistInput(newInputValue);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch('artist', searchArtistInput)
              }
            }}
            renderInput={(params) =>
              <TextField {...params}
                label="Artist"
              />
            }
          />

        </Box>
        {/* <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Artist"
          inputProps={{ 'aria-label': 'search song by artist' }}
          value={searchArtist}
          onChange={(e) => {
            setSearchArtist(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch('artist', searchArtist)
            }
          }}
        /> */}
      </Popover>
    </React.Fragment>
  );
}

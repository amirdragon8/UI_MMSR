"use client"

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TRetrievalsystem } from '@/lib/songs';
import { Dispatch, SetStateAction } from 'react';

 
export default function SelectRetrievalsystem({retrievalsystems, selectedRetrievalsystem, setSelectRetrievalsystem}:{retrievalsystems:TRetrievalsystem[], selectedRetrievalsystem:string, setSelectRetrievalsystem:Dispatch<SetStateAction<string>> }) {
//export default async function SelectRetrievalsystem({retrievalsystems, selectedRetrievalsystem, setSelectRetrievalsystem}:{retrievalsystems:TRetrievalsystem[], selectedRetrievalsystem:string, setSelectRetrievalsystem:(newValue:string, setCoockie:any)=>void }) {
  return (
    <div>
      <FormControl fullWidth>
        <Select
          value={selectedRetrievalsystem}
          onChange={(e)=> setSelectRetrievalsystem( e.target.value) }
        >
          {retrievalsystems.map((row) => (
            <MenuItem
              key={row.retrievalsystemId}
              value={row.retrievalsystemId}
            >
              {row.retrievalsystem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
"use client"

import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TRetrievalsystem } from '@/lib/songs';
import { Dispatch, SetStateAction } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function SelectRetrievalsystem({retrievalsystems, selectedRetrievalsystem, setSelectRetrievalsystem}:{retrievalsystems:TRetrievalsystem[], selectedRetrievalsystem:string, setSelectRetrievalsystem:Dispatch<SetStateAction<string>> }) {

  return (
    <div>
      <FormControl fullWidth>
        <Select
          value={selectedRetrievalsystem}
          onChange={(e)=> setSelectRetrievalsystem(e.target.value) }
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
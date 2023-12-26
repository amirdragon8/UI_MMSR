import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TSong } from '@/lib/songs';
import Link from 'next/link';

interface Column {
    id: 'song' | 'artist' | 'album' | 'genre';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: string[]) => string;
}

const columns: readonly Column[] = [
    { id: 'song', label: 'Song', minWidth: 170 },
    { id: 'artist', label: 'Artist', minWidth: 100 },
    { id: 'album', label: 'Album', minWidth: 100 },
    {
        id: 'genre',
        label: 'Genre',
        minWidth: 170,
        format: (value: string[]) => value.join(" • "),
    }
];


//StickyHeadTable
export default function SongTable({ songs, retrievalsystemId }: { songs: TSong[], retrievalsystemId?: number }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="song table" key={retrievalsystemId ? "song-table-" + retrievalsystemId : "song-table-0"}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {songs
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.songid}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {index === 0 ?
                                                        <Link href={`/songs/${row.songid}`}>
                                                            {column.format && Array(value)
                                                                ? column.format(value as string[])
                                                                : value}
                                                        </Link>
                                                        : column.format && Array(value)
                                                            ? column.format(value as string[])
                                                            : value
                                                    }
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            {retrievalsystemId ? <></> :
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={songs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }
        </Paper>
    );
}

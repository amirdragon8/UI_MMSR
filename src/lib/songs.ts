import SearchSongGeneric from "@/app/songs/SearchSongGeneric";
import { QueryResultRow, createClient, sql } from "@vercel/postgres";
import { db } from '@vercel/postgres';


export type TSong = {
    songid: string,
    song: string,
    artist: string,
    genre: string[],
    album: string
}

export type TRetrievalsystem = {
    retrievalsystemId: number,
    retrievalsystem: string,
    info: string
}

export async function findRetrievalsystem() {
    const client = createClient();
    await client.connect();

    try {
        const query = client.sql`SELECT * FROM public."RETRIEVALSYSTEM"`
        const res = await query

        const results: TRetrievalsystem[] = []
        res.rows.map((record: QueryResultRow) => {
            const retrievalsystemId = record.retrievalsystemId
            const retrievalsystem = record.retrievalsystem
            const info = record.info
            results.push({ retrievalsystemId, retrievalsystem, info })

        })
        //console.log(results)
        return results
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }
}


export async function findSongById(params: { songId: string }) {

    //const client = await db.connect();
    const client = createClient();
    await client.connect();

    try {
        const query = client.sql`SELECT * FROM public."SONGS" WHERE song_id = ${params.songId}`
        const res = await query
        const songs: TSong[] = []
        res.rows.map((record: QueryResultRow) => {
            const songid = record.song_id
            const song = record.song
            const artist = record.artist
            const genre = record.genre
            const album = record.album

            songs.push({ songid, song, artist, genre, album })

        })

        //console.log(songs)
        return songs
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }

}


export async function findSongs(params: { searchSongGeneric: string | undefined}) {

    //const client = await db.connect();
    const client = createClient();
    await client.connect();
    console.log( "-> findSongs params.searchSongGeneric:",  params.searchSongGeneric )

    try {
        var query = null
        if (typeof params.searchSongGeneric ==='string'){
            query = client.query(`
            SELECT * FROM public."SONGS" WHERE LOWER(song) LIKE LOWER($1)`, 
            ["%" + params.searchSongGeneric.toLowerCase() + "%"]
            );
        }else{
            query = client.query(`
            SELECT * FROM public."SONGS"`, 
            );
        }

        


        // const query = client.sql`
        //     SELECT * FROM public."SONGS" WHERE song LIKE '%${params.searchSongGeneric}%'`

        const res = await query

        const songs: TSong[] = []
        res.rows.map((record: QueryResultRow) => {
            const songid = record.song_id
            const song = record.song
            const artist = record.artist
            const genre = record.genre
            const album = record.album

            songs.push({ songid, song, artist, genre, album })

        })

        //console.log(songs)
        return songs
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }


}

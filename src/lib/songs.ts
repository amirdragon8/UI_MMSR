import { QueryResultRow, createClient, sql } from "@vercel/postgres";
import { db } from '@vercel/postgres';


export type TSong = {
    songid: string,
    song: string,
    artist: string,
    genre: string[],
    album: string
}

export async function findSongById(params:{songId:string}){

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

        console.log(songs)
        return songs
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }

}


export async function findSongs(params: {song:string}) {

    //const client = await db.connect();
    const client = createClient();
    await client.connect();

    try {
        const query = client.sql`
            SELECT * FROM public."SONGS" WHERE song LIKE '%Ta%'`

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

        console.log(songs)
        return songs
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }


}

import SearchSong from "@/app/songs/SearchSong";
import { QueryResultRow, createClient, sql } from "@vercel/postgres";
import { db } from '@vercel/postgres';


export type TSong = {
    songid: string,
    song: string,
    artist: string,
    genre: string[],
    album: string, 
    url:string
}

export type TRetrievalsystem = {
    retrievalsystemId: number,
    retrievalsystem: string,
    info: string
}

export type TRetrievedSong = {
  retrievalOrder:number
  retrievalsystemId:number
} & TSong


export async function findRetrievalsystem() {
    const client = createClient();
    await client.connect();

    try {
        const query = client.sql`SELECT * FROM public.retrievalsystems`
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
        const query = client.sql`SELECT * FROM public.songs WHERE song_id = ${params.songId}`
        const res = await query
        const songs: TSong[] = []
        res.rows.map((record: QueryResultRow) => {
            const songid = record.song_id
            const song = record.song
            const artist = record.artist
            const genre = record.genre
            const album = record.album
            const url = 'tgbNymZ7vqY'

            songs.push({ songid, song, artist, genre, album, url })

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


export async function findSongs(params: { song: string | undefined, artist: string | undefined }) {

    //const client = await db.connect();
    const client = createClient();
    await client.connect();
    console.log("-> findSongs params.searchSongGeneric:", params.song)

    const optionalSong = typeof params.song === 'string' ? 0 : 1
    const searchSong = typeof params.song === 'string' ? params.song.toLowerCase() : ""
    const optionalArtist = typeof params.artist === 'string' ? 0 : 1
    const searchArtist = typeof params.artist === 'string' ? params.artist.toLowerCase() : ""

    try {
        const query = client.query(`
            SELECT * FROM public.songs 
            WHERE ((0 = $2 AND LOWER(song) LIKE LOWER($1)) OR 1 = $2 ) 
            AND ( (0 = $4 AND LOWER(artist) LIKE LOWER($3)) OR 1 = $4 )
            LIMIT 30 -- AND song_id IN ('01Yfj2T3YTwJ1Yfy', '01gyRHLquwXDlhkO')
            `,
            [`%${searchSong}%`, optionalSong, `%${searchArtist}%`, optionalArtist]
        );

        const res = await query

        const songs: TSong[] = []
        res.rows.map((record: QueryResultRow) => {
            const songid = record.song_id
            const song = record.song
            const artist = record.artist
            const genre = record.genre
            const album = record.album
            const url = 'tgbNymZ7vqY'

            songs.push({ songid, song, artist, genre, album , url})

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

export async function findArtists(params: { song: string | undefined }) {

    //const client = await db.connect();
    const client = createClient();
    await client.connect();
    console.log("-> findSongs params.searchSongGeneric:", params.song)

    const optionalSong = typeof params.song === 'string' ? 0 : 1
    const searchSong = typeof params.song === 'string' ? params.song.toLowerCase() : ""

    try {
        const query = client.query(`
            SELECT DISTINCT artist FROM public.songs 
            WHERE ((0 = $2 AND LOWER(song) LIKE LOWER($1)) OR 1 = $2 )
            `,
            [`%${searchSong}%`, optionalSong]
        );

        const res = await query

        const result: string[] = []
        res.rows.map((record: QueryResultRow) => {
            const artist = record.artist
            result.push(artist)

        })
        return result
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }
}

export async function findRetrievedSongs(params: { songId: string}) {

    //const client = await db.connect();
    const client = createClient();
    await client.connect();

    try {
        const query = client.query(`
            SELECT  rs."retrievalsystemId",rs."retrievalOrder", s.*
            FROM public.retrieved_songs rs
            INNER JOIN public.songs t
            ON rs.target = t.song_id
            INNER JOIN public.songs s
            ON rs.id = s.song_id
            WHERE  t.song_id IN ($1) ;
            `,
            [params.songId]
        );

        const res = await query
        const result: TRetrievedSong[] = []
        res.rows.map((record: QueryResultRow) => {
            //const targetId = record.target
            const retrievalOrder = record.retrievalOrder
            const retrievalsystemId = record.retrievalsystemId
            const songid = record.song_id
            const song = record.song
            const artist = record.artist
            const genre = record.genre
            const album = record.album
            const url = 'tgbNymZ7vqY'
            result.push({retrievalsystemId, retrievalOrder, songid, song, artist, genre, album, url })
        })
        return result
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch data from postgres")
    } finally {
        await client.end();
    }
}




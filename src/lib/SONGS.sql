-- DROP TABLE public."songs"
-- \
-- CREATE TABLE public."songs"
-- (
--     song_id character (16),
--     song character varying(128),
--     artist character varying(128),
--     genre character varying(128)[],
--     album character varying(128),
    
--     PRIMARY KEY (song_id)
-- )
-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public."SONGS"
--     OWNER to "default";


-- INSERT INTO public."SONGS"(
-- 	song_id, song, artist, genre, album)
-- 	VALUES ('01Yfj2T3YTwJ1Yfy','Take', 'We As Human', ARRAY['rock', 'christian rock'], 'The Bullets Away');

-- INSERT INTO public."SONGS"(
-- 	song_id, song, artist, genre, album)
-- 	VALUES ('01gyRHLquwXDlhkO', 'Somebodys Gotta Die', 'The Notorious B.I.G.', ARRAY['hip hop', 'rap', 'grindcore', 'death metal'], 'Life After Death (Remastered Edition)');
    
    
-- SELECT * FROM 
--     public."SONGS"    		
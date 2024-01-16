# CREATE TABLESPACE pg_compression LOCATION '/var/data/cfs' WITH (compression=true);

DROP TABLE public.retrievalsystems


CREATE TABLE public.retrievalsystems
(
    "retrievalsystemId" smallint NOT NULL,
    retrievalsystemKey character varying(25) NOT NULL,
	retrievalsystem character varying(128) NOT NULL,
    info character varying(600) NOT NULL,
	sortorder smallint NOT NULL, 
    PRIMARY KEY ("retrievalsystemId")
);

ALTER TABLE IF EXISTS public.retrievalsystems
    OWNER to "default";

INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (1, 'mfcc_bow', 'Audio-based (<similarity>, MFCC)' , 'Leveraging Mel-Frequency Cepstral Coefficients (MFCCs), this audio-based system employs a chosen similarity measure to find N tracks that are acoustically similar to the query track.', 4);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (2, 'blf_spectralcontrast','Audio-based (<similarity>, <feature logfluc>)',  'This retrieval strategy leverages the BLF_LogFluc (Band-Limited Flatness Log-Fluctuation) feature as a representation of the audio content. BLF_LogFluc is utilized to capture nuanced characteristics of the audio signal, emphasizing spectral flatness and log-fluctuation patterns. The retrieval system employs cosine similarity to measure the similarity between the query audio and the catalog tracks, providing a robust method for audio-based content retrieval.', 5);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (3, 'ivec256', 'Audio-based (<similarity>, <feature ivec_1024>)', 'In this retrieval approach, the iVec_1024 feature is employed as a descriptor of the audio content. iVec_1024 represents the audio using a 1024-dimensional i-vector, capturing the statistical properties of the audio signal. Cosine similarity is utilized to measure the similarity between the query audio and the audio tracks in the catalog. This strategy provides an effective means of audio-based similarity retrieval, emphasizing the statistical characteristics embedded in the i-vector representation.', 6);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (4, 'musicnn', 'Audio-based (<similarity>, <feature musicnn>)', 'This retrieval strategy incorporates the MusicNN feature to enhance the audio-based similarity assessment. MusicNN, a Deep Neural Network (DNN)-based feature, is employed to extract high-level representations of audio content. The retrieval system utilizes cosine similarity to measure the similarity between the query audio and the catalog tracks. MusicNN, being a deep learning-based feature, is adept at capturing complex patterns in audio data, contributing to a sophisticated audio-based similarity retrieval approach.', 7);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (5, 'random', 'Random Baseline', 'This retrieval system randomly selects N tracks from the catalog for any given query, producing diverse and unpredictable results. Each query run provides a new set of randomly selected tracks.', 0);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (6, 'cos(tf-idf)', 'Text-based (cos-sim, tf-idf)', 'Utilizing cosine similarity and term frequency-inverse document frequency (tf-idf) representations of lyrics, this system selects N tracks most similar to the query track based on textual content', 1);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (7, 'cos(bert)', 'Text-based (cos-sim, <feature>)', 'Utilizing cosine similarity and Bidirectional Encoder Representations from Transformers (BERT) representations of lyrics, this system selects N tracks most similar to the query track based on textual content', 2);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (8, 'euclidean(word2vec)', 'Text-based (<similarity>, <feature>)', 'Utilizing euclide-distance similarity and "word to vector" (word2vec) representations of lyrics, this system selects N tracks most similar to the query track based on textual content', 3);
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (9,'incp', 'Video-based (Cosine Similarity, Inception Feature)',  'Employing the Inception feature extracted from the Inception neural network architecture, this video-based retrieval system utilizes cosine similarity to identify N tracks with video features akin to the query tracks video representation. The Inception feature, known for its effectiveness in image and video analysis, contributes to a robust video-based similarity assessment.', 9)

INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
VALUES (10,'early_fusion', 'Early Fusion (MusicNN Audio Feature and ResNet Video Feature)', 'This Early Fusion system strategically combines features from different modalities, specifically leveraging the MusicNN audio feature and the ResNet video feature. The fusion technique aggregates these chosen features early in the retrieval process, generating a singular feature for enhanced retrieval. Methodological choices, including pre-processing steps, are meticulously motivated to ensure a cohesive integration of textual, audio, and video modalities.', 10)
INSERT INTO public.retrievalsystems(
	"retrievalsystemId", retrievalsystemKey, retrievalsystem, info, sortorder)
	VALUES (11,'late_fusion','Late Fusion (Cosine Similarity, BERT Textual Feature, and Inception Video Feature)' ,'In this sophisticated system, the results from two previously developed retrieval algorithms are skillfully combined using a late fusion technique. The chosen algorithms include cosine similarity with BERT textual features and cosine similarity with Inception video features. The late fusion approach is thoughtfully designed, considering the strengths of each algorithm, resulting in an optimized performance for enhanced retrieval outcomes.' ,11)

SELECT * FROM  public.retrievalsystems

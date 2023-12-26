ALTER TABLE public.retrieved_songs ALTER COLUMN  "retrievalsystemId" TYPE integer

CREATE INDEX idx_retrieved_songs ON public.retrieved_songs(target) WITH (compression='lz4');
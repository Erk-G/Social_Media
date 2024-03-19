--Example on starting up the database using the included sql files
DROP DATABASE social_media;
CREATE DATABASE social_media;
\connect social_media

\i schema.sql
\i seed.sql

DROP DATABASE social_media_test;
CREATE DATABASE social_media_test;
\connect social_media_test

\i schema.sql
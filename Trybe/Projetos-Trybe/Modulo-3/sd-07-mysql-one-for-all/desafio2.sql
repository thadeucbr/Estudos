CREATE VIEW estatisticas_musicais AS
SELECT
COUNT(DISTINCT m.musica) AS 'cancoes',
COUNT(DISTINCT artist.artista) AS 'artistas',
COUNT(DISTINCT a.album) AS 'albuns'
FROM SpotifyClone.albuns a
INNER JOIN SpotifyClone.musicas m
ON m.album_id = a.album_id
INNER JOIN SpotifyClone.artistas artist
ON a.artista_id = artist.artista_id;

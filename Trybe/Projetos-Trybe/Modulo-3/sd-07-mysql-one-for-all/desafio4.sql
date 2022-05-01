CREATE VIEW top_3_artistas AS
SELECT a.artista, count(s.artista_id) 
AS seguidores 
FROM SpotifyClone.seguidores AS s
INNER JOIN SpotifyClone.artistas AS a
ON a.artista_id = s.artista_id
GROUP BY artista
ORDER BY seguidores DESC, artista limit 3;

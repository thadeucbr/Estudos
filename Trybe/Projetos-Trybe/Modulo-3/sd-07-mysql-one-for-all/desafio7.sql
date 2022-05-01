CREATE VIEW perfil_artistas AS
SELECT a.artista AS artista, 
al.album, 
count(s.usuario_id) AS seguidores
FROM SpotifyClone.seguidores AS s
INNER JOIN SpotifyClone.artistas AS a
ON s.artista_id = a.artista_id
INNER JOIN SpotifyClone.albuns AS al
ON al.artista_id = s.artista_id
GROUP BY album_id
ORDER BY 3 DESC, 1, 2;

DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN nome VARCHAR(50))
BEGIN
SELECT a.artista, al.album 
FROM SpotifyClone.artistas AS a
INNER JOIN SpotifyClone.albuns AS al
ON al.artista_id = a.artista_id
HAVING artista = nome
ORDER BY album;
END $$
DELIMITER ;

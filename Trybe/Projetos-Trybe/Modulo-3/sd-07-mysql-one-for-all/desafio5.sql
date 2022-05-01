CREATE VIEW top_2_hits_do_momento AS
SELECT m.musica AS cancao, COUNT(h.musicas_id) AS reproducoes FROM SpotifyClone.historico AS h
INNER JOIN musicas AS m
ON m.musicas_id = h.musicas_id
GROUP BY cancao 
ORDER BY reproducoes DESC, cancao limit 2;

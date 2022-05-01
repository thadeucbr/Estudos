CREATE VIEW cancoes_premium AS
SELECT m.musica AS nome, 
COUNT(h.musicas_id) AS reproducoes 
FROM SpotifyClone.musicas AS m
INNER JOIN SpotifyClone.historico AS h
ON h.musicas_id = m.musicas_id
INNER JOIN SpotifyClone.usuarios AS u
ON u.usuario_id = h.usuario_id
WHERE u.plano_id IN (2, 3)
GROUP BY nome
ORDER BY nome;

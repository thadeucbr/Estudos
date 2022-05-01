CREATE VIEW historico_reproducao_usuarios AS
SELECT u.usuario AS usuario, 
m.musica AS nome 
FROM SpotifyClone.historico AS h
INNER JOIN SpotifyClone.musicas AS m 
ON h.musicas_id = m.musicas_id
INNER JOIN SpotifyClone.usuarios AS u 
on u.usuario_id = h.usuario_id 
ORDER BY usuario, nome;

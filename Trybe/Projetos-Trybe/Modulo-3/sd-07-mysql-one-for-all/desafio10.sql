DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id int)
RETURNS INT READS SQL DATA
BEGIN
DECLARE resultado INT;
SELECT COUNT(*) AS quantidade_musicas_no_historico
FROM SpotifyClone.historico 
INNER JOIN SpotifyClone.usuarios AS u
ON u.usuario_id = historico.usuario_id
WHERE u.usuario_id = id INTO resultado;
RETURN resultado;
END $$
DELIMITER ;

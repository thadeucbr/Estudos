DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;
USE SpotifyClone;

CREATE TABLE planos (
plano_id INT PRIMARY KEY AUTO_INCREMENT,
plano VARCHAR(80) NOT NULL,
preco DECIMAL (8, 2) NOT NULL
);

INSERT INTO planos (plano, preco) VALUES
('gratuito', 0), ('familiar', 7.99), ('universitário', 5.99);

CREATE TABLE usuarios (
usuario_id INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(80) NOT NULL,
idade INT NOT NULL,
plano_id INT NOT NULL,
CONSTRAINT `fk_planos_usuarios` FOREIGN KEY (plano_id) REFERENCES SpotifyClone.planos (plano_id)
);

INSERT INTO usuarios (usuario, idade, plano_id) VALUES
('Thati', 23, 1), ('Cintia', 35, 2), ('Bill', 20, 3), ('Roger', 45, 1);

CREATE TABLE artistas (
artista_id INT PRIMARY KEY AUTO_INCREMENT,
artista VARCHAR(80) NOT NULL
);

INSERT INTO artistas (artista) VALUES
('Walter Phoenix'), ('Peter Strong'), ('Lance Day'), ('Freedie Shannon');

CREATE TABLE albuns (
album_id INT PRIMARY KEY AUTO_INCREMENT,
album VARCHAR(80) NOT NULL,
artista_id INT NOT NULL,
CONSTRAINT `fk_artistas_albuns` FOREIGN KEY (artista_id) REFERENCES SpotifyClone.artistas (artista_id)
);

INSERT INTO albuns (album, artista_id) VALUES
('Envious', 1), ('Exuberant', 1), ('Hallowed Steam', 2), ('Incandescent', 3), ('Temporary Culture', 4);

CREATE TABLE musicas (
musicas_id INT PRIMARY KEY AUTO_INCREMENT,
musica VARCHAR(80) NOT NULL,
album_id INT NOT NULL,
CONSTRAINT `album_id_musicas` FOREIGN KEY (album_id) REFERENCES SpotifyClone.albuns (album_id)
);

INSERT INTO musicas (musica, album_id) VALUES
('Soul For Us', 1), ('Reflections Of Magic', 1), ('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2), ('Time Fireworks', 2),
('Magic Circus', 3), ('Honey, So Do I', 3), ('Sweetie, Let''s Go Wild', 3), ('She Knows', 3),
('Fantasy For Me', 4), ('Celebration Of More', 4), ('Rock His Everything', 4),
('Home Forever', 4), ('Diamond Power', 4), ('Honey, Let''s Be Silly', 4),
('Thang Of Thunder', 5), ('Words Of Her Life', 5), ('Without My Streets', 5);

CREATE TABLE seguidores (
usuario_id INT NOT NULL,
artista_id INT NOT NULL,
PRIMARY KEY (usuario_id, artista_id),
CONSTRAINT `fk_usuarios_seguidores` FOREIGN KEY (usuario_id) REFERENCES SpotifyClone.usuarios (usuario_id),
CONSTRAINT `fk_artistas_seguidores` FOREIGN KEY (artista_id) REFERENCES SpotifyClone.artistas (artista_id)
);

INSERT INTO seguidores (usuario_id, artista_id) VALUES
(1, 1), (1, 4), (1, 3),
(2,1), (2, 3),
(3, 2), (3, 1),
(4, 4);

CREATE TABLE historico (
usuario_id INT NOT NULL,
musicas_id INT NOT NULL,
PRIMARY KEY (usuario_id, musicas_id),
CONSTRAINT `fk_user_history` FOREIGN KEY (usuario_id) REFERENCES SpotifyClone.usuarios (usuario_id),
CONSTRAINT `fk_music_history` FOREIGN KEY (musicas_id) REFERENCES SpotifyClone.musicas (musicas_id)
);

INSERT INTO historico (usuario_id, musicas_id) VALUES
(1, 1), (1, 6), (1, 14), (1, 16),
(2, 13), (2, 17), (2, 2), (2, 15),
(3, 4), (3, 16),  (3, 6),
(4, 3), (4,18), (4, 11);

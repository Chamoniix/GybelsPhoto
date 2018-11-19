DROP TABLE post;

CREATE TABLE post(
   id INTEGER NOT NULL AUTO_INCREMENT,
   titre VARCHAR(255),
   description VARCHAR(255),
   date_creation DATE,
   url VARCHAR(255),
   auteur VARCHAR(255),   
   PRIMARY KEY(id)
);

INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 1', 'DESCRIPTION 1', '2018/10/11', 'C:\tmp\img\wallhaven-680441.jpg', 'HUGO');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 2', 'DESCRIPTION 1', '2018/10/12', 'C:\tmp\img\wallhaven-680441.jpg', 'PAUL');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 3', 'DESCRIPTION 3', '2018/10/13', 'C:\tmp\img\wallhaven-680441.jpg', 'JACKO');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 4', 'DESCRIPTION 4', '2018/10/14', 'C:\tmp\img\wallhaven-680441.jpg', 'BILLY');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 5', 'DESCRIPTION 5', '2018/10/15', 'C:\tmp\img\wallhaven-680441.jpg', 'SIXNINE');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 6', 'DESCRIPTION 6', '2018/10/16', 'C:\tmp\img\wallhaven-680441.jpg', 'WIZZ KALIFA');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 7', 'DESCRIPTION 7', '2018/10/17', 'C:\tmp\img\wallhaven-680441.jpg', 'DJ KHALED');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 8', 'DESCRIPTION 8', '2018/10/18', 'C:\tmp\img\wallhaven-680441.jpg', 'MOMO');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 9', 'DESCRIPTION 9', '2018/10/19', 'C:\tmp\img\wallhaven-680441.jpg', 'MUSTAFA');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 10', 'DESCRIPTION 10', '2018/10/20', 'path/to/the/picture', 'ABDOULAyr');
INSERT INTO post (titre, description, date_creation, url, auteur) VALUES ('TITRE 11', 'DESCRIPTION 11', '2018/10/21', 'path/to/the/picture', 'DAVID GETHO');

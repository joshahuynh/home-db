DROP DATABASE IF EXISTS homeDB;
CREATE DATABASE homeDB;
USE homeDB;

CREATE TABLE home (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    home_address VARCHAR(100),
    renter VARCHAR(50),
    rate DECIMAL,
    rentee VARCHAR(50) 
);

INSERT INTO home (home_address, renter, rate, rentee)
VALUES ('711-2880 Nulla St. Mankato Mississippi 96522', 'Cecilia Chapman', '1200', 'Iris Watson'),
    ('606-3727 Ullamcorper. Street Roseville NH 11523', 'Calista Wise', '2000', 'Kyla Olsen'),
    ('7292 Dictum Av. San Antonio MI 47096', 'Celeste Slater', '1600', 'Theodore Lowe'),
    ('191-103 Integer Rd. Corona New Mexico 08219', 'Forrest Ray', '2800', 'Nyssa Vazquez'),
    ('935-9940 Tortor. Street Santa Rosa MN 98804', 'Lawrence Moreno', '2200', 'Melvin Porter'),
    ('5587 Nunc. Avenue Erie Rhode Island 24975', 'Joan Romero', '1400', 'Keefe Sellers'),
    ('347-7666 Iaculis St. Woodruff SC 49854', 'Leilani Boyer', '1750', 'Colby Bernard'),
    ('557-6308 Lacinia Road San Bernardino ND 09289', 'Bryar Pitts', '1500', 'Adria Russell'),
    ('5543 Aliquet St. Fort Dodge GA 20783', 'Christian Emerson', '2600', 'Rebecca Chambers'),
    ('5037 Diam Rd. Daly City Ohio 90255', 'Edward Nieves', '1000', 'Castor Richardson');

SELECT * FROM home;

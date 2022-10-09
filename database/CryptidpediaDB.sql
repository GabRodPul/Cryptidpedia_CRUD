DROP DATABASE IF EXISTS db_cryptidpedia;

CREATE DATABASE db_cryptidpedia;

USE db_cryptidpedia;

CREATE TABLE
    cryptid_entries (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        category ENUM(
            'UMA',
            'OVNI',
            'PARANORMAL',
            'OCCULT',
            'MEME_HAZARD',
            'OTHERS'
        ) NOT NULL,
        description TEXT,
        filename VARCHAR(255),
        createdAt DATETIME NOT NULL DEFAULT NOW(),
        updatedAt DATETIME NOT NULL DEFAULT NOW(),
        PRIMARY KEY(id)
    );

INSERT INTO cryptid_entries(title, category, description, filename)
VALUES
    ('Strange Shapeshifting Creature', 'OCCULT', 
        'Strange shapeshifting creature that moves in a strange way. If you happen to come into contact with it, make sure to run away ASAP.', 
        'default/GET-REAL.gif'
    ),
    ('La Isleta', 'PARANORMAL', 
        'The zone of Gran Canaria at the northeasten tip of the island.\nStrange things happen around there, and quantum scientists have teorised that it acts as a convergence point for other realities; those that are a mere product of human imagination and collective consciousness, and those for which ours it\'s fiction.',
        'default/la-isleta.jpg'
    ),
    ('Metal Matías Prats\'s Broadcasts', 'MEME_HAZARD',
        'A series of news broadcasts featuring a version of Spanish journalist Matías Prats, made out of metal.\nIn these broadcasts, Metal Matías Prats explains that he has taken over the news channel affected by this strange phenomenom and that the Age of Metallic Machines is about to start, all with the same sense of humour as the original Matías Prats.\nThese declarations drive anyone unlucky enough to hear them insane, whether they are aware that they are fake or not.\nThe origin and intentions of the creators of these broadcasts remain unknown.',
        'default/matias-prats-metal.jpg'    
    ),
    ('MMMMMRRBRMBVR BRLMFMFMFMRBFMRBFML', 'UMA',
        'MMMMMRRBRMBVR BRLMFMFMFMRBFMRBFML',
        'default/MMMMMRRBRMBVR_BRLMFMFMFMRBFMRBFML.png'
    ),
    ('Perro returbio', 'UMA',
        'bro jajafsja el perro este está returbio hermano sjasahdsaj pobre chucho',
        'default/perro-returbio.jpg'
    ),
    ('Zumo', 'OTHERS',
        'Zumo',
        'default/zumo.jpg'
    ),
    ('Blue Lobster', 'UMA',
        'https://www.youtube.com/watch?v=QmpzCIZ3Xrg',
        'default/blue-lobster.jpeg'
    ),
    ('Delicioso Menú Persona 5', 'PARANORMAL',
        'DE DÓNDE SALE ESTO??? ME DA MIEDO EL PAN',
        'default/menu-persona5.jpg'
    );
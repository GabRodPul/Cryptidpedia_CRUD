# Cryptidpedia_CRUD
An encyclopedia that displays information about different strange creatures and phenomena.

# Note for Tiburcio Cruz
Yo so originally I planned to add multitable queries and stuff, but given the fact that last Friday night I got sick, and that I have some other projects to finish ASAP, I wasn't able to do so.
Might add something new if I get the chance.
Please if you have any problems with my code or anything, contact me.

# Explanation of the project
It's an app that stores data about different strange creatures and phenomena through Cryptid Entries. 
All Cryptid Entries are composed of:
- An autogenerated ID. 
- A title. 
- Its category. It can be UMA (Unidentified Mysterious Animal), OVNI (Objeto Volador No Identificado WHICH should be heckin' UFO cuz you know, English, but know's too late to change it, I guess), OCCULT (For weird magical creatures or stuff), MEME_HAZARD (Memetic Hazard, concepts/pieces of information spread through people and other mediums that pose a danger to the mind of humans and other living beings), and OTHERS.
- A description (optional).
- createdAt timestamp.
- updatedAt timestamp (Changes when you update an entry).

# BackEnd
 - Full CRUD functionality.
 - Postman documentation: https://documenter.getpostman.com/view/23623831/2s83ziN4BB (I've provided the images I used for the Postman testing in my project, check 'postman-images').
 - Didn't have time to add anything else but my idea was to add a new table for users to contribute to sightings and more info about the Entries, composed by its ID, a cryptidEntryId, description, image, username and date.

# FrontEnd
 - Full GET and POST functionalities.
 - DELETE works just fine, and UPDATE will alter every field edited though not images. Didn't have time to fix this. ID it's always hidden, though.
 - Validations are only present in POST and UPDATE through Validators. DELETE does not check for parameters before making a request, but with the way it is implemented, it isn't even necessary. The ID needed an entry UPDATE and DELETE request will always be present.
 - Didn't really have time either but it was basically the frontend version of the already mentioned Sightings section.

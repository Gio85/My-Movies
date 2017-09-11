const mongoose = require('mongoose'); //require mongoose
mongoose.Promise = require('bluebird'); // require bluebird

// require models
const Director = require('../models/director');
const Movie = require('../models/movie');

// connect to the server
const dbURI = 'mongodb://localhost/bestmovies';
mongoose.connect(dbURI, { useMongoClient: true });

// to not make multicopies of the collections
Director.collection.drop();
Movie.collection.drop();

Director
  .create([
    {
      name: 'Steven Spierlberg',
      wiki: 'http://www.imdb.com/name/nm0000229/',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_UX214_CR0,0,214,317_AL_.jpg',
      synopsis: 'Born on December 18, 1946, in Cincinnati, Ohio, Steven Spielberg was an amateur filmmaker as a child. He went on to become the enormously successful and Academy Award-winning director of such films as Schindler\'s List, The Color Purple, E.T.: The Extra-Terrestrial, Saving Private Ryan, Catch Me If You Can, Lincoln and Bridge of Spies. In 1994, he co-founded the studio Dreamworks SKG, which was purchased by Paramount Pictures in 2005.'
    },
    {
      name: 'Martin Scorsese',
      wiki: 'http://www.imdb.com/name/nm0000217/',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNDA4Nzk3N15BMl5BanBnXkFtZTcwNDYzMjMxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      synopsis: 'Born November 17, 1942, in Flushing, New York, Martin Scorsese is known for his gritty, meticulous filmmaking style and is widely considered one of the most important directors of all time. Scorsese\'s passion for films started at a young age, as he was an 8-year-old pint-sized filmmaker. In 1968, he completed his first feature-length film, Who\'s That Knocking at My Door?, but it wasn\'t until he released Taxi Driver nearly 10 years later that he skyrocketed to fame for his raw formula of storytelling. He proved that the film wasn\'t a fluke with a string of landmark films, such as Raging Bull, Goodfellas and Mean Streets.'
    },
    {
      name: 'Stanley Kubrick',
      wiki: 'http://www.imdb.com/name/nm0000040/',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1_UX214_CR0,0,214,317_AL_.jpg',
      synopsis: 'Born in New York City on July 26, 1928, Stanley Kubrick worked as a photographer for Look magazine before exploring filmmaking in the 1950s. He went on to direct a number of acclaimed films, inclduing Spartacus (1960), Lolita (1962), Dr. Strangelove (1964), Clockwork Orange (1971), 2001: A Space Odyssey (1968), The Shining (1980), Full Metal Jacket (1987) and Eyes Wide Shut (1999). Kubrick died in England on March 7, 1999.'
    },
    {
      name: 'Quentin Tarantino',
      wiki: 'http://www.imdb.com/name/nm0000233/',
      country: 'USA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Quentin_Tarantino_%28Berlin_Film_Festival_2009%29_2_cropped.jpg/220px-Quentin_Tarantino_%28Berlin_Film_Festival_2009%29_2_cropped.jpg',
      synopsis: 'Born in Tennessee in 1963, Quentin Tarantino moved to California at age 4. His love of movies led to a job in a video store, during which time he wrote the scripts for True Romance and Natural Born Killers. Tarantino\'s directorial debut came with 1992\'s Reservoir Dogs, but he received widespread critical and commercial acclaim with Pulp Fiction (1994), for which he won an Academy Award for best screenplay. Subsequent features included Jackie Brown (1997), Kill Bill: Vol. 1 (2003) and Vol. 2 (2004) and Grindhouse (2007). Tarantino earned several award nominations for Inglourious Basterds (2009) and Django Unchained (2012), the latter garnering him a second Oscar win for best screenplay.'
    },
    {
      name: 'Francis Ford Coppola',
      wiki: 'http://www.imdb.com/name/nm0000338/',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5NDU3OTgyNV5BMl5BanBnXkFtZTcwMzQxODA0NA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      synopsis: 'Francis Ford Coppola was born April 7, 1939, in Detroit, Michigan. He first found directorial success with Finian’s Rainbow in 1968. He gained international critical attention for his screenwriting talents, with 1970’s Patton. Two years later, he released The Godfather (1972). In 1997, he stepped away from directing for a time. In 2007, he returned to hands-on filmmaking with Youth Without Youth.'
    },
    {
      name: 'Woody Allen',
      wiki: 'http://www.imdb.com/name/nm0000095/',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MjU3MTI2MF5BMl5BanBnXkFtZTcwMDgxNTE4MQ@@._V1_UY317_CR1,0,214,317_AL_.jpg',
      synopsis: 'Born in Brooklyn, New York, on December 1, 1935, Woody Allen is an American film director, screenwriter, actor and author who is best known for his romantic comedy films containing elements of parody and slapstick. He is also known for writing strong and well-defined characters for his female stars. Allen directed and starred in two of his most famous films, Annie Hall and Manhattan. Among his featured performers were Diane Keaton and Mia Farrow, both of whom he was romantically involved with.'
    },
    {
      name: 'Clint Eastwood',
      wiki: 'http://www.imdb.com/name/nm0000142/',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MDc0MjY0OV5BMl5BanBnXkFtZTcwNzU1MDAxOA@@._V1_UY317_CR10,0,214,317_AL_.jpg',
      synopsis: 'Born on May 31, 1930, in San Francisco, California, Clint Eastwood got his big break with a starring role on the television program Rawhide. He then became immensely popular by portraying tough characters in a string of Sergio Leone movie Westerns and the Dirty Harry franchise. Eastwood has since earned widespread praise for directing such Academy Award–winning films as Unforgiven, Mystic River and Million Dollar Baby.'
    },
    {
      name: 'Christopher Nolan',
      wiki: 'http://www.imdb.com/name/nm0634240/',
      country: 'UK',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg',
      synopsis: 'Born on July 30, 1970 in London, England, Christopher Nolan received attention for his early films, Following (1998) and Memento (2000). After directing Insomnia, Nolan\'s next film was Batman Begins, a re-launch of the comic-book franchise that became a worldwide hit. The film\'s sequel, The Dark Knight, broke box office records, and Nolan\'s heady sci-fi thriller, Inception, became another blockbuster two years later. In 2012, he produced the third film of his Batman saga, The Dark Knight Rises.'
    },
    {
      name: 'James Cameron',
      wiki: 'http://www.imdb.com/name/nm0000116/',
      country: 'CAN',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/James_Cameron_by_Gage_Skidmore.jpg/220px-James_Cameron_by_Gage_Skidmore.jpg',
      synopsis: 'James Cameron is a critically acclaimed film director known for some of the biggest box-office hits of all time. A science-fiction fan as a child, he went on to produce and direct films including The Terminator, Aliens and Avatar. He has received numerous Academy Awards and nominations for his often large-scale, expensive productions. His most noted work, 1997\'s Titanic, became the first film to earn more than $1 billion and landed 14 Academy Award nominations. Cameron took home three Oscars himself for the project: Best Director, Best Film Editing and Best Picture.'
    }
  ])
  .then(directors =>{
    console.log(`${directors.length} directors created!`);

    return Movie.create([
      {
        title: 'Saving Private Ryan',
        year: '1998',
        director: directors[0],
        filmSynopsis: 'Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.',
        image: 'https://www.sunsetcast.com/poster/120815.jpg',
        youtube: 'https://www.youtube.com/watch?v=zwhP5b4tD6g',
        wiki: 'https://en.wikipedia.org/wiki/Saving_Private_Ryan'
      },
      {
        title: 'E.T. the Extra Terrestrial',
        year: '1982',
        director: directors[0],
        filmSynopsis: 'After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott (Henry Thomas). Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie (Drew Barrymore), and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.',
        image: 'http://upic.me/i/hl/kp700.jpg',
        youtube: 'https://www.youtube.com/watch?v=qYAETtIIClk',
        wiki: 'https://en.wikipedia.org/wiki/E.T._the_Extra-Terrestrial'
      },
      {
        title: 'Jurassic Park',
        year: '1993',
        director: directors[0],
        filmSynopsis: 'In Steven Spielberg\'s massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park\'s mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.',
        image: 'https://cdn-images.cinenews.be/image/f660x940/q80/mm/befr/movies2127/posters/jurassic-park.20170228011453.jpg',
        youtube: 'https://www.youtube.com/watch?v=lc0UehYemQA',
        wiki: 'https://en.wikipedia.org/wiki/Jurassic_Park_(film)'
      },
      {
        title: 'Jaws',
        year: '1975',
        director: directors[0],
        filmSynopsis: 'When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town. Ichthyologist Matt Hooper (Richard Dreyfuss) and grizzled ship captain Quint (Robert Shaw) offer to help Brody capture the killer beast, and the trio engage in an epic battle of man vs. nature.',
        image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcSNafDFWxZ3Mp_EEeYV3XXvqcCwArfq4QI8-s5NZbfD6i_bDLCn',
        youtube: 'https://www.youtube.com/watch?v=1MK6ya_ud0c',
        wiki: 'https://en.wikipedia.org/wiki/Jaws_(film)'
      },
      {
        title: 'The Wolf of Wall Street',
        year: '2013',
        director: directors[1],
        filmSynopsis: 'In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant (Jonah Hill) and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions. However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and thrills, the SEC and the FBI close in on his empire of excess.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTm52BWbxXmwOpfz5rmx0BNBj79kSQoGpYPq4TVt07Jel5En6aC',
        youtube: 'https://www.youtube.com/watch?v=iszwuX1AK6A',
        wiki: 'https://en.wikipedia.org/wiki/The_Wolf_of_Wall_Street_(2013_film)'
      },
      {
        title: 'Shutter Island',
        year: '2010',
        director: directors[1],
        filmSynopsis: 'The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room, and there are hints of terrible deeds committed within the hospital walls. As the investigation deepens, Teddy realizes he will have to confront his own dark fears if he hopes to make it off the island alive.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/3531967/p3531967_p_v8_ah.jpg',
        youtube: 'https://www.youtube.com/watch?v=5iaYLCiq5RM',
        wiki: 'https://en.wikipedia.org/wiki/Shutter_Island_(film)'
      },
      {
        title: 'The Departed',
        year: '2006',
        director: directors[1],
        filmSynopsis: 'South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster\'s trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other\'s identities to save their own lives.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/162564/p162564_p_v8_ag.jpg',
        youtube: 'https://www.youtube.com/watch?v=iojhqm0JTW4',
        wiki: 'https://en.wikipedia.org/wiki/The_Departed'
      },
      {
        title: 'Goodfellas',
        year: '1990',
        director: directors[1],
        filmSynopsis: 'A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.',
        image: 'https://discogslabs.imgix.net/films/55d79fa23dff1b001140ac02.jpg?s=f1c42fff5bc51babd5cf8e399ca75a80',
        youtube: 'https://www.youtube.com/watch?v=2ilzidi_J8Q',
        wiki: 'https://en.wikipedia.org/wiki/Goodfellas'
      },
      {
        title: 'Full Metal Jacket',
        year: '1987',
        director: directors[2],
        filmSynopsis: 'Stanley Kubrick\'s take on the Vietnam War follows smart-aleck Private Davis (Matthew Modine), quickly christened "Joker" by his foul-mouthed drill sergeant (R. Lee Ermey), and pudgy Private Lawrence (Vincent D\'Onofrio), nicknamed "Gomer Pyle," as they endure the rigors of basic training. Though Pyle takes a frightening detour, Joker graduates to the Marine Corps and is sent to Vietnam as a journalist, covering -- and eventually participating in -- the bloody Battle of Hué.',
        image: 'http://2.bp.blogspot.com/-7aXM0S5qvLM/UXQyeQ2fdlI/AAAAAAAAAic/E7iR60sbLuc/s1600/_La_chaqueta_metalica_(Stanley_Kubrick)_aleman.JPG',
        youtube: 'https://www.youtube.com/watch?v=x9f6JaaX7Wg',
        wiki: 'https://en.wikipedia.org/wiki/Full_Metal_Jacket'
      },
      {
        title: 'The Shining',
        year: '1980',
        director: directors[2],
        filmSynopsis: 'Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer\'s block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack\'s writing goes nowhere and Danny\'s visions become more disturbing, Jack discovers the hotel\'s dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.',
        image: 'http://www.name-list.net/img/portrait/Srining_9.jpg',
        youtube: 'https://www.youtube.com/watch?v=5Cb3ik6zP2I',
        wiki: 'https://en.wikipedia.org/wiki/The_Shining_(film)'
      },
      {
        title: 'Eyes Wide Shut',
        year: '1999',
        director: directors[2],
        filmSynopsis: 'After Dr. Bill Hartford\'s (Tom Cruise) wife, Alice (Nicole Kidman), admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/23544/p23544_p_v8_ae.jpg',
        youtube: 'https://www.youtube.com/watch?v=zoTNVSArKxM',
        wiki: 'https://en.wikipedia.org/wiki/Eyes_Wide_Shut'
      },
      {
        title: '2001: A Space Odyssey',
        year: '1968',
        director: directors[2],
        filmSynopsis: 'An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship\'s computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQdmmLZ7lXsw1WRy7c5qN3mka2e9ANSpHIG2INi53P6OVS8KyJo',
        youtube: 'https://www.youtube.com/watch?v=XHjIqQBsPjk',
        wiki: 'https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(film)'
      },
      {
        title: 'Pulp Finction',
        year: '1994',
        director: directors[3],
        filmSynopsis: 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/15684/p15684_p_v8_ac.jpg',
        youtube: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
        wiki: 'https://en.wikipedia.org/wiki/Pulp_Fiction'
      },
      {
        title: 'Reservior Dogs',
        year: '1992',
        director: directors[3],
        filmSynopsis: 'A group of thieves assemble to pull of the perfect diamond heist. It turns into a bloody ambush when one of the men turns out to be a police informer. As the group begins to question each other\'s guilt, the heightening tensions threaten to explode the situation before the police step in.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTPwt7t2o-jpIcQRIx-6wWtPQqTcrFQmBku_q6QTfPjyN2-5sS-',
        youtube: 'https://www.youtube.com/watch?v=vayksn4Y93A',
        wiki: 'https://en.wikipedia.org/wiki/Reservoir_Dogs'
      },
      {
        title: 'Jackie Brow',
        year: '1997',
        director: directors[3],
        filmSynopsis: 'When flight attendant Jackie Brown (Pam Grier) is busted smuggling money for her arms dealer boss, Ordell Robbie (Samuel L. Jackson), agent Ray Nicolette (Michael Keaton) and detective Mark Dargus (Michael Bowen) want her help to bring down Robbie. Facing jail time for her silence or death for her cooperation, Brown decides instead to double-cross both parties and make off with the smuggled money. Meanwhile, she enlists the help of bondsman Max Cherry (Robert Forster), a man who loves her.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQu1nRd70jdhd9iaqbZCK8k8Xq0w02Pi-QioCiilZOODQakFcJE',
        youtube: 'https://www.youtube.com/watch?v=G7HkBDNZV7s',
        wiki: 'https://en.wikipedia.org/wiki/Jackie_Brown'
      },
      {
        title: 'Django Unchained',
        year: '2012',
        director: directors[3],
        filmSynopsis: 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South\'s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django\'s long-lost wife (Kerry Washington) is still a slave.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt',
        youtube: 'https://www.youtube.com/watch?v=eUdM9vrCbow',
        wiki: 'https://en.wikipedia.org/wiki/Django_Unchained'
      },
      {
        title: 'The Godfather I',
        year: '1972',
        director: directors[4],
        filmSynopsis: 'Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo\'s novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don\'s youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.',
        image: 'https://film.geourdu.com/wp-content/uploads/2011/02/MV5BMTIyMTIxNjI5NF5BMl5BanBnXkFtZTcwNzQzNDM5MQ@@._V1._SY317_CR20214317_1.jpg',
        youtube: 'https://www.youtube.com/watch?v=sY1S34973zA',
        wiki: 'https://en.wikipedia.org/wiki/The_Godfather'
      },
      {
        title: 'The Godfather II',
        year: '1974',
        director: directors[4],
        filmSynopsis: 'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917\'s Hell\'s Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
        image: 'http://static.rogerebert.com/uploads/movie/movie_poster/the-godfather-part-ii-1974/large_tHbMIIF51rguMNSastqoQwR0sBs.jpg',
        youtube: 'https://www.youtube.com/watch?v=qJr92K_hKl0',
        wiki: 'https://en.wikipedia.org/wiki/The_Godfather_Part_II'
      },
      {
        title: 'The Godfather III',
        year: '1990',
        director: directors[4],
        filmSynopsis: 'As Michael Corleone (Al Pacino) ages, he finds that being the head of the Corleone crime family isn\t getting any easier. He wants his family out of the Mafia, but the mob kingpin (Eli Wallach) isn\'t eager to let one of the most powerful and wealthy families go legit. Making matters even worse is Michael\'s nephew, Vincent (Andy Garcia). Not only does Vincent want a piece of the Corleone family\'s criminal empire, but he also wants Michael\'s daughter, Mary (Sofia Coppola).',
        image: 'http://static.rogerebert.com/uploads/movie/movie_poster/the-godfather-part-iii-1990/large_uzaP0L7BEprcJHCuwbaHiYT0UYX.jpg',
        youtube: 'https://www.youtube.com/watch?v=z8h3LVb8cl8',
        wiki: 'https://en.wikipedia.org/wiki/The_Godfather_Part_III'
      },
      {
        title: 'Apocalypse Now',
        year: '1979',
        director: directors[4],
        filmSynopsis: 'In Vietnam in 1970, Captain Willard (Martin Sheen) takes a perilous and increasingly hallucinatory journey upriver to find and terminate Colonel Kurtz (Marlon Brando), a once-promising officer who has reportedly gone completely mad. In the company of a Navy patrol boat filled with street-smart kids, a surfing-obsessed Air Cavalry officer (Robert Duvall), and a crazed freelance photographer (Dennis Hopper), Willard travels further and further into the heart of darkness.',
        image: 'https://ugc.kn3.net/i/760x/http://static.rogerebert.com/uploads/movie/movie_poster/apocalypse-now-1979/large_xytHTHqtQlXtzyJTtlqnVjvDdqd.jpg',
        youtube: 'https://www.youtube.com/watch?v=snDR7XsSkB4',
        wiki: 'https://en.wikipedia.org/wiki/Apocalypse_Now'
      },
      {
        title: 'To Rome with Love',
        year: '2012',
        director: directors[5],
        filmSynopsis: 'Four tales unfold in the Eternal City: While vacationing in Rome, architect John (Alec Baldwin) encounters a young man whose romantic woes remind him of a painful incident from his own youth; retired opera director Jerry (Woody Allen) discovers a mortician with an amazing voice, and he seizes the opportunity to rejuvenate his own flagging career; a young couple (Alessandro Tiberi, Alessandra Mastronardi) have separate romantic interludes; a spotlight shines on an ordinary man (Roberto Benigni).',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRAleDmm6rwd0HrNpsCEht0Axcm4xNNlSn6wDanVzlFLZM9iiXY',
        youtube: 'https://www.youtube.com/watch?v=ft__aQSrHqE',
        wiki: 'https://en.wikipedia.org/wiki/To_Rome_with_Love_(film)'
      },
      {
        title: 'Modnight in Paris',
        year: '2011',
        director: directors[5],
        filmSynopsis: 'Gil Pender (Owen Wilson) is a screenwriter and aspiring novelist. Vacationing in Paris with his fiancee (Rachel McAdams), he has taken to touring the city alone. On one such late-night excursion, Gil encounters a group of strange -- yet familiar -- revelers, who sweep him along, apparently back in time, for a night with some of the Jazz Age\'s icons of art and literature. The more time Gil spends with these cultural heroes of the past, the more dissatisfied he becomes with the present.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTk3ssys2bKM5-U6XMgvoD8yVoS5Io2YKg_1xA6x6GA8mKuuqID',
        youtube: 'https://www.youtube.com/watch?v=FAfR8omt-CY',
        wiki: 'https://en.wikipedia.org/wiki/Midnight_in_Paris'
      },
      {
        title: 'Match Point',
        year: '2005',
        director: directors[5],
        filmSynopsis: 'Tennis instructor Chris Wilton (Jonathan Rhys-Meyers) grows friendly with Tom Hewett (Matthew Goode), a wealthy student who shares an interest in opera. Invited to attend a performance with Tom, Chris meets the family and instantly attracts Tom\'s sister, Chloe (Emily Mortimer). Chris marries her to get a job with her millionaire father, Alec (Brian Cox), but a dangerous affair with Nola Rice (Scarlett Johansson), Tom\'s American girlfriend, threatens his newfound social status.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/159470/p159470_p_v8_aa.jpg',
        youtube: 'https://www.youtube.com/watch?v=wISRAOb6xm0',
        wiki: 'https://en.wikipedia.org/wiki/Match_Point'
      },
      {
        title: 'The curse of the Jade Scorpion',
        year: '2001',
        director: directors[5],
        filmSynopsis: 'Woody Allen stars as CW Briggs, the top insurance investigator in New York in 1940-or so he keeps telling the firm\'s new efficiency expert, Betty Ann Fitzgerald (Helen Hunt). Briggs prides himself on being able to crack any insurance caper by getting into the mind of the thief, but now, thanks to the hypnotic powers of the Jade Scorpion, the mind of a thief is getting into Briggs.',
        image: 'http://www.gstatic.com/tv/thumb/dvdboxart/29476/p29476_d_v8_aa.jpg',
        youtube: 'https://www.youtube.com/watch?v=yHjG3QjhWf0',
        wiki: 'https://en.wikipedia.org/wiki/The_Curse_of_the_Jade_Scorpion'
      },
      {
        title: 'Unforgiven',
        year: '1992',
        director: directors[6],
        filmSynopsis: 'When prostitute Delilah Fitzgerald (Anna Thomson) is disfigured by a pair of cowboys in Big Whiskey, Wyoming, her fellow brothel workers post a reward for their murder, much to the displeasure of sheriff Little Bill Daggett (Gene Hackman), who doesn\'t allow vigilantism in his town. Two groups of gunfighters, one led by aging former bandit William Munny (Clint Eastwood), the other by the florid English Bob (Richard Harris), come to collect the reward, clashing with each other and the sheriff.',
        image: 'https://pbs.twimg.com/media/B_UdlQqVAAEIjlI.jpg:large',
        youtube: 'https://www.youtube.com/watch?v=ftTX4FoBWlE',
        wiki: 'https://en.wikipedia.org/wiki/Unforgiven'
      },
      {
        title: 'Mystic River',
        year: '2003',
        director: directors[6],
        filmSynopsis: 'When the daughter (Emmy Rossum) of ex-con Jimmy Marcus (Sean Penn) is murdered, two of his childhood friends from the neighborhood are involved. Dave (Tim Robbins), a blue-collar worker, was the last person to see her alive, while Sean (Kevin Bacon), a homicide detective, is heading up the case. As Sean proceeds with his investigation, Jimmy conducts one of his own through neighborhood contacts. Eventually, Jimmy suspects Dave is the culprit and considers taking the law into his own hands.',
        image: 'http://www.gstatic.com/tv/thumb/dvdboxart/32186/p32186_d_v8_aa.jpg',
        youtube: 'https://www.youtube.com/watch?v=W7NktJhrRYQ',
        wiki: 'https://en.wikipedia.org/wiki/Mystic_River_(film)'
      },
      {
        title: 'Million Dollar Baby',
        year: '2004',
        director: directors[6],
        filmSynopsis: 'Frankie Dunn (Clint Eastwood) is a veteran Los Angeles boxing trainer who keeps almost everyone at arm\'s length, except his old friend and associate Eddie "Scrap Iron" Dupris (Morgan Freeman). When Maggie Fitzgerald (Hilary Swank) arrives in Frankie\'s gym seeking his expertise, he is reluctant to train the young woman, a transplant from working-class Missouri. Eventually, he relents, and the two form a close bond that will irrevocably change them both.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/35226/p35226_p_v8_aq.jpg',
        youtube: 'https://www.youtube.com/watch?v=5_RsHRmIRBY',
        wiki: 'https://en.wikipedia.org/wiki/Million_Dollar_Baby'
      },
      {
        title: 'Gran Torino',
        year: '2008',
        director: directors[6],
        filmSynopsis: 'Retired auto worker and Korean War vet Walt Kowalski (Clint Eastwood) fills emptiness in his life with beer and home repair, despising the many Asian, Latino and black families in his neighborhood. Walt becomes a reluctant hero when he stands up to the gangbangers who tried to force an Asian teen to steal Walt\'s treasured car. An unlikely friendship develops between Walt and the teen, as he learns he has more in common with his neighbors than he thought.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/183329/p183329_p_v8_ab.jpg',
        youtube: 'https://www.youtube.com/watch?v=RMhbr2XQblk',
        wiki: 'https://en.wikipedia.org/wiki/Gran_Torino'
      },
      {
        title: 'Batman Begins',
        year: '2005',
        director: directors[7],
        filmSynopsis: 'A young Bruce Wayne (Christian Bale) travels to the Far East, where he\'s trained in the martial arts by Henri Ducard (Liam Neeson), a member of the mysterious League of Shadows. When Ducard reveals the League\'s true purpose -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up the city without resorting to murder. With the help of Alfred (Michael Caine), his loyal butler, and Lucius Fox (Morgan Freeman), a tech expert at Wayne Enterprises, Batman is born.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/35903/p35903_p_v8_aw.jpg',
        youtube: 'https://www.youtube.com/watch?v=neY2xVmOfUM',
        wiki: 'https://en.wikipedia.org/wiki/Batman_Begins'
      },
      {
        title: 'The Dark Knight',
        year: '2008',
        director: directors[7],
        filmSynopsis: 'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/173378/p173378_p_v8_au.jpg',
        youtube: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
        wiki: 'https://en.wikipedia.org/wiki/The_Dark_Knight_(film)'
      },
      {
        title: 'The Dark Knight Rises',
        year: '2012',
        director: directors[7],
        filmSynopsis: 'It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQSGF8_VbDqKF0B_4IQ0NF87VMDSy7_MPKryawR-qLnSIPQwo5z',
        youtube: 'https://www.youtube.com/watch?v=GokKUqLcvD8',
        wiki: 'https://en.wikipedia.org/wiki/The_Dark_Knight_Rises'
      },
      {
        title: 'Inception',
        year: '2010',
        director: directors[7],
        filmSynopsis: 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people\'s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone\'s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb\'s every move.',
        image: 'http://www.markgazica.com/wp-content/uploads/2017/04/poster10-min-3.jpg',
        youtube: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
        wiki: 'https://en.wikipedia.org/wiki/Inception'
      },
      {
        title: 'The Terminator',
        year: '1984',
        director: directors[8],
        filmSynopsis: 'Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ',
        youtube: 'https://www.youtube.com/watch?v=k64P4l2Wmeg',
        wiki: 'https://en.wikipedia.org/wiki/The_Terminator'
      },
      {
        title: 'Aliens',
        year: '1986',
        director: directors[8],
        filmSynopsis: 'After floating in space for 57 years, Lt. Ripley\'s (Sigourney Weaver) shuttle is found by a deep space salvage team. Upon arriving at LV-426, the marines find only one survivor, a nine year old girl named Newt (Carrie Henn). But even these battle-hardened marines with all the latest weaponry are no match for the hundreds of aliens that have invaded the colony.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/9384/p9384_p_v8_as.jpg',
        youtube: 'https://www.youtube.com/watch?v=XKSQmYUaIyE',
        wiki: 'https://en.wikipedia.org/wiki/Aliens_(film)'
      },
      {
        title: 'Titanic',
        year: '1997',
        director: directors[8],
        filmSynopsis: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.',
        image: 'https://cdn2.hercampus.com/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR88,0,630,1200_AL_.jpg',
        youtube: 'https://www.youtube.com/watch?v=ZQ6klONCq4s',
        wiki: 'https://en.wikipedia.org/wiki/Titanic_(1997_film)'
      },
      {
        title: 'Avatar',
        year: '2009',
        director: directors[8],
        filmSynopsis: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na\'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.',
        image: 'https://cf.girlsaskguys.com/a48376/9c001075-72d2-40d3-80c0-6ef97c9dad60.jpg',
        youtube: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',
        wiki: 'https://en.wikipedia.org/wiki/Avatar_(2009_film)'
      }]);
  })
  .then(movies => console.log(`${movies.length} movies created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

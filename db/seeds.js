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
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_UX214_CR0,0,214,317_AL_.jpg'
    },
    {
      name: 'Martin Scorsese',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNDA4Nzk3N15BMl5BanBnXkFtZTcwNDYzMjMxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg'
    },
    {
      name: 'Stanley Kubrick',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1_UX214_CR0,0,214,317_AL_.jpg'
    },
    {
      name: 'Quentin Tarantino',
      country: 'USA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Quentin_Tarantino_%28Berlin_Film_Festival_2009%29_2_cropped.jpg/220px-Quentin_Tarantino_%28Berlin_Film_Festival_2009%29_2_cropped.jpg'
    },
    {
      name: 'Francis Ford Coppola',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5NDU3OTgyNV5BMl5BanBnXkFtZTcwMzQxODA0NA@@._V1_UX214_CR0,0,214,317_AL_.jpg'
    },
    {
      name: 'Woody Allen',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MjU3MTI2MF5BMl5BanBnXkFtZTcwMDgxNTE4MQ@@._V1_UY317_CR1,0,214,317_AL_.jpg'
    },
    {
      name: 'Clint Eastwood',
      country: 'USA',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MDc0MjY0OV5BMl5BanBnXkFtZTcwNzU1MDAxOA@@._V1_UY317_CR10,0,214,317_AL_.jpg'
    },
    {
      name: 'Christopher Nolan',
      country: 'UK',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg'
    },
    {
      name: 'James Cameron',
      country: 'CAN',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/James_Cameron_by_Gage_Skidmore.jpg/220px-James_Cameron_by_Gage_Skidmore.jpg'
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
        image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcR0lDhR_dXAKTm9wysp3nWu6kP0V5skJBVbCNC_Q8urAWcr4iF_',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'E.T.',
        year: '1982',
        director: directors[0],
        filmSynopsis: 'After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott (Henry Thomas). Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie (Drew Barrymore), and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRGJHE2d9ETIgpONE3pUTXMcUoBMkahlppFmicaL8FG8ovE37x4',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Jurassic Park',
        year: '1993',
        director: directors[0],
        filmSynopsis: 'In Steven Spielberg\'s massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park\'s mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRZh-cd7xlz0T8SiJRaQbpy49FtVDBjQXfcJUAlWCXT0L1YkVbj',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Jaws',
        year: '1975',
        director: directors[0],
        filmSynopsis: 'When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town. Ichthyologist Matt Hooper (Richard Dreyfuss) and grizzled ship captain Quint (Robert Shaw) offer to help Brody capture the killer beast, and the trio engage in an epic battle of man vs. nature.',
        image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcSNafDFWxZ3Mp_EEeYV3XXvqcCwArfq4QI8-s5NZbfD6i_bDLCn',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Wolf of Wall Street',
        year: '2013',
        director: directors[1],
        filmSynopsis: 'In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant (Jonah Hill) and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions. However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and thrills, the SEC and the FBI close in on his empire of excess.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTm52BWbxXmwOpfz5rmx0BNBj79kSQoGpYPq4TVt07Jel5En6aC',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Shutter Island',
        year: '2010',
        director: directors[1],
        filmSynopsis: 'The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room, and there are hints of terrible deeds committed within the hospital walls. As the investigation deepens, Teddy realizes he will have to confront his own dark fears if he hopes to make it off the island alive.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/3531967/p3531967_p_v8_ah.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Departed',
        year: '2006',
        director: directors[1],
        filmSynopsis: 'South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster\'s trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other\'s identities to save their own lives.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/162564/p162564_p_v8_ag.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Goodfellas',
        year: '1990',
        director: directors[1],
        filmSynopsis: 'A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSkuxYKBhyPQq4e_cbYRDfZRjWkUx2GIKlUpUkHiuVeLg2GhN0D',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Full Metal Jacket',
        year: '1987',
        director: directors[2],
        filmSynopsis: 'Stanley Kubrick\'s take on the Vietnam War follows smart-aleck Private Davis (Matthew Modine), quickly christened "Joker" by his foul-mouthed drill sergeant (R. Lee Ermey), and pudgy Private Lawrence (Vincent D\'Onofrio), nicknamed "Gomer Pyle," as they endure the rigors of basic training. Though Pyle takes a frightening detour, Joker graduates to the Marine Corps and is sent to Vietnam as a journalist, covering -- and eventually participating in -- the bloody Battle of Hué.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRvS0gpcmYItYpYqNswzvlibugwezaH-13M8y4kiJnCthNS9nX-',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Shining',
        year: '1980',
        director: directors[2],
        filmSynopsis: 'Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer\'s block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack\'s writing goes nowhere and Danny\'s visions become more disturbing, Jack discovers the hotel\'s dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSuyZ3Ido0NkD-KSJAoY7eosym_AHdZ891pvUaUOryPCIDJZFdy',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Eyes Wide Shut',
        year: '1999',
        director: directors[2],
        filmSynopsis: 'After Dr. Bill Hartford\'s (Tom Cruise) wife, Alice (Nicole Kidman), admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/23544/p23544_p_v8_ae.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: '2001: A Space Odyssey',
        year: '1968',
        director: directors[2],
        filmSynopsis: 'An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship\'s computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQdmmLZ7lXsw1WRy7c5qN3mka2e9ANSpHIG2INi53P6OVS8KyJo',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Pulp Finction',
        year: '1994',
        director: directors[3],
        filmSynopsis: 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/15684/p15684_p_v8_ac.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Reservior Dogs',
        year: '1992',
        director: directors[3],
        filmSynopsis: 'A group of thieves assemble to pull of the perfect diamond heist. It turns into a bloody ambush when one of the men turns out to be a police informer. As the group begins to question each other\'s guilt, the heightening tensions threaten to explode the situation before the police step in.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTPwt7t2o-jpIcQRIx-6wWtPQqTcrFQmBku_q6QTfPjyN2-5sS-',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Jackie Brow',
        year: '1997',
        director: directors[3],
        filmSynopsis: 'When flight attendant Jackie Brown (Pam Grier) is busted smuggling money for her arms dealer boss, Ordell Robbie (Samuel L. Jackson), agent Ray Nicolette (Michael Keaton) and detective Mark Dargus (Michael Bowen) want her help to bring down Robbie. Facing jail time for her silence or death for her cooperation, Brown decides instead to double-cross both parties and make off with the smuggled money. Meanwhile, she enlists the help of bondsman Max Cherry (Robert Forster), a man who loves her.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQu1nRd70jdhd9iaqbZCK8k8Xq0w02Pi-QioCiilZOODQakFcJE',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Django Unchained',
        year: '2012',
        director: directors[3],
        filmSynopsis: 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South\'s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django\'s long-lost wife (Kerry Washington) is still a slave.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Godfather I',
        year: '1972',
        director: directors[4],
        filmSynopsis: 'Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo\'s novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don\'s youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.',
        image: 'https://film.geourdu.com/wp-content/uploads/2011/02/MV5BMTIyMTIxNjI5NF5BMl5BanBnXkFtZTcwNzQzNDM5MQ@@._V1._SY317_CR20214317_1.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Godfather II',
        year: '1974',
        director: directors[4],
        filmSynopsis: 'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917\'s Hell\'s Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
        image: 'http://static.rogerebert.com/uploads/movie/movie_poster/the-godfather-part-ii-1974/large_tHbMIIF51rguMNSastqoQwR0sBs.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Godfather III',
        year: '1990',
        director: directors[4],
        filmSynopsis: 'As Michael Corleone (Al Pacino) ages, he finds that being the head of the Corleone crime family isn\t getting any easier. He wants his family out of the Mafia, but the mob kingpin (Eli Wallach) isn\'t eager to let one of the most powerful and wealthy families go legit. Making matters even worse is Michael\'s nephew, Vincent (Andy Garcia). Not only does Vincent want a piece of the Corleone family\'s criminal empire, but he also wants Michael\'s daughter, Mary (Sofia Coppola).',
        image: 'http://static.rogerebert.com/uploads/movie/movie_poster/the-godfather-part-iii-1990/large_uzaP0L7BEprcJHCuwbaHiYT0UYX.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Apocalypse Now',
        year: '1979',
        director: directors[4],
        filmSynopsis: 'In Vietnam in 1970, Captain Willard (Martin Sheen) takes a perilous and increasingly hallucinatory journey upriver to find and terminate Colonel Kurtz (Marlon Brando), a once-promising officer who has reportedly gone completely mad. In the company of a Navy patrol boat filled with street-smart kids, a surfing-obsessed Air Cavalry officer (Robert Duvall), and a crazed freelance photographer (Dennis Hopper), Willard travels further and further into the heart of darkness.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcT9GtFRvwy8cYE2gjMTzfR0MW_ubpZ_dcD0S2CkfTqBoiobgwFv',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'To Rome with Love',
        year: '2012',
        director: directors[5],
        filmSynopsis: 'Four tales unfold in the Eternal City: While vacationing in Rome, architect John (Alec Baldwin) encounters a young man whose romantic woes remind him of a painful incident from his own youth; retired opera director Jerry (Woody Allen) discovers a mortician with an amazing voice, and he seizes the opportunity to rejuvenate his own flagging career; a young couple (Alessandro Tiberi, Alessandra Mastronardi) have separate romantic interludes; a spotlight shines on an ordinary man (Roberto Benigni).',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRAleDmm6rwd0HrNpsCEht0Axcm4xNNlSn6wDanVzlFLZM9iiXY',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Modnight in Paris',
        year: '2011',
        director: directors[5],
        filmSynopsis: 'Gil Pender (Owen Wilson) is a screenwriter and aspiring novelist. Vacationing in Paris with his fiancee (Rachel McAdams), he has taken to touring the city alone. On one such late-night excursion, Gil encounters a group of strange -- yet familiar -- revelers, who sweep him along, apparently back in time, for a night with some of the Jazz Age\'s icons of art and literature. The more time Gil spends with these cultural heroes of the past, the more dissatisfied he becomes with the present.',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTk3ssys2bKM5-U6XMgvoD8yVoS5Io2YKg_1xA6x6GA8mKuuqID',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Match Point',
        year: '2005',
        director: directors[5],
        filmSynopsis: 'Tennis instructor Chris Wilton (Jonathan Rhys-Meyers) grows friendly with Tom Hewett (Matthew Goode), a wealthy student who shares an interest in opera. Invited to attend a performance with Tom, Chris meets the family and instantly attracts Tom\'s sister, Chloe (Emily Mortimer). Chris marries her to get a job with her millionaire father, Alec (Brian Cox), but a dangerous affair with Nola Rice (Scarlett Johansson), Tom\'s American girlfriend, threatens his newfound social status.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/159470/p159470_p_v8_aa.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The curse of the Jade Scorpion',
        year: '2001',
        director: directors[5],
        filmSynopsis: 'Woody Allen stars as CW Briggs, the top insurance investigator in New York in 1940-or so he keeps telling the firm\'s new efficiency expert, Betty Ann Fitzgerald (Helen Hunt). Briggs prides himself on being able to crack any insurance caper by getting into the mind of the thief, but now, thanks to the hypnotic powers of the Jade Scorpion, the mind of a thief is getting into Briggs.',
        image: 'http://www.gstatic.com/tv/thumb/dvdboxart/29476/p29476_d_v8_aa.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Unforgiven',
        year: '1992',
        director: directors[6],
        filmSynopsis: 'When prostitute Delilah Fitzgerald (Anna Thomson) is disfigured by a pair of cowboys in Big Whiskey, Wyoming, her fellow brothel workers post a reward for their murder, much to the displeasure of sheriff Little Bill Daggett (Gene Hackman), who doesn\'t allow vigilantism in his town. Two groups of gunfighters, one led by aging former bandit William Munny (Clint Eastwood), the other by the florid English Bob (Richard Harris), come to collect the reward, clashing with each other and the sheriff.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTdbficQLq6OrRN7xoO8eg9196ABckz_FC6D1GSgVr0lUEU89gi',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Mystic River',
        year: '2003',
        director: directors[6],
        filmSynopsis: 'When the daughter (Emmy Rossum) of ex-con Jimmy Marcus (Sean Penn) is murdered, two of his childhood friends from the neighborhood are involved. Dave (Tim Robbins), a blue-collar worker, was the last person to see her alive, while Sean (Kevin Bacon), a homicide detective, is heading up the case. As Sean proceeds with his investigation, Jimmy conducts one of his own through neighborhood contacts. Eventually, Jimmy suspects Dave is the culprit and considers taking the law into his own hands.',
        image: 'http://www.gstatic.com/tv/thumb/dvdboxart/32186/p32186_d_v8_aa.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Million Dollar Baby',
        year: '2004',
        director: directors[6],
        filmSynopsis: 'Frankie Dunn (Clint Eastwood) is a veteran Los Angeles boxing trainer who keeps almost everyone at arm\'s length, except his old friend and associate Eddie "Scrap Iron" Dupris (Morgan Freeman). When Maggie Fitzgerald (Hilary Swank) arrives in Frankie\'s gym seeking his expertise, he is reluctant to train the young woman, a transplant from working-class Missouri. Eventually, he relents, and the two form a close bond that will irrevocably change them both.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/35226/p35226_p_v8_aq.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Gran Torino',
        year: '2008',
        director: directors[6],
        filmSynopsis: 'Retired auto worker and Korean War vet Walt Kowalski (Clint Eastwood) fills emptiness in his life with beer and home repair, despising the many Asian, Latino and black families in his neighborhood. Walt becomes a reluctant hero when he stands up to the gangbangers who tried to force an Asian teen to steal Walt\'s treasured car. An unlikely friendship develops between Walt and the teen, as he learns he has more in common with his neighbors than he thought.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/183329/p183329_p_v8_ab.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Batman Begins',
        year: '2005',
        director: directors[7],
        filmSynopsis: 'A young Bruce Wayne (Christian Bale) travels to the Far East, where he\'s trained in the martial arts by Henri Ducard (Liam Neeson), a member of the mysterious League of Shadows. When Ducard reveals the League\'s true purpose -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up the city without resorting to murder. With the help of Alfred (Michael Caine), his loyal butler, and Lucius Fox (Morgan Freeman), a tech expert at Wayne Enterprises, Batman is born.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/35903/p35903_p_v8_aw.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Dark Knight',
        year: '2008',
        director: directors[7],
        filmSynopsis: 'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/173378/p173378_p_v8_au.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Dark Knight Rises',
        year: '2012',
        director: directors[7],
        filmSynopsis: 'It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQSGF8_VbDqKF0B_4IQ0NF87VMDSy7_MPKryawR-qLnSIPQwo5z',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Inception',
        year: '2010',
        director: directors[7],
        filmSynopsis: 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people\'s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone\'s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb\'s every move.',
        image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRo9vfJCM6dzPkZHIHBVCtlJnAnew9Ai26kEdrli0-tfmatmciD',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'The Terminator',
        year: '1984',
        director: directors[8],
        filmSynopsis: 'Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape.',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Aliens',
        year: '1986',
        director: directors[8],
        filmSynopsis: 'After floating in space for 57 years, Lt. Ripley\'s (Sigourney Weaver) shuttle is found by a deep space salvage team. Upon arriving at LV-426, the marines find only one survivor, a nine year old girl named Newt (Carrie Henn). But even these battle-hardened marines with all the latest weaponry are no match for the hundreds of aliens that have invaded the colony.',
        image: 'http://www.gstatic.com/tv/thumb/movieposters/9384/p9384_p_v8_as.jpg',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Titanic',
        year: '1997',
        director: directors[8],
        filmSynopsis: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      },
      {
        title: 'Avatar',
        year: '2009',
        director: directors[8],
        filmSynopsis: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na\'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.',
        image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQCfmvrE4fMo2cd8esc7mDZPtFSJThAujddMPkRtti1_ij6u-jp',
        comments: [{
          text: 'Good',
          rating: 4
          // user: 'Giovanni'
        }]
      }]);
  })
  .then(movies => console.log(`${movies.length} movies created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

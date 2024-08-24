import { QuestionTableData } from "./questionTableData";

interface FinalQuestionData{
    category: string;
    question: string;
    answer: string;
    beginning: string;
}


export class QuestionList{

    finalQuestion: FinalQuestionData = 
      {
        category: 'Recognize These Commercials?',
        question:"[BLANK] is on your side (Hint: Blank has 3 syllables)",
        answer:"Nationwide",
        beginning:"What is ",
      }
    

    dataSource: QuestionTableData[] = 
    [
        {
            category: 'Recognize These Commercials?',
            questions: 
             [
               {
                 question:"Ch-ch-ch-chia!",
                 answer:"Chia Pet",
                 beginning:"What is ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"They're magically delicious!",
                 answer:"Lucky Charms",
                 beginning:"What is ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"Mommy, wow! I'm a big kid now",
                 answer:"Huggies",
                 beginning:"What is ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"[BLANK] is on your side (Hint: Blank has 3 syllables)",
                answer:"Nationwide",
                beginning:"What is ",
                value:800,
                beenClicked: false,
              },
              {
                question:"Ba-da-ba-ba-baa... I'm lovin' it!",
                answer:"McDonald's",
                beginning:"What is ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: 'Famous Logos',
            questions: 
             [
               {
                 question:"These 5 rings are different colors to represent the various countries competing",
                 answer:"Olympics",
                 beginning:"What are the ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"This coffee logo has a primarily green coloring with an image of a twin-tailed siren in the center",
                 answer:"Starbucks",
                 beginning:"What is ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"This famous Swoosh represents the wing of a Greek goddess, symbolizing speed, movement, power and motivation",
                 answer:"Nike",
                 beginning:"What is ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"This recognizable logo is a tilted divided rectangle, one section is blue with two dots, the other red with a single dot",
                answer:"Domino's",
                beginning:"What is ",
                value:800,
                beenClicked: false,
              },
              {
                question:"This simple logo is a star with three points within a circle. Each point represents the company's drive for universal motorization",
                answer:"Mercedes-Benz",
                beginning:"What is ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: 'Do You Know Pokémon?',
            questions: 
             [
               {
                 question:"This generation of Pokémon contains the starters Snivy, Oshawott and Tepig",
                 answer:"Generation 5",
                 beginning:"What is ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"Before facing the champion at the end of the journey, each trainer must defeat this group first",
                 answer:"Elite 4",
                 beginning:"Who are the ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"This Pokémon's silhouette can resemble a Voltorb or a Pokéball",
                 answer:"Jigglypuff",
                 beginning:"What is ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"This side mode in Pokémon HeartGold and SoulSilver had Pokémon compete in various track and field events, similar to the Olympics",
                answer:"Pokeathlon",
                beginning:"What is ",
                value:800,
                beenClicked: false,
              },
              {
                question:"Female Pikachu's have this unique shape at the end of their tails",
                answer:"Heart",
                beginning:"What is a ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: 'Miscellaneous Disney',
            questions: 
             [
               {
                 question:"This song from the hit move Frozen has earned numerous awards, depicting Elsa enjoying her self-isolation",
                 answer:"Let It Go",
                 beginning:"What is ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"This small town is where Lightning McQueen ends up after accidentally destroying the main road",
                 answer:"Radiator Springs",
                 beginning:"What is ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"This 1940s Disney movie is unusual as there is no dialogue between characters, only orchestral music",
                 answer:"Fantasia",
                 beginning:"What is ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"This WALL-E character is the robotic villain in charge of the Axiom, and is determined to follow its programming",
                answer:"AUTO",
                beginning:"Who is ",
                value:800,
                beenClicked: false,
              },
              {
                question:"Mike and Sully joined this fraternity in Monsters University in order to be reinstated in the Scare Program",
                answer:"Oozma Kappa",
                beginning:"What is ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: 'Weather Phenomena',
            questions: 
             [
               {
                 question:"This weather phenomena is the process of water vapor becoming liquid once more",
                 answer:"Condensation",
                 beginning:"What is ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"This natural disaster is a rotating column of air that can reach speeds of 300 miles per hour",
                 answer:"Tornado",
                 beginning:"What is a ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"This phenomena is caused by magnetic storms from solar activity, resulting in ribbons of light in the sky",
                 answer:"Auroras Borealis",
                 beginning:"What is the ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"This event is a relatively short whirlwind, which can gather dirt to become dirty looking",
                answer:"Dust Devil",
                beginning:"What is a ",
                value:800,
                beenClicked: false,
              },
              {
                question:"This weather phenomena is a seasonal shift in winds and precipitation primarily in South/Southeastern Asia",
                answer:"Monsoon",
                beginning:"What is a ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: 'Spongebob Characters',
            questions: 
             [
               {
                 question:"This fish has an unfortunate tendency to break his leg, something that he lets the world know",
                 answer:"Fred",
                 beginning:"Who is ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"This lobster is quite strong, often lifting weights and even works as a lifeguard",
                 answer:"Larry",
                 beginning:"Who is ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"This program is the computer wife of Plankton, who loves him despite his many schemes",
                 answer:"Karen",
                 beginning:"Who is ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"This villian is the main enemy of Mermaid Man and Barnacle Boy, he also uses dangerous weapons",
                answer:"Man Ray",
                beginning:"Who is ",
                value:800,
                beenClicked: false,
              },
              {
                question:"This king is the ruler of all creatures under the sea, though his hair is thinning at the top",
                answer:"Neptune",
                beginning:"Who is ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
    ];



    dataSource2: QuestionTableData[] = [
      {
        category: 'The Wonders Of Space',
        questions: 
         [
           {
             question:"This is the name of the galaxy that the Earth is located in",
             answer:"Milky Way",
             beginning:"What is the ",
             value:200,
             beenClicked: false,
           },
           {
             question:"This phenomenon occurs when a star collapses in on itself, nothing can escape, not even light",
             answer:"Black Hole",
             beginning:"What is a ",
             value:400,
             beenClicked: false,
           },
           {
             question:"This group of 12 constellations lies along the ecliptic and are often used to describe people",
             answer:"Zodiac",
             beginning:"What is the",
             value:600,
             beenClicked: false,
           },
           {
            question:"Excluding the dwarf planet Pluto, this planet is the farthest from the Sun",
             answer:"Neptune",
             beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"This group of stars is part of the Ursa Major constellation, and always lies in the Northern direction",
            answer:"Big Dipper",
            beginning:"What is the ",
            value:1000,
            beenClicked: false,
          },
         ],
    },
    {
        category: 'Super Mario',
        questions: 
         [
           {
             question:"This character lives amongst the stars and acts as a mother to the Lumas",
             answer:"Rosalina",
             beginning:"Who is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"This enemy is the first enemy Mario encounters, and in many games, simply gets stomped on",
             answer:"Goombas",
             beginning:"What are ",
             value:400,
             beenClicked: false,
           },
           {
             question:"She is the Princess of the neighboring Kingdom of Sarasaland. She has a spunky personality and seems to be an item with Luigi",
             answer:"Daisy",
             beginning:"Who is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"Princess Peach and Mario decide to vacation on the tropical island Isle Delfino, but find the island graffitied in this game",
            answer:"Sunshine",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"Though now known as Mario, this plumber use to go by this name upon his deput",
            answer:"Jumpman",
            beginning:"What is ",
            value:1000,
            beenClicked: false,
          },
         ],
    },
    {
        category: 'Periodic Table',
        questions: 
         [
           {
             question:"This is the first element in the periodic table with the elemental symbol H",
             answer:"Hydrogen",
             beginning:"What is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"Potassium has an atomic number of 19 and has this elemental symbol",
             answer:"K",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"This element has the elemental symbol of Ag. It is also the fatal weakness for many creatures such as vampires and werewolves",
             answer:"Silver",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"This group or family of elements is on the far right-side of the periodic table and includes these elements: Helium, Argon and Krypton",
            answer:"Noble Gases",
            beginning:"What are the ",
            value:800,
            beenClicked: false,
          },
          {
            question:"The periodic table is divided into 3 main groups: Metals, Nonmetals and this group",
            answer:"Metalloids",
            beginning:"What are ",
            value:1000,
            beenClicked: false,
          },
         ],
    },
    {
        category: 'Plants Vs. Zombies',
        questions: 
         [
           {
             question:"This plant is the first offensive plant in the game with many variants that shoot more pellets and even backwards",
             answer:"Peashooter",
             beginning:"What is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"This plant is the first defensive plant obtained in Plants vs. Zombies 2 with a tough outside and a yummy inside",
             answer:"Wall-nut",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"This is the first theme of Plants vs. Zombies 2 after being transported back in time",
             answer:"Eygptian",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"This company is the current owner of the Plants vs. Zombie franchise and is responsible for adding microtransactions",
            answer:"EA",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"This man is the owner of the time-traveling car Penny and is who the zombies all cry to eat the brain of",
            answer:"Crazy Dave",
            beginning:"Who is ",
            value:1000,
            beenClicked: false,
          },
         ],
    },
    {
        category: 'Mythical Creatures',
        questions: 
         [
           {
             question:"This majestic being is said to have the body of a horse, possess a single horn and appear only to fair maidens",
             answer:"Unicorn",
             beginning:"What is a ",
             value:200,
             beenClicked: false,
           },
           {
             question:"Born from a chicken egg which has been incubated by a stone, any who look at this monster's eyes is to stone",
             answer:"Basilisk",
             beginning:"What is a ",
             value:400,
             beenClicked: false,
           },
           {
             question:"These creatures are widely spread throughout European folklore, though are typically thought of as having magic powers along with wings",
             answer:"Fairies",
             beginning:"What are ",
             value:600,
             beenClicked: false,
           },
           {
            question:"According to Greek myth, this creature is said to be a hybrid of a lion, goat and even a snake",
            answer:"Chimera",
            beginning:"What is a ",
            value:800,
            beenClicked: false,
          },
          {
            question:"A Chinese legend states that should a koi fish swim upstream to the top of a special waterfall, it will become this creature",
            answer:"Dragon",
            beginning:"What is a ",
            value:1000,
            beenClicked: false,
          },
         ],
    },
    {
        category: 'Rule of 3\'s',
        questions: 
         [
           {
             question:"In the Legend of Zelda franchise, power, wisdom and courage are the cornerstones of this item",
             answer:"Triforce",
             beginning:"What is the ",
             value:200,
             beenClicked: false,
           },
           {
             question:"A French story depicts the tale of this group in Paris. This group also has a candy bar named after them.",
             answer:"Three Musketeers",
             beginning:"Who are the ",
             value:400,
             beenClicked: false,
           },
           {
             question:"The ghosts of Christmas Past, Present and Future seek to teach old man Scrooge in this story",
             answer:"A Christmas Carol",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"The Elder Wand, the Resurrection Stone and the Cloak of Invisibility together are known as these",
            answer:"Deathly Hallows",
            beginning:"What is the ",
            value:800,
            beenClicked: false,
          },
          {
            question:"The phrase \"See No Evil, Hear No Evil, Speak No Evil\" is represented by this group",
            answer:"Three Wise Monkeys",
            beginning:"Who are the ",
            value:1000,
            beenClicked: false,
          },
         ],
    },

    ]




}

/*
{
        category: 'Pixar Movie Quotes',
        questions: 
         [
           {
             question:"\"Honey! Where's my super suit?\"",
             answer:"The Incredibles",
             beginning:"What is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"\"This isn't flying, this is falling with style!\"",
             answer:"Toy Story",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"\"You guys made me ink!\"",
             answer:"Finding Nemo",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"\"You are a cook! A cook makes! A thief takes.\"",
            answer:"Ratatouille",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"\"Ain't no need to watch where I'm going. Just need to know where I've been.\"",
            answer:"Cars",
            beginning:"What is ",
            value:1000,
            beenClicked: false,
          },
         ],
       },
      {
        category: 'Cereals With Mascots',
        questions: 
         [
           {
             question:"Trix's silly mascot is thwarted from eating his own cereal, due to him being this species",
             answer:"Rabbit",
             beginning:"What is a ",
             value:200,
             beenClicked: false,
           },
           {
             question:"While famous for being the face of Fruity Pebbles, this mascot originated from this famous cartoon",
             answer:"The Flintstones",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"This company is the owner of the famous Frosted Flakes along with its mascot, Tony the Tiger",
             answer:"Kellogg",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"This cereal's mascot is an orange cuckoo bird who goes crazy for his chocolate cereal",
            answer:"Cocoa Puffs",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"This mascot is a bird with a unique multi-colored beak who loves to eat Fruit Loops",
            answer:"Toucan Sam",
            beginning:"Who is ",
            value:1000,
            beenClicked: false,
          },
         ],
       },
       {
        category: 'Whose That Pokémon?',
        questions: 
         [
           {
             question:"Fittingly, this Pokémon is the first to be listed in the original Pokédex",
             answer:"Bulbasaur",
             beginning:"Who is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"This Pokémon is the grass starter of the Johto region, who is sometimes known as Bobby",
             answer:"Chikorita",
             beginning:"Who is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"This Pokémon is the antagonist of the first movie, derived from the ancestor of all Pokémon",
             answer:"Mewtwo",
             beginning:"Who is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"This aquatic Pokémon suffers from severe headaches which increases its psychic powers",
            answer:"Psyduck",
            beginning:"Who is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"This elongated Pokémon has horizontal stripes along its body, it occasionally listens to catchy music while walking",
            answer:"Furret",
            beginning:"Who is ",
            value:1000,
            beenClicked: false,
          },
         ],
       },
       {
        category: 'Intertwined Concepts',
        questions: 
         [
           {
             question:"When reaching a fork in the road one can follow either of these directions",
             answer:"Left & Right",
             beginning:"What is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"This concept is deeply rooted in Chinese philosophy, believed to maintain the balance of creation",
             answer:"Yin & Yang",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"Depending on the media, one can either go in both or only one of these directions when time traveling",
             answer:"Forward & Backward",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"These two sides are part of the same coin in morality",
            answer:"Good & Evil",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"The appearance and disappearance of either of these can be seen clearly with the eyes, especially in space",
            answer:"Light & Dark",
            beginning:"What is ",
            value:1000,
            beenClicked: false,
          },
         ],
       },
       {
        category: 'Food & Drink',
        questions: 
         [
           {
             question:"This food is made of many other things, be warned however that raising it's price at Costco is forbidden",
             answer:"Hotdog",
             beginning:"What is a ",
             value:200,
             beenClicked: false,
           },
           {
             question:"By using water and filtering out the ground, this energizing drink is created",
             answer:"Coffee",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"This combination of food and drink is a classic dessert, espcially during the Christmas season",
             answer:"Cookies & Milk",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"This french dessert is also known as burnt cream, since fire is normally directly applied to it",
            answer:"Creme Brulee",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"The romanticed version of this dessert involves eating it outdoors using tree branches",
            answer:"S'more",
            beginning:"What are ",
            value:1000,
            beenClicked: false,
          },
         ],
       },
       {
        category: 'Words Beginning with "Sup"',
        questions: 
         [
           {
             question:"A word meaning very good or pleasant; excellent",
             answer:"Super",
             beginning:"What is ",
             value:200,
             beenClicked: false,
           },
           {
             question:"An evening meal, typically a light or informal one",
             answer:"Supper",
             beginning:"What is ",
             value:400,
             beenClicked: false,
           },
           {
             question:"Something that completes or enhances something else",
             answer:"Supplement",
             beginning:"What is ",
             value:600,
             beenClicked: false,
           },
           {
            question:"To observe and direct the execution of something",
            answer:"Supervise",
            beginning:"What is ",
            value:800,
            beenClicked: false,
          },
          {
            question:"A Latin word representing the deadly sin of Pride",
            answer:"Superbia",
            beginning:"What is ",
            value:1000,
            beenClicked: false,
          },
         ],
       }
*/

/*This is the question template for the board*/

/*
[
   {
            category: '',
            questions: 
             [
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"",
                answer:"",
                beginning:" ",
                value:800,
                beenClicked: false,
              },
              {
                question:"",
                answer:"",
                beginning:" ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: '',
            questions: 
             [
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"",
                answer:"",
                beginning:" ",
                value:800,
                beenClicked: false,
              },
              {
                question:"",
                answer:"",
                beginning:" ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: '',
            questions: 
             [
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"",
                answer:"",
                beginning:" ",
                value:800,
                beenClicked: false,
              },
              {
                question:"",
                answer:"",
                beginning:" ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: '',
            questions: 
             [
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"",
                answer:"",
                beginning:" ",
                value:800,
                beenClicked: false,
              },
              {
                question:"",
                answer:"",
                beginning:" ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: '',
            questions: 
             [
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"",
                answer:"",
                beginning:" ",
                value:800,
                beenClicked: false,
              },
              {
                question:"",
                answer:"",
                beginning:" ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
        {
            category: '',
            questions: 
             [
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:200,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:400,
                 beenClicked: false,
               },
               {
                 question:"",
                 answer:"",
                 beginning:" ",
                 value:600,
                 beenClicked: false,
               },
               {
                question:"",
                answer:"",
                beginning:" ",
                value:800,
                beenClicked: false,
              },
              {
                question:"",
                answer:"",
                beginning:" ",
                value:1000,
                beenClicked: false,
              },
             ],
        },
];
*/
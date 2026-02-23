import { QuestionTableData } from "./questionTableData";
import { FinalQuestionData } from "./finalQuestionData";

//The Questions used for the board are currently hardcoded into the Angular. 
//Future updates will move the questions into SQL tables which will be connected using API calls
export class QuestionList{

    finalQuestion: FinalQuestionData = 
      {
        category: 'Greek Mythology',
        question:"Though known for having 3 heads, Cerberus is also often depicted having this animal along its back and as a tail",
        answer:["Snakes", "Snake heads"],
        beginning:"What are",
      }
      // {
      //   category: 'Greatest Hits',
      //   question:"This music video currently has the record for most views, at almost 14 billion on YouTube",
      //   answer:["Baby Shark Dance", "Baby Shark"],
      //   beginning:"What is",
      // }
    

    dataSource: QuestionTableData[] = 
    [
      {
        category: 'Currency',
        questions: 
          [
            {
              question:"This country uses this currency",
              answer:"British pound",
              beginning:"What is ",
              value:200,
              questionType:"image",
              questionSource: "/assets/uk_flag.png"
            },
            {
              question:"This country uses this currency",
              answer:"Japan",
              beginning:"What is ",
              value:400,
              questionType:"image",
              questionSource:"/assets/yen_bill.jpg"
            },
            {
              question:"The country of Mexico uses this currency",
              answer:"Peso",
              beginning:"What is ",
              value:600,
            },
            {
              question:"This U.S president is on the $5 USD bill",
              answer:"Abraham Lincoln",
              beginning:"Who is ",
              value:800,
            },
            {
              question:"This country uses this currency",
              answer:"Rupee",
              beginning:"What is ",
              value:1000,
              questionType:"image",
              questionSource:"/assets/india_flag.png"
            },
          ],
  	  },
      {
        category: 'Flowers',
        questions: 
          [
            {
              question:"Name this flower",
              answer:"Daisy",
              beginning:"What is a ",
              value:200,
		          questionType:"image",
              questionSource:"/assets/daisy_flower.png"
            },
            {
              question:"This term describes the process of an organism growing from a seed or spore into a seedling",
              answer:"Germination",
              beginning:"What is ",
              value:400,
            },
            {
              question:"Characterized by an awful smell, this is the largest individual flower in the world",
              answer:"Rafflesia",
              beginning:"What is the ",
              value:600,
            },
            {
              question:"This flower is the national flower of both India and Vietnam",
              answer:"Lotus",
              beginning:"What is a ",
              value:800,
            },
            {
              question:"This term is used to describe a flower that blooms and dies within a single day",
              answer:"Ephemeral",
              beginning:"What is ",
              value:1000,
            },
          ],
  	  },
      {
        category: 'Have you Scene Me?',
        questions: 
          [
            {
              question:"Name this movie",
              answer:"Titanic",
              beginning:"What is ",
              value:200,
              questionType:"image",
              questionSource:"/assets/titanic.jpg"
            },
            {
              question:"Name this movie",
              answer:"Encanto",
              beginning:"What is ",
              value:400,
              questionType:"image",
              questionSource:"/assets/encanto.jpg"
            },
            {
              question:"Name this movie",
              answer:"Twilight",
              beginning:"What is ",
              value:600,
              questionType:"image",
              questionSource:"/assets/twilight.avif"
            },
            {
              question:"Name this movie",
              answer:"The Shining",
              beginning:"What is ",
              value:800,
              questionType:"image",
              questionSource:"/assets/shining.avif"
            },
            {
              question:"Name this movie",
              answer:"Beauty and the Beast",
              beginning:"What is ",
              value:1000,
              questionType:"image",
              questionSource:"/assets/beauty_beast.jpg"
            },
          ],
  	  }, 
      {
        category: 'Numbers',
        questions: 
          [
            {
              question:"There are this many ways to roll a 7 with two dice",
              answer:"6",
              beginning:"What is ",
              value:200,
            },
            {
              question:"There are this many major arcana in a standard tarot deck",
              answer:"22",
              beginning:"What is ",
              value:400,
            },
            {
              question:"Excluding Arthor himself, the smallest depiction of the Knights of the Round Table had this many members",
              answer:"12",
              beginning:"What is ",
              value:600,
            },
            {
              question:"Dante Alighieri's \"The Divine Comedy\" describes this many circles of Hell",
              answer:"9",
              beginning:"What is ",
              value:800,
            },
            {
              question:"This number in Kelvin is equivalent to 0°C (Rounded down)",
              answer:"273",
              beginning:"What is _K ",
              value:1000,
            },
          ],
  	  }, 
      {
        category: 'Cartoon Network',
        questions: 
          [
            {
              question:"This substance is responsible for creating both the Powerpuff Girls and Mojo Jojo",
              answer:"Chemical X",
              beginning:"What is ",
              value:200,
            },
            {
              question:"In the animated series \"Teen Titans\" the Titan's lair is shaped like this letter",
              answer:"T",
              beginning:"What is a ",
              value:400,
            },
            {
              question:"On its inception, Cartoon Network's Adult Swim aired at this time",
              answer:"10pm",
              beginning:"When is ",
              value:600,
            },
            {
              question:"Name this character",
              answer:"Dee Dee",
              beginning:"Who is ",
              value:800,
              questionType:"image",
              questionSource:"/assets/dee_dee.png"
            },
            {
              question:"This Adult Swim show follows the protagonist trying to return home after being sent forward in time by the evil Aku",
              answer:"Samurai Jack",
              beginning:"What is ",
              value:1000,
            },
          ],
  	  }, 
      {
        category: 'Chain Reaction',
        questions: 
          [
            {
              question:"Pork\nC---\nSticks",
              answer:"Chop",
              beginning:"What is ",
              value:200,
            },
            {
              question:"Rocket\nScience\nF---\nTrade",
              answer:"Fair",
              beginning:"What is ",
              value:400,
            },
            {
              question:"Bus\nPass\nJ-------\nDay",
              answer:"Judgment",
              beginning:"What is ",
              value:600,
            },
            {
              question:"Nose\nJ--\nS-------\nDeposit",
              answer:"Job Security",
              beginning:"What is ",
              value:800,
            },
            {
              question:"George\nW---------\nM-------\nValley",
              answer:"Washington Monument",
              beginning:"What is ",
              value:1000,
            },
          ],
  	  },  


];



    dataSource2: QuestionTableData[] = 
    
    [
      {
        category: 'Playing Cards',
        questions: 
          [
            {
              question:"Excluding Jokers, there are this many cards in a standard deck of cards",
              answer:"52",
              beginning:"What is ",
              value:200,
            },
            {
              question:"Standard playing cards are divided into these two colors",
              answer:"Black and red",
              beginning:"What are ",
              value:400,
            },
            {
              question:"Within a standard 52 card deck, this singular card often has a unique design and is the highest value card depending on the game",
              answer:"Ace of spades",
              beginning:"What is the ",
              value:600,
            },
            {
              question:"In Poker, this hand is better than a straight but worse than a full house",
              answer:"Flush",
              beginning:"What is a ",
              value:800,
            },
            {
              question:"3 out of 4 King cards are holding this item in their hands",
              answer:"Swords",
              beginning:"What are ",
              value:1000,
            },
          ],
  	  },
      {
        category: 'Weapons',
        questions: 
          [
            {
              question:"This iconic curved sword originated from 13th century Japan and was mainly used by samurai",
              answer:"Katana",
              beginning:"What is a ",
              value:200,
            },
            {
              question:"Though not made of its namesake, these melee weapons are designed to fit tightly around the fist and are used for punching",
              answer:"Brass Knuckles",
              beginning:"What are ",
              value:400,
            },
            {
              question:"This siege machine was an ancient missile launcher that could fire bolts and looked like a large crossbow ",
              answer:"Ballista",
              beginning:"What is a ",
              value:600,
            },
            {
              question:"Name this sword component",
              answer:"Hilt",
              beginning:"What is the ",
              value:800,
		          questionType:"image",
              questionSource:"/assets/hilt.webp"
            },
            {
              question:"Though famous as Excalibur, the sword is also known by this name depending on the legend",
              answer:"Caliburn",
              beginning:"What is ",
              value:1000,
            },
          ],
  	  },
      {
        category: 'Nothing like \"Home\"',
        questions: 
          [
            {
              question:"This baseball technique most commonly has the ball fly outside the field",
              answer:"Home run",
              beginning:"What is a ",
              value:200,
		          questionType:""
            },
            {
              question:"This man is a father of three and works at a nuclear power plant, but doh, he isn't good at it ",
              answer:"Homer Simpson",
              beginning:"Who is ",
              value:400,
		          questionType:""
            },
            {
              question:"This film depicts a young boy named Kevin who is left behind by his family on a winter vacation",
              answer:"Home Alone",
              beginning:"What is ",
              value:600,
		          questionType:""
            },
            {
              question:"This home improvement store has a prominent orange color scheme and sells everything from paint to plants",
              answer:"Home Depot",
              beginning:"What is ",
              value:800,
            },
            {
              question:"This self-regulating process allows organisms to maintain internal conditions in varying environments",
              answer:"Homeostasis",
              beginning:"What is ",
              value:1000,
		          questionType:""
            },
          ],
  	  }, 
      {
        category: 'Food and Drink',
        questions: 
          [
            {
              question:"Name this fruit",
              answer:"Dragon fruit",
              beginning:"What is ",
              value:200,
		          questionType:"image",
              questionSource:"/assets/dragonfruit.jpg"
            },
            {
              question:"This country exports the largest amount of coffee beans in the world",
              answer:"Brazil",
              beginning:"What is ",
              value:400,
            },
            {
              question:"This ingredient is the base for gummy snacks",
              answer:"Gelatin",
              beginning:"What is ",
              value:600,
            },
            {
              question:"Within a single cup, there are this many tablespoons",
              answer:"16",
              beginning:"What is ",
              value:800,
            },
            {
              question:"This cooking technique means to moisten meat or poultry with fat or sauce while cooking it",
              answer:"Basting",
              beginning:"What is ",
              value:1000,
            },
          ],
  	  }, 
      {
        category: 'Materials',
        questions: 
          [
            {
              question:"This material is known for its excellent conductive capabilities, and is often used in electrical wiring",
              answer:"Copper",
              beginning:"What is ",
              value:200,
            },
            {
              question:"This valley in San Francisco, California, is named after a key material used by the many tech companies located there",
              answer:"Silicon Valley",
              beginning:"What is ",
              value:400,
            },
            {
              question:"This ceramic material, made by heat Kaolin in a kiln, is also the name of a country",
              answer:"China",
              beginning:"What is ",
              value:600,
            },
            {
              question:"This syntheic material is a heat-resistant plastic and has a tensile strength up to 10x that of steel",
              answer:"Kevlar",
              beginning:"What is ",
              value:800,
            },
            {
              question:"This material is the bark of the Quercus Suber oak tree, and is an impermeable buoyant material",
              answer:"Cork",
              beginning:"What is ",
              value:1000,
            },
          ],
  	  }, 
      {
        category: 'Who am I?',
        questions: 
          [
            {
              question:"Name this character",
              answer:"Waluigi",
              beginning:"Who is ",
              value:200,
		          questionType:"image",
              questionSource:"/assets/waluigi.png"
            },
            {
              question:"Name this character",
              answer:"Darth Vader",
              beginning:"Who is ",
              value:400,
		          questionType:"image",
              questionSource:"/assets/darth.jpg"
            },
            {
              question:"Name these characters",
              answer:"Finn and Jake",
              beginning:"Who are ",
              value:600,
		          questionType:"image",
              questionSource:"/assets/finn_and_jake.png"
            },
            {
              question:"Name this character",
              answer:"Tintin",
              beginning:"Who is ",
              value:800,
		          questionType:"image",
              questionSource:"/assets/tintin.webp"
            },
            {
              question:"Name this character",
              answer:"Pacha",
              beginning:"Who is ",
              value:1000,
		          questionType:"image",
              questionSource:"/assets/pacha.jpg"
            },
          ],
  	  },  


];
}
 
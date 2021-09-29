/* mySeedScript.js */

// require the necessary libraries
// const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    // Connection URL
    const uri = "mongodb+srv://nikil21:oneshot@cluster0.8ibcn.mongodb.net/oneshot?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection1 = client.db("oneshot").collection("colleges");
        const collection2 = client.db("oneshot").collection("students");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection1.drop();
        collection2.drop();

        // // make a bunch of time series data
        let studentdata = [
         {
             "id": "1",
             "first_name": "Erich",
             "last_name": "Ovens",
             "Year_of_batch": "2008",
             "College_id": "100",
             "Skills": "PHP,ML,HTML,Python,C++"
         },
         {
             "id": "2",
             "first_name": "Pia",
             "last_name": "Di Pietro",
             "Year_of_batch": "2003",
             "College_id": "100",
             "Skills": "PHP,HTML,ML,Python,C,C++"
         },
         {
             "id": "3",
             "first_name": "Karina",
             "last_name": "Moule",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "Python,PHP,C,HTML"
         },
         {
             "id": "4",
             "first_name": "Rosalinde",
             "last_name": "Exley",
             "Year_of_batch": "2001",
             "College_id": "100",
             "Skills": "Python,HTML"
         },
         {
             "id": "5",
             "first_name": "Tamar",
             "last_name": "Clears",
             "Year_of_batch": "2000",
             "College_id": "100",
             "Skills": "Java,C,PHP,HTML"
         },
         {
             "id": "6",
             "first_name": "Tiler",
             "last_name": "Fowlds",
             "Year_of_batch": "1997",
             "College_id": "100",
             "Skills": "C,ML,Python,C++,PHP"
         },
         {
             "id": "7",
             "first_name": "Lebbie",
             "last_name": "Stirzaker",
             "Year_of_batch": "1996",
             "College_id": "100",
             "Skills": "ML,Python,C"
         },
         {
             "id": "8",
             "first_name": "Shae",
             "last_name": "Kenset",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "Python,ML"
         },
         {
             "id": "9",
             "first_name": "Isis",
             "last_name": "Betho",
             "Year_of_batch": "1996",
             "College_id": "100",
             "Skills": "Java,Python,HTML,C,PHP"
         },
         {
             "id": "10",
             "first_name": "Filippo",
             "last_name": "Corp",
             "Year_of_batch": "2011",
             "College_id": "100",
             "Skills": "HTML,ML,Python,Java,PHP"
         },
         {
             "id": "11",
             "first_name": "Lenette",
             "last_name": "Lemerle",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "ML,HTML,Python,PHP,Java,C++,C"
         },
         {
             "id": "12",
             "first_name": "Elene",
             "last_name": "Drohane",
             "Year_of_batch": "2005",
             "College_id": "100",
             "Skills": "ML,PHP,C,Python,Java"
         },
         {
             "id": "13",
             "first_name": "Onfre",
             "last_name": "Radbourn",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "C++,Python,C,PHP,HTML"
         },
         {
             "id": "14",
             "first_name": "Gabriellia",
             "last_name": "Doward",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "PHP,Java"
         },
         {
             "id": "15",
             "first_name": "Flori",
             "last_name": "Tallboy",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "Java,ML,Python,C,PHP"
         },
         {
             "id": "16",
             "first_name": "Laney",
             "last_name": "Keel",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "Java,ML,Python,C"
         },
         {
             "id": "17",
             "first_name": "Madelyn",
             "last_name": "Dowry",
             "Year_of_batch": "1989",
             "College_id": "100",
             "Skills": "Java,HTML,C++"
         },
         {
             "id": "18",
             "first_name": "Rudie",
             "last_name": "Matusov",
             "Year_of_batch": "1985",
             "College_id": "100",
             "Skills": "C,PHP,HTML,Python,C++"
         },
         {
             "id": "19",
             "first_name": "Mikey",
             "last_name": "Lebarree",
             "Year_of_batch": "2010",
             "College_id": "100",
             "Skills": "Python,PHP,Java,C"
         },
         {
             "id": "20",
             "first_name": "Olivie",
             "last_name": "Fannon",
             "Year_of_batch": "1991",
             "College_id": "100",
             "Skills": "HTML,ML,C,Python,PHP,Java,C++"
         },
         {
             "id": "21",
             "first_name": "Jacqueline",
             "last_name": "Poluzzi",
             "Year_of_batch": "1993",
             "College_id": "100",
             "Skills": "ML,C,HTML,PHP"
         },
         {
             "id": "22",
             "first_name": "Robin",
             "last_name": "McCrorie",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "Python,ML,HTML,PHP"
         },
         {
             "id": "23",
             "first_name": "Igor",
             "last_name": "Wynne",
             "Year_of_batch": "1986",
             "College_id": "100",
             "Skills": "C++,C,HTML,PHP,Python,ML"
         },
         {
             "id": "24",
             "first_name": "Susan",
             "last_name": "Cousans",
             "Year_of_batch": "1999",
             "College_id": "100",
             "Skills": "HTML,Java,C,ML,PHP,Python"
         },
         {
             "id": "25",
             "first_name": "Quinton",
             "last_name": "Pudsall",
             "Year_of_batch": "1998",
             "College_id": "100",
             "Skills": "Java,Python,C"
         },
         {
             "id": "26",
             "first_name": "Ailene",
             "last_name": "Oldershaw",
             "Year_of_batch": "2000",
             "College_id": "100",
             "Skills": "ML,PHP,C,C++,Python"
         },
         {
             "id": "27",
             "first_name": "Vic",
             "last_name": "Furmenger",
             "Year_of_batch": "2000",
             "College_id": "100",
             "Skills": "Python"
         },
         {
             "id": "28",
             "first_name": "Anne-corinne",
             "last_name": "Geffinger",
             "Year_of_batch": "2007",
             "College_id": "100",
             "Skills": "C,PHP,Java,C++,ML,HTML"
         },
         {
             "id": "29",
             "first_name": "Mordy",
             "last_name": "Breckin",
             "Year_of_batch": "1997",
             "College_id": "100",
             "Skills": "Python,ML,Java,C++,HTML,PHP"
         },
         {
             "id": "30",
             "first_name": "Dena",
             "last_name": "Haugeh",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "ML,C++,C,Java,PHP,HTML"
         },
         {
             "id": "31",
             "first_name": "Adaline",
             "last_name": "Chilton",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "C++,C,ML,Java"
         },
         {
             "id": "32",
             "first_name": "Charisse",
             "last_name": "Gianilli",
             "Year_of_batch": "1999",
             "College_id": "100",
             "Skills": "PHP,Java"
         },
         {
             "id": "33",
             "first_name": "Hale",
             "last_name": "Giordano",
             "Year_of_batch": "1997",
             "College_id": "100",
             "Skills": "Java,Python,PHP,ML"
         },
         {
             "id": "34",
             "first_name": "Ezequiel",
             "last_name": "Simioli",
             "Year_of_batch": "1983",
             "College_id": "100",
             "Skills": "ML,C,HTML,PHP"
         },
         {
             "id": "35",
             "first_name": "Cherye",
             "last_name": "Collick",
             "Year_of_batch": "1989",
             "College_id": "100",
             "Skills": "ML,C"
         },
         {
             "id": "36",
             "first_name": "Hill",
             "last_name": "Burkart",
             "Year_of_batch": "2000",
             "College_id": "100",
             "Skills": "Python,ML,C++,C,HTML"
         },
         {
             "id": "37",
             "first_name": "Freddy",
             "last_name": "Pilger",
             "Year_of_batch": "1986",
             "College_id": "100",
             "Skills": "C++,ML"
         },
         {
             "id": "38",
             "first_name": "Mendy",
             "last_name": "McAree",
             "Year_of_batch": "2011",
             "College_id": "100",
             "Skills": "Python,C++"
         },
         {
             "id": "39",
             "first_name": "Channa",
             "last_name": "Scutt",
             "Year_of_batch": "2008",
             "College_id": "100",
             "Skills": "HTML,PHP,Java,Python,C++,ML,C"
         },
         {
             "id": "40",
             "first_name": "Hedi",
             "last_name": "Kupper",
             "Year_of_batch": "1992",
             "College_id": "100",
             "Skills": "ML,Python"
         },
         {
             "id": "41",
             "first_name": "Modestia",
             "last_name": "Saiz",
             "Year_of_batch": "2004",
             "College_id": "100",
             "Skills": "HTML,Python,ML,C++,Java,C,PHP"
         },
         {
             "id": "42",
             "first_name": "Belva",
             "last_name": "Barstock",
             "Year_of_batch": "1994",
             "College_id": "100",
             "Skills": "Python"
         },
         {
             "id": "43",
             "first_name": "Armand",
             "last_name": "Langshaw",
             "Year_of_batch": "2003",
             "College_id": "100",
             "Skills": "C,ML,PHP,HTML,C++"
         },
         {
             "id": "44",
             "first_name": "Torre",
             "last_name": "Rodmell",
             "Year_of_batch": "1994",
             "College_id": "100",
             "Skills": "Java,ML,PHP,HTML"
         },
         {
             "id": "45",
             "first_name": "Paulo",
             "last_name": "Emblow",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "C,Java"
         },
         {
             "id": "46",
             "first_name": "Aldridge",
             "last_name": "Sture",
             "Year_of_batch": "2003",
             "College_id": "100",
             "Skills": "Java,HTML"
         },
         {
             "id": "47",
             "first_name": "Lib",
             "last_name": "Yanshonok",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "HTML,C++"
         },
         {
             "id": "48",
             "first_name": "Emera",
             "last_name": "Clegg",
             "Year_of_batch": "1999",
             "College_id": "100",
             "Skills": "C++,PHP,Java"
         },
         {
             "id": "49",
             "first_name": "Shirlene",
             "last_name": "Gerrelts",
             "Year_of_batch": "2009",
             "College_id": "100",
             "Skills": "C++"
         },
         {
             "id": "50",
             "first_name": "Gabrielle",
             "last_name": "Daunter",
             "Year_of_batch": "2010",
             "College_id": "100",
             "Skills": "Python,C++,Java,PHP,ML,C"
         },
         {
             "id": "51",
             "first_name": "Marys",
             "last_name": "Gatheridge",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "C,PHP,ML,Java,HTML,Python"
         },
         {
             "id": "52",
             "first_name": "Celine",
             "last_name": "Iozefovich",
             "Year_of_batch": "1993",
             "College_id": "100",
             "Skills": "C"
         },
         {
             "id": "53",
             "first_name": "Bailie",
             "last_name": "Bockett",
             "Year_of_batch": "1985",
             "College_id": "100",
             "Skills": "Python,HTML,ML,C++"
         },
         {
             "id": "54",
             "first_name": "Grayce",
             "last_name": "Elwill",
             "Year_of_batch": "2001",
             "College_id": "100",
             "Skills": "HTML,Python,Java,C,ML,PHP"
         },
         {
             "id": "55",
             "first_name": "Aldric",
             "last_name": "Donisi",
             "Year_of_batch": "2010",
             "College_id": "100",
             "Skills": "HTML,Java,PHP,C++,C"
         },
         {
             "id": "56",
             "first_name": "Keelia",
             "last_name": "Goodings",
             "Year_of_batch": "2003",
             "College_id": "100",
             "Skills": "Python,Java,PHP"
         },
         {
             "id": "57",
             "first_name": "Kevin",
             "last_name": "Raddon",
             "Year_of_batch": "1995",
             "College_id": "100",
             "Skills": "HTML,PHP,ML,C,Python"
         },
         {
             "id": "58",
             "first_name": "Nick",
             "last_name": "Agnew",
             "Year_of_batch": "2008",
             "College_id": "100",
             "Skills": "C++,C"
         },
         {
             "id": "59",
             "first_name": "Frayda",
             "last_name": "Schrinel",
             "Year_of_batch": "2000",
             "College_id": "100",
             "Skills": "PHP,ML,Java,HTML,C,C++"
         },
         {
             "id": "60",
             "first_name": "Sonni",
             "last_name": "Muggleton",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "C++,PHP,C,ML"
         },
         {
             "id": "61",
             "first_name": "Davon",
             "last_name": "Ballchin",
             "Year_of_batch": "1988",
             "College_id": "100",
             "Skills": "ML,Python,Java,PHP,HTML,C++,C"
         },
         {
             "id": "62",
             "first_name": "Gray",
             "last_name": "Phillimore",
             "Year_of_batch": "2005",
             "College_id": "100",
             "Skills": "ML,Python,C++"
         },
         {
             "id": "63",
             "first_name": "Maribelle",
             "last_name": "Ivamy",
             "Year_of_batch": "2001",
             "College_id": "100",
             "Skills": "HTML,C++,Java,ML,PHP,C,Python"
         },
         {
             "id": "64",
             "first_name": "Corbie",
             "last_name": "Skade",
             "Year_of_batch": "1967",
             "College_id": "100",
             "Skills": "C,C++"
         },
         {
             "id": "65",
             "first_name": "Celestyn",
             "last_name": "Blune",
             "Year_of_batch": "2008",
             "College_id": "100",
             "Skills": "C++,PHP,ML,Java,HTML,Python"
         },
         {
             "id": "66",
             "first_name": "Robbi",
             "last_name": "Dudny",
             "Year_of_batch": "2003",
             "College_id": "100",
             "Skills": "Python,HTML,C++"
         },
         {
             "id": "67",
             "first_name": "Christian",
             "last_name": "Sapshed",
             "Year_of_batch": "2007",
             "College_id": "100",
             "Skills": "Python,HTML,ML,C++,C,Java"
         },
         {
             "id": "68",
             "first_name": "Yankee",
             "last_name": "Inglefield",
             "Year_of_batch": "2011",
             "College_id": "100",
             "Skills": "ML,PHP,Java,C++,Python,C"
         },
         {
             "id": "69",
             "first_name": "Malina",
             "last_name": "Boyle",
             "Year_of_batch": "2013",
             "College_id": "100",
             "Skills": "Python,C,Java"
         },
         {
             "id": "70",
             "first_name": "Happy",
             "last_name": "St. Ledger",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "PHP,HTML,Python,C++,ML,C"
         },
         {
             "id": "71",
             "first_name": "Joachim",
             "last_name": "Hexter",
             "Year_of_batch": "1993",
             "College_id": "100",
             "Skills": "ML,Python"
         },
         {
             "id": "72",
             "first_name": "Bay",
             "last_name": "Byrnes",
             "Year_of_batch": "1994",
             "College_id": "100",
             "Skills": "C"
         },
         {
             "id": "73",
             "first_name": "Griffin",
             "last_name": "Rodinger",
             "Year_of_batch": "2010",
             "College_id": "100",
             "Skills": "HTML,Java,PHP,C++,ML"
         },
         {
             "id": "74",
             "first_name": "Damian",
             "last_name": "Loughton",
             "Year_of_batch": "2008",
             "College_id": "100",
             "Skills": "PHP,C,HTML"
         },
         {
             "id": "75",
             "first_name": "Margaux",
             "last_name": "Dohmann",
             "Year_of_batch": "2009",
             "College_id": "100",
             "Skills": "Python,C++,PHP,HTML"
         },
         {
             "id": "76",
             "first_name": "Sid",
             "last_name": "Chalcroft",
             "Year_of_batch": "1997",
             "College_id": "100",
             "Skills": "HTML,ML,PHP,Python,Java,C,C++"
         },
         {
             "id": "77",
             "first_name": "Wheeler",
             "last_name": "Scimonelli",
             "Year_of_batch": "1992",
             "College_id": "100",
             "Skills": "PHP,C++,Python,C,HTML"
         },
         {
             "id": "78",
             "first_name": "Kimmi",
             "last_name": "Stanyer",
             "Year_of_batch": "1998",
             "College_id": "100",
             "Skills": "Python,ML"
         },
         {
             "id": "79",
             "first_name": "Crista",
             "last_name": "Killshaw",
             "Year_of_batch": "2012",
             "College_id": "100",
             "Skills": "HTML,ML,Python,C,C++,Java,PHP"
         },
         {
             "id": "80",
             "first_name": "Martina",
             "last_name": "Vaudrey",
             "Year_of_batch": "2008",
             "College_id": "100",
             "Skills": "ML,C++,C,HTML,PHP,Python,Java"
         },
         {
             "id": "81",
             "first_name": "Ceil",
             "last_name": "Fitter",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "HTML,Java,Python,PHP"
         },
         {
             "id": "82",
             "first_name": "Trula",
             "last_name": "Blick",
             "Year_of_batch": "2011",
             "College_id": "100",
             "Skills": "ML"
         },
         {
             "id": "83",
             "first_name": "Lennie",
             "last_name": "Gepp",
             "Year_of_batch": "2011",
             "College_id": "100",
             "Skills": "HTML,Java,PHP,C,C++,ML,Python"
         },
         {
             "id": "84",
             "first_name": "Ravid",
             "last_name": "Breit",
             "Year_of_batch": "2005",
             "College_id": "100",
             "Skills": "ML,Python"
         },
         {
             "id": "85",
             "first_name": "Cecil",
             "last_name": "Schoolfield",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "Python,Java,C,HTML,C++,PHP,ML"
         },
         {
             "id": "86",
             "first_name": "Dallas",
             "last_name": "Wessing",
             "Year_of_batch": "2007",
             "College_id": "100",
             "Skills": "C,C++,HTML,Java,Python,ML,PHP"
         },
         {
             "id": "87",
             "first_name": "Clem",
             "last_name": "Snarr",
             "Year_of_batch": "1988",
             "College_id": "100",
             "Skills": "ML,HTML,PHP"
         },
         {
             "id": "88",
             "first_name": "Dorthea",
             "last_name": "Wofenden",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "Java"
         },
         {
             "id": "89",
             "first_name": "Madlin",
             "last_name": "Roath",
             "Year_of_batch": "2003",
             "College_id": "100",
             "Skills": "C,Python"
         },
         {
             "id": "90",
             "first_name": "Giorgi",
             "last_name": "Litel",
             "Year_of_batch": "1993",
             "College_id": "100",
             "Skills": "PHP,C,Python,HTML,ML,Java"
         },
         {
             "id": "91",
             "first_name": "Travus",
             "last_name": "Folbig",
             "Year_of_batch": "2002",
             "College_id": "100",
             "Skills": "Python,HTML,C++,Java,C,PHP,ML"
         },
         {
             "id": "92",
             "first_name": "Sheppard",
             "last_name": "Mansion",
             "Year_of_batch": "2007",
             "College_id": "100",
             "Skills": "C++,PHP,C,ML,Java"
         },
         {
             "id": "93",
             "first_name": "Tanner",
             "last_name": "Monck",
             "Year_of_batch": "2010",
             "College_id": "100",
             "Skills": "PHP,Python,ML"
         },
         {
             "id": "94",
             "first_name": "Selene",
             "last_name": "Fridaye",
             "Year_of_batch": "1989",
             "College_id": "100",
             "Skills": "C,Python,ML"
         },
         {
             "id": "95",
             "first_name": "Karole",
             "last_name": "Bartot",
             "Year_of_batch": "2006",
             "College_id": "100",
             "Skills": "HTML,C,ML,PHP,Python,Java"
         },
         {
             "id": "96",
             "first_name": "Joya",
             "last_name": "Humes",
             "Year_of_batch": "2010",
             "College_id": "100",
             "Skills": "C"
         },
         {
             "id": "97",
             "first_name": "Zaccaria",
             "last_name": "Cardillo",
             "Year_of_batch": "1995",
             "College_id": "100",
             "Skills": "Java,C,ML,HTML,Python,PHP"
         },
         {
             "id": "98",
             "first_name": "Tallulah",
             "last_name": "Kittel",
             "Year_of_batch": "2004",
             "College_id": "100",
             "Skills": "PHP,HTML,ML,C,Python,C++,Java"
         },
         {
             "id": "99",
             "first_name": "Joaquin",
             "last_name": "Edwardson",
             "Year_of_batch": "2011",
             "College_id": "100",
             "Skills": "C++,HTML,ML,Python,C"
         },
         {
             "id": "100",
             "first_name": "Sallyann",
             "last_name": "Donet",
             "Year_of_batch": "2007",
             "College_id": "100",
             "Skills": "Java,C++,C,Python,HTML"
         }
     ];
 
 
 
        students.insertMany(studentdata);
 
        console.log("Database seeded! :)");        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();
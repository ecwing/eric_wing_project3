//E-Learning app to teach children the alphabet...based off the worst alphabet book ever

// 1. Option 1: User input a value (must be a letter from A-Z) Program will spit out a random word that starts with that letter
// 2. Option 2: Program will spit out any random letter and any random word
// 3. iterate through the entire alphabet grabbing a random word for each

// Creates an letter object containing an array of all 26 letters in the alphabet which contains within it objects of different words and their examples as their key value pairs

const letter = {

    A: [ 
        {
            word: 'Are',
            example: 'Are you confused?'
        },

        {
            word: 'Aisle',
            example: 'Are the Argyle shirts down the aisle?'
        },                   
                    
        {
            word: 'Argyle',
            example: 'Are the Argyle shirts down the aisle?'
        },

        {
            word: 'Arsenic',
            example: 'Aresenic is poisonous?'
        }                    
    ],

    B: [
        {
            word: 'Bee',
            example: 'A Bee behaves in benevolent ways'
        },

        {
            word: 'bdellium',
            example: 'bdellium is an element of the periodic table?'
        }
    ],

    C: [
        {
            word: 'cue',
            example: 'It was their cue to see it through.'
        },

        {
            word: 'czar',
            example: 'Toronto is hiring a Transit Czar...to do what exactly? We need a relief line years ago!'
        },

        {
            word: 'Czechoslovakia',
            example: 'Czechoslovakia is a country in Europe.'
        },

        {
            word: 'chthononosology',
            example: 'Hey doctor C, can you please explain what chthononosology is?'
        },

        {
            word: 'cede',
            example: 'To cede power he gave his own seed, his precious cherry seeds.'
        },        

        {
            word: 'colenol',
            example: 'The Colenol was curious about the cat.'
        },

        {
            word: 'corps',
            example: 'The marine corps is an intense military unit.'
        },

        {
            word: 'cough',
            example: 'During the winter he developed a bad cough...on another note, how would you really spell out a cough with letters? Would it be something like "KFHFHHFF"?'
        },        

        {
            word: 'champagne',
            example: 'I shouldn\'t have fed the cat champagne.'
        }        
    ],    
    
    D: [
        {
            word: 'Djibouti',
            example: 'Djibouti is a country no one really knows where is located, until you refer to a map.'
        },

        {
            word: 'Double-U',
            example: 'The letter W is spelled like a pair of double U\'s...if you\'re curvy with it.'
        },

        {
            word: 'Django',
            example: 'Django Unchained was one heck of a movie.'
        }
    ],

    E: [
        {
            word: 'eye',
            example: 'I hurt my eye on the island.'
        },

        {
            word: 'Ex',
            example: 'Ex is being used as an example for the word E.'
        },

        {
            word: 'Euphrates',
            example: 'Euprates is a river, not an island.'
        },
        {
            word: 'euphoria',
            example: 'You could sense her euphoria beaming from her eyes.'
        }        
    ],    

    F: [
        {
            word: 'floccinaucinihilipilification',
            example: 'Ha, good luck explaining the word floccinaucinihilipilification to your kids, parents!'
        },
        {
            word: 'flummadiddle',
            example: 'the other example for the letter "F" is flummadiddle! That means its nnonsense!'
        }

    ],

    G: [
        {
            word: 'Gnarly',
            example: 'Before attempting a kick-flip, he said to himself "this is going to be gnarly!"'
        },
        {
            word: 'Gnome',
            example: 'The Gnome was going home.'
        },
        {
            word: 'Gnat',
            example: 'What\'s a gnat?'
        },
        {
            word: 'Gene',
            example: 'The student left his notes on genes in his jean jacket.'
        }                      
    ],

    H: [
        {
            word: 'hour',
            example: 'His pace was frantic as he was half-an-hour late.'
        },
        {
            word: 'honest',
            example: 'honestly, he didn\'t know where he had left his hat.'
        },
        {
            word: 'Heir',
            example: 'The heir to the throne was having his hair cut'
        },
        {
            word: 'Hor-D\'oeuvres',
            example: 'how many Hor-D\'oeuvres were served at the party only Henry knew.'
        },

        {
            word: 'Honor',
            example: 'His honor was earned on the battlefield.'
        }        
    ],

    I: [
            {
                word: 'Irk',
                example: 'It irked the parent that the example for "I" wasn\'t island...too bad so sad.'
            },
            {
                word: 'ichthyoacanthotoxism',
                example: 'ichthyoacanthotoxism is poisoning from the sting or bite of a fish, tell that to daddy next time he wants to go fishing!'
            }
        ],

    J: [
        {
            word: 'Jalapeno',
            example: 'The Jalapeno was just so juicy.'
        },
        {
            word: 'Jay',
            example: 'hey look a Blue Jay.'
        }
    ],    
    K: [
        {
            word: 'knick-knack',
            example: '"Knick-knack paddy wack" is a term I have no idea where it originaited from.'
        },
        {
            word: 'knife',
            example: 'The letter "k" in "kinfe" is silent, but wouldn\'t it be better if it wasn\'t? "Can you please pass the "kuh-nife".'
        },
        {
            word: 'knight',
            example: 'The knight knowingly rode off into the night'
        },
        {
            word: 'knowledge',
            example: 'have you aquired enough knowledge to know to differentiate the letter "K" from "C"?'
        },
        {
            word: 'knead',
            example: 'Knead the flour to make bread.'
        },
        {
            word: 'knee',
            example: 'Conlin Kapernick famously took a knee to protest the ongoing racial disparity for black Americans during an NFL game.'
        },
        {
            word: 'kneel',
            example: 'To become knighted one must kneel in front of the queen.'
        }
    ],    

    L: [
        {
            word: 'lumpenintelligentsia',
            example: 'Could you perhaps lump those in power as part of the lumpenintelligentsia.'
        },
        {
            word: 'lenitive',
            example: 'Bobby didn\'t realize he had accidentally taken daddy\'s medication a lentitve which is a laxative, and now the washroom looks like a warzone.'
        }


    ],

    M: [
        {
            word: 'mnemonic',
            example: 'mnemonicically the word "mneomic" might not have been the most memorable use of an example to the letter "m".'
        },
        {
            word: 'macropicide',
            example: 'Because of a wild origin story (which we won\'t get into) Timmy went to Australia to to train as a macropicide, a killer of kangaroos.'
        }
    ],

    N: [
        {
            word: 'Nuts',
            example: 'fine, here\'s a gimmie...nuts.'
        },
        {
            word: 'Napoo',
            example: 'To destroy would be to napoo, the act of destroying would then be refered to as napooing.'
        }
    ],

    O: [
        {
            word: 'Oh',
            example: '"Oh, that\'s a wierd flex, but okay", Oliver said.'
        },
        {
            word: 'Ouiji',
            example: 'Don\'t mess around with a Ouiji board kids.'
        },
        {
            word: 'Our',
            example: 'Our true savior to the American people, Thanks Obama!'
        },
        {
            word: 'One',
            example: 'one example of the letter "o" is the word "one", but it\'s also found in middle of the word "won".'
        }
    ],  

    P: [
        {
            word: 'Pea',
            example: 'like two peas in a pod.'
        },
        {
            word: 'Pneumonia',
            example: 'Peter caught Pneumonia during a pretty bad period in their past.'
        },
        {
            word: 'pterodactyl',
            example: 'nuff said.'
        },
        {
            word: 'Psychosis',
            example: 'Psychosis is a temporary loss of contact with reality.'
        },
        {
            word: 'Psychic',
            example: 'Guessing the word psychic before the word "Psychic" appears woud make you a psychic. Does this help you with the letter "P"?'
        },
        {
            word: 'Phlegm',
            example: 'The thick viscous substance secreted by the mucous membranes of the respiratory passages, especially when produced in excessive or abnormal quantities.'
        },
        {
            word: 'Prepos',
            example: 'That Prepos pop-up is pretty persistant.'            
        }
    ],    
    Q: [
        {
            word: 'Queue',
            example: 'The queue was quiet curious to quickly get their questions anwered on help cue.'
        },
        {
            word: 'Qatar',
            example: 'Quatar is quite hot.'
        },
        {
            word: 'quiche',
            example: 'Oh boy, that quiche was quite delicious!'
        }
    ],
    R: [
        {
            word: 'rhinotillexomania',
            example: 'The definition of rhinotillexomania when nose picking becomes a body-focused repetitive behavior or obsessive–compulsive disorder...Don\'t pick your nose so much Billy!'
        },
        {
            word: 'Representationalism',
            example: 'A doctrine that ideas rather than external objects are basis of knowledge.'
        }        
    ],
    
    S: [
        {
            word: 'Sea',
            example: 'You see the sea is seemingly enormous.'
        },
        {
            word: 'See',
            example: 'See that?'
        },
        {
            word: 'Shhh',
            example: '"shhh, I\'m trying to learn the alphabet".'
        }        
    ],  

    T: [
        {
            word: 'Tea',
            example: 'Thanks for the tea.'
        },
        {
            word: 'Tee',
            example: 'He his the tee at the top.'
        },
        {
            word: 'Tsunami',
            example: 'uhoh, watch out for that tsunami.'
        },
        {
            word: 'thistle',
            example: 'My bootcamp instructor has a wierd facisnation with the word thistle....trying saying that a thousand times.'
        },
        {
            word: 'thought',
            example: 'Here\'s a thought, you don\'t ever wash your hands. Your hands wash themselves while you stand there and watch.'
        }
    ], 
    U: [
        {
            word: 'urgent',
            example: 'You will urgently want to explain this one.'
        },
        {
            word: 'urn',
            example: 'Uma earned an urn, but not the one you\'re thinking about.'
        },
        {
            word: 'uber',
            example: 'Is Uber really all that ubiqitous anymore? Get a Lyft kids.'
        },
    ],

    V: [
        {
            word: 'Veal',
            example: 'I love me a veal sandwhich!'
        },
        {
            word: 'vagarian',
            example: 'A vagarian is a whimsical person!'
        }
    ],
    
    W: [
        {
            word: 'Wyoming',
            example: 'Why would you what to go to Wyoming? Serious question really, what\'s there?'
        },
        {
            word: 'Wren',
            example: 'A wren is a small, brownish passerine birds.'
        },
        {
            word: 'wrinkly',
            example: 'After getting wet, my wastebasket is now wrinkly'
        },
        {
            word: 'who',
            example: 'Who would use the word "who" as an example to the word "w"? We do!'
        },
        {
            word: 'why',
            example: 'Why is it that in English, the letter "w" is pronounced "double-you" while in French it is pronounced  "doo-bluh-vay" which literally means "double v"? Because confusion! I don\'t ever want to see you kids write your "w\'s" with sharp edges, it\'s not what the founding fathers of the English language envisioned!' 
        },
        {
            word: 'Writing',
            example: 'Writing the word "w" is not the same as saying "w".'
        }
    ],
    X: [
        {
            word: 'xenodocheionology',
            example: 'xenodocheionology...what?'
        },
        {
            word: 'Xena',
            example: 'XENA PRINCESS WARRIORRRRRR!!!!'
        },
    ],
    Y: [
        {
            word: 'You',
            example: '"Have you ever had a dream that you, um, you had, your, you- you could, you’ll do, you- you wants, you, you could do so, you- you’ll do, you could- you, you want, you want them to do you so much you could do anything?"'
        },
        {
            word: 'Yttrium',
            example: 'Yttrium is a chemical element with the letter "Y".'
        },
        {
            word: 'Yves',
            example: 'While thinking of a clever example, the brand Yves Rocher comes to mind...that\'s all.'
        },
        {
            word: 'write',
            example: 'Why write it out, when you will want to wave it off.'
        }
    ],
    Z: [
        {
            word: 'Zed',
            example: 'the letter "z" is pronounced like "Zed" in Canada, but in the U.S. its pronounced like "Zee"...on that note, what\'s up with the Metric system not being adopted by the U.S., we didn\'t have enough zealous people to convince them otherwise?? Jezzz!'
        },
        {
        word: 'Zesty',
        example: 'This steak needs to be more zesty...said no one ever.'
        }
    ]
};

const myApp = {};
// GLOBAL RANDOM FUNCTION DECLARATIONS

//creates a new array from the letters object
myApp.newLetterArray = Object.keys(letter);

myApp.randomLetter = myApp.newLetterArray[Math.floor(Math.random() * myApp.newLetterArray.length)];

// using the randomLetter to extract a random word
myApp.randomWord = letter[myApp.randomLetter];

// using the randomLetter to extract a random word
myApp.result = myApp.randomWord[Math.floor(Math.random() * myApp.randomWord.length)];

myApp.hideExample = $('.example').on('click', function (e) {

    $('.example-text').toggleClass('hidden');
    console.log('do something!'); $('.example-text').html(`<h2>${myApp.result.example}</h2>`);
});

myApp.hideExample = $('.example').on('click', function (e) {

    $('.user-example-text').toggleClass('hidden');
    console.log('global hide example');
});

// Document Ready
$(function () {
    ////This function will select a RANDOM LETTER/WORD
    //==========================================================
    
    // function when clicked will select a random letter
    $('.random').on('click', function () {

        $('.example').addClass('view');

        // get random letter from the chosen array
        myApp.randomLetter = myApp.newLetterArray[Math.floor(Math.random() * myApp.newLetterArray.length)];

        // using the randomLetter to extract a random word
        myApp.randomWord = letter[myApp.randomLetter];
        myApp.result = myApp.randomWord[Math.floor(Math.random() * myApp.randomWord.length)];
        
        $('.result').html(`<h2>Your random letter is...</h2> <h1>${myApp.randomLetter}</h1><h3>${myApp.randomLetter} is for "${myApp.result.word}"</h3><h4>Press again for a new letter!</h4>`);

        //once random letter is shown, show button for example
        $('.example-text').addClass('hidden');

        myApp.hideExample = $('.example').on('click', function (e) {
            $('.example-text').html(`<h2>${myApp.result.example}</h2>`);
        });

        $('.another-user-example').removeClass('view');
        $('.alphabet-button').addClass('hidden');
    });

////This function will go through the alphabet and get a random word from each letter array
//========================================================
// myApp.counter = 0;

$('.alphabet').on('click', function () {
    
    $('.alphabet-button').removeClass('hidden');

        // $('.alphabet-button').on('click', function () {

            for (let i = 0; i < myApp.newLetterArray.length; i++) {
                // this variable will grab each letter in the array in order  
                const currentLetter = myApp.newLetterArray[i];
                // console.log(currentLetter);

                //this gives us all random words from A-Z in an object
                const randomWord = letter[currentLetter][Math.floor(Math.random() * letter[currentLetter].length)];

                alert(`The letter ${currentLetter} is for ${randomWord.word}. ${randomWord.example}`);


                // $('.result').html(`<h1>${randomWord}</h1></strong> is for ${randomWord.word}, ${randomWord.example}`);
                     
                console.log(randomWord);
                // alert(randomWord);

        // });
            // removes example button from user choice once alphabet option is selected
            $('.another-user-example').removeClass('view');
        }  
    });
        
            //code below would add the entire alphabet to the html
            // $('.result').append(`<strong>${currentLetter}</strong> is for ${randomWord.word}. ${randomWord.example} `);




            // swal ({
            //     title: `The letter ${currentLetter} is for ${randomWord.word}`,
            //     text: `${randomWord.example}`,
            //     icon: "info",
            //     button: "Press me for the next letter in the Alphabet",
            // });
            // console.log(randomWord);
            // $('.result').html(`<h2>${randomWord}</h2><h3></h3><h4>Type in a new letter!</h4>`)
            // alphabetArray = [];
            // const ABC = [alphabetArray.push(randomWord)];
            
            // console.log(ABC);
     
        // $('.result').html(`<h2>${result.word}</h2><h3></h3><h4>Type in a new letter!</h4>`)
                    // $('.alphabet').click(function () {
                    //     $('.result').html(newLetterArray.pop());
                    // });

//==============================================================
// This function will accept a user's input (a letter and selects a random word generated from the letter array chosen)
// ============================================================

$('form').on('submit', function (e) {
        subApp = {};

        $('.example').addClass('view');
        //prevent default action of the form(refresh page)
        e.preventDefault();
        // Captures value of the form
        subApp.userInput = $('input').val();
        //If user input is lowercase letter changes to uppercase to to search for letter property (error handling)
         subApp.userLetter = subApp.userInput.toUpperCase();
        //set a predefined pattern to check later to handle unintended user input (number(s), more than 1 letter, special characters etc.)
        subApp.regexPattern = /^[a-zA-Z]{1}$/;
        subApp.regexCheck = subApp.regexPattern.exec(subApp.userLetter);
        subApp.userChoice = letter[subApp.userLetter];
        //if the user input meets the specific requirements only then run the function of output
        if (subApp.userLetter !== '' && subApp.regexCheck !== null) {
            //resets the input field to blank once letter choice has been made
            $('input[type=text]').val('');
            //selects a random word in the specified word array from user
            subApp.result = subApp.userChoice[Math.floor(Math.random() * subApp.userChoice.length)];
            // outputs to the DOM the results as well as the example
            $('.result').html(`<h2>You choose the letter...</h2><h1>${subApp.userLetter}</h1><h3><strong>${subApp.userLetter}</strong> is for "${subApp.result.word}".`)
            
            
            subApp.hideExample = $('.example').on('click', function (e) {
                $('.user-example-text').toggleClass('hidden');
                $('.example-text').html(`<h2>${subApp.result.example}</h2>`);
            });
            
            $('.example-text').addClass('hidden');

            //if the user inputs an invalid character(s) then  message will appear to warn user to try again
            } else {
                $('.result').html(`<h2>Sorry that's not a valid response...Please type in only one letter!</h2>`)
                alert(`Sorry that's not a valid response...Please type in only one letter!`)
            }        
            //adds the div to give user option to select another word from the same intial letter
            $('.another-user-example').addClass('view');
        
                nextExample = $('.another-user-example').on('click', function (e) {

                // gets a different Word
                subApp.anotherOne = subApp.userChoice[Math.floor(Math.random() * subApp.userChoice.length)]

                    $('.result').html(`<h1>${subApp.userLetter}</h1><h3>Another word for "${subApp.userLetter}" is ${subApp.anotherOne.word}. </h3>`);

                subApp.hideExample = $('.example').on('click', function (e) {
                    $('.user-example-text').toggleClass('hidden');
                    $('.example-text').html(`<h2>${subApp.anotherOne.example}</h2>`);
                });

                $('.example-text').addClass('hidden');
                $('.alphabet-button').addClass('hidden');
                
            });
        });
    });
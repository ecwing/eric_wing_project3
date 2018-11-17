// Ideas?

// Add optional click button for music so its not in your face annoying 
// level 2: optional click option for SFX; --> ADD SFX to each button click 

// add smooth scroll, on button/submit move to next section

// animations to button clicks and final end result
    // create an option where a user can select a random word instead of one of their choice   



// 1. Option 1: User input a value (must be a letter from A-Z) Program will spit out a random word that starts with that letter
// 2. Option 2: Program will spit out any random letter and any random word
// 3. iterate through the entire alphabet grabbing a random word for each

// Creates an letter object containing an array of all 24 letters in the alphabet which contains within it objects of different words and their examples as their key value pairs
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
            example: 'Toronto is hiring a Transit Czar...to do what exactly? Where was this years ago? We needed that relief line years ago! Crazy...'
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
            example: 'To cede power he gave his own seed, his precious cherry seeds'
        },        

        {
            word: 'colenol',
            example: 'The Colenol was curious about the cat'
        },

        {
            word: 'corps',
            example: 'The marine corps is an intense military unit.'
        },

        {
            word: 'cough',
            example: 'During the winter he developed a bad cough...on another note, how would one spell out the most average vocalization of a cough with letters? Would it be something like "KFHFHHFFKHFH"....that\'s my take'
        },        

        {
            word: 'champagne',
            example: 'I shouldn\'t have fed the cat champagne'
        }        
    ],    
    
    D: [
        {
            word: 'Djibouti',
            example: 'Djibouti is a country no one really knows where is located'
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
            example: 'Ex is being used as an example for the word E'
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
            example: 'The student left his notes on genes in his jean jacket pocket'
        }                      
    ],

    H: [
        {
            word: 'hour',
            example: 'His pace was hectic as he was half an hour late'
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
            example: '"Is it honor or Honour, your Honor"'
        }        
    ],

    I: [
            {
                word: 'Irk',
                example: 'It irked the parent that the example for I wasn\'t island...too bad so sad.'
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
            example: 'Knead the bread'
        },
        {
            word: 'knee',
            example: 'Conlin Kapernick famously took a knee to protest the ongoing racial disparity for black Americans during an NFL game'
        },
        {
            word: 'kneel',
            example: 'To become knighted one must kneel in front of the queen'
        }
    ],    

    L: [
        {
            word: 'lumpenintelligentsia',
            example: 'Could you perhaps lump those in power as part of the lumpenintelligentsia'
        },
        {
            word: 'lenitive',
            example: 'Bobby didn\'t realize he had accidentally taken daddy\'s medication a lentitve which is a laxative, and now the washroom looks like a warzone.'
        }


    ],

    M: [
        {
            word: 'mnemonic',
            example: 'mnemonicically the word "mneomic" might not have been the most memorable use of an example to the letter "m"'
        },
        {
            word: 'macropicide',
            example: 'Because of a wild origin story (which we won\'t get into) Timmy went to Australia to to train as a macropicide, a killer of kangaroos.'
        }
    ],

    N: [
        {
            word: 'Nut',
            example: 'fine, here\'s a gimmie...nuts'
        },
        {
            word: 'Napoo',
            example: 'To destroy would be to napoo, the act of destroying would then be refered to as napooing...parents this is a real word.'
        }
    ],

    O: [
        {
            word: 'Oh',
            example: '"Oh, that\'s a wierd flex, but okay", Oliver said'
        },
        {
            word: 'Ouiji',
            example: 'Don\'t mess around with a Ouiji board kids'
        },
        {
            word: 'Our',
            example: 'Our true savior to the American People,Thanks Obama!'
        },
        {
            word: 'One',
            example: 'one example of the letter "o" is the word "one", but it\'s also found in middle of the word "won"'
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
            example: ''
        },
        {
            word: 'Psychic',
            example: 'Guessing the word psychic before the word "Psychic" appears woud make you a psychic. Does this help you with the letter "P"?'
        },
        {
            word: 'Phlegm',
            example: ''
        },
        {
            word: 'Prepos',
            example: 'That Prepos pop-up is pretty persistant.'            
        }
    ],    
    Q: [
        {
            word: 'Queue',
            example: 'The queue was quiet curious to quickly get their questions anwered on help cue'
        },
        {
            word: 'Qatar',
            example: 'Quatar is quite hot'
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
        }
    ],
    
    S: [
        {
            word: 'Sea',
            example: 'You see the sea is seemingly enormous'
        },
        {
            word: 'See',
            example: 'See that?'
        },
        {
            word: 'Shhh',
            example: '"shhh, I\'m trying to learn the alphabet"'
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
            example: 'Kids, think of a baby calf...parents you can explain the rest.'
        }
    ],
    
    W: [
        {
            word: 'Wyoming',
            example: 'Why would you what to go to Wyoming? Serious question really, what\'s there?'
        },
        {
            word: 'Wren',
            example: ''
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
        }
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
            example: 'Why write it out, when you will want to wave it off'
        }
    ],
    Z: [
        {
            word: 'Zed',
            example: 'the letter "z" is pronounced like "Zed" in Canada, but in the U.S. its pronounced like "Zee"...on that note, what\'s up with the Metric system not being adopted by the U.S., we didn\'t have enough zealous people to convince them otherwise?? Jeeeeeezzzzzzz!'
        },
    ]
};

// Document Ready
$(function () {

    const myApp = {};
    

////This function will select a random letter for the user and a random word to go along with it
// =================================================================

    // function when clicked will select a random letter
    $('.random').on('click', function () {

        //creates a new array from the letters object
        const newLetterArray = Object.keys(letter);

        // get random letter from the chosen array
        const randomLetter = newLetterArray[Math.floor(Math.random() * newLetterArray.length)];

        // using the randomLetter to extract a random word
        const randomWord = letter[randomLetter];
        const result = randomWord[Math.floor(Math.random() * randomWord.length)];

        // console.log(result);

        $('.result').html(`<h2>Your random letter is ${randomLetter}.</h2> <h3>${randomLetter} is for "${result.word}". ${result.example}</h3><h4>Type in a new letter!</h4>`);
    });

    // function doStuff(thing) {
        // TODO: finish this function
        // return;
    // };

////This function will go through the alphabet and get a random word from each letter array
//==============================================================================

//creates a new array from the letters object (MAKE DRY)
const newLetterArray = Object.keys(letter);

    // console.log(newLetterArray);

// $('.alphabet').on('click', function () {
    
//     for (let i = 0; i < currentLetter.length; i++) {

//     }
// });






// $('.alphabet').on('click', function () {

    
//     for (let i = 0; i < newLetterArray.length; i++) {
//         // will show letters in order

//         const letterInOrder = newLetterArray[i];
//         alert(letterInOrder);

//     }
// });




$('.alphabet').on('click', function () {
    


    //creates a new array from the letters object (MAKE DRY)
        const newLetterArray = Object.keys(letter);

        for (let i = 0; i < newLetterArray.length; i++) {
            // this variable will grab each letter in the array in order 
            const currentLetter = newLetterArray[i];
            //this gives us all random words from A-Z
            const randomWord = letter[currentLetter][Math.floor(Math.random() * letter[currentLetter].length)];
           
            alert(`${randomWord.word}. ${randomWord.example}`);

        }  
    });



            // console.log(randomWord);
            // $('.result').html(`<h2>${randomWord}</h2><h3></h3><h4>Type in a new letter!</h4>`)
            // alphabetArray = [];
            // const ABC = [alphabetArray.push(randomWord)];
            
            // console.log(ABC);
            
           
        // $('.result').html(`<h2>${result.word}</h2><h3></h3><h4>Type in a new letter!</h4>`)
                    // $('.alphabet').click(function () {
                    //     $('.result').html(newLetterArray.pop());
                    // });

 

//================================================================
// This function will accept a user's input (a letter and selects a random word generated from the letter array chosen)
// ===================================================================
    $('form').on('submit', function (e) {
        //prevent default action of the form(refresh page)
        e.preventDefault();
        // Captures value of the form
        const userInput = $('input').val();
        //If user input is lowercase letter changes to uppercase (error handling)
        const userLetter = userInput.toUpperCase();
        //set a predefined pattern to check later to handle unintended user input (number(s), more than 1 letter, special characters etc.)
        const regexPattern = /^[a-zA-Z]{1}$/;
        const regexCheck = regexPattern.exec(userLetter);
        const userChoice = letter[userLetter];
        //if the user input meets the specific requirements only then run the function of output
        if (userLetter !== '' && regexCheck !== null) {
            //resets the input field to blank once letter choice has been made
            $('input[type=text]').val('');
            //selects a random word in the specified word array from user
            const result = userChoice[Math.floor(Math.random() * userChoice.length)];
            // outputs to the DOM the results as well as the example
            $('.result').html(`<h2>You choose the letter ${userLetter}.</h2><h3><strong>${userLetter}</strong> is for "${result.word}". ${result.example}</h3><h4>Type in a new letter!</h4>`)
        //if the user inputs an invalid character(s) then default message will appear to warn user to try again
        } else {
            $('.result').html(`<h2>Sorry that's not a valid response...Please type in only one letter!</h3>`)
            alert(`Sorry that's not a valid response...Please type in only one letter!`)
        }        
    });
});


























// const questions = [
//     ['How many weeks in the HackerYou Bootcamp?', 9],
//     ['How many projects total', 7],
//     ['How many questions in this quiz including this one so far?', 3]
// ];
// var correctAnswers = 0;
// var question;
// var answer;
// var response;


// $(function () {

// function print(message) {
//     document.write(message);
// }

// for (let i = 0; i < questions.length; i++) {
//     question = questions[i][0];
//     answer = questions[i][1];
//     response = prompt(question);
//     response = parseInt(response);
//     if (response === answer) {
//         correctAnswers += 1;
//     }
// }

// html = "You got " + correctAnswers + " question(s) right out of " + questions.length + " questions."
// print(html);

// });

// $('h1').on('click', function (e) {
//     e.preventDefault();

//     $('h1').text('New h1 TEXT!!!');

// })


// });

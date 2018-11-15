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
            example: 'Toronto is hiring a Transit Czar.'
        },

        {
            word: 'Czechoslovakia',
            example: 'Czechoslovakia is a country in Europe.'
        },

        {
            word: 'chthononosology',
            example: 'Are the Argyle shirts down the aisle?'
        },

        {
            word: 'cede',
            example: 'Are the Argyle shirts down the aisle?'
        },        

        {
            word: 'colenol',
            example: 'Aresenic is poisonous?'
        },

        {
            word: 'corps',
            example: 'Aresenic is poisonous?'
        },

        {
            word: 'cough',
            example: 'Aresenic is poisonous?'
        },        

        {
            word: 'champagne',
            example: 'Aresenic is poisonous?'
        }        
    ],    
    
    D: [
        {
            word: 'Djibouti',
            example: 'It was their cue to see it through'
        },

        {
            word: 'Double-U',
            example: 'The letter W is spelled like a pair of double U\'s'
        },

        {
            word: 'Django',
            example: 'Django Unchained was one heck of a movie'
        }
    ],

    E: [
        {
            word: 'eye',
            example: 'I hurt my eye on the island'
        },

        {
            word: 'Ex',
            example: 'Ex'
        },

        {
            word: 'Euphrates',
            example: 'Euprates is a river'
        },
        {
            word: 'euphoria',
            example: 'You could sense her euphoria beaming from her eyes'
        }        
    ],    

    F: [
        {
            word: '',
            example: ''
        }
    ],

    G: [
        {
            word: 'Gnarly',
            example: ''
        },
        {
            word: 'Gnome',
            example: ''
        },
        {
            word: 'Gnat',
            example: ''
        },
        {
            word: 'Gene',
            example: ''
        }                      
    ],

    H: [
        {
            word: 'hour',
            example: ''
        },
        {
            word: 'honest',
            example: ''
        },
        {
            word: 'Heir',
            example: ''
        },
        {
            word: 'Hor-D\'oeuvres',
            example: ''
        },

        {
            word: 'Honor',
            example: ''
        }        
    ],

    I: [
            {
                word: 'Irk',
                example: ''
            }
        ],

    J: [
        {
            word: 'Jalapeno',
            example: ''
        },
        {
            word: 'Jay',
            example: ''
        }
    ],    
    K: [
        {
            word: 'knick-knack',
            example: ''
        },
        {
            word: 'knife',
            example: ''
        },
        {
            word: 'knight',
            example: ''
        },
        {
            word: 'knowledge',
            example: ''
        },
        {
            word: 'knead',
            example: ''
        },
        {
            word: 'knee',
            example: ''
        },
        {
            word: 'kneel',
            example: ''
        }
    ],    

    L: [
        {
            word: '',
            example: ''
        }
    ],

    M: [
        {
            word: 'mnemonic',
            example: ''
        }
    ],

    N: [
        {
            word: '',
            example: ''
        }
    ],

    O: [
        {
            word: 'Oh',
            example: ''
        },
        {
            word: 'Ouiji',
            example: ''
        },
        {
            word: 'Our',
            example: ''
        },
        {
            word: 'One',
            example: ''
        }
    ],  

    P: [
        {
            word: 'Pea',
            example: ''
        },
        {
            word: 'Pneumonia',
            example: ''
        },
        {
            word: 'pterodactyl',
            example: ''
        },
        {
            word: 'Psychosis',
            example: ''
        },
        {
            word: 'Psychic',
            example: ''
        },
        {
            word: 'Phlegm',
            example: ''
        }
    ],    
    Q: [
        {
            word: 'Queue',
            example: ''
        },
        {
            word: 'Qatar',
            example: ''
        },
        {
            word: 'quiche',
            example: ''
        }
    ],
    R: [
        {
            word: '',
            example: ''
        }
    ],
    
    S: [
        {
            word: 'Sea',
            example: ''
        },
        {
            word: 'See',
            example: ''
        },
        {
            word: 'Shhh',
            example: ''
        }        
    ],  

    T: [
        {
            word: 'Tea',
            example: ''
        },
        {
            word: 'Tee',
            example: ''
        },
        {
            word: 'Tsunami',
            example: ''
        },
        {
            word: 'thistle',
            example: ''
        },
        {
            word: 'thought',
            example: ''
        }
    ], 
    U: [
        {
            word: 'urgent',
            example: ''
        },
        {
            word: 'urn',
            example: ''
        },
        {
            word: 'uber',
            example: ''
        },
    ],

    V: [
        {
            word: '',
            example: ''
        }
    ],
    
    W: [
        {
            word: 'Wren',
            example: ''
        },
        {
            word: 'wrinkly',
            example: ''
        },
        {
            word: 'who',
            example: ''
        },
        {
            word: 'why',
            example: ''
        },
        {
            word: 'Writing',
            example: ''
        }
    ],
    X: [
        {
            word: 'xenodocheionology',
            example: ''
        }
    ],
    Y: [
        {
            word: 'Wyoming',
            example: ''
        },
        {
            word: 'You',
            example: ''
        },
        {
            word: 'Yttrium',
            example: ''
        },
        {
            word: 'Yves',
            example: ''
        },
        {
            word: 'write',
            example: ''
        }
    ],
    Z: [
        {
            word: 'Zed',
            example: ''
        },
    ]
};

$(function () {

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
            $('.result').html(`<h2>You choose the letter ${userLetter}.</h2><h3><strong>${userLetter}</strong> is for "${result.word}". ${result.example}</h3><h4>Press the button again for another example or type in a new letter!</h4>`)
        //if the user inputs an invalid character(s) then default message will appear to warn user to try again
        } else {
            $('.result').html(`<h2>Sorry that's not a valid response...Please type in one only letter!</h3>`)
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

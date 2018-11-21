const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the 'official' Konami Code sequence
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function (e) {
    // get the value of the key code from the key map
    let key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    let requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {

    console.log('A - Alfa, B - Bravo, C - Charlie, D - Delta, E - Echo, F - Foxtrot, G - Golf, H - Hotel, I - India, J - Juliett, K -Kilo, L - Lima,M - Mike,N - November,O - Oscar,P - Papa, Q - Quebec,R - Romeo, S - Sierra, T - Tango, U - Uniform, V - Victor, W - Whiskey, X - X-ray, Y - Yankee, Z - Zulu');
}

//code credited to w.stoettinger from stackOverflow answer at https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
//Initialize
M.AutoInit();

// GET UI Elements
const rot13input = document.querySelector("#rot13");
const rot13encbtn = document.querySelector('#rot13enc');
const rot13decbtn = document.querySelector('#rot13dec');
const rot13output = document.querySelector('#rot13result');
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "];

// Declare functions
const rot13encrypt = (text) => {
  let output = "";
  let textArray = Array.from(text.toUpperCase());
  textArray.forEach((letter, textindex, array) => {
    index = alphabets.indexOf(letter);
    newIndex = index === 26 ? 26: (index + 13) % 26;
    console.log(`${letter} is ${index} to be replaced by ${alphabets[newIndex]} which is ${newIndex}`);
    output += alphabets[newIndex];
    
  })
  rot13output.textContent = output;
};
rot13encbtn.addEventListener('click', ()=>{
  M.toast({ html: `Message Encrypted` });
  rot13encrypt(rot13input.value);
});
rot13decbtn.addEventListener('click', ()=>{
  M.toast({ html: `Message Decrypted` });
  rot13encrypt(rot13input.value);
});
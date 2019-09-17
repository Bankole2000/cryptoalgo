//Initialize
M.AutoInit();
const textregex = /^[a-zA-Z\s]*$/;

// GET UI Elements
const rot13input = document.querySelector("#rot13");
const rot13encbtn = document.querySelector('#rot13enc');
const rot13decbtn = document.querySelector('#rot13dec');
const rot13output = document.querySelector('#rot13result');
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "];

// Declare functions
const flagIfInvalid = (isValid, target) => {
    isValid? markAsValid(target): markAsInvalid(target);
};

const markAsValid = (target) => {
  target.classList.add('valid'); 
  target.classList.remove('invalid');
}

const markAsInvalid = (target) => {
  target.classList.remove('valid'); 
  target.classList.add('invalid');
}

const unMark = (target) => {
  target.classList.remove('valid');
  target.classList.remove('invalid');
}

$(document).on('focusin',`#rot3input`,function(){unmark(this)});

const rot13encrypt = (text, task) => {
  let output = "";
  let textArray = Array.from(text.toUpperCase());
  textArray.forEach((letter, textindex, array) => {
    index = alphabets.indexOf(letter);
    newIndex = index === 26 ? 26: (index + 13) % 26;
    console.log(`${letter} is ${index} to be replaced by ${alphabets[newIndex]} which is ${newIndex}`);
    output += alphabets[newIndex];
    
  })
  rot13output.textContent = output;
  M.toast({ html: `Message ${task}ed`, classes: 'success' });
};
rot13encbtn.addEventListener('click', ()=>{
  isValid = rot13input.value !== "" && textregex.test(rot13input.value) ? true: false;
  flagIfInvalid(isValid, rot13input);
  isValid ? rot13encrypt(rot13input.value, "Encrypt"): M.toast({ html: `Text is Invalid`, classes: "error" });
});
rot13decbtn.addEventListener('click', ()=>{
  isValid = rot13input.value !== "" && textregex.test(rot13input.value) ? true: false;
  flagIfInvalid(isValid, rot13input);
  isValid ? rot13encrypt(rot13input.value, "Decrypt"): M.toast({ html: `Text is Invalid`, classes: "error" });
});
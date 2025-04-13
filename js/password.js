const charactersInput = document.getElementById("charactersInput");
const btnPassGen = document.getElementById("btnPassGen");
const result = document.getElementById("result");
    
    let charactersValue = 0;
    
    charactersInput.addEventListener("change", () => {
      charactersValue = parseInt(charactersInput.value);
    
      if (charactersValue < 12 || charactersValue > 50) {
        alert("El valor debe estar entre 12 y 50 caracteres.");
        charactersInput.value = "";
        charactersValue = 0;
        return;
      }
    });
    
    btnPassGen.addEventListener("click", () => {
      if (charactersValue < 12 || charactersValue > 50) {
        result.innerText = "Introduce una longitud válida primero.";
        return;
      }
    
      const password = buildPassword(charactersValue);
      result.innerText = password;
    });
    
    function buildPassword(length) {
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";
const todos = mayusculas + minusculas + numeros + simbolos;
    
      let password = "";
    
      password += getRandomChar(mayusculas);
      password += getRandomChar(minusculas);
      password += getRandomChar(numeros);
      password += getRandomChar(simbolos);
    
      while (password.length < length) {
        password += getRandomChar(todos);
      }
    
      password = shuffle(password);
      return password;
    }
    
    function getRandomChar(charSet) {
      const index = Math.floor(Math.random() * charSet.length);
      return charSet.charAt(index);
    }
    
    function shuffle(str) {
      const arr = str.split("");
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr.join("");
    }
    
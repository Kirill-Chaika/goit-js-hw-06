

const refs = {
    nameInput:  document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
        
    
    };
    refs.nameInput.addEventListener("input", (evt) => 
        evt.target.value != ""
        ? (refs.nameOutput.textContent = evt.target.value)
        : (refs.nameOutput.textContent = "Anonymous")
    );


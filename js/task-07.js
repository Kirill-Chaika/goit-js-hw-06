


const inputRange = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = inputRange.value + 'px'

const textRange = () => {
    onText.style.fontSize = `${inputRange.value}px`
};

inputRange.addEventListener('input', textRange)

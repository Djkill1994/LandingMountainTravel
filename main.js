const SLIDER_INDICATOR = document.querySelector('.slider-indicator');
const SCROLL_OPERATORS = document.querySelector('.slider-text');

function scroll(event) {
    const INPUT_VALUE = event.target.innerHTML
    if (INPUT_VALUE === '01') {
        SLIDER_INDICATOR.style.top = '390px';
    } else if (INPUT_VALUE === '02') {
        SLIDER_INDICATOR.style.top = '445px';
    } else if (INPUT_VALUE === '03') {
        SLIDER_INDICATOR.style.top = '505px';
    } else if (INPUT_VALUE === 'Start') {
        SLIDER_INDICATOR.style.top = '326px';
    }
}

SCROLL_OPERATORS.addEventListener('click', scroll)

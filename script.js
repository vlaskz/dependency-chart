window.onload = changeText('lap0015', 'General Physics I')

function changeText(subject, name) {
    document.querySelector(`#${subject} > .name`).innerHTML = name;
    console.log('OK!')
}
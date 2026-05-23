function changeListColor(pickerId, cssVar) {
    const color = document.getElementById(pickerId).value;
    document.documentElement.style.setProperty(cssVar, color);
}

document.getElementById('olBtn').addEventListener('click', () => {
    changeListColor('olColor', '--ol-color');
});

document.getElementById('ulBtn').addEventListener('click', () => {
    changeListColor('ulColor', '--ul-color');
});

document.getElementById('dlBtn').addEventListener('click', () => {
    changeListColor('dlColor', '--dl-color');
});
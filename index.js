function init() {
    const container = document.getElementById('component');
    const testElement = document.createElement('div');
    testElement.style.visibility = 'hidden';
    testElement.style.height = 'auto';
    testElement.style.width = 'auto';
    testElement.style.whiteSpace = 'nowrap';
    testElement.style.position = 'absolute';
    container.appendChild(testElement);

    const mask = document.getElementById('mask');
    mask.style.position = 'absolute';
    mask.style.fontSize = '1em';
    mask.addEventListener('click', function(e) {
        mask.style.display = 'none';
        input.style.display = 'block';
        const position = getPositionInText(e.clientX, input.value);
        input.setSelectionRange(position, position);
        input.focus();
    });

    const input = document.getElementById('input');
    input.style.position = 'absolute';
    input.style.fontSize = '1em';
    input.style.padding = 0;
    input.style.border = 0;
    input.addEventListener('blur', hideEditor);

    function hideEditor() {
        input.style.display = 'none';
        mask.style.display = 'block';
        mask.innerText = input.value;
    }

    function getPositionInText(position, text) {
        for (let i = 0; i < text.length; i += 1) {
            testElement.innerText = text.substring(0, i);
            if (testElement.clientWidth > position) {
                return i - 1;
            }
        }
        return text.length;
    }

    hideEditor();
}

window.addEventListener('load', function() {
    init();
});
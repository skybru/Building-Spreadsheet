window.onload = () => {
    const container = document.getElementById("container");

    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };

    const letters = charRange("A", "J");
    letters.forEach(createLabel);

    range(1, 99).forEach(number => {
        createLabel(number);

        letters.forEach(letter => {
            const input = document.createElement("input");
            input.type = "text";
            input.id = letter+number;
        });
    });
};

const range = (start, end) => Array(end - start + 1).fill(start).map((item, index) => item + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));
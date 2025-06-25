"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

const selectElement = document.getElementById('items');

// Llenar el select con los nombres y valores de los ítems
Object.entries(itemData).forEach(([key, item]) => {
    const option = document.createElement('option');
    option.text = item.name;
    option.value = key;
    selectElement.add(option);
});

// Referencias a los elementos del DOM
const imageElement = document.getElementById('displayImage');
const photographerInput = document.getElementById('photographer');
const descriptionInput = document.getElementById('description');
const scoreInput = document.getElementById('score');

// Referencias a los botones
const increaseBtn = document.getElementById('increaseScore');
const decreaseBtn = document.getElementById('decreaseScore');

// Función para actualizar los campos
function updateFields(item) {
    imageElement.src = item.image;
    photographerInput.value = item.photographer;
    descriptionInput.value = item.description;
    scoreInput.value = item.score;
}

// Función para obtener el ítem seleccionado
function getSelectedKey() {
    return selectElement.value;
}

// Aumentar puntaje
increaseBtn.addEventListener('click', function () {
    const key = getSelectedKey();
    if (itemData[key]) {
        itemData[key].score += 1;
        updateFields(itemData[key]);
    }
});

// Disminuir puntaje
decreaseBtn.addEventListener('click', function () {
    const key = getSelectedKey();
    if (itemData[key]) {
        itemData[key].score -= 1;
        updateFields(itemData[key]);
    }
});

// Evento al cambiar la selección
selectElement.addEventListener('change', function () {
    const selectedKey = this.value;
    if (itemData[selectedKey]) {
        updateFields(itemData[selectedKey]);
    }
});
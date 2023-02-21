const URL = 'http://localhost:8080/api/items';

async function addItem(text) {
    return await fetch(URL, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({text: text})
    })

        .then(response => response.json())
        .catch(errorMessage => console.error(errorMessage));
}


async function getAllItems() {
    return await fetch(URL, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })

        .then(response => response.json())
        .catch(errorMessage => console.error(errorMessage));
}


async function deleteItem(id) {
    return await fetch(`${URL}/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })

        .then(response => response.json())
        .catch(errorMessage => console.error(errorMessage));
}

async function editItem(id) {
    return await fetch(`${URL}/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    })
        .then(response => response.json())
        .catch(errorMessage => console.error(errorMessage));
}

export default {
    add: addItem,
    getAll: getAllItems,
    delete: deleteItem,
    edit: editItem
};
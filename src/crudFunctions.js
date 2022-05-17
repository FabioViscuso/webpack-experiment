function deleteDataFromServer(keyValue) {
    fetch("https://stark-badlands-10001.herokuapp.com/data", {
        method: "delete",
        body: JSON.stringify({ key: keyValue }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
}

function getDataFromServer() {
    fetch("https://stark-badlands-10001.herokuapp.com/data")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
}

export { deleteDataFromServer, getDataFromServer };
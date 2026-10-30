const resultDiv = document.getElementById("result");

/*
  Why JSON.stringify() and Content-Type header are needed:
  - The body of a request must be a string when sending data.
  - JSON.stringify() converts a JavaScript object into a JSON string.
  - The Content-Type: application/json header tells the server that the
    body contains JSON data so it can parse it correctly.
*/

async function apiRequest(url, method, body = null) {
    const options = {
        method: method,
        headers: {}
    };

    if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    console.log(method + " Status:", response.status);

    let data = null;
    try {
        data = await response.json();
    } catch (e) {
        data = null;
    }

    return { status: response.status, ok: response.ok, data: data };
}

document.getElementById("postForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const userId = Number(document.getElementById("userId").value);

    try {
        const result = await apiRequest(
            "https://jsonplaceholder.typicode.com/posts",
            "POST",
            { title, body, userId }
        );

        resultDiv.textContent = "POST Response\nStatus: " + result.status +
            "\nReturned ID: " + (result.data ? result.data.id : "N/A") +
            "\n\n" + JSON.stringify(result.data, null, 2);
    } catch (error) {
        resultDiv.textContent = "Error: " + error.message;
    }
});

document.getElementById("putBtn").addEventListener("click", async function() {
    try {
        const result = await apiRequest(
            "https://jsonplaceholder.typicode.com/posts/1",
            "PUT",
            {
                id: 1,
                title: "Fully Updated Title",
                body: "This is a complete replacement using PUT.",
                userId: 1
            }
        );

        resultDiv.textContent = "PUT Response\nStatus: " + result.status +
            "\n\n" + JSON.stringify(result.data, null, 2);
    } catch (error) {
        resultDiv.textContent = "Error: " + error.message;
    }
});

document.getElementById("patchBtn").addEventListener("click", async function() {
    try {
        const result = await apiRequest(
            "https://jsonplaceholder.typicode.com/posts/1",
            "PATCH",
            { title: "Only Title Updated with PATCH" }
        );

        resultDiv.textContent = "PATCH Response\nStatus: " + result.status +
            "\n\n" + JSON.stringify(result.data, null, 2);
    } catch (error) {
        resultDiv.textContent = "Error: " + error.message;
    }
});

document.getElementById("deleteBtn").addEventListener("click", async function() {
    try {
        const result = await apiRequest(
            "https://jsonplaceholder.typicode.com/posts/1",
            "DELETE"
        );

        resultDiv.textContent = "DELETE Response\nStatus: " + result.status +
            "\n\n" + JSON.stringify(result.data, null, 2);
    } catch (error) {
        resultDiv.textContent = "Error: " + error.message;
    }
});
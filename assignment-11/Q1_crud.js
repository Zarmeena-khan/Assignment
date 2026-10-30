const API_URL = "https://jsonplaceholder.typicode.com/posts";
let posts = [];

const postsContainer = document.getElementById("postsContainer");
const messageDiv = document.getElementById("message");
const addPostForm = document.getElementById("addPostForm");
const reloadBtn = document.getElementById("reloadBtn");

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = type;
}

function renderPosts() {
    postsContainer.innerHTML = "";
    posts.forEach(function(post) {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `
            <div class="post-meta">Post ID: ${post.id} · User ID: ${post.userId}</div>
            <h3>${post.title}</h3>
            <p class="post-body">${post.body}</p>
            <div class="card-actions">
                <button class="btn-put" onclick="updateFullPost(${post.id})">PUT full update</button>
                <button class="btn-patch" onclick="patchTitle(${post.id})">PATCH title</button>
                <button class="btn-delete" onclick="deletePost(${post.id})">DELETE</button>
            </div>
        `;
        postsContainer.appendChild(card);
    });
}

async function loadPosts() {
    showMessage("Loading posts...", "loading");
    try {
        const response = await fetch(API_URL + "?_limit=6");
        console.log("GET Status:", response.status);

        if (!response.ok) {
            throw new Error("Failed to load posts. Status: " + response.status);
        }

        posts = await response.json();
        renderPosts();
        showMessage("GET successful! Posts loaded. Check the console for response status " + response.status + ".", "success");
    } catch (error) {
        showMessage("Error: " + error.message, "error");
        console.error(error);
    }
}

addPostForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const userId = Number(document.getElementById("userId").value);
    const body = document.getElementById("body").value;

    showMessage("Sending POST request...", "loading");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, body, userId })
        });

        console.log("POST Status:", response.status);

        if (!response.ok) {
            throw new Error("POST failed. Status: " + response.status);
        }

        const newPost = await response.json();
        posts.unshift(newPost);
        renderPosts();
        showMessage("POST successful! New post added (ID: " + newPost.id + "). Status: " + response.status, "success");
        addPostForm.reset();
        document.getElementById("userId").value = 1;
    } catch (error) {
        showMessage("Error: " + error.message, "error");
        console.error(error);
    }
});

async function updateFullPost(id) {
    showMessage("Sending PUT request...", "loading");
    try {
        const response = await fetch(API_URL + "/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                title: "Updated Title (PUT)",
                body: "This post was fully updated using PUT method.",
                userId: 1
            })
        });

        console.log("PUT Status:", response.status);

        if (!response.ok) throw new Error("PUT failed. Status: " + response.status);

        const updated = await response.json();
        const index = posts.findIndex(p => p.id === id);
        if (index !== -1) {
            posts[index] = updated;
            renderPosts();
        }
        showMessage("PUT successful! Post fully updated. Status: " + response.status, "success");
    } catch (error) {
        showMessage("Error: " + error.message, "error");
    }
}

async function patchTitle(id) {
    showMessage("Sending PATCH request...", "loading");
    try {
        const response = await fetch(API_URL + "/" + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "Patched Title Only" })
        });

        console.log("PATCH Status:", response.status);

        if (!response.ok) throw new Error("PATCH failed. Status: " + response.status);

        const updated = await response.json();
        const index = posts.findIndex(p => p.id === id);
        if (index !== -1) {
            posts[index].title = updated.title;
            renderPosts();
        }
        showMessage("PATCH successful! Only title updated. Status: " + response.status, "success");
    } catch (error) {
        showMessage("Error: " + error.message, "error");
    }
}

async function deletePost(id) {
    showMessage("Sending DELETE request...", "loading");
    try {
        const response = await fetch(API_URL + "/" + id, {
            method: "DELETE"
        });

        console.log("DELETE Status:", response.status);

        if (!response.ok) throw new Error("DELETE failed. Status: " + response.status);

        posts = posts.filter(p => p.id !== id);
        renderPosts();
        showMessage("DELETE successful! Post removed. Status: " + response.status, "success");
    } catch (error) {
        showMessage("Error: " + error.message, "error");
    }
}

reloadBtn.addEventListener("click", loadPosts);
loadPosts();
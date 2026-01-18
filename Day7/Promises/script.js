const userButtons = document.getElementById("userButtons");
const postsList = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    userButtons.innerHTML = "";
    users.forEach(user => {
      const button = document.createElement("button");
      button.className = "user-btn";
      button.textContent = user.name;
      button.onclick = () => {
        highlightButton(button);
        loadPosts(user.id);
      };

      userButtons.appendChild(button);
    });
    //highlightButton(button);
    loadPosts(users[0].id);
  })
  .catch(error => {
    console.error("Error loading users:", error);
    userButtons.innerHTML = "<p>Failed to load user buttons.</p>";
  });

async function loadPosts(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    postsList.innerHTML = "";
    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading posts:", error);
    postsList.innerHTML = "<li>Failed to load posts.</li>";
  }
}

function highlightButton(activeBtn) {
  document.querySelectorAll(".user-btn").forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}
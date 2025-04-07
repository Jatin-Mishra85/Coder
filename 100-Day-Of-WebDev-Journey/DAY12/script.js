// ======= ELEMENT SELECTORS ======= //
const commentbtn = document.querySelector(".comment");
const likebtn = document.querySelector(".like");
const postbtn = document.querySelector(".post");
const commentbox = document.querySelector(".commentBox");
const imgs = document.querySelector(".imgs");
const nextImg = document.querySelector(".next");
const previousImg = document.querySelector(".previous");
const comments = document.querySelector(".rightMidd");

// ======= VARIABLES ======= //
let currentIndex = 1;        // Current image index
const totalCount = 5;        // Total images available
let isLiked = false;         // Like toggle state

// ======= FUNCTIONS ======= //

// Update image based on index
function updateimg() {
  imgs.src = `img/ben${currentIndex}.webp`;
}

// ======= EVENT LISTENERS ======= //

// 👉 Next image
nextImg.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > totalCount) currentIndex = 1;
  updateimg();
});

// 👉 Previous image
previousImg.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex === 0) currentIndex = totalCount;
  updateimg();
});

// 👉 Focus on comment box when comment icon clicked
commentbtn.addEventListener("click", () => {
  commentbox.focus();
});

// 👉 Submit comment on Enter key
commentbox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    postbtn.click();
  }
});

// 👉 Toggle Like Button
likebtn.addEventListener("click", () => {
  isLiked = !isLiked;
  likebtn.style.color = isLiked ? "red" : "white";
  likebtn.style.fontWeight = isLiked ? "bold" : "normal";
});

// 👉 Post comment logic
postbtn.addEventListener("click", () => {
  const commentText = commentbox.value.trim();

  if (commentText === "") {
    alert("Please enter a comment.");
    return;
  }

  // Create comment element
  const newComment = document.createElement("div");
  newComment.classList.add("commentData");
  newComment.innerHTML = `
    <div class="comuser">
      <img
        src="https://preview.redd.it/what-makes-omniverse-is-a-good-series-for-you-what-are-the-v0-7fz12m9o0z7b1.png?auto=webp&s=1343a646c0be0975dd818832180d4c515479014c"
        alt="User Image"
      />
    </div>
    <div class="usercom">
      <p>${commentText}</p>
    </div>
  `;

  // Append to comment area
  comments.appendChild(newComment);

  // Clear input
  commentbox.value = "";

  // Scroll to bottom
  comments.scrollTop = comments.scrollHeight;
});

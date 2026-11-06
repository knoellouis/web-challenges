console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");
const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
const newPostUser = document.createElement("span");
newPostUser.classList.add("post__username");
newPostUser.textContent = "@itsmemario";
const newPostButton = document.createElement("button");
newPostButton.classList.add("post__button");
newPostButton.setAttribute("type", "button");
newPostButton.setAttribute("data-js", "like-button");
newPostButton.textContent = "♥ Like";

const body = document.querySelector("body");
body.append(newPost);
newPost.append(newPostContent);
newPost.append(newPostFooter);
newPostFooter.append(newPostUser);
newPostFooter.append(newPostButton);

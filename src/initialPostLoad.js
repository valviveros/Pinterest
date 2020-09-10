//initialPostsLoad.js

// Resolution statement
//         375px               1024px
//          SM        MD        LG        XL
//  <--XS---||---SM---||---MD---||---LG---||---XL--->

//------------------------------------------
// Calculate number of initial posts to load
//------------------------------------------
const WINDOW_RESOLUTION_LG = 1024;
const WINDOW_RESOLUTION_SM = 375;
const POST_WIDTH_SM = 252;
const POST_WIDTH_XS = 183;
const CONTENT_WIDTH_PERCENTAGE_LG = 0.875;
const ROWS_LG = 20;
const ROWS_XS = 13;

const windowWidth = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? window.screen.width : window.innerWidth;
const contentWidth = (windowWidth > WINDOW_RESOLUTION_LG) ? windowWidth * CONTENT_WIDTH_PERCENTAGE_LG : windowWidth;

const postWidth = (windowWidth > WINDOW_RESOLUTION_SM) ? POST_WIDTH_SM : POST_WIDTH_XS;

const numberOfPostPerRow = Math.floor(contentWidth / postWidth);

numberOfRows = (windowWidth > WINDOW_RESOLUTION_LG) ? ROWS_LG : ROWS_XS;
numberOfPost = numberOfPostPerRow * numberOfRows;

console.log("Content width: " + contentWidth);
console.log("Number of post per row: " + numberOfPostPerRow);
console.log("Number of rows: " + numberOfRows);
console.log("Number of post: " + numberOfPost);

//-------------------
// Load initial Posts
//-------------------
const PICSUM_API = "https://picsum.photos/";
const DESCRITION_MORE_IMG = "./assets/img/open-menu.svg";
const DESCRIPTION_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const PICSUM_MAX_WIDTH = 1000;
const PICSUM_MIN_WIDTH = 500;
const PICSUM_MAX_HEIGHT = 1000;
const PICSUM_MIN_HEIGHT = 300;

var content = document.getElementById("content");

for (var i = 0; i < numberOfPost; i++) {
    addPost();
}

function addPost() {
    var picsumHeight = (Math.floor(Math.random() * (PICSUM_MAX_HEIGHT - PICSUM_MIN_HEIGHT)) + PICSUM_MIN_HEIGHT);
    var picsumWidth = (Math.floor(Math.random() * (PICSUM_MAX_WIDTH - PICSUM_MIN_WIDTH)) + PICSUM_MIN_WIDTH);

    var picsum = PICSUM_API + picsumWidth + "/" + picsumHeight;

    var post = document.createElement("div");
    post.classList.add("post");

    var img = document.createElement("img");
    img.setAttribute("src", picsum);
    img.classList.add("postImg");

    var description = document.createElement("div");
    description.classList.add("description");

    var description_text = document.createElement("div");
    description_text.classList.add("text");

    var text = document.createTextNode(DESCRIPTION_TEXT);
    description_text.appendChild(text);

    var description_img = document.createElement("img");
    description_img.classList.add("more");
    description_img.setAttribute("src", DESCRITION_MORE_IMG);

    description.appendChild(description_text);
    description.appendChild(description_img);

    var postHover = document.createElement("div");
    postHover.classList.add("postHover");

    post.appendChild(img);
    post.appendChild(description);
    post.appendChild(postHover);
    content.appendChild(post);

    console.log("> Post added!");
}

// //-----------------------------------------------
// // Load additional post row when scroll to bottom
// //-----------------------------------------------
// const SCROLL_LIMIT_OFFSET = 100;
// const NUMBER_OF_ROWS_TO_ADD = 2;
// var isAtBottom = false;

// window.addEventListener('scroll', function () {
//     const scrollY = Math.floor(window.scrollY);
//     const scrollLimit = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     console.log("scrolled: "+scrollY+"/"+scrollLimit);
//     if (scrollY > (scrollLimit - SCROLL_LIMIT_OFFSET)) {
//         if (isAtBottom == false) {
//             console.log("Is at bottom");
//             isAtBottom = true;
//             addPostRow();
//         }
//     }
//     else {
//         isAtBottom = false;
//     }
// });

// function addPostRow() {
//     for (var i = 0; i < NUMBER_OF_ROWS_TO_ADD * numberOfPostPerRow; i++) {
//         addPost();
//     }
// }
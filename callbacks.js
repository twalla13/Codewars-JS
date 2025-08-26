const posts = [
  { title: "One", body: "Hiii" },
  { title: "Two", body: "Byee" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);

    // wait 2 seconds before going to the callback then waiting another sec in that callback
    callback();
  }, 2000);
}
//Cant just call createPost after getPosts to see new post added
//Use asynchronous coding
//getPosts();

createPost({ title: "Three", body: "Soo" }, getPosts);

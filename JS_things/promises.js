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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; //for error checking, usually a

      if (!error) {
        resolve();
      } else {
        reject("Something went sideways");
      }
    }, 2000);
  });
}
//Cant just call createPost after getPosts to see new post added

createPost({ title: "Three", body: "Soo" })
  .then(getPosts)
  .catch((err) => console.log(err));

//Asyn/Await

async function int() {
  //will wait for createPost to be done before calling get Posts
  await createPost({ title: "Four", body: "Moo" });

  getPosts();
}

//Async and Await with Fetch

// Asunc / Await / Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();

//Promise.all

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

//will take however long the longest promise is
Promise.all([promisel, promisez, promise3]).then((values) =>
  console.log(values)
);

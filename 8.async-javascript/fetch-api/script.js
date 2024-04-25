// fetching data using then catch

// get request
fetch("https://www.boredapi.com/api/activity")
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.log("error");
  });

// get request using async await
const getBlog = async () => {
  const res = await fetch("https://www.boredapi.com/api/activity");
  if (!res.ok) {
    throw new Error("not getting result");
  }
  const data = await res.json();
  console.log(data);
};

getBlog();

// post request
const createBlog = ({ title, body }) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "1234",
    },
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
};

createBlog({ title: "First Blog", body: "this is my first blog" });

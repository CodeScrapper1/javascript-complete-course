const blogs = [{ name: "react js", desc: "react js client side rendering" }];

const createBlog = (blog, getBlog) => {
  setTimeout(() => {
    blogs.push(blog);
    getBlog();
  }, 2000);
};

const getBlogs = () => {
  setTimeout(() => {
    blogs.forEach(function (blog) {
      const div = document.createElement("div");
      div.className = "bloging";
      div.innerHTML = ` <h3>Name: ${blog.name}</h3>  <p><strong>Description:</strong> ${blog.desc}</p>`;
      document.getElementById("blog").appendChild(div);
    });
  }, 1000);
};

createBlog({ name: "next js", desc: "next js server actions" }, getBlogs);

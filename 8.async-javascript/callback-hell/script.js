const getResult = (endpoint, getFunc) => {
  const xml = new XMLHttpRequest();

  xml.open("GET", endpoint);

  xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status == 200) {
      getFunc(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xml.send();
  }, 3000);
};

getResult("https://www.boredapi.com/api/activity", (res) => {
  console.log("data", res);

  getResult("https://www.boredapi.com/api/activity", (res) => {
    console.log("data", res);

    getResult("https://www.boredapi.com/api/activity", (res) => {
      console.log("data", res);

      getResult("https://www.boredapi.com/api/activity", (res) => {
        console.log("data", res);
      });
    });
  });
});

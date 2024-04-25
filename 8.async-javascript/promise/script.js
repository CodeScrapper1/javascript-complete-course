const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise check");
    // resolve();
    reject("something wrong");
  }, 1000);
});

promise
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });

// example
const student = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "mehtab", age: "28" });
    } else {
      reject("student not exists");
    }
  }, 1000);
});

student
  .then((data) => {
    console.log("success", data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    return;
  })
  .finally(() => console.log("this promise is giving result"));

// promise all

const hitApi = (endpoint) => {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();

    xml.open("GET", endpoint);

    // 5 values of read state

    xml.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        if (data) {
          resolve(data);
        } else {
          reject("something went wrong");
        }
      }
    };

    setTimeout(() => {
      xml.send();
    }, 5000);
  });
};

const getActivity = hitApi("https://www.boredapi.com/api/activity");
const getActivity1 = hitApi("https://www.boredapi.com/api/activity");
Promise.all([getActivity, getActivity1])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error");
  });

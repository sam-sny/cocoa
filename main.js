"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const fetchDataButton = document.getElementById("updateAuthor");
  const authorName = document.getElementById("authorName");
  const api = document.getElementById("apiUrl");
  const author = document.getElementById("author");

  fetchDataButton.addEventListener("click", fetchApiData);

  function fetchApiData() {
    const valueToSend = author.value;
    const apiUrl = api.value;

    fetch(`${apiUrl}/gigo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: valueToSend }),
    })
      .then((response) => response.json())
      .then((data) => {
        authorName.innerHTML = `${data.name}`;
      })
      .catch((error) => {
        console.log(error);
        authorName.innerHTML = `<p>Error fetching: ${error.message}</p>`;
      });
  }
});

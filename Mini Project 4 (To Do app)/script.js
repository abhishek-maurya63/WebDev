document.addEventListener("DOMContentLoaded", () => {
  function openTextEditor() {
    let add = document.querySelector(".add");
    if (add) {
      add.addEventListener("click", () => {
        console.log("Add button clicked, redirecting to text.html");
        window.location.href = "text.html";
      });
    } else {
      console.log("Add button not found");
    }
  }

  openTextEditor();

  let titleValue = "";
  let paraValue = "";

  function getTitle() {
    let title = document.querySelector(".title");
    if (title) {
      title.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          titleValue = title.value;
          console.log("Title set to:", titleValue);
        }
      });
    } else {
      console.log("Title input not found");
    }
  }

  function getPara() {
    let para = document.querySelector(".content");
    if (para) {
      para.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          paraValue = para.value;
          console.log("Paragraph set to:", paraValue);
        }
      });
    } else {
      console.log("Content input not found");
    }
  }

  function htmlAdder(title, para) {
    let cardContainer = document.querySelector(".card-container");
    if (cardContainer) {
      console.log("toDo function called with title:", title, "and para:", para);
      const d = new Date();
      const t = d.getTime();

      let html = `<div class="card">
                <button>Running</button>
                <h3 class="title">${title}</h3>
                <h6 class="d-t">${d} ${t}</h6>
                <p class="content">
                  ${para}
                </p>
                <img class="delete" src="utilities/delete.svg" alt="delete" /></div>`;

      cardContainer.innerHTML += html; // Append the new card
      console.log("Card added:", html);
      paraValue = "";
      titleValue = "";
    } else {
      console.log("Card container not found");
    }
  }

  function toDo() {
    window.location.href = "index.html"; // Redirect to index.html

    // Wait for DOMContentLoaded event for index.html
    document.addEventListener("DOMContentLoaded", () => {
      console.log("opened bro");
      htmlAdder(titleValue, paraValue);
    });
  }
  let save = document.querySelector(".save");
  if (save) {
    save.addEventListener("click", () => {
      console.log("Save button clicked");
      console.log("Title value before saving:", titleValue);
      console.log("Paragraph value before saving:", paraValue);
      if (titleValue && paraValue) {
        // Ensure values are not empty
        console.log("hey I'm working bro");
        toDo();
      } else {
        console.log("Title or paragraph value is empty");
      }
    });
  } else {
    console.log("Save button not found");
  }

  getPara();
  getTitle();
});

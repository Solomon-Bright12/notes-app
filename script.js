notedata = localStorage.getItem("notedata")
  ? JSON.parse(localStorage.getItem("notedata"))
  : [];
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.getElementById("notetextarea").value;
  console.log(text);
  note = {
    textarea: text,
    dateofnote:  new Date(),
  };
  notedata.push(note);
  localStorage.setItem("notedata", JSON.stringify(notedata));

  displayNote();
});
const displayNote = () => {
  let div = document.getElementById("displayarea");
  div.innerHTML = "";
  notedata.forEach((note, index) => {
    let number = index + 1;
    const noteHTML = `
    <div id="displayarea">
      <p>${number}.${note.textarea}</p>
      
      <button class="deletebtn" data-index=${index} onclick="deleteNotes()">Delete</button>
      <p class="date">${note.dateofnote}</p>
      <hr>
    </div>
    `;
    

    div.innerHTML += noteHTML;
    //document.body.appendChild(noteHTML);
  });
};
function deleteNotes(index) {
  
  notedata.splice(index,1);
  localStorage.setItem("notedata", JSON.stringify(notedata));
  displayNote();
}

displayNote();

const todos = [
  { id: 1, task: "HTML", isCompleted: true },
  { id: 2, task: "CSS", isCompleted: false },
];

// console.log("Push array");
// angka.push(1);
// console.log(angka); // menambah angka elemen terakhir

// angka.pop();
// console.log(angka); // menghapus angka terakhir

// function untuk hapus
// const hapusTodo = () => {
//   if (!id && isNaN(id)) throw new Error("todo should be used todo type");
//   todos.splice(
//     todos.findIndex((e) => e.id === id),
//     1
//   );
//   return todos;
// };z

function deleteCode() {
  if (!id && isNaN(id)) throw new Error("todo should be used todo type");
  todos.splice(
    todos.findIndex((e) => e.id === id),
    1
  );
  return todos;
}
deleteCode();

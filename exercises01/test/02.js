function makeWorker() {
  let name = "Pete";

  return function() {
    // alert(name);
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

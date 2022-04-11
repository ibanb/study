
function printNumber(from, to) {

  const delay = 1000;
  const timerId = setTimeout(function run() {
    from = from + 1;
    console.log(from);

    if (from === to) {
     clearTimeout(timerId);
    } else {
     setTimeout(run, delay);
    }
  }, delay);
}

printNumber(3, 10);



function printNumber(from, to) {

  const timerId = setInterval(() => {
    from = from + 1;
    if (from === to) {
      clearInterval(timerId);
    } else {
      console.log(from);
    }
  }, 1000);
}

printNumber(3, 10);

const myAlert = () => {
  const x = 'Help! I think I found a clue!'
  const alerter = () => {
    alert(x)
  }
  alerter()
}

myAlert()

const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = (){
    alert(x);
  };

  setTimeout(alerter, 1000)
  console.log('what happens first? this log or the alert?') // this runs first because setTimeout is non-blocking
};

myAlert()

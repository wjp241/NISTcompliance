let once = false;

(() => {

  async function fetchPws() {
    //store password collection
    const response = await fetch("http://localhost:3000/passwords");
    const passwords = await response.text();
    const passObj = { ...passwords.split("\n") };

    const checkBtn = document.getElementsByTagName('input')[1];
    checkBtn.addEventListener("click", () => {
      const passInput = document.getElementsByTagName('input')[0];
      const typedPass = passInput.value;
      const passLen = typedPass.length;
      const warn = document.getElementsByTagName('span')[0];

      //password check conditions
      const isLen = (num) => num < 8 || num > 64;
      const isAsc = (char) => (/[\p{ASCII}]+/u.test(char));
      const isCommon = (char) => passObj.hasOwnProperty(char);

      if (isLen(passLen) || !isAsc(typedPass) || isCommon(typedPass)) {
        if (!once) {
          warn.innerHTML = "Password should be original combination of ASCii characters greater than 8 and less than 64 in length"
          once = true;
        } else {
          warn.hidden = false;
        }
      } else {
        warn.innerHTML = "Your password is NIST Compliant!";
        once = false;
      }
      passInput.value = "";
    })
  };
  fetchPws()
})()




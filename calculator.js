var btns = document.querySelectorAll(".pads button");
var display = document.querySelector(".display-number");

var temp = "";
var op1=''
var op2=''
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
        let btnVal = e.target.textContent
        switch (btnVal) {
            case "AC":
                reset()
                break;

            case "+":
                if(temp===''){
                    console.log('1st op')
                }
                else{
                     op1 = temp
                    reset()
                }
                break;
            case '=':
                if(op2 !==""){
                    op2 = temp
                    display.innerHTML=parseInt(op1) + parseInt(op2)
                    console.log(op1, '  ', op2)
                }
                break

            default:
                console.log(btnVal);
                if(btnVal!=='+')
                    temp += btnVal;
                display.innerHTML = temp;
                break;
        }
    });
});
const add = (a, b) => a + b;

const reset = () => {temp = ""; display.innerHTML ="0"}

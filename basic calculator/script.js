import {add,subtract,multiply,divide} from './calculator.js'

const $num1 = $('#num1')
const $num2 = $('#num2')

const $operator = $('#symbol')

const $result_display = $('#result')
$("#add_btn").click(()=>$operator.val('+'))
$("#subtract_btn").click(()=>$operator.val('-'))
$("#multiply_btn").click(()=>$operator.val('*'))
$("#divide_btn").click(()=>$operator.val('/'))


$("#result_btn").click(()=>{
    let x = parseInt($num1.val())
    let y = parseInt($num2.val())
    
    if(!x && x!=0)  {
        alert("Please enter first number")
        return
    }
    if(!y && y!=0)  {
        alert("Please enter second number")
        return
    }
    if (!$operator.val()){
        alert("Please select operation")
        return
    }
    switch($operator.val()){
        case '+': $result_display.val(add(x,y))
            break;
        case '-': $result_display.val(subtract(x,y))
            break
        case '*': $result_display.val(multiply(x,y))
            break;
        case '/': $result_display.val(divide(x,y))
            break;
        default: $result_display.val("Some internal error occurred.Try again")
    
    }
    $result_display.css({
        "background-color":"rgb(211, 211, 211)",
        
    })



})



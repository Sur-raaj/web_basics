const Name = document.getElementById("name")
const roll = document.getElementById("roll")
const addr = document.getElementById("address")

const button = document.querySelector("form")

const transcript = document.querySelector(".details")

const buttonOutput = document.querySelector(".btn_output")

const showdata = document.querySelector(".show_data")

const objlist = []
 
button.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(3);
    if (Number(roll.value) <0)
        alert("Invalid roll number entered. Please enter valid roll number.")
    else{
        objlist.push( {
            user_name : Name.value,
            user_roll : Number(roll.value),
            user_addr : addr.value,
        })
        LocalSave()
        UpdateTranscript()

       
    }

    clearValue()


})


buttonOutput.addEventListener("click",(e)=>{
    ClearOutput()
    e.preventDefault()
    ShowOutput()
})

function LocalSave(){
    localStorage.setItem('user',JSON.stringify(objlist))
}
function UpdateTranscript(){
    return transcript.innerHTML = `${description_list()}`
}



function description_list(){
    return `       
        <dt> Name : </dt>
        <dd> ${Name.value} </dd>
        
        <dt> Roll : </dt>
        <dd> ${Number(roll.value)} </dd>

        <dt> Address : </dt>
        <dd> ${addr.value} </dd>
            `
}

function ShowOutput(){
    const showObj = JSON.parse(localStorage.getItem("user") || [])
    showObj.forEach(element => {
        showdata.innerHTML += `
        <dl class="outputList">
        <dt> Name : </dt>
        <dd> ${element["user_name"]} </dd>
        
        <dt> Roll : </dt>
        <dd> ${element["user_roll"]} </dd>

        <dt> Address : </dt>
        <dd> ${element["user_addr"]} </dd>
        </dl>
        `
})}

function ClearOutput(){
    showdata.innerHTML = ""
}

function clearValue(){
    Name.value = ""
    roll.value = ""
    addr.value = ""
}
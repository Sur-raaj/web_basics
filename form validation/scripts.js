const Name = document.getElementById("name")
const roll = document.getElementById("roll")
const addr = document.getElementById("address")

const button = document.getElementById("btn_submit")

const transcript = document.querySelector(".details")

const buttonOutput = document.querySelector(".btn_output")

const showdata = document.querySelector(".show_data")

const objlist = []
 
button.addEventListener("click",(e)=>{
    e.preventDefault()
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
})


buttonOutput.addEventListener("click",(e)=>{
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

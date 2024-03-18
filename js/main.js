const input = document.querySelector(".form__input")
const ADD = document.querySelector(".ADD")
const form = document.querySelector(".form")
const tbody = document.querySelector(".table tbody")
const check = document.querySelector(".check")

const DATA=[
    {
        id:"",
        text:"kartoshka",
        time:`time ${new Date()}`,
        delete: `delete`

    },
    {
        id:"",
        text:"piyoz",
        time:`time ${new Date()}`
    },
    {
        id:"",
        text:"go'sht",
        time:`time ${new Date()}`
    },
]
form.addEventListener ("submit", (event)=>{
    event.preventDefault()
    let newUser = {
        id:check.value,
        text: input.value,
        time: ADD.value

    }
    DATA.push(newUser);
    console.log(DATA);
    createTable(DATA)
    check.value = ""
    input.value = ""
    ADD.value = ""
})

function createTable(date){
    while(tbody.firstChild){
        tbody.firstChild.remove()
    }
    date.forEach((user,index)=>{
        let tr = document.createElement("tr")
        tr.innerHTML=`
            <td><input id="id-1" type="checkbox" name="" id="check"></td>
            <td>${user.text}</td>
            <td> ${new Date().getHours()} : ${new Date().getMinutes()}</td>
            <td><button onclick ="deleteUser(${index})" class="btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                        style="fill: rgb(4, 121, 237);transform: msFilter;">
                        <path
                            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                        </path>
                    </svg></button></td>
        `
        tbody.appendChild(tr)
    })
}
createTable(DATA)

function deleteUser(index){
    DATA.splice(index, 1)
    createTable(DATA)
}
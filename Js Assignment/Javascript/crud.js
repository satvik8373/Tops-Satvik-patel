//Insert 
let data = []
const saveData = () => {
    let nm = document.getElementById('username').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let id = document.frm.userid.value
    let alldata = JSON.parse(localStorage.getItem('userinfo'))
    if (id != "") {
        //update 
        data = alldata.map((i)=>{
                    if(i.id == id){
                        i.name = nm
                        i.age = age
                        i.salary = sal
                    }
                    return i
        })
        // data = res
    } else {
        //insert
        let len = (alldata == null) ? 1 : alldata.length + 1
        let obj = {
            id: len,
            name: nm,
            age: age,
            salary: sal

        }
        data.push(obj)
    }

    localStorage.setItem("userinfo", JSON.stringify(data))
    document.frm.reset()
    document.frm.userid.value = ''
    disp()
}
const disp = () => {
    let dt = localStorage.getItem("userinfo")
    let res = JSON.parse(dt)
    dispTable(res)
}
const dispTable = (data)=>{
    let tr = ''
    data.map((i) => {
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.salary}</td>
                <td>
                <button class="btn btn-primary" onclick="editData(${i.id})">Edit</button>
                <button class="btn btn-danger" onclick="delData(${i.id})">Delete</button>
                </td>
                </tr>
        `
        // tr += "<tr><td>"
        // +i.id+"</td></tr>"
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id) => {
    let alldata = JSON.parse(localStorage.getItem('userinfo'))
    let res = alldata.filter((i) => {
        return i.id != id
    })
    localStorage.setItem("userinfo", JSON.stringify(res))
    disp()
}
const editData = (id) => {
    let alldata = JSON.parse(localStorage.getItem('userinfo'))
    let res = alldata.find((i) => {
        return i.id == id
    })
    document.frm.age.value = res.age
    document.frm.username.value = res.name
    document.frm.salary.value = res.salary
    document.frm.userid.value = id
}
const searchData = ()=>{
    let txt = document.getElementById('srcdata').value
    let alldata = JSON.parse(localStorage.getItem('userinfo'))
    let res = alldata.filter((i)=>{
            if(i.name.includes(txt) || i.age.includes(txt)){
                return i
            }
    })
    dispTable(res)

}
disp()
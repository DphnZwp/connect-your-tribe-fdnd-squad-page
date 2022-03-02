const BaseUrl = "https://tribe.api.fdnd.nl/v1/member"
const header = document.querySelector('#header')
const fetch_studentname = document.querySelector('#fetch_studentname')
getData()

async function getData(){
    const response = await fetch(BaseUrl)
    const data = await response.json()

    printData(data)   

}
function printData(data){ 

    // console.log(data.data)
    fetch_studentname.innerHTML += `

     <select class="student-name" onchange= "getStudent(this.value)">
       <option>Search studenten bij name</option>
       ${data.data.map(student=> `<option>${student.name}</option>`)}
     </select>`
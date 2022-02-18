const BaseUrl = "https://tribe.api.fdnd.nl/v1/member"
const header = document.querySelector('#header')
const fetch_studenname = document.querySelector('#fetch_studenname')
getData()

async function getData(){
    const response = await fetch(BaseUrl)
    const data = await response.json()
    // console.log(data)
    
    //  const filter = member.data.filter(x => x.memberId <(21) )
    // console.log(filter)
    printData(data)   

}
function printData(data){ 

    // console.log(data.data)
    fetch_studenname.innerHTML += `

     <select class="student-name" onchange= "getStudent(this.value)">
       <option>Search studenten bij name</option>
       ${data.data.map(student=> `<option>${student.name}</option>`)}

     </select>`




//     content.innerHTML += data.data[2].surname
// 
}

   async function getStudent(name){
     const response = await fetch(BaseUrl)
     const data = await response.json()
    //  console.log(data.data[0].memberId)
    //  console.log(data.data[2].memberId)


}


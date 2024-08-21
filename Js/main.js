
//Curd




var userInput= document.getElementById('userInput')
var listContent= document.getElementById('homeContent')
var searchInput=document.getElementById('searchInput')
var allList=[]
if(localStorage.getItem('todoList') != null){
 allList= JSON.parse(localStorage.getItem('todoList'))
 displayList() 
}

// Create
function addItem(){
    var list={
        name: userInput.value
    }
    allList.push(list)
    console.log(allList)
    clearInput()
    displayList()
    localStorage.setItem('todoList',JSON.stringify(allList))
}

//ClearInput
function clearInput(){
    userInput.value=''
}

//Display
function displayList(){
var container = ''
for(var i = 0 ; i < allList.length ; i++){
container += `<div class="home-item mb-2 p-3 rounded-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                    <p id="x" class="mb-0" >${allList[i].name}</p>
                    <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})""></i>
                </div>`
}
listContent.innerHTML=container

}

// Delete
function deleteItem(deleteIndex){
    allList.splice(deleteIndex,1)
    localStorage.setItem('todoList',JSON.stringify(allList))
    displayList()
}

//Search
function searchItem(){
    var searchText=searchInput.value
    var container = ''
for(var i = 0 ; i < allList.length ; i++){
    if(allList[i].name.toLowerCase().includes(searchText.toLowerCase())){
        container += `<div class="home-item mb-2 p-3 rounded-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
        <p id="x" class="mb-0" >${allList[i].name}</p>
        <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})""></i>
    </div>`
    }
}
listContent.innerHTML=container
}

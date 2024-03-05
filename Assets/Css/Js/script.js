(() => {
    let allItems = ["Study Web Development Coures"];

    function populateTotalItems (count) {
        const totalElement = document.getElementById("total");
        totalElement.innerText = count;
    }
   
    
    function addNewItem(event) {
        event.preventDefault();

        const inputElement = document.querySelector("input");
        let newItem = inputElement.value;
    
        if(newItem) {
            allItems.unshift(newItem);
            populateItems(allItems.slice(0, 5));
            populateTotalItems(allItems.length);
            inputElement.value = "";
        }
        else {
            inputElement.classList.add("error-input");
        }
        toggleViewButton();
       
    }
    
    function toggleViewButton(){
        if(allItems.length > 5){
            document.getElementById('viewall-button').classList.add('show-viweall-btn');
           
        }else{
            document.getElementById('viewall-button').classList.add('remove-viewall-btn');
           

        }
    }
    function toggleViewMore(event){
        if(event.target.innerText === "View All"){
            document.getElementById('viewall-button').innerText = "View Less";
        }else{
            document.getElementById('viewall-button').innerText = "View All";
            populateItems(allItems.slice(0, 5));

        }

    }

     
   // function showAtleastOne(){
   //     document.getElementById('lists').appendChild('div').appendChild("span").innerText = "Study Web Development";
  //  }
  //  showAtleastOne();
    function populateItems(allItems) {
        const listsElement = document.getElementsByClassName("lists")[0];
        
        const allElements = [] ;
        allItems.forEach((item) => {
            allElements.push(`<div>
                <span>${item}</span>
                <input class="check-item" type="checkbox" >
            </div>`);
        });
        listsElement.innerHTML = allElements.join("");
        handleCheckbox();
    }
    function handleCheckbox(){
        
        const checkItems = document.querySelectorAll(".check-item");
        checkItems.forEach((checkItem) =>{
            checkItem.addEventListener('click', (event) =>{
                const checkElement = event.target;
                const itemValue = checkElement.parentElement.childNodes[1].textContent;

                allItems = allItems.filter(item =>{
                    return item !== itemValue;
                });
                populateItems(allItems);
                populateTotalItems(allItems.length)
            })
        })
        
        
    }
    
    
    document.querySelector("input").addEventListener("focus", () => {
        const inputElement = document.querySelector("input");
        inputElement.classList.remove("error-input");
    });
    
    document.getElementById('viewall-button').addEventListener("click", (event) =>{
        populateItems(allItems);
        toggleViewMore(event);
    })
    // document.getElementById('checkbox').addEventListener('click', () =>{
    //     allItems.pop();
    // })
    
    document.getElementById("add_new_btn").addEventListener("click", addNewItem);

    populateItems(allItems);
})();
console.log("page loaded...");


function changeName(event){
    console.log(event.target);
    let variable= document.querySelector('#name');
    variable.innerHTML= "Marco Villegas C";



    
}

function remove (event){
    
    
    let variable= event.target.closest('.card-list-item');
    variable.remove();

}

   
    
var spans = [document.querySelector('#requests')];
var likes = [2];
    function like(id) {
 
    likes[id]--;
    spans[id].innerHTML= likes[id];
    }

    
    
    var spans2 = [document.querySelector('#connections')];
    var connection = [500];
    function connections(id) {
    
   
    connection[id]++;
    spans2[id].innerHTML= connection[id]+"+";
    }
    




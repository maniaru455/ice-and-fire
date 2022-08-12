async function foo(){
let res=await fetch("https://www.anapioficeandfire.com/api/books");
let result=await res.json();
console.log(result);

for (var i=0;i<result.length;i++){
    var div=document.createElement("div");
        div.style.color="green";
        div.style.fontSize="32px";
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-header"><br>
          DETAILS
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">NAME:${result[i].name}</li>
          <li class="list-group-item">ISBN:${result[i].isbn}</li>
          <li class="list-group-item">NO.OF.PAGES:${result[i].numberOfPages}</li>
          <li class="list-group-item">AUTHOR:${result[i].authors}</li>
          <li class="list-group-item">PUBLISHER:${result[i].publisher}</li>
          <li class="list-group-item">DATE OF RELEASE:${result[i].released}</li>
          
        </ul>
      </div>`
      
    document.body.append(div);
}
}
foo()
let imageUrl=document.querySelector("#imageUrl");
let addImage=document.querySelector("#addImage");
let displayImage=document.querySelector("#displayImage");

let index=-1;
let urlArr=[];
let image=document.createElement('img');
displayImage.append(image);


function getImageUrl(){
    if(imageUrl.value.trim()!=""){
    index++;
    urlArr.push(imageUrl.value);
    image.setAttribute('src',imageUrl.value);
    imageUrl.value="";
    }else{
        alert("Enter valid Address");
    }
}

//for key p
function onPressP(){
    console.log(index);
    if(index==0){
        index=urlArr.length-1;        
        image.src=urlArr[index];        
   }
   else{
    index=index-1;
       url=urlArr[index];
       image.src=url;
   }
}

//on key n
function onPressN(){
    if(index==urlArr.length-1){        
        image.src=urlArr[0];
        index=0;
    }else{
        index=index+1;        
        image.src=urlArr[index];
    }
}


//on key c
function onPressC(){
    console.log(urlArr.length);
    urlArr.splice(index,1);
    console.log(urlArr.length);
if(index==0){
    index=urlArr.length-1;    
    image.src=urlArr[index];
}else{
    index=index-1;
    image.src=urlArr[index];
}
}



addImage.addEventListener('click',()=>{
   getImageUrl();
})

imageUrl.addEventListener('keypress',(event)=>{
    if(event.key=="Enter"){
        getImageUrl();        
    }
})


document.addEventListener('keypress',(event)=>{    
    if(event.key=='p'){
       onPressP();
    }
    else if(event.key=='n'){
       onPressN();
    }
    else if(event.key=='c'){
        onPressC();
    }

});


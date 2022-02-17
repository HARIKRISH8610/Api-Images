var getDiv1=document.getElementsByClassName("carousel1")[0];
fetch("https://api.unsplash.com/photos/?client_id=kZvJ5KdfR3WQZafVfpxQbGgAVJ7Q6NfkjcMXxspH19A")
.then((response) => response.json()).
then((result) =>{
    console.log(result);
for(i=0;i<result.length;i++){
    if(i==0){
getDiv1.innerHTML += `
<div class="carousel-item active">
<img src="${result[i].urls.regular}" class="d-block imgCaurs w-100" alt="${result[i].id}">
</div>
`}else{
        getDiv1.innerHTML += `
<div class="carousel-item">
<img src="${result[i].urls.regular}" class="d-block imgCaurs w-100" alt="${result[i].id}">
</div>
`
    }
}
})
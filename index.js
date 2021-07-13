console.log("This is cv screener project");

const data=[
    {
      name:'vishakha Borkar',
      age: 20,
      city:'mumbai',
      language:'python',
      framework:'Django',
      image:'https://randomuser.me/api/portraits/women/75.jpg'//randomuser .me api google search
    },
{
    name:'prathamesh butte',
    age: 23,
    city:'mumbai',
    language:'python',
    framework:'flask',
    image:'https://randomuser.me/api/portraits/men/76.jpg'//randomuser .me api
},
{
    name:'tejaswini butte',
    age: 37,
    city:'mumbai',
    language:'javascript',
    framework:'reactJS',
    image:'https://randomuser.me/api/portraits/women/77.jpg'//randomuser .me api
},
{
    name:'kartik raut',
    age: 35,
    city:'mumbai',
    language:'javascript',
    framework:'Angular',
    image:'https://randomuser.me/api/portraits/men/78.jpg'//randomuser .me api
},
{
    name:'sakshi raut',
    age: 25,
    city:'mumbai',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/women/25.jpg'//randomuser .me api
},
{
    name:'priyanka tambe',
    age: 29,
    city:'mumbai',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/women/45.jpg'//randomuser .me api
}
]

// cv iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length ? {value: profiles[nextIndex++], done:false} : {done:true}
        }
    };
}
const candidates=cvIterator(data);
nextCV();
// button listener for next button
const next=document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate=candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');

    if(currentCandidate!=undefined){

        image.innerHTML=`<img src='${currentCandidate.image}'>`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">uses ${currentCandidate.framework}</li>
        </ul>`
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}
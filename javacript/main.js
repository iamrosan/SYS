function myFunction(){
    // let i =1;
    // if (i%2!=0){
    // document.getElementById('nav-sec').style.display = 'flex';
    // console.log(i);
    // i=i+1;}
    // else{
    //     document.getElementById('nav-sec').style.display = 'none';
    //     console.log('done');
    //     i=i+1;
    // }
    let state = document.getElementById('nav-sec');
    if (state.style.display== 'none'){
        state.style.display = 'flex';
    }else{
        state.style.display = 'none';
    }
    console.log(state.display);
}


// Time and date Section

let time;
let date;
let obj;

setInterval(() =>{
    document.getElementById('date-time').style.textAlign='center';
    document.getElementById('date-time').style.fontSize='10px';
    obj =new Date();
    date = obj.toDateString();
    time = obj.getHours() + ':' + obj.getMinutes();
    document.getElementById('date-time').innerHTML = date +" "+ time;
},1000);
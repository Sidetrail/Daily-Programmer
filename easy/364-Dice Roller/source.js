
const inputs = [
    '3d6',
    '4d12',
    '1d10',
    '5d4',
    '600d20'
]

inputs.forEach((i)=>{
    console.log(i);
    let dice = i.split('d')[0];
    let total = 0;
    for(let k = 0; k < dice; k++){
        total += Math.floor(Math.random()*i.split('d')[1])+1
    }
    console.log(total);
})
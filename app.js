let fullname = document.querySelectorAll('#fullname path')

for(let i =0; i <fullname.length; i++){
  console.log(`Letter ${i} is ${fullname[i].getTotalLength()}`);
}

let position = document.querySelectorAll('#position path')

for(let i =0; i < position.length; i++){
  console.log(`Letter ${i} is ${position[i].getTotalLength()}`);
}

console.log(position)

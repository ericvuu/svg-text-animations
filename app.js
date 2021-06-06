let fullname = document.querySelectorAll('#fullname path')

for(let i =0; i < localStorage.length; i++){
  console.log(`Letter ${i} is ${fullname[i].getTotalLength()}`);
}

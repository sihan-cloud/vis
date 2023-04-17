const panels=document.querySelectorAll('.panel');
panels.forEach((item)=>{
    item.addEventListener('click',()=>{
        panels.forEach((item)=>{
            item.classList.remove('active');
        })
        item.classList.add('active');
    });
});
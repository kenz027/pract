window.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.querySelector('button')
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const obj = {};
        const form = document.querySelector('form');
        const formdata = new FormData(form);
        formdata.forEach((item, key)=>{
            obj[key]=item;
        });
        fetch('http://localhost:3000/requests', {
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(obj)
        }).then(console.log(`Succesful: ${obj}`));
    });
})
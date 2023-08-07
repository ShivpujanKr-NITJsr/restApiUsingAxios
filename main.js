
 var ur='https://crudcrud.com/api/695f946b29914c88af6774aba8b402fc'+'/generalStore'

function saveToCrudCrudStorage(event){

    event.preventDefault();

    const itemname=event.target.itemname.value;

    const description=event.target.description.value;

    const price=event.target.price.value;

    const quantity=event.target.quantity.value;

    const obj={
        itemname,
        description,
        price,
        quantity
    }

    axios.post(ur,obj);
    showUserOnScreen(obj);
    

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get(ur)
        .then((res)=>{
            res.data.forEach(element => {
                showUserOnScreen(element);
            });
        }).catch(err=>console.log(err));
})

function showUserOnScreen(obj){
    const parentList=document.getElementById('listOfItems');

    const children=document.createElement('li');

    children.textContent=obj.itemname+"     "+obj.description+"    "+obj.price+"rs"+"   "+obj.quantity;

    const buy1=document.createElement('button');
    buy1.type='button';
    buy1.textContent='Buy1';

    const buy2=document.createElement('button');
    buy2.type='button';
    buy2.textContent='Buy2';

    const buy3=document.createElement('button');
    buy3.type='button';
    buy3.textContent='Buy3';

    buy1.onclick=()=>{
        parentList.removeChild(children);
        obj.quantity=obj.quantity-1;
        const updateur=ur+'/'+obj._id;
        showUserOnScreen(obj)
        axios.put(updateur,obj)
            .then()
            .catch(err=>console.log(err));


    }
    children.appendChild(buy1);

    

    buy2.onclick=()=>{
        parentList.removeChild(children);
        obj.quantity=obj.quantity-2;
        const updateur=ur+'/'+obj._id;
        showUserOnScreen(obj)
        axios.put(updateur,obj)
            .then(res=>console.log(obj.quantity))
            .catch(err=>console.log(err));
    }
    children.appendChild(buy2);

    

    buy3.onclick=()=>{
        parentList.removeChild(children);
        obj.quantity=obj.quantity-3;
        const updateur=ur+'/'+obj._id;
        showUserOnScreen(obj)
        axios.put(updateur,obj)
            .then()
            .catch(err=>console.log(err));
    }
    children.appendChild(buy3);

    parentList.appendChild(children);
}
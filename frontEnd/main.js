const ur = 'http://127.0.0.1:4000/';

async function saveToMyBackend(event) {
    event.preventDefault();

    const itemname = event.target.itemname.value;
    event.target.itemname.value = '';
    const description = event.target.description.value;
    event.target.description.value = '';
    const price = event.target.price.value;
    event.target.price.value = '';
    const quantity = event.target.quantity.value;
    event.target.quantity.value = '';

    
    const obj = {
        itemname,
        description,
        price,
        quantity
    };
    await axios.post(ur, obj);

    showUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await axios.get(ur);
        res.data.forEach(element => {
            showUserOnScreen(element);
        });
    } catch (err) {
        console.log(err);
    }
});

function showUserOnScreen(obj) {
    const parentList = document.getElementById('listOfItems');
    const children = document.createElement('li');
    children.innerHTML = `${obj.itemname}     ${obj.description}    ${obj.price}rs   <h5><b>${obj.quantity}</b></h5>`;

    // children.className="btn"

    children.id=obj.id;
    const buy1 = createBuyButton(obj, 1);
    children.appendChild(buy1);

    const buy2 = createBuyButton(obj, 2);
    children.appendChild(buy2);
    const buy3 = createBuyButton(obj, 3);
    children.appendChild(buy3);

    parentList.appendChild(children);
}

function createBuyButton(obj, quantityToBuy) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `Buy${quantityToBuy}`;

    button.className='btn m-1 btn-success border-3'

    button.onclick = async () => {
        if(quantityToBuy>obj.quantity ){
            // const ch=document.createElement('li');
            // ch.textContent="can't buy";

            // document.getElementById(obj.id).appendChild(ch);
            // setTimeout(()=>{
            //     document.getElementById(obj.id).removeChild(ch);
            // },3000)
            console.log("can't buy")
            return ;
        }

        obj.quantity -= quantityToBuy;
        const updateur = `${ur}${obj.id}`;
        showUpdatedOnScreen(obj);

        const ob = {
            itemname: obj.itemname,
            description: obj.description,
            price: obj.price,
            quantity: obj.quantity
        };

        try {
            console.log(ob);
            // console.log(obj)
            await axios.put(updateur, ob);
        } catch (err) {
            console.log(err);
        }
    };
    return button;
}

function showUpdatedOnScreen(obj) {
   
    const children =document.getElementById(obj.id);
    children.innerHTML = `${obj.itemname}     ${obj.description}    ${obj.price}rs   <h5><b>${obj.quantity}</b></h5>`;

    
    
    const buy1 = createBuyButton(obj, 1);
    children.appendChild(buy1);

    const buy2 = createBuyButton(obj, 2);
    children.appendChild(buy2);
    const buy3 = createBuyButton(obj, 3);
    children.appendChild(buy3);
}

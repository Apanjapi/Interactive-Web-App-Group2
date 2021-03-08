function OrderUI(){
    return `<div style='
        background-color:#7BC67B;
        border-radius: 20px 20px 20px 20px;
        min-height:50px;
        min-width:300px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
       
    '>
    <p style='
    font-size:18px;
    font-weight:bold;
    font-family: san-serif;
    color:white;'>
    Place Order
    </p>
    </div>`
}

export const Order = OrderUI();
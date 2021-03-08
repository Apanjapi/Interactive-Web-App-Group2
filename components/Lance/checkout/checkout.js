function CheckoutUI(){
    return ` <div style='
    background-color:#ACACAC;
    height:100px;
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
'>

<div>
<div style='
display:flex;
flex-direction:column;
margin-right:20px;

'>

<img style="height:70px;
width:80px;
" src="https://clipart.info/images/ccovers/150368889720-green-apples-png-image.png"/>
</div>
</div>
<div style="
       display:flex;
       flex-direction:column; 
       margin-right:20px;
"
>
<div style='

'>
    <h4>Organic Green Apples</h4>
    <p style='line-height:0;
    font:roboto;'>2.0kg</p>
    <p style=' color:grey;
    font:roboto;
    margin-left: 90px;
    font:roboto;'> remove </p>
</div>

</div>
<div style='
background-color: #ACACAC;
border: 1px solid black;
border-radius: 10px;
width:40px;
height:40px;
display:flex;
flex-direction:column;

'>
<p style=' padding-left:15px;'>1</p>
</div>
<p style='margin:20px;'>
$25</p>
    </div>`
    
}

export const Checkout = CheckoutUI();
function TopNavUI()
{
    return `
      <div style="
        background-color: #545454;
        width: 400px;
        height: 150px;
      ">
        <div class="top-row" style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        ">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51Zjl6B5j9L._AC_SL1000_.jpg" style="
            border-radius: 50%;
            width: 80px;
            height: 80px;
          "/>
          
          <p>Hi, User</p>

          <div class="cart" style="
            background-color: #B6E094; 
            width: 75px;
            height: 40px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
          ">
            <img src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg" style="
              width: 35px;
              height: 35px;
            "/>
          </div>
        </div>
        <div class="bot-row">
          <p style="
            color: #52E74F;
            font-family: Roboto;
          ">Deliver to: Willingdon Ave, V5G 4J3</p>
        </div>
      </div>
    `
}

export const TopNav = TopNavUI();
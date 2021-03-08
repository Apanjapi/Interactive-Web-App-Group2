function TopNavUI()
{
    return `
      <div style="
        background-color: #545454;
        width: 400px;
        height: 150px;
      ">
        <div class="top-row">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51Zjl6B5j9L._AC_SL1000_.jpg" style="
            border-radius: 50%;
            width: 80px;
            height: 80px;
          "/>
          
          <p>Hi, User</p>
          
          <div class="cart" style="
            background-color: #B6E094; 
          ">
            <img src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg" style="
              width: 40px;
              height: 40px;
            "/>
          </div>
        </div>
        <div class="bot-row">
          
        </div>
      </div>
    `
}

export const TopNav = TopNavUI();
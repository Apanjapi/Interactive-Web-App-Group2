function LowerNavUI(){
    return `
      <div style="
        display: flex;
        flex-direction: row;
        background-color: #d1cfcb;
        width: 490px;
        justify-content: center;
        align-items: center;
        "
      >
        <div style="
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 100px;
          justify-content: center;
          align-items: center;
          margin: 10px;
          margin-top: 20px;
        "
        >
          <img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png" style="
            width: 25px;
            height: 25px;
          "/>
          <p style="
            color: black;
            font-weight: bold;
            font-family: sans-serif;
          "
          >Home</p>
        </div>

        <div style="
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 100px;
          justify-content: center;
          align-items: center;
          margin: 10px;
          margin-top: 20px;
        "
        >
          <img src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/map-pin-marker-circle-512.png" style="
            width: 50px;
            height: 50px;
          "/>
          <p style="
            color: black;
            font-weight: bold;
            font-family: sans-serif;
          "
          >Near By</p>
        </div>

        <div style="
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 100px;
          justify-content: center;
          align-items: center;
          margin: 10px;
          margin-top: 20px;
        "
        >
          <img src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" style="
            width: 50px;
            height: 50px;
          "/>
          <p style="
            color: black;
            font-weight: bold;
            font-family: sans-serif;
          "
          >Articles</p>
        </div>

        <div style="
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 100px;
          justify-content: center;
          align-items: center;
          margin: 10px;
          margin-top: 20px;
        "
        >
          <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" style="
            width: 50px;
            height: 50px;
          "/>
          <p style="
            color: black;
            font-weight: bold;
            font-family: sans-serif;
          "
          >User</p>
        </div>
      </div>
    `
}

// export const LowerNav = LowerNavUI();
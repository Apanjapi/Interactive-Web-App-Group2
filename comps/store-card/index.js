function StoreCardUI(){
    return `
      <div style="
        display: flex;
        flex-direction: row;
        height: 100px;
        width: 250px;
        border: 2px solid black;
        border-radius: 5%;
        justify-content: center;
        align-items: center;
        box-shadow: 10px 10px 5px grey;
      "
      >
        <div>
          <div style="
            width: 50px;
            height: 50px;
            border-radius: 35%;
            background-color: red;
          "
          >
            
          </div>
        </div>

        <div style="
          margin-left: 10px;
          font-family: Roboto;
        "
        >
            <p><b>Real Canadian Farmers</b></p>
            <p>Delivery</p>
        </div>
      </div>
    `
}

export const StoreCard = StoreCardUI();
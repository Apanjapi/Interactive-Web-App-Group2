function StoreCardUI(){
    return `
      <div style="
        display: flex;
        flex-direction: row;
        height: 100px;
        width: 400px;
        border: 2px solid black;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 5px 5px grey;
        margin: 10px 0px 30px 0px;
      "
      >
        <div>
          <div style="
            width: 50px;
            height: 50px;
            border-radius: 55%;
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

// export const StoreCard = StoreCardUI();
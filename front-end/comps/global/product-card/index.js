function ProductCardUI()
{
    return `
      <div style="
        width: 200px;
        height: 250px;
        border: 2px solid black;
        border-radius: 40px;
        box-shadow: 5px 5px 15px -4px #000000;
        background-color: #f2f2f2;
        margin: 10px;
      ">
        <div class="row-1" style="
          display: flex;
          justify-content: flex-end;
          margin-right: 15px;
          margin-top: 10px;
        ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" style="
            width: 20px;
            height: 20px;
          "/>
        </div>

        <div class="row-2" style="
          display: flex;
          margin-left: 20px;
        ">
          <img src="https://lh3.googleusercontent.com/proxy/Leyt58TUl7SSwRpSNMTyq3FCP9RWMJpzMdKQEQOHNK614wf-PXeKsFgpHepTRI0Tc8iEzBnhSsMw-NEUqJyKmMuNl4E8lQYKlPmaY2ex4xU_SEIDFo9RsA33rpEG-CaMlHmJeIGhgXU" style="
            width: 150px;
            margin-top: 15px;
          "/>
        </div>

        <div class="row-3">
          <div style="
            display: flex;
            justify-content: flex-start;
            margin-left: 20px;
            margin-top: 30px;
            font-family: Roboto;
          ">
            <p>Organic vegies pack</p>
          </div>

          <div style="
            display: flex;
            align-items: center;
            justify-content: space-around;
          ">
            <img src="http://assets.stickpng.com/images/58738756f3a71010b5e8ef44.png" style="
              width: 100px;
              height: 100%;
            "/>
            <p style="
              font-weight: bold;
              font-size: 20px;
            ">$25</p>
          </div>
        </div>
      </div>
    `
}

// export const ProductCard = ProductCardUI();
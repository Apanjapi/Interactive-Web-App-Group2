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
      ">
        <div class="row-1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" style="
            width: 30px;
            height: 30px;
          "/>
        </div>

        <div class="row-2">
          <img src="https://lh3.googleusercontent.com/proxy/Leyt58TUl7SSwRpSNMTyq3FCP9RWMJpzMdKQEQOHNK614wf-PXeKsFgpHepTRI0Tc8iEzBnhSsMw-NEUqJyKmMuNl4E8lQYKlPmaY2ex4xU_SEIDFo9RsA33rpEG-CaMlHmJeIGhgXU" style="
            width: 150px;
          "/>
        </div>

        <div class="row-3">

        </div>
      </div>
    `
}

export const ProductCard = ProductCardUI();
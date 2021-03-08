function ProductCardUI()
{
    return `
      <div style="
        width: 200px;
        height: 250px;
        border: 2px solid black;
        border-radius: 40px;
        box-shadow: 
      ">
        <div class="row-1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" style="
            width: 30px;
            height: 30px;
          "/>
        </div>
        <div class="row-2">

        </div>
        <div class="row-3">

        </div>
      </div>
    `
}

export const ProductCard = ProductCardUI();
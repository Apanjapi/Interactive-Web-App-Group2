function ItemUI(){
    return`
    <div style = '
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    font-family: Roboto;
    font-size: 1vw;
    color: #000000;
    background-color: #FFFFFF;
    border: 0.5vw solid #000000;
    border-radius: 20px;
    '>
        <div style = '
        width: 1vw;
        '><img src="https://ak.picdn.net/shutterstock/videos/34722451/thumb/1.jpg?ip=x480"></div>
        <div style = '
        width: 5vw;
        '><img src="https://toppng.com/uploads/preview/fruits-and-vegetables-11549665081l49qbaflyd.png"></div>
        <div>Organic Vegies Pack</div>
        <div style = '
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        '>
            <div style = '
            width 3vw;
            '><img src="https://lh3.googleusercontent.com/proxy/npEc9OmywC6GAPK3QZUtU-H9gyupfM1fUcCgsIOV1bBLZKizkiU5hti9JIQ7KwAx4vbcQxxET-dDGpNC-g4CwauuzNxQz58"></div>
            <div style = '
            font-weight: bold;
            '>$25</div>
        </div>
    </div>
    `
}

export const Item = ItemUi();
function HeaderUI(){
    return`
    <div style = '
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    font-family: Roboto;
    background-color: #545454;
    padding: 2vw 1vw 1vw 1vw; 
    '>
        <div style = '
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        '>
            <div style = '
            width: 2vw;
            '><img src ="https://smallimg.pngkey.com/png/small/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"></div>
            <div style = '
            width: 2vw;
            '><img src ="https://i.pinimg.com/originals/c6/52/32/c65232d66c23b9a1924665956ede7347.jpg"></div>
            <div style = '
            width: 2vw;
            '><button><img src="https://image.pngaaa.com/265/239265-middle.png"></button></div>
        </div>
        <div style = '
        font-size: 1.5vw;
        color: #FFFFFF;
        '>Hi User</div>
        <div style = '
        font-size: 1vw;
        color: #52E74F;
        '>Deliver to: Address</div>
    </div>
    `
}

export const Header = HeaderUI();
function HeaderUI(){
    return`
    <div style = '
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    font-family: Roboto;
    background-color: #545454;
    padding: 10vw 5vw 5vw 5vw;
    '>
        <div style = '
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2vw;
        '>
            <div><img src ="https://smallimg.pngkey.com/png/small/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png" style = '
            width: 5vw;
            '></div>
            <div><img src ="https://i.pinimg.com/originals/c6/52/32/c65232d66c23b9a1924665956ede7347.jpg" style = '
            width: 10vw;
            '></div>
            <div><img src="https://image.pngaaa.com/265/239265-middle.png" style = '
            width: 5vw;
            '></div>
        </div>
        <div style = '
        font-size: 2vw;
        color: #FFFFFF;
        padding-left: 41vw;
        '>Hi User</div>
        <div style = '
        font-size: 1.5vw;
        color: #52E74F;
        padding-left: 39vw;
        '>Deliver to: Address</div>
    </div>
    `
}

export const Header = HeaderUI();
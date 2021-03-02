function DeliveryUI(){
    return `
        <div style='
            background-color:#FFFFFF;
            border-radius: 20px 20px 20px 20px;
            height:50%;
            width:25%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
        '>
                <div>
                    <div style='
                    background-color:#FF974C;
                    width:50px;
                    height:50px;
                    border-radius:50%;
                    display:flex;
                    flex-direction:column;
                    margin-right:10px;
                    '>
                    </div>
                </div>

                <div style="
                           display:flex;
                           flex-direction:column;
                           margin-left:25px;   
                           margin-right:50px;
                "
                >
                    <div style='
                         font:roboto;
                    '>
                        <h5>Real Canadian Farmers</h5>
                        <p>Delivery</p>
                    </div>
                </div>

                <div>
                    <div
                    style="
                    display:flex;
                    Flex-direction:column;
                    margin-right:10px;
                    ">
                        <img style="height:15px;
                        width:15px;
                        " src="https://www.vhv.rs/dpng/d/216-2164367_next-track-right-arrow-forward-ui-comments-slider.png"/>
                    </div>
                </div>

       
        </div>`
}

// export const Delivery = DeliveryUI();
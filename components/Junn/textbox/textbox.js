function TextboxUI(text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis lacus, volutpat congue turpis at, blandit pulvinar est.Donec et gravida massa.Morbi facilisis ant e in tincidunt laoreet. Nunc fermentum lobortis faucibus. Donec ac massa sit amet mi faucibus egestas eget nec dolor. fermentum lobortis faucibus  est. Donec et onsectetu  massa. Morbi"){
    return `<div style='
    background-color:#545454;
    border-radius: 40px;
    min-height:400px;
    min-width:300px;
    display:inline-flex;
    color:white;
    justify-content:center;

    '>
    <div style='padding:20px;
    width:300px;
    font-size:20px;'><h1 style='
    font-size: 30px;
    '>
    Header </h1> ${text} </div>
    

    </div>`
    
}

export const Textbox = TextboxUI();
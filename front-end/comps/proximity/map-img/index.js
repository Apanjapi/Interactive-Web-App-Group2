function LocationMapUI(){
         return `
      <div style="
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
      ">
      <h1 style="
          color: black;
          font-family: Roboto;
        ">Farms close to you</h1>
        <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" 
          style="
          width: 400px;
          height: 300px;
          margin:10px;
          box-shadow: 5px 5px 5px grey;
          border: 2px solid black;

        "/>
        
      </div>
    `
}

// export const LocationMap = LocationMapUI();
function SearchBarUI()
{
    return `
      <div style="
        width: 300px;
        height: 30px;
        border-radius: 30px;
        border: 3px solid grey;
        background-color: white;
        display: flex;
        align-items: center;
      ">
        <div style="
          margin-left: 20px;
        ">
          <img src="http://simpleicon.com/wp-content/uploads/magnifier-2.png" style="
            width: 20px;
            height: 20px;
          ">
        </div>

        <div>
          <p style="
            color: grey;
            margin-left: 
          ">Find groceries!</p>
        </div>
      </div>
    `
}

export const SearchBar = SearchBarUI();
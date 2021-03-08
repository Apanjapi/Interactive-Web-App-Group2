function SearchBarUI()
{
    return `
      <div style="
        width: 300px;
        border-radius: 30px;
        border: 3px solid gre
      ">
        <div>
          <img src="http://simpleicon.com/wp-content/uploads/magnifier-2.png" style="
            width: 20px;
            height: 20px;
          ">
        </div>

        <div>
          <p>Find groceries!</p>
        </div>
      </div>
    `
}

export const SearchBar = SearchBarUI();
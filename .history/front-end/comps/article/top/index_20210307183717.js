function ArticleTopUI(){
  return `
    <div style="
      display: flex;
      flex-direction: column;
    ">
      <div class="top">
        <h3>Should you go vegan?</h3>
      </div>

      <div style="
        display: flex;
        flex-direction: row;
        border: 1px solid black;
      " class="middle">
        <div>
          <img src="https://med-fom-surgery.sites.olt.ubc.ca/files/2014/02/ChenJ2014-273x300.jpeg" style="border-radius: 50%; height: 90px"/>
        </div>
        <div>
          <p style="
            color: grey;
            font-weight: bold;
            margin-left: 15px;
          ">Dr. Mike Chen</p>
        </div>
      </div>

      <div class="bottom">
        <p style="
          font-family: italic;
        ">Published on August 26, 2021 at 05:00 am EST</p>
      </div>
    </div>
  `
}

export const ArticleTop = ArticleTopUI();
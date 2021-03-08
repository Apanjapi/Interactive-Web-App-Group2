function ArticleTopUI(){
  return `
    <div style="
      display: flex;
      flex-direction: column;
      width: 28vw;
    ">
      <div>
        <h3>Should you go vegan?</h3>
      </div>

      <div style="
        display: flex;
        flex-direction: row;
        align-items: center;
      ">
        <div>
          <img src="https://med-fom-surgery.sites.olt.ubc.ca/files/2014/02/ChenJ2014-273x300.jpeg" style="border-radius: 50%; height: 60px"/>
        </div>
        <div>
          <p style="
            color: grey;
            font-weight: bold;
            margin-left: 15px;
            font-family: Roboto;
          ">Dr. Mike Chen</p>
        </div>
      </div>

      <div>
        <p style="
          font-family: Roboto;
          font-style: italic;
          margin-left: 2px;
          margin-right: 2px;
        ">Published on August 26, 2021 at 05:00 am EST</p>
      </div>
    </div>
  `
}

// export const ArticleTop = ArticleTopUI();
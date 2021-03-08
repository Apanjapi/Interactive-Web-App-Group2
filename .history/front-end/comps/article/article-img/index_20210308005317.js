function ImageUI(){
    return `
      <div style="
        display: flex;
        flex-direction: column;
      ">
        <img src="https://images.theconversation.com/files/229615/original/file-20180727-106511-18ssguj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" style="
          width: 410px;
        "/>
        <p style="
          color: grey;
          font-size: 15px;
          font-style: italic;
        ">Image taken from vegan.com</p>
      </div>
    `
}

// export const Image = ImageUI();
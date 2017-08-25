import { lineColor, whiteColor, darkBaseColor, baseColor, fontLight, fontBold, addTransition, containerSmallMinWidth, containerMediumMinWidth, containerLargeMinWidth } from './configStyle'

export default `
a { color: #333; text-decoration: none;}
h1,h2,h3,h4{
    text-transform: uppercase;
}
hr{
    border: 1px ${lineColor} solid;
}
input,textarea,select{
    ${fontLight}
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    font-size: 1.5rem;
    border: 1px solid ${lineColor};
    outline: none;
    padding: 16px 20px;
    height: 60px;
    width: 100%;
    ${addTransition('border-color')};
}
textarea{
    height:180px;
}
select{
    width:100%;
    -webkit-appearance: none;
    border: 1px solid ${lineColor};
    border-radius: 0px;
    box-sizing: border-box;
    background-color:${whiteColor};
    cursor:pointer;
    
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 40px) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
}
button{cursor: pointer;}
button:focus {outline:0;}
.button{
    ${addTransition(`background-color`)}
    background-color:${darkBaseColor};
    padding:10px;
    display:inline-block;
    color:${whiteColor};
    cursor: pointer;
}
.button:hover{
    background-color:${baseColor};
}

body{    
    ${fontBold}
    font-style: normal;
    font-weight: 700;
    background: #fff;
    color: #333;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
}


/* main structure */
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}


/*input with pre-fix */
.input-group{
    position: relative;
    display: table;
    border-collapse: separate;
    
    .input-group-addon{
        display: table-cell;
        padding: 6px 12px;
        text-align: center;
        background-color: #eee;
        border: 1px solid $line-color;
    }
    .form-control{
        display: table-cell;
    }
    :first-child{
        border-right: 0;
        width: 1%;
    }
    :not(:first-child){
        width:100%;
    }
}

@media (min-width: ${containerSmallMinWidth} ){
    .container {
        width: 750px;
    }
}
@media (min-width: ${containerMediumMinWidth}){
  .container {
      width: 970px;
  }
}
@media (min-width: ${containerLargeMinWidth}){
  .container {
      width: 1170px;
  }
}

.container-full{
    width:100%;
}
`
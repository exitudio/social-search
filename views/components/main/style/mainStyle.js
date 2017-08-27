import React from 'react'
import * as ConfigStyle from './configStyle'
export default () => <style jsx global>{`
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: ${ConfigStyle.containerSmallMinWidth} ){
        .container {
            width: ${ConfigStyle.containerSmallWidth};
        }
    }
    @media (min-width: ${ConfigStyle.containerMediumMinWidth}){
        .container {
            width: ${ConfigStyle.containerMediumWidth};
        }
    }
    @media (min-width: ${ConfigStyle.containerLargeMinWidth}){
        .container {
            width: ${ConfigStyle.containerLargeWidth};
        }
    }


/*** component */
    /* input */
    input{
        ${ConfigStyle.inputStyle}
    }
    input:focus{
        border-color: ${ConfigStyle.blueDark};
    }
    
    /* button */
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        ${ConfigStyle.addTransition(['color','background-color'])};
        padding: 14px 26px;
        ${ConfigStyle.borderStyle}
        cursor: pointer;
        
        background-color: ${ConfigStyle.blueDark};
        border-color: ${ConfigStyle.blueDark};
        color: white;
        width:fit-content;
    }
    .button .disable{
        opacity: 0.3;
        cursor: default;
    }
    .button:not(.disable):hover{
        background-color: ${ConfigStyle.blueLight};
        border-color: ${ConfigStyle.blueLight};
        color: white;
    }

    /* dropdown */
    select.dropdown{
            ${ConfigStyle.inputStyle}
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url('/static/images/dropdown-arrow.jpg');
            background-repeat: no-repeat;
            background-position: right 10px top 24px;
            padding:4px;
            cursor: pointer;
            width: 100%;
        }
    }

    `}</style>
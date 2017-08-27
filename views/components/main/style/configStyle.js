export const grayMid = `#c3cad0`
export const grayDark = `#7b8a99`

export const blueLight = `#00aaff`
export const blueDark = `#0076ff`


export const containerSmallWidth = `750px`
export const containerMediumWidth = `970px`
export const containerLargeWidth = `1170px`

export const containerSmallMinWidth = `768px`
export const containerMediumMinWidth = `992px`
export const containerLargeMinWidth = `1200px`

export const animateTime = '.3s'
export const addTransition = (variableName)=>{
    if( !Array.isArray(variableName) ){
        variableName = [variableName]
    }
    const genAnimate = ()=>{
        return variableName.map( variable=>`${variable} ${animateTime}  ease-out`)
    }
    return `-webkit-transition: ${genAnimate()};
            -moz-transition:    ${genAnimate()};
            -o-transition:      ${genAnimate()};
            transition:         ${genAnimate()};`
}

export const borderStyle = `
    border: 1px solid;
    border-radius: 0.2rem;
`

export const inputStyle = `
    ${addTransition('border-color')}
    ${borderStyle}
    background-color:white;
    border-color:${grayMid};
    color:${grayDark};

    height: 50px;
    font-size: 20px;
    padding:1px 6px 1px 6px;
    box-sizing: border-box;`


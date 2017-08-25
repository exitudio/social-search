export const lineColor = `#ddd`
export const whiteColor = `#fff`
export const darkBaseColor = `#761A26`
export const baseColor = `#444`
export const lightBaseColor = `#aaa`


export const fontLight = `font-family: "Chaparral W01",Georgia,Times,"Times New Roman",serif;`
export const fontBold = `font-weight: bold;
font-family: "Trade Gothic W01",Arial,Helvetica,sans-serif;`

export const containerSmallMinWidth = `768px`
export const containerMediumMinWidth = `992px`
export const containerLargeMinWidth = `1200px`

export const animateTime = .3
export function addTransition(variableName){
    return `-webkit-transition: ${variableName} ${animateTime}  ease-out ;
            -moz-transition:    ${variableName} ${animateTime}  ease-out ;
            -o-transition:      ${variableName} ${animateTime}  ease-out ;
            transition:         ${variableName} ${animateTime}  ease-out ;`
}
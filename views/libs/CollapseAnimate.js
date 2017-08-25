/***********************************
 ****** check transition type ******
 *********************************/
let transitionEndEventName = {'transition': 'transitionend'}

/*******
    constructor (props) {
        this.collapseAnimate = new CollapseAnimate()
    }
    componentDidMount(){
        this.collapseAnimate.startCollapseElement(this.nav, this.forceUpdate.bind(this))
        this.collapseButton.addEventListener("click",this.collapseAnimate.toggleCollpse)
    }
    render(){
        return <nav ref={(child)=>{this.nav = child}} style={ this.collapseAnimate.animateStyle }  >
    }
 *******/

export default class CollapseAnimate{
    static CLOSED = "closed"
    static OPEN = "open"
    static CLOSING = "closing"
    static OPENING = "opening"

    constructor() {
        this.state = { collapseState: CollapseAnimate.CLOSED }
        this.startHeight = "auto"
        this.divHeight = "0px"
        this.animateTime = ".3s"

        this.collapsingStyle = {
            "WebkitTransitionTimingFunction": "ease",
            "OTransitionTimingFunction": "ease",
            "transitionTimingFunction": "ease",
            "WebkitTransitionDuration": this.animateTime,
            "OTransitionDuration": this.animateTime,
            "transitionDuration": this.animateTime,
            "WebkitTransitionProperty": "height,visibility",
            "OTransitionProperty": "height,visibility",
            "transitionProperty": "height,visibility",
        }
    }

    startCollapseElement(_element, forceUpdateFunction) {
        this.collapseElement = _element
        this.forceUpdate = forceUpdateFunction

        // check correct implimentation.
        if (this.collapseElement == null) {
            function UserException(message) {
                this.message = message
                this.name = "UserException"
            }
            throw new UserException("collapseElement is null.")
        }
        // transition complete event
        this.collapseElement.addEventListener(transitionEndEventName, this.onTransitionComplete, false)
        // window resize event
        window.addEventListener("resize", this.updateDimensions)

        //console.log("componentDidMount")
        this.measureHeight()
    }

    stoptCollapseElement() {
        if (this.collapseElement) {
            this.collapseElement.removeEventListener(transitionEndEventName, this.onTransitionComplete, false)
        }
        window.removeEventListener("resize", this.updateDimensions)
    }

    toggleCollpse = () => {
        if (this.state.collapseState === CollapseAnimate.CLOSED || this.state.collapseState === CollapseAnimate.CLOSING) {
            this.state.collapseState = CollapseAnimate.OPENING
        } else if (this.state.collapseState === CollapseAnimate.OPEN || this.state.collapseState === CollapseAnimate.OPENING) {
            this.state.collapseState = CollapseAnimate.CLOSING
        }
        this.forceUpdate()
    }



    updateDimensions = () => {
        //If resize browser check height again
        //1. set height:auto
        //2. forceupdate (render)
        //3. mearure
        //4. render again
        this.startHeight = "auto"
        this.forceUpdate()
        this.measureHeight()
    }

    measureHeight() {
        // console.log("updateDimensions")
        this.divHeight = this.collapseElement.clientHeight + "px"
        this.startHeight = "0px"
        this.forceUpdate()
    }

    onTransitionComplete = () => {
        // console.log("end state : " + this.state.collapseState)
        if (this.state.collapseState === CollapseAnimate.OPENING) {
            this.state.collapseState = CollapseAnimate.OPEN
        } else if (this.state.collapseState === CollapseAnimate.CLOSING) {
            this.state.collapseState = CollapseAnimate.CLOSED
        }
    }


    get animateStyle() {
        //separate animation style set visibility:visible/hidden will got delay
        let style
        if (this.state.collapseState === CollapseAnimate.OPENING || this.state.collapseState === CollapseAnimate.CLOSING) {
            style = this.collapsingStyle
        } else {
            style = {}
        }
        let obj = {
            ...style,
            position: "relative",
            overflow: "hidden", //overflow:hidden is require for make the lower div in the correct position
            visibility: this.state.collapseState === CollapseAnimate.CLOSED || this.state.collapseState === CollapseAnimate.CLOSING ? "hidden" : "visible",
            height: this.startHeight === "auto" || this.state.collapseState === CollapseAnimate.CLOSED || this.state.collapseState === CollapseAnimate.CLOSING ? this.startHeight : this.divHeight
        }
        return obj
    }
}
import React from 'react'
import Link from 'next/link'
import {baseColor, lightBaseColor, containerSmallMinWidth} from './style/configStyle'

import CollapseAnimate from '../../libs/CollapseAnimate'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.state, isMenuMoving: true }
        this.menuTopPx = 50
        this.collapseAnimate = new CollapseAnimate()
        //style
        this.headerHeight = '100px'
    }

    componentDidMount() {
        // super.setCollapseElement(this.nav)
        // super.componentDidMount()
        this.collapseAnimate.startCollapseElement(this.nav, this.forceUpdate.bind(this))
        this.collapseButton.addEventListener("click", this.collapseAnimate.toggleCollpse)

        window.addEventListener("scroll", (event) => {
            var isMenuMoving = (event.srcElement.body.scrollTop < this.menuTopPx)
            if (this.state.isMenuMoving !== isMenuMoving) {
                this.setState({ ...this.state, isMenuMoving })
            }
        })
    }
    componentWillUnmount() {
        this.collapseAnimate.stoptCollapseElement()
    }
    scrollState() {
        return this.state.isMenuMoving ? "" : "floating-menu"
    }

    render() {
        return (
            <div className="header-container">
                <div className={`header-fullwidth-container ${this.scrollState()}`}>
                    <div className={`container`}>
                        <div className="page-header">
                            <div className="navbar-header">
                                <div className="brand-wrapper">
                                    <Link href="/">
                                        <a>
                                            <img alt="" className="brand-icon" src="/static/main/images/exit.jpg" />
                                        </a>
                                    </Link>
                                </div>
                                <button ref={(child) => { this.collapseButton = child }} type="button" className="hamburger-toggle collapsed">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <nav ref={(child) => { this.nav = child }} style={this.collapseAnimate.animateStyle}  >
                                <ul className="navbar">
                                    <li> <Link href="/"><a>home</a></Link> </li>
                                </ul>
                                <ul className="navbar navbar-right">
                                    <li> <Link href="/signup"><a>Right-Button</a></Link> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    /*default menu */
                    .navbar-brand {
                        float: left;
                        padding: 15px 15px;
                        font-size: 18px;
                        line-height: 20px;
                    }
                    .navbar {
                        margin: 4px -15px;
                        padding-left: 0;
                        margin-bottom: 0;
                        list-style: none;
                    }
                    .navbar li a {
                        position: relative;
                        display: block;
                        padding: 10px 15px;
                    }

                    nav{
                        visibility: hidden;
                        padding: 0px 15px 0 15px;
                        overflow-x: visible;
                        overflow-y: auto;
                        height: auto;
                        background-color:white;
                    }
                    nav a{
                        text-transform: uppercase;
                        font-size: 1.1875rem;
                        color:${baseColor};
                    }
                    nav.collapsing{
                        position: relative;
                        overflow: hidden;
                    }



                    /* hamburger */
                    .hamburger-toggle {
                        position: relative;
                        float: right;
                        padding: 9px 10px;
                        margin-top: 8px;
                        margin-right: 15px;
                        margin-bottom: 8px;
                        background-color: transparent;
                        background-image: none;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        border-color: #fff;
                    }
                    .hamburger-toggle:hover {
                        background-color: #ddd;
                    }
                    .hamburger-toggle .icon-bar {
                        display: block;
                        width: 22px;
                        height: 2px;
                        border-radius: 1px;
                        background-color: #555;
                    }
                    .hamburger-toggle .icon-bar+.icon-bar {
                        margin-top: 4px;
                    }

                    .brand-wrapper{
                        float:left;
                        position:relative;
                        text-align: left;
                    }
                    .brand-icon{
                        height:60px;
                        @include addTransition(height);
                    }


                    /* make menu get height properly*/
                    nav:after,nav:before, .navbar-header:before,.navbar-header:after, .container:before,.container:after{
                        display: table;
                        content: " ";
                        clear: both;
                    }

                    .header-container{
                        width:100%;
                        height: 50px;
                        overflow:visible;
                        margin-bottom: 40px;
                    }
                    .header-fullwidth-container{
                        height: ${this.headerHeight};
                        position: fixed;
                        top: 0;
                        left:0;
                        right:0;
                        z-index: 500;
                        width: 100%;
                        height: 50px;
                        border-bottom: 1px solid ${lightBaseColor}
                    }
                

                    @media (min-width: ${containerSmallMinWidth} ){
                        nav{
                            padding: 50px 15px 0 15px;
                            border-top: 0px;
                            display: block!important;
                            visibility: visible!important;
                            height: auto!important;
                            background-color:transparent;
                        }
                        .navbar {
                            float: left;
                        }
                        .navbar>li {
                            float: left;
                        }
                        .navbar-right {
                            float: right!important;
                            margin-right: -15px;
                        }
                        .navbar-header {
                            float: left;
                        }
                        .hamburger-toggle{
                            display: none;
                        }


                        .header-container{
                            height:${this.headerHeight};
                            width:100%;
                            overflow:visible;
                        }
                        .header-fullwidth-container{
                            width: 100%;
                            height: ${this.headerHeight};
                            position:absolute;
                            left:0;
                            right:0;
                        }
                        .brand-icon{
                            height:130px;
                        }

                        /*floating-menu*/
                        .floating-menu{
                            position: fixed;
                            top: 0;
                            left:0;
                            right:0;
                            z-index: 500;
                            height: 50px;
                        }
                        .floating-menu nav{
                            padding: 0px 15px 0 15px;
                        }
                        .floating-menu .brand-icon{
                            height:86px;
                        }
                        .floating-menu .header-fullwidth-container{
                            height: 50px;
                            position:fixed;
                        }
                        
                    }


                `}
                </style>
            </div>
        )
    }
}
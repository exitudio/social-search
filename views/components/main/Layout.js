import React from 'react'
// import Header from './Header'
import MainStyle from './style/MainStyle'
export default class Index extends React.Component{
    componentDidMount(){
        //non blocking load font : https://github.com/zeit/next.js/issues/512 
        const link = document.createElement('link')
        link.href = 'https://fonts.googleapis.com/css?family=Lato'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
    }
    render(){
        return <div>
                {/* <Header></Header> */}
                {this.props.children}
                <MainStyle/>
            </div>
    }
}
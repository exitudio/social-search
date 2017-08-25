import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {initStore} from '../../redux/store'
import { add } from '../../redux/action'

export class Display extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    clickMe = () => {
        // console.log(initStore)
        this.props.dispatch(add())
    }
    render(){
        return <div onClick={this.clickMe} style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
            <div>{this.props.title}</div>
            <Content text='abc'/>
        </div>
    }
}
Display.propTypes = {
    title: PropTypes.string
}

const Content = props=><div>
    <div>content1</div>
    <div>content2</div>
    <div>{props.text}</div>
</div>

const mapStateToProps = state => state
export default connect(mapStateToProps)(Display)
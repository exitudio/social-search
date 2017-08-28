import React from 'react'
import PropTypes from 'prop-types'
import * as ConfigStyle from '~/views/components/main/style/configStyle'

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {isOver:false}
    }
    shouldComponentUpdate( nextProps, nextState){
        return nextProps.selected !== this.props.selected || nextState.isOver !== this.state.isOver
    }
    onClick = e=>{
        this.props.onClick()
    }
    onMouseOver = e=>{
        this.setState({...this.state, isOver:true})
    }
    onMouseLeave = e=>{
        this.setState({...this.state, isOver:false})
    }

    getHighlight = ()=>{
        if( this.state.isOver ) return 'over'
        else if(this.props.selected ) return 'selected'
        return ''
    }
    render(){
        return <li onClick={this.onClick} 
                   onMouseOver={this.onMouseOver} 
                   onMouseLeave={this.onMouseLeave} 
                   className={`item ${this.getHighlight()}`}>
                    <div className="item-text">
                        {this.props.children}
                    </div>
                    <style jsx>{`
                        .item{
                            {/* ${ConfigStyle.addTransition('background-color')} */}
                            width: 100%;
                            height: 51px;
                        }
                        .item.selected{
                            background-color: ${ConfigStyle.blueLight}
                            color: white
                        }
                        .item.over{
                            background-color: ${ConfigStyle.blueDark}
                            color: white
                        }
                        .item-text{
                            margin: 0 20px;
                            border-top: 1px solid;
                            border-color:${ConfigStyle.grayMid};
                            line-height: 50px;
                            box-sizing: border-box;
                        }
                        .item.selected .item-text, .item.over .item-text{
                            border: none;
                        }`}</style>
                </li> 
    }
}
export default Item

Item.propTypes = {
    selected: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
}
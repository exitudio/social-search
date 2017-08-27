import React from 'react'
import PropTypes from 'prop-types'
export default class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            ...this.state,
            value: nextProps.value
        })
    }
    onChange = e=>{
        if(this.props.onChange){
            this.props.onChange(e.target.value)
        }
        this.setState({
            ...this.state,
            value: e.target.value,
        })
    }
    render(){
        return <select className={`${this.props.className || ''} dropdown`} onChange={this.onChange} value={this.state.value}>
                    {this.props.dataArray.map( (data, i)=>{
                        return <option value={data.value} key={i}>{data.name}</option>
                    })}
                </select>
    }
}
Dropdown.propTypes = {
    className: PropTypes.string,
    dataArray: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]).isRequired,
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
    })).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    onChange: PropTypes.func,
}
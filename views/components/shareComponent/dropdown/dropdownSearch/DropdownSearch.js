import React from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import * as ConfigStyle from '~/views/components/main/style/configStyle'
import Item from './Item'

class DropdownSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSearching: false,
            selectedItem: -1,
            searchText: '',
        }
    }
    componentWillReceiveProps(nextProps) {

    }
    onClickSearch = () => {
        this.setState({ ...this.state, isSearching: true })
    }
    onItemClick = (i, item, e) => {
        this.setState({
            ...this.state,
            isSearching: false,
            selectedItem: i,
            searchText: item.name,
        })
    }
    onChangeText = e => {
        this.props.onSearchChange(e.target.value)
        this.setState({ ...this.state, searchText: e.target.value })
    }

    handleClickOutside = e => {
        this.setState({ ...this.state, isSearching: false })
    }

    onKeyDown = e=>{
        if(e.keyCode===38){
            // arrow up
            let nextSelectIndex = this.state.selectedItem - 1
            if(nextSelectIndex<0){
                nextSelectIndex = this.props.data.length-1
            }
            this.setState({ ...this.state, searchText: this.props.data[nextSelectIndex].name, selectedItem:nextSelectIndex })
        }else if(e.keyCode===40){
            // arrow down
            let nextSelectIndex = this.state.selectedItem + 1
            if(nextSelectIndex > this.props.data.length -1 ){
                nextSelectIndex = 0
            }
            this.setState({ ...this.state, searchText: this.props.data[nextSelectIndex].name, selectedItem:nextSelectIndex })
        }else if(e.keyCode===13){
            // enter
            this.setState({ ...this.state, searchText: this.props.data[this.state.selectedItem].name, isSearching: false })
        }
    }

    getSearchState = () => {
        if (!this.state.isSearching) {
            const showNode = this.props.data[this.state.selectedItem] ? this.props.data[this.state.selectedItem].node : ''
            return <div className="head-text" onClick={this.onClickSearch}>{showNode}</div>
        } else {
            return <div>
                <input ref={child => this.inputSearch}
                    onChange={this.onChangeText}
                    value={this.state.searchText}
                    autoFocus />
                <ul className="items-wrapper">
                    {this.props.data.map((item, i) => {
                        return <Item key={i}
                            selected={i === this.state.selectedItem}
                            onClick={this.onItemClick.bind(this, i, item)}>{item.node}</Item>
                    })}
                </ul>
            </div>
        }
    }
    render() {
        return <div className="dropdown-container" onKeyDown={this.onKeyDown}>
                    <div className="dropdown-search">
                        {this.getSearchState()}
                    </div>
                    <style jsx>{`
                        .dropdown-container{
                            width:100%;
                            height:50px;
                            position: relative;
                        }
                        .dropdown-search{
                            ${ConfigStyle.inputStyle}
                            padding: 0;
                            background-image: url('/static/images/dropdown-arrow.jpg');
                            background-repeat: no-repeat;
                            background-position: right 10px top 24px;
                            height:auto;
                            position: absolute;
                            z-index: 100;
                            left:0;
                            right:0;
                        }
                        .dropdown-search :global(.head-text){
                            cursor: pointer;
                            padding:1px 6px 1px 6px;
                            height:48px;
                            line-height: 48px; 
                            box-sizing: border-box;
                        }
                        .dropdown-search :global(input){
                            border: none;
                            {/* border-bottom: 1px solid; */}
                            height: 48px;
                            width: 100%;
                        }
                        .dropdown-search :global(.items-wrapper){
                            cursor: pointer;
                        }
                    `}</style>
                </div>
    }
}
export default onClickOutside(DropdownSearch)


DropdownSearch.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                    PropTypes.bool,
                    PropTypes.node
                ]).isRequired,
            node:PropTypes.node.isRequired
        })
    ).isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
}
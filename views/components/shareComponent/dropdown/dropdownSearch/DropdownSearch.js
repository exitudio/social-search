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
            selectedItem: null,
            cursorIndex: -1,
            searchText: '',
        }
    }

    onClickSearch = () => {
        // this.props.onSearchChange( this.state.searchText, true )
        this.setState({ ...this.state, isSearching: true, })
    }
    onItemClick = (i, item, e) => {
        this.props.onSelect(i)
        this.setState({
            ...this.state,
            isSearching: false,
            selectedItem: this.props.data[i],
            cursorIndex: i,
            searchText: item.name,
        })
    }
    onChangeText = e => {
        this.props.onSearchChange(e.target.value)
        this.setState({ ...this.state, searchText: e.target.value, cursorIndex: -1, })
    }

    quit = ()=>{
        this.setState({ ...this.state, isSearching: false,})
    }

    onKeyDown = e=>{
        console.log(e.keyCode)
        if(e.keyCode===38){
            // arrow up
            e.preventDefault()
            let nextCursorIndex = this.state.cursorIndex - 1
            if(nextCursorIndex<0){
                nextCursorIndex = this.props.data.length-1
            }
            this.setState({ ...this.state, searchText: this.props.data[nextCursorIndex].name, cursorIndex:nextCursorIndex })
        }else if(e.keyCode===40){
            // arrow down
            e.preventDefault()
            let nextCursorIndex = this.state.cursorIndex + 1
            if(nextCursorIndex > this.props.data.length -1 ){
                nextCursorIndex = 0
            }
            this.setState({ ...this.state, searchText: this.props.data[nextCursorIndex].name, cursorIndex:nextCursorIndex })
        }else if(e.keyCode===13){
            // enter
            if( this.state.cursorIndex > -1 ){
                this.props.onSelect(this.state.cursorIndex)
                this.setState({ 
                    ...this.state, 
                    selectedItem: this.props.data[this.state.cursorIndex],
                    searchText: this.props.data[this.state.cursorIndex].name, 
                    isSearching: false 
                })
            }
        }else if(e.keyCode===27){
            // escape
            this.quit()
        }
    }

    getSearchState = () => {
        if (!this.state.isSearching) {
            const showNode = this.state.selectedItem ? this.state.selectedItem.node : this.state.searchText
            return <div className="head-text" onClick={this.onClickSearch}>{showNode}</div>
        } else {
            //add click out side function
            const getWrapperClass = ()=>this.props.data.length>0?'list':''
            const _this = this
            class searchDiv extends React.Component{
                handleClickOutside = e => {
                    _this.quit()
                }
                render(){
                    return <div>
                                <input ref={child => { 
                                        if(child){
                                            console.log(child.value)
                                            child.selectionStart = child.selectionEnd = child.value.length
                                        }
                                    }}
                                    onChange={_this.onChangeText}
                                    value={_this.state.searchText}
                                    autoFocus />
                                <ul className={`items-wrapper ${getWrapperClass()}`}>
                                    {_this.props.data.map((item, i) => {
                                        return <Item key={i}
                                            selected={i === _this.state.cursorIndex}
                                            onClick={_this.onItemClick.bind(_this, i, item)}>{item.node}</Item>
                                    })}
                                </ul>
                            </div>
                }
            }
            const ClickOutside = onClickOutside(searchDiv)
            return <ClickOutside/>
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
                            height:54px;
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
                            height:52px;
                            line-height: 52px; 
                            box-sizing: border-box;
                            font-size: 20px;
                        }
                        .dropdown-search :global(input){
                            border: none;
                            height: 52px;
                            width: 100%;
                            {/* font-family: Helvetica, Arial, sans-serif !important; */}
                            font-size:20px;
                        }
                        .dropdown-search :global(.items-wrapper){
                            cursor: pointer;
                        }
                        .dropdown-search :global(.items-wrapper.list){
                            padding-bottom: 20px;
                        }
                    `}</style>
                </div>
    }
}
export default DropdownSearch


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
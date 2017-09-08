import React from 'react'
import {connect} from'react-redux'
import {bindActionCreators} from 'redux'
import {searchPostAction} from './redux/fbPostAction'
import InputText from '~/views/components/shareComponent/inputText/InputText'
import Button from '~/views/components/shareComponent/button/Button'
import DropdownPagesPeople from './DropdownPagesPeople'
import Posts from './Posts'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchText: '',
        }
    }
    onSearchChange = text=>{
        this.setState({
            ...this.state,
            searchText: text,
        })
    }
    onSearchClick = e=>{
        this.props.searchPostAction(this.state.searchText)
    }
    onKeyDown = e=>{
        if(e.keyCode===13){
            this.onSearchClick()
        }
    }
    render(){
        return <div className="index-page">
                    <div style={{height:'100px'}}/>
                    <DropdownPagesPeople/>
                    <div style={{height:'20px'}}/>
                    <div className="search-wrapper">
                        <InputText className="input-text" onKeyDown={this.onKeyDown} onChange={this.onSearchChange} value={this.state.searchText}/>
                        <Button className="search-button" onClick={this.onSearchClick}>Search</Button>
                    </div>
                    <Posts/>
                    <style jsx>{`
                        .search-wrapper{
                            display: flex;
                        }
                        .index-page :global( .input-text){
                            width: 100%;
                            flex-grow: 1;
                        }
                        .index-page :global( .search-button){
                            margin-left: 2px;
                        }
                        `}</style>
                </div>
    }
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators({searchPostAction}, dispatch)
}
export default connect(null,mapDispatchToProps)(Search)
import React from 'react'
import InputText from '~/views/components/shareComponent/inputText/InputText'
import Button from '~/views/components/shareComponent/button/Button'
import DropdownPagesPeople from './DropdownPagesPeople'
import Posts from './Posts'

export default class Search extends React.Component{
    componentDidMount(){
    }
    render(){
        return <div className="index-page">
                    <div style={{height:'100px'}}/>
                    <DropdownPagesPeople/>
                    <div style={{height:'20px'}}/>
                    <div className="search-wrapper">
                        <InputText className="input-text">s</InputText>
                        <Button className="search-button" onClick={this.login}>Search</Button>
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
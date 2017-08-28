import React from 'react'
import styled from 'styled-components'
import Layout from '~/views/components/main/Layout'
import withRedux from 'next-redux-wrapper'
import { initStore} from '~/views/redux/store'

// import Display from '../views/components/index/Display'
import InputText from '~/views/components/shareComponent/inputText/InputText'
import Button from '~/views/components/shareComponent/button/Button'
import Dropdown from '~/views/components/shareComponent/dropdown/Dropdown'

class Search extends React.Component{
    componentDidMount(){
    }
    render(){
        const SearchContainer = styled.div`
            .search-wrapper{
                display: flex;
                .input-text{
                    width: 100%;
                    flex-grow: 1;
                }
                .search-button{
                    margin-left: 2px;
                }
            }
        `
        return <div className="container index-page">
                    <div style={{height:'100px'}}/>
                    <Dropdown dataArray={[
                                            {name:'a',value:'a'},
                                            {name:'b',value:'b'},
                                            {name:'c',value:'c'}
                                        ]}/>
                    <div style={{height:'20px'}}/>
                    <div className="search-wrapper">
                        <InputText className="input-text">s</InputText>
                        <Button className="search-button" onClick={this.login}>Search</Button>
                    </div>
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
Search.getInitialProps = (props)=>{
    // console.log(props)
    // {store, isServer, pathname, query}
    // return {}
}
export default withRedux(initStore)(Search)
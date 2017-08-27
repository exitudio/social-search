import React from 'react'
import Layout from '~/views/components/main/Layout'
import withRedux from 'next-redux-wrapper'
import { initStore} from '~/views/redux/store'

// import Display from '../views/components/index/Display'
import InputText from '~/views/components/shareComponent/inputText/InputText'
import Button from '~/views/components/shareComponent/button/Button'
import Dropdown from '~/views/components/shareComponent/dropdown/Dropdown'

import FBLogin from '~/views/libs/facebookGraphAPI/FBLogin'
import FBFeed from '~/views/libs/facebookGraphAPI/FBFeed'

class Search extends React.Component{
    componentDidMount(){
        this.fbLogin = new FBLogin('1956718501021643', this.loggedIn, this.notLoggedIn)
        this.fbFeed = new FBFeed(this.fbLogin)
    }
    login= e=>{
        this.fbLogin.login(this.loggedIn)
    }
    loggedIn = ()=>{
        console.log('logged in : ',this.fbLogin)
        // this.fbFeed.test()
    }
    notLoggedIn = ()=>{
        console.log('not logged in : ',this.fbLogin)
    }
    render(){
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
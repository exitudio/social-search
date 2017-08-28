import React from 'react'
import { reduxPage } from '../views/redux/store'

import Layout from '~/views/components/main/Layout'
import Button from '~/views/components/shareComponent/button/Button'
import Search from '~/views/components/index/search/Search'
import DropdownPagesPeople from '~/views/components/index/search/DropdownPagesPeople'

import FBLogin from '~/views/libs/facebookGraphAPI/FBLogin'
import FBFeed from '~/views/libs/facebookGraphAPI/FBFeed'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status: FBLogin.CHECKING
        }
    }
    componentDidMount() {
        this.fbLogin = new FBLogin('1245609988878153', this.onFBStatusChanged) //'1956718501021643'
        this.fbFeed = new FBFeed(this.fbLogin)
    }
    login = e => {
        this.fbLogin.login()
    }
    logout = e =>{
        this.fbLogin.logout()
    }
    test = ()=>{
        this.fbFeed.test()
    }

    onFBStatusChanged = status => {
        this.setState({...this.state, status })
    }

    loginOrSearch = ()=>{
        console.log('status', this.state)
        if(this.state.status === FBLogin.CONNECTED){
            return <div>
                <Search/>
                <Button onClick={this.test}/>
            </div>
        }else if(this.state.status === FBLogin.NOT_AUTHORIZED){
            return <Button className="flex-child login-button" onClick={this.login}>Search Facebook</Button>
        }else if(this.state.status === FBLogin.CHECKING){
            return <Button className="flex-child login-button" disable>Checking Login</Button>
        }
    }

    render() {
        return <Layout>
            <div className="container">
                <div className="landing">
                    <img src="/static/images/googlelogo_color_272x92dp.png" alt="" className="flex-child logo-icon"/>
                    <DropdownPagesPeople/>
                    {this.loginOrSearch()}
                </div>
            </div>
                    <style jsx>{`
                                .landing{
                                    display: flex;
                                    flex-direction: column;
                                    margin-top: 89px;
                                }
                                .space{
                                    height: 200px;
                                }
                                .landing :global(.flex-child){
                                    align-self: center;
                                }
                                .logo-icon{
                                    padding-top: 109px;
                                }
                                .landing :global(.login-button){
                                    margin-top: 40px;
                                }
                            `}</style>
        </Layout>
    }
}
Index.getInitialProps = (props) => {
    // console.log(props)
    // {store, isServer, pathname, query}
    // return {}
}
export default reduxPage(Index)
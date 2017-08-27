import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../views/redux/store'

import Layout from '~/views/components/main/Layout'
import Button from '~/views/components/shareComponent/button/Button'
import Search from '~/views/components/index/Search'

import FBLogin from '~/views/libs/facebookGraphAPI/FBLogin'
import FBFeed from '~/views/libs/facebookGraphAPI/FBFeed'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status: FBLogin.NOT_AUTHORIZED
        }
    }
    componentDidMount() {
        this.fbLogin = new FBLogin('1956718501021643', this.loggedIn, this.notLoggedIn)
        this.fbFeed = new FBFeed(this.fbLogin)
    }
    login = e => {
        this.fbLogin.login(this.loggedIn)
    }
    loggedIn = () => {
        console.log('logged in : ', this.fbLogin)
        // this.fbFeed.test()
        this.setState({...this.state, status: this.fbLogin.status })
    }
    notLoggedIn = () => {
        console.log('not logged in : ', this.fbLogin)
        this.setState({...this.state, status: this.fbLogin.status })
    }

    loginOrSearch = ()=>{
        console.log('status', this.state)
        if(this.state.status === FBLogin.CONNECTED){
            return <Search/>
        }
        return <Button className="flex-child login-button">Search Facebook</Button>
    }

    render() {
        return <Layout>
            <div className="container">
                <div className="landing">
                    <img src="/static/images/googlelogo_color_272x92dp.png" alt="" className="flex-child logo-icon"/>
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
export default withRedux(initStore)(Index)
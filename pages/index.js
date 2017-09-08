import React from 'react'
import {connect} from 'react-redux'
import { reduxPage } from '../views/redux/store'

import Layout from '~/views/components/main/Layout'
import Button from '~/views/components/shareComponent/button/Button'
import Search from '~/views/components/index/search/Search'


import FBFeed from '~/views/libs/facebookGraphAPI/FBFeed'

import * as LoginAction from '~/views/components/index/redux/logInAction'

class Index extends React.Component {
    componentDidMount() {
        this.props.dispatch(LoginAction.initOnceAction())
        this.fbFeed = new FBFeed(this.fbLogin)
    }
    login = e => {
        LoginAction.loginAction()
    }
    loginOrSearch = ()=>{
        if(this.props.status === LoginAction.CONNECTED){
            return <Search/>
        }else if(this.props.status === LoginAction.NOT_AUTHORIZED){
            return <Button className="flex-child login-button" onClick={this.login}>Search Facebook</Button>
        }else if(this.props.status === LoginAction.CHECKING){
            return <Button className="flex-child login-button" disable>Checking Login</Button>
        }
    }

    render() {
        return <Layout>
            <div className="container">
                <div className="landing">
                    <img src="/static/images/googlelogo_color_272x92dp.png" alt="" className="flex-child logo-icon"/>
                </div>
            </div>
                {this.loginOrSearch()}
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
const mapStateToProps = state=>({
    status: state.loginReducer.status
})
export default reduxPage(connect(mapStateToProps)(Index))
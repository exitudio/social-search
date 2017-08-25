import React from 'react'
import Layout from '../views/components/main/Layout'
import withRedux from 'next-redux-wrapper'
import { initStore} from '../views/redux/store'

import Display from '../views/components/index/Display'

const Index = ()=>(
    <Layout>
        <div className="container">aa
            <Display></Display>
        </div>
    </Layout>
)
Index.getInitialProps = (props)=>{
    // console.log(props)
    // {store, isServer, pathname, query}
    // return {}
}
export default withRedux(initStore)(Index)
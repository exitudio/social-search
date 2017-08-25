import React from 'react'
import Header from './Header'
import mainStyle from './style/mainStyle'
export default (props) => (
    <div>
        <Header></Header>
        {props.children}
        
        <style jsx global>{mainStyle}</style>
    </div>
)
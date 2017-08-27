import React from 'react'
export default class LandingPage extends React.Component{

    render(){
        return <div className="landing">
                    <img src="/static/images/googlelogo_color_272x92dp.png" alt="" className="flex-child" style={{paddingTop: "109px"}}/>
                    <style jsx>{`
                            .landing{
                                display: flex;
                                flex-direction: column;
                            }
                            .space{
                                height: 200px;
                            }
                            .flex-child{
                                align-self: center;
                            }
                        `}</style>
                </div>
    }
}
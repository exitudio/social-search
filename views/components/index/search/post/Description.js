import React from 'react'
import PropTypes from 'prop-types'

export default class Description extends React.Component {
    static clipMessageLength = 300
    constructor(props){
        super(props)
        const isFullText = this.setMessageProps(this.props.message)
        this.state = {
            isFullText: isFullText
        }
    }
    setMessageProps = message =>{
        this.message = message
        this.clipMessage = message
        if(message){
            this.clipMessage = message ? message.substring(0, Description.clipMessageLength)+'...' : ''
        }
        return message ? message.length <= Description.clipMessageLength : true
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.message !== this.props.message){
            const isFullText = this.setMessageProps(nextProps.message)
            this.setState({...this.state, isFullText})
        }
    }
    onSeeMore = e=>{
        this.setState({...this.state, isFullText:true})
    }
    getText = ()=>{
        if(this.state.isFullText){
            return this.message
        }else{
            return <div>
                        {this.clipMessage}
                        <span className="see_more_link_inner" onClick={this.onSeeMore}>See more</span>
                    </div>
        }
    }
    render() {
        return <div className="description">
                    {this.getText()}
                    <style jsx>{`
                            .description{
                                font-size: 14px;
                                font-weight: normal;
                                line-height: 1.38;
                                word-wrap: break-word;
                                white-space: pre-line;
                            }
                            .description :global(.see_more_link_inner){
                                color: #365899;
                                cursor: pointer;
                            }
                            .description :global(.see_more_link_inner:hover){
                                text-decoration: underline;
                            }
                    `}</style>
                </div>
    }
}

Description.propTypes = {
    message: PropTypes.string
}
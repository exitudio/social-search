import React from 'react'
import * as ConfigStyle from '~/views/components/main/style/configStyle'
import InputText from '~/views/components/shareComponent/inputText/InputText'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {gotoPage, nextPage, prevPage} from '../../redux/fbPostAction'
class Navigator extends React.Component{
    constructor(props){
        super(props)
        this.isCurrentPageChange = true
        this.state = {
            pageValue: this.props.currentPage
        }
    }
    componentWillReceiveProps = nextProps=>{
        if(this.props.currentPage !== nextProps.currentPage ){
            this.setState({
                ...this.state,
                pageValue: nextProps.currentPage+1
            })
        }
    }

    inputPageChange = e=>{
        this.setState({
            ...this.state,
            pageValue: e.target.value,
        })
    }

    clickNavPage = page=>{
        this.props.gotoPage(page)
    }
    onClickNext = ()=>{
        this.props.nextPage()
    }
    onClickPrev = ()=>{
        this.props.prevPage()
    }
    getPageButtons = ()=>{
        let startIndex = this.props.currentPage - 3 < 0 ? this.props.currentPage : this.props.currentPage - 3
        let endIndex =  startIndex + 6 > this.props.totalPage ? this.props.totalPage : startIndex + 6
        let buttons = []

        for(let i=startIndex; i<=endIndex; i++){
            buttons.push(<div className={`button${i===this.props.currentPage?' selected':''}`} 
                                key={i} onClick={this.clickNavPage.bind(this, i)}>
                                {i+1}
                        </div>)
        }
        return buttons
    }
    onSubmit = e=>{
        e.preventDefault()
        console.log( this.textInput.getValue() )
        this.props.gotoPage( this.textInput.getValue() - 1 )
    }
    render(){
        return <div>
            <div className="nav">
                <div className="button" onClick={this.onClickPrev}>{'<'}</div>
                {this.getPageButtons()}
                <div className="button" onClick={this.onClickNext}>></div>
            </div>
            <form className="nav" onSubmit={this.onSubmit}>
                <div className="text">Goto Page</div>
                <InputText ref={child=>this.textInput = child} className="page-input" onChange={this.inputPageChange} value={this.state.pageValue}/>
                <div className="text">/{this.props.totalPage}</div>
                <input type="submit" className={`button`} value="GO"></input>
            </form>
            <style jsx>{`
                .nav{
                    width:100%;
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    margin-top:10px;
                }
                .nav :global(.selected){
                    background-color:${ConfigStyle.blueLight}
                    border-color:${ConfigStyle.blueLight}
                }
                .nav :global(.button){
                    padding: 14px;
                }
                .text{
                    font-size: 20px;
                    padding: 10px;
                    color: ${ConfigStyle.grayDark}
                }
                .nav :global(.page-input){
                    text-align: right;
                    width:50px;
                }
                .nav :global(input[type=submit]){
                    font-size: 100%;
                }
                `}</style>
        </div>
    }
}
const mapStateToProps = state=>{
    return {
        currentPage: state.fbPostReducer.currentPage,
        totalPage: state.fbPostReducer.totalPage,
    }
}
const mapDispatchToProps = dispatch=>{
    return bindActionCreators({gotoPage, nextPage, prevPage}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
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
            pageValue: this.props.currentPage + 1
        }
    }
    componentWillReceiveProps = nextProps=>{
        console.log('this.props.currentPage !== nextProps.currentPage:',this.props.currentPage , nextProps.currentPage)
        if(this.props.currentPage !== nextProps.currentPage ){
            this.setState({
                ...this.state,
                pageValue: nextProps.currentPage+1
            })
        }
    }

    inputPageChange = value=>{
        this.setState({
            ...this.state,
            pageValue: value,
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
        let startIndex = this.props.currentPage > 3 ? this.props.currentPage-3 : 0
        let endIndex
        if(startIndex + 6 < this.props.totalPage-1){
            endIndex = startIndex + 6
        }else{
            endIndex = this.props.totalPage-1
            startIndex = this.props.totalPage-1-6 < 0 ? 0 : this.props.totalPage-1-6
        }
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
        let page = this.textInput.getValue()-1
        this.props.gotoPage( page )

        //update text input in case that page is less than 0 or more than totalpage
        const totalPage = this.props.totalPage
        if(page>totalPage-1){
            page = totalPage-1
        }else if(page<0){
            page = 0
        }

        this.setState({
            ...this.state,
            pageValue: page+1,
        })
    }
    getPageButtonsWithArrows = ()=>{
        if(this.props.totalPage <= 0){
            return ''
        }else{
            return (<div>
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
                    </div>
                    )
        }
    }
    render(){
        return <div className="page-navigator">
                    {this.getPageButtonsWithArrows()}
                    
                    <style jsx>{`
                        .page-navigator :global(.nav){
                            width:100%;
                            display: flex;
                            justify-content: center;
                            align-items:center;
                            margin-top:10px;
                        }
                        .page-navigator :global(.selected){
                            background-color:${ConfigStyle.blueLight}
                            border-color:${ConfigStyle.blueLight}
                        }
                        .page-navigator :global(.button){
                            padding: 14px;
                        }
                        .page-navigator :global(.text){
                            font-size: 20px;
                            padding: 10px;
                            color: ${ConfigStyle.grayDark}
                        }
                        .page-navigator :global(.page-input){
                            text-align: right;
                            width:50px;
                        }
                        .page-navigator :global(input[type=submit]){
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
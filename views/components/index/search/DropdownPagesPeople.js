import React from 'react'
import {connect} from 'react-redux'
import * as FBPageAction from './redux/FBPageAction'
import DropdownSearch from '~/views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch'
class DropdownPagesPeople extends React.Component{
    onSearchChange = (text, immediately)=>{
        if(immediately){
            this.props.dispatch(FBPageAction.LoadFBPageAction(text) )
        }else{
            clearTimeout(this.timeout)
            this.timeout = setTimeout(
                ()=>this.props.dispatch(FBPageAction.LoadFBPageAction(text) ),
                300
            )
        }
    }
    getData = ()=>{
        if(this.props.pages){
            return this.props.pages.map( (item, i)=>({
                name: item.name,
                node: <div className="child-item" key={i}>
                            <img className="image" src={item.picture.data.url} alt=""/>
                            <div className="item-name">{item.name}</div>
                        </div>
            }))
        }else{
            return []
        }
    }

    render(){
        return <div className="dropdown-page">
                    <DropdownSearch data={this.getData()} onSearchChange={this.onSearchChange}/>
                    <style jsx>{`
                        .dropdown-page :global(.child-item){
                            display: flex;
                            box-sizing: border-box;
                            align-items: center;
                        }
                        .dropdown-page :global(.image){
                            height:100%;
                        }
                        .dropdown-page :global(.item-name){
                            margin-left: 20px;
                        }
                        `}</style>
                </div>
    }
}
const mapStateToProps = state=>({
    pages: state.FBPageReducer.pages,
})
export default connect(mapStateToProps)(DropdownPagesPeople)
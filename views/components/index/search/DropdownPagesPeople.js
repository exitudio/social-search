import React from 'react'
import {connect} from 'react-redux'
import * as FBPageAction from './redux/fbPageAction'
import * as FBPostAction from './redux/fbPostAction'
import DropdownSearch from '~/views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch'
class DropdownPagesPeople extends React.Component{
    componentDidMount(){
        //for adding my profile to empty search list
        this.props.dispatch(FBPageAction.loadFBPageAction(''))
    }
    onSearchChange = text=>{
        clearTimeout(this.timeout)
        this.timeout = setTimeout(
            ()=>this.props.dispatch(FBPageAction.loadFBPageAction(text) ),
            300
        )
    }
    onSelect = i=>{
        this.props.dispatch(FBPostAction.loadPostAction(this.props.pages[i].id))
    }

    getData = ()=>{
        return this.props.pages.map( (item, i)=>({
            name: item.name,
            node: <div className="child-item" key={i}>
                        <div className="image-frame">
                            <img className="image" src={item.picture.data.url} alt=""/>
                        </div>
                        <div className="item-name">{item.name}</div>
                    </div>
        }))
    }

    render(){
        return <div className="dropdown-page">
                    <DropdownSearch data={this.getData()} onSearchChange={this.onSearchChange} onSelect={this.onSelect}/>
                    <style jsx>{`
                        .dropdown-page :global(.child-item){
                            display: flex;
                            box-sizing: border-box;
                            align-items: center;
                        }
                        .dropdown-page :global(.image-frame){
                            width: 50px;
                            height: 50px;
                            overflow: hidden;
                            position: relative;
                        }
                        .dropdown-page :global(.image){
                            position: absolute;
                            margin: auto; 
                            max-height: 50px;
                            {/* min-width: 50px; */}

                            /* For the following settings we set 100%, but it can be higher if needed 
                            See the answer's update */
                            left: -100%;
                            right: -100%;
                            top: -100%;
                            bottom: -100%;
                        }
                        .dropdown-page :global(.item-name){
                            margin-left: 20px;
                        }
                        `}</style>
                </div>
    }
}
const mapStateToProps = state=>({
    pages: state.fbPageReducer.pages,
    myName: state.loginReducer.name,
    myUserID: state.loginReducer.userID,
})
export default connect(mapStateToProps)(DropdownPagesPeople)
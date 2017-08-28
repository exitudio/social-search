import React from 'react'
import {connect} from 'react-redux'
import * as FBPageAction from './redux/FBPageAction'
import DropdownSearch from '~/views/components/shareComponent/dropdown/dropdownSearch/DropdownSearch'
class DropdownPagesPeople extends React.Component{
    constructor(props){
        super(props)
        this.data = [
            {name:'aaa', node:<div className="child-item">
                                <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/c17.0.50.50/p50x50/1013835_588444897892457_2075531411_n.jpg?oh=912e2a0af609da4994bfbb5bd9686b91&oe=5A21386A" alt=""/>
                                <div>OK</div>
                            </div>},
            {name:'bbb', node:<div>node bbb</div>},
            {name:'ccc', node:<div>node ccc</div>},
        ]
    }
    onSearchChange = text=>{
        this.props.dispatch(FBPageAction.LoadFBPageAction(text) )
    }
    render(){
        console.log(this.props)
        return <div>
                    <DropdownSearch data={this.data} onSearchChange={this.onSearchChange}/>
                    <style jsx>{`
                        :global(.child-item){
                            display: flex;
                            box-sizing: border-box;
                        }
                        `}</style>
                </div>
    }
}
const mapStateToProps = state=>({
    pages: state.FBPageReducer.pages,
})
export default connect(mapStateToProps)(DropdownPagesPeople)
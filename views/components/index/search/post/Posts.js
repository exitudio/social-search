import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import Navigator from './navigator/Navigator'
class Posts extends React.Component{
    componentWillReceiveProps(nextProps){
        console.log('update...')
    }
    render(){
        return <div className="posts-wrapper">
                    <Navigator/>
                    <div className="posts-container">
                        {this.props.foundPosts.slice( this.props.startPostIndex, 
                        this.props.startPostIndex + this.props.postPerPage).map( (post,i)=>{
                            return <Post key={i} post={post} isMain id={this.props.startPostIndex+i}/>
                        })}
                    </div>
                    <Navigator/>
                    <style jsx>{`
                    .posts-wrapper{
                        margin-bottom: 80px;
                    }
                    .posts-container{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: flex-start;
                    }
                    `}</style>
            </div>
    }
}

const mapStateToProps = state=>{
    return {
        foundPosts: state.fbPostReducer.foundPosts,
        startPostIndex: state.fbPostReducer.startPostIndex,
        postPerPage: state.fbPostReducer.postPerPage,
    }
}
export default connect(mapStateToProps)(Posts)
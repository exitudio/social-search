import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
class Posts extends React.Component{
    componentWillReceiveProps(nextProps){
        console.log('update...')
    }
    render(){
        return <div className="posts-container">

            {this.props.posts.slice(0,100).map( (post,i)=>{
                return <Post key={i} post={post} isMain id={i}/>
            })}
            <style jsx>{`
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
        posts: state.fbPostReducer.foundPosts
    }
}
export default connect(mapStateToProps)(Posts)
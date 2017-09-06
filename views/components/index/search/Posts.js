import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
class Posts extends React.Component{
    formatDate = date=>{
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ]
      
        var day = date.getDate()
        var monthIndex = date.getMonth()
        var year = date.getFullYear()
        var hours = date.getHours()
        var minutes = date.getMinutes()
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + ("0"+hours).slice(-2) + ":" + ("0"+minutes).slice(-2)
      }
    render(){
        return <div className="posts-container">
            {this.props.posts.filter((item,i)=>{
                return i<50
            }).map( (post,i)=>{
                return <Post key={i} post={post} id={i}/>
            })}
            <style jsx>{`
                .posts-container{
                    width:500px;
                }
                `}</style>
        </div>
    }
}

const mapStateToProps = state=>{
    return {
        posts: state.fbPostReducer.posts
    }
}
export default connect(mapStateToProps)(Posts)
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Description from './Description'
class Post extends React.Component{
    componentWillReceiveProps(nextProps){
        console.log('post update...')
    }
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
    getDomain = string=>{
        const matches = string.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i)
        return matches && matches[1] ? matches[1] : ''
    }

    getContent = ()=>{
        if(this.props.post.parent_id && this.props.loadPosts && this.props.loadPosts.sharedPosts){
            //check "this.props.sharedPosts" for making sure that the child <Post/> will not render it parent_id again.
            //the <Post/> will have only one child, even though the child has more nested child.
            if(this.props.loadPosts.sharedPosts[ this.props.post.parent_id ]){
                return <Post post={ this.props.loadPosts.sharedPosts[ this.props.post.parent_id ] }/>
            }else{
                return <div>Cannot find shared post!!!</div>
            }
        }else if(this.props.post.type === 'link' || this.props.post.type === 'video'){
            return <a href={this.props.post.link} target="_blank" className="share-link">
                <div className="image-container">
                    <img className="image" src={this.props.post.full_picture} alt=""/>
                </div>
                <div className="text">
                    <div className="link-head">{this.props.post.name}</div>
                    <div className="link-description">{this.props.post.description}</div>
                    <div className="link-url">{this.getDomain(this.props.post.link).substring(0,40)}</div>
                </div>
            </a>
        }else if(this.props.post.full_picture){
            return <img className="scaledImageFitWidth" src={this.props.post.full_picture} alt=""/>
        }else{
            return ''
        }
    }
    
    render(){
        return <div className={`post${this.props.isMain?' main-post':''}`}>
            <div className="head">
                <a href={`https://facebook.com/${this.props.post.from.id}`} target="_blank" className="profile-image">
                    <img src={`http://graph.facebook.com/${this.props.post.from.id}/picture?type=square`} alt=""/>
                </a>
                <div className="right-info">
                    <a href={`https://facebook.com/${this.props.post.from.id}`} target="_blank" className="user-name">
                        {this.props.post.from.name} 
                    </a>
                    <a href={this.props.post.permalink_url||this.props.post.link} target="_blank">{this.props.id} ></a>
                    <div className="timestampContent">{this.formatDate(new Date(this.props.post.created_time) )}</div>
                </div>
            </div>
            <div className="content">
                <Description message={this.props.post.message}/>
                {this.getContent()}
                
            </div>
        
            <style jsx>{`
                .post{
                    padding:12px;
                    background-color: white;

                    border: 1px solid;
                    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
                    border-radius: 3px;
                    margin-top: 10px;
                    color: #1d2129;
                }
                .main-post{
                    width:500px;
                }
                .head{
                    margin-bottom: 11px;
                }
                .head:after{
                    clear: both;
                    content: " ";
                    display: block;
                }
                .profile-image{
                    float: left;
                    margin-right: 8px;
                }
                .right-info{
                    float: left;
                }
                .user-name{
                    
                    letter-spacing: -0.01em;
                    color: #365899;
                    cursor: pointer;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 25px;
                    -webkit-font-smoothing: subpixel-antialiased;
                }
                .timestampContent{
                    color: #90949c;
                    font-weight: normal;
                    font-size: 14px;
                    letter-spacing: -0.01em;
                    line-height: 20px;
                }
                .post :global(.scaledImageFitWidth){
                    height: auto;
                    min-height: initial;
                    width: 100%;
                    margin-top:20px;
                    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
                    border: 1px solid rgba(0, 0, 0, .1);
                }


                /****** LINK ******/
                .post :global(.share-link){
                    margin-top: 10px;
                    display: block;
                    text-decoration: none;
                    color: #1d2129;
                    border: 1px solid;
                    border-color: #e9ebee #e9ebee #d1d1d1;
                    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15) inset, 0 1px 4px rgba(0, 0, 0, .1);
                }
                .post :global(.image-container){
                    height: 274.05323193916px;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid;
                    border-color: #e9ebee #e9ebee #d1d1d1;
                }
                .post :global(.image){
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    max-width: 100%;
                }
                .post :global(.text){
                    height: auto;
                    margin: 10px 12px;
                    {/* max-height: 100px; */}
                }
                .post :global(.link-head){
                    font-family: Georgia, serif;
                    letter-spacing: normal;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 22px;
                    margin-bottom: 5px;
                    max-height: 110px;
                    overflow: hidden;
                    word-wrap: break-word;
                }
                .post :global(.link-description){
                    line-height: 16px;
                    max-height: 80px;
                    overflow: hidden;
                    font-size: 12px;
                    word-wrap: break-word;
                }
                .post :global(.link-url){
                    font-size: 11px;
                    line-height: 11px;
                    text-transform: uppercase;
                    color: #90949c;
                    padding-top: 9px;
                }
                `}</style>
            </div>
    }
}
Post.propTypes = {
    post: PropTypes.object.isRequired,
    isMain: PropTypes.bool,
}

const mapStateToProps = state=>{
    return { loadPosts: state.fbPostReducer.loadPosts}
}
export default connect(mapStateToProps)(Post)
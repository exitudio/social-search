import React from 'react'
export default class Post extends React.Component{
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

    getContent = ()=>{
        if(this.props.post.parent_id){
        }else if(this.props.post.type === 'link'){
            return <div className="share-link">
                <div className="image-container">
                    <img className="image" src={this.props.post.full_picture} alt=""/>
                </div>
                <div className="text">
                    <div className="link-head">{this.props.post.name}</div>
                    <div className="link-description">{this.props.post.description}</div>
                </div>
            </div>
        }else{
            return <img className="scaledImageFitWidth" src={this.props.post.full_picture} alt=""/>
        }
    }
    
    render(){
        return <div className="post">
            <div className="head">
                <a href={`https://facebook.com/${this.props.post.from.id}`} className="profile-image">
                    <img src={`http://graph.facebook.com/${this.props.post.from.id}/picture?type=square`} alt=""/>
                </a>
                <div className="right-info">
                    <div className="user-name">{this.props.post.from.name} {this.props.id}</div>
                    <span className="timestampContent">{this.formatDate(new Date(this.props.post.created_time) )}</span>
                </div>
            </div>
            <div className="content">
                <div className="description">{this.props.post.message}</div>
                {this.getContent()}
                
            </div>
        
            <style jsx>{`
                .post{
                    width:500px;
                    padding:12px;
                    background-color: white;

                    border: 1px solid;
                    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
                    border-radius: 3px;
                    margin-bottom: 10px;
                    color: #1d2129;
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
                }


                /****** LINK ******/
                .post :global(.share-link){
                    margin-top: 10px;

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
                    max-height: 100px;
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
                }
                
                `}</style>
            </div>
    }
}
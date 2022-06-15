import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  function handleOnTweetTextChange (event) {
    props.setTweetText(event.target.value);
  }

  function handleOnSubmit() {
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      likes: 0,
      retweets: 0,
      id: props.tweets.length,
      
    }

    props.setTweets([...props.tweets, newTweet])
    props.setTweetText('')
  }

  return (
    <div className="tweet-box">
      <TweetInput 
      value={props['tweetText']}
      handleOnChange={handleOnTweetTextChange}
      />
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  const charactersLeft = 140 - props.tweetText.length;
    if(charactersLeft > 139)
  return <span></span>
    else{
      return <span className="tweet-length">{charactersLeft}</span>
    }
}

export function TweetSubmitButton({ handleOnSubmit, props }) {
  //let disabled_1 = (props.tweetText.length != null && props.tweetText.length > 140)
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} >Tweet</button>
    </div>
  )
}

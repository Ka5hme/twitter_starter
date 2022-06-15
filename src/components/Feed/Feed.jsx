import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox, { TweetSubmitButton } from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({setTweets, userProfile, tweetText = "", setTweetText, tweets }) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox 
      tweets={tweets}
      userProfile={userProfile}
      setTweets={setTweets}
      tweetText={tweetText}
      setTweetText={setTweetText}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
      {tweets.map((tweet) => (
          <Tweet
          tweet={tweet}
          key={tweet.id}
          />
        ))}
        
        </div>
    </div>
  )
}

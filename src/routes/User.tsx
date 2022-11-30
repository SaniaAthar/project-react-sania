import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const User = () => {
  const [userComment, setUserComment] = useState(
    'Write your feed back or comment'
  )

  const [showComment, setShowComment] = useState(false)

  const [userCommentCollection, setUserCommentCollection] = useState<string>('')

  const [showAdress, setShowAdress] = useState(false)

  useEffect(() => {}, [showComment, showAdress])

  return (
    <div>
      <h2>Users</h2>
      <p>
        Your feedback is valuable to us. It helps greatly in improving our
        product and services.
      </p>
      <p>
        For any suggestion and comments, please write to us{' '}
        <a href="mailto:info@gcm-decor.co.uk">feedback@homedecor.com.</a> or
        directly write on this page below
      </p>
      <br />
      <br />
      <button
        onClick={() => {
          setShowAdress(!showAdress)
        }}
      >
        Show and hide adress
      </button>
      {showAdress && (
        <div>
          {' '}
          <h4>Your homedeco solution</h4>
          <p>Emmylundsvagen 3 Solna</p> <p>SE-10023 Stockholm</p>{' '}
        </div>
      )}
    
      <br />
      <br />
      <h4>Comments and feedbacks</h4>
      <input
        style={{ height: '100px', width: '400px' }}
        type="text"
        placeholder="changeTitleOfthePage"
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          setShowComment(true)
          setUserCommentCollection(
            userCommentCollection + userComment + '<tbr>'
          )
        }}
      >
        Add comment
      </button>
      {showComment && (
        <p>
          {userCommentCollection.split('<tbr>').map((arrayItem, index) => {
            const myString = `${index + 1}. ` + arrayItem.toString()
            return <p>{myString}</p>
          })}
        </p>
      )}

      <br />
      <br />
      <Link to="/" type="button" className="btn btn-dark">
        Back
      </Link>
    </div>
  )
}

export default User
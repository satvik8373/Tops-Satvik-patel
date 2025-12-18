import React, { useState, useEffect } from 'react'

function DataFetcherHooks() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 5))
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      )}
    </div>
  )
}

export default DataFetcherHooks

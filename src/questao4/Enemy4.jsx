import React from "react"

export default function Enemy4(props) {
  return (
    <div>
      <h2>Enemy: {props.name}</h2>
      <blockquote>
        <p>As pessoas temem o que não conseguem entender.</p>
        <footer>Por <cite title="Título da fonte">Boros</cite></footer>
      </blockquote>
      <img src="/images/enemy.jpg" alt="" />
      <h1> nome arena: {props.arena}</h1>

    </div>
  )
}

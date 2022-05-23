import React from 'react'

const user = (props) => (
    <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <style jsx>{`
        div {
            margin: 30px;
            text-align: center;
            border: 1px solid #ddd;
            padding: 30px;
        }
        `}</style>
    </div>
)

export default user
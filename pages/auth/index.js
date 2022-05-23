import React from 'react'

import User from '../../Components/User'

const indexAuthPage = (props) => (
    <div>
        <h1>The Auth Page {props.name}</h1>
        <User name='Hend' age='36' />
    </div>
   
)

indexAuthPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'Super App (Auth)'})
        }, 1000)
    })

    return promise;
}

export default indexAuthPage;
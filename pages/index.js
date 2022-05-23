import React, {Component} from 'react'
import Link from 'next/link'
import Router from 'next/router'

class IndexPage extends Component {
    static getInitialProps = (context) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({name: 'Super App'})
            }, 1000)
        })

        return promise;
    }

    render() {

        return (
        <div>
            <h1>The Main Page {this.props.name}</h1>
            <Link href="/auth"><a>Go To Auth</a></Link>
            <br />
            <button onClick={()=> Router.push('/auth')}>Auth</button>
        </div>
        )
    }
}


export default IndexPage;
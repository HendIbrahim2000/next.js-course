import React from 'react'
import Link from 'next/link'

const errorPage = () => (
    <div>
    <h1>Oops something went wrong</h1>
   <p>You always can <Link href="/"><a>Go Back</a></Link> .</p> 
</div>
   
)

export default errorPage
import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.location.href = '/thailand-ris'
    }, [])
    return (
        <div>
            <h1>Redirecting you to Judge</h1>
            <h1>If you do not get redirected</h1>
            <a href="https://old.igem.org/2022_Judging_Form?id=4314">
                Click Here
            </a>
        </div>
    )
}

export default Home

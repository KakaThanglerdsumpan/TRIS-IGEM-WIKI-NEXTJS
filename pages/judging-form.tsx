import React, { useEffect } from 'react'

const Judge = () => {
    useEffect(() => {
        window.location.href = 'https://old.igem.org/2022_Judging_Form?id=4314'
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

export default Judge

import React from 'react'

const HomeLayout = ({ children, ...rest }) => {
    return (
        <>
            <p>its another layout !!!</p>
            <main {...rest} >{children}</main>
            <footer> Created by Hossein-Developer</footer>
        </>
    )
}

export default HomeLayout
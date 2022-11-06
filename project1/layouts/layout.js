
const Layout = ({ children, ...rest }) => {
    return (
        <>
            <header>its header !</header>
            <main {...rest} >{children}</main>
            <footer> Created by Hossein-Developer</footer>
        </>
    )
}

export default Layout
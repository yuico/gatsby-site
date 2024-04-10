import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText 
} from './layout.module.css'

interface LayoutProps{
    pageTitle: string
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout

import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

interface LayoutProps{
    pageTitle: string
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout

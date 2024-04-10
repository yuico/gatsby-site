import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>About Me Page</p>
        </main>
    )
}

export const Head: HeadFC = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="Your description"/>
    </>
)

export default AboutPage
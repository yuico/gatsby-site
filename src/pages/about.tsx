import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="About">
            <p>About Page description</p>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>About Page</title>

export default AboutPage
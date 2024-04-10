import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Home page description</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
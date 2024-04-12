import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Home page description</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        //"../images/clifford.jpg"
      />
    </Layout>
  )
  
}

export const Head: HeadFC = () => <Seo title="Home Page"/>

export default IndexPage
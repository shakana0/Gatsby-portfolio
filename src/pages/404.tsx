import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { NotFoundPageStyling } from "../assets/styles/NotFoundPageStyling"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFoundPageStyling>
      <h1>Page Not Found</h1>
       <h3> Sorry 😔, we couldn’t find what you were looking for.</h3>
       <a href="/">Go to home page</a>
    </NotFoundPageStyling>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>

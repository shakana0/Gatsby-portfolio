import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { NotFoundPageStyling } from "../assets/styles/NotFoundPageStyling"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFoundPageStyling>
      <div className="container">
      <h1>Page Not Found</h1>
       <h3> Sorry 😔, we couldn’t find what you were looking for.</h3>
       <a href="/">Go to home page</a>
      </div>
    </NotFoundPageStyling>
  )
}

export default NotFoundPage
export const Head: HeadFC = () => <title>Not found</title>

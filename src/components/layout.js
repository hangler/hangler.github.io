import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render () {
    const { title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className='container'>
        <header className='my-5'>
          <h1 className='text-center'>
            <Link to={`/`}>{title}</Link>
          </h1>
        </header>
        <main>
          <div className='row'>
            <div className='col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3'>
              {children}
            </div>
          </div>
        </main>
        <footer className='text-center text-muted'>
          <hr />© {new Date().getFullYear()}. Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>.
        </footer>
      </div>
    )
  }
}

export default Layout

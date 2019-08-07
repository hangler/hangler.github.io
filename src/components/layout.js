import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className='container-fluid'>
        <header className='my-5'>
          <h1 className='text-center'>
            <Link to={`/`}>{title}</Link>
          </h1>
        </header>
        <main>
          <div className='row'>
            <div className='col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
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

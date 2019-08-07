/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-3.jpg/" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <div className='mx-auto mb-5' style={{ width: '250px' }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            width: `250px`,
            border: 'solid 1px black'
          }}
        />
      </div>
      <p>
        Hi. I’m Frank Hangler, a data designer and developer living in
        Vancouver, Canada.
      </p>
      <p>
        I am founder of{' '}
        <a
          href='http://plotandscatter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Plot + Scatter
        </a>
        , a data communication company specializing in custom-built web-based
        data visualizations.
      </p>
      <p>
        In 2013-14, I studied at the{' '}
        <a
          href='https://www.oii.ox.ac.uk/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Oxford Internet Institute
        </a>{' '}
        at the{' '}
        <a
          href='https://www.ox.ac.uk/'
          target='_blank'
          rel='noopener noreferrer'
        >
          University of Oxford
        </a>
        , earning a Master’s of Science in the Social Science of the Internet
        (what a mouthful!). We studied the various social impacts of this
        relatively new technology — though really, we only scratched the
        surface. It was a fantastic year that grew my interest in data (Big,
        Open, and otherwise!), visualization, and smart cities.
      </p>
      <p>
        Before that, I worked at{' '}
        <a href='https://telus.com' target='_blank' rel='noopener noreferrer'>
          TELUS
        </a>{' '}
        for several years, building (mostly internal) web applications. I was a
        member of a development team working with new technologies. Most of my
        projects were tools to improve internal collaboration.
      </p>
      <hr className='my-4' />
      <h2>Contact</h2>
      <p>
        Feel free to email me at{' '}
        <a href='mailto:fhangler@gmail.com'>fhangler@gmail.com</a>.
      </p>
      <p>
        You can follow me on Twitter at{' '}
        <a
          href={`https://twitter.com/${social.twitter}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          @hangler
        </a>
        , though I don't post very much anymore.
      </p>
      <hr className='my-4' />
      <h2>Colophon</h2>
      <p>
        The typeface used on this site is{' '}
        <a
          href='https://practicaltypography.com/equity.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Equity
        </a>{' '}
        by Matthew Butterick.
      </p>
      <p>
        This site is built using{' '}
        <a
          href='https://www.gatsbyjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Gatsby
        </a>
        .
      </p>
      <p>
        The title is not a misspelling, but a{' '}
        <a
          href='http://en.wikipedia.org/wiki/Izaak_Walton#The_Compleat_Angler'
          target='_blank'
          rel='noopener noreferrer'
        >
          reference
        </a>
        . (Even though I’ve only gone fishing once, and didn’t catch anything,
        the pun was too good to pass up.)
      </p>
    </div>
  )
}

export default Bio

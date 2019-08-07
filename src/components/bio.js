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
          fixed(width: 300, height: 300) {
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
      <div style={{ width: '300px', margin: '1rem auto' }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            width: `300px`,
            border: 'solid 1px black',
            boxShadow: '0px 5px 10px #999'
          }}
        />
      </div>
      <p>
        Hi. I’m Frank Hangler, a data designer and developer living in
        Vancouver, Canada.
      </p>
      <p>
        I am founder of <a href='https://plotandscatter.com'>Plot + Scatter</a>,
        a data communication company specializing in custom-built web-based data
        visualizations.
      </p>
      <p>
        In 2013-14, I studied at the{' '}
        <a href='http://www.oii.ox.ac.uk/'>Oxford Internet Institute</a> at the{' '}
        <a href='http://www.ox.ac.uk/'>University of Oxford</a>, earning a
        Master’s of Science in the Social Science of the Internet (what a
        mouthful!). We studied the various social impacts of this relatively new
        technology — though really, we only scratched the surface. It was a
        fantastic year that grew my interest in data (Big, Open, and
        otherwise!), visualization, and smart cities.
      </p>
      <p>
        Before that, I worked at <a href='https://telus.com'>TELUS</a> for
        several years, building (mostly internal) web applications. I was a
        member of a development team working with new technologies. Most of my
        projects were tools to improve internal collaboration.
      </p>
      <hr />
      <h2>Contact</h2>
      <p>
        Feel free to email me at{' '}
        <a href='mailto:fhangler@gmail.com'>fhangler@gmail.com</a>.
      </p>
      <p>
        You can follow me on Twitter at{' '}
        <a href={`https://twitter.com/${social.twitter}`}>@hangler</a>, though I
        don't post very much anymore.
      </p>
      <hr />
      <h2>Colophon</h2>
      <p>The typeface used on this site is Equity by Matthew Butterick.</p>
      <p>
        The title is not a misspelling, but a{' '}
        <a href='http://en.wikipedia.org/wiki/Izaak_Walton#The_Compleat_Angler'>
          reference
        </a>
        . (Even though I’ve only gone fishing once, and didn’t catch anything,
        the pun was too good to pass up.)
      </p>
    </div>
  )
}

export default Bio

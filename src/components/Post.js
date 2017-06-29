import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Media } from 'react-bootstrap'
import defaultImage from './I_See_What_You_Did_There.png'
import isURL from 'is-url'

export default class Post extends Component {
  static propTypes = {
    title: PropTypes.string,
    selftext: PropTypes.string,
    thumbnail: PropTypes.string,
    thumbnail_height: PropTypes.number,
    thumbnail_width: PropTypes.number,
  }

  render () {
    const {
      title,
      selftext,
      thumbnail,
      thumbnail_height: thumbnailHeight,
      thumbnail_width: thumbnailWidth,
    } = this.props

    console.log(this.props.thumbnail)

    return (
      <Media>
        <Media.Left>
          <img
            src={isURL(thumbnail) ? thumbnail : defaultImage}
            width={thumbnailWidth || 140}
            height={thumbnailHeight || 140}
            />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{title}</Media.Heading>
          <p>{selftext}</p>
        </Media.Body>
      </Media>
    )
  }
}

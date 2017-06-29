import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Media } from 'react-bootstrap'
import defaultImage from './I_See_What_You_Did_There.png'
import isURL from 'is-url'
import moment from 'moment'

export default class Post extends Component {
  static propTypes = {
    title: PropTypes.string,
    selftext: PropTypes.string,
    thumbnail: PropTypes.string,
    thumbnail_height: PropTypes.number,
    thumbnail_width: PropTypes.number,
    created: PropTypes.number,
    url: PropTypes.string,
  }

  render () {
    const {
      title,
      selftext,
      thumbnail,
      thumbnail_height: thumbnailHeight,
      thumbnail_width: thumbnailWidth,
      created,
      url,
    } = this.props

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
          <p>{moment(created * 1000).format('lll')}</p>
          <a href={url}>Open Link</a>
        </Media.Body>
      </Media>
    )
  }
}

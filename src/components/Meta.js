import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, pageName }) => {
  return (
    <Helmet>
      <title>{title} | {pageName}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'The Shop',
  pageName: 'All Products For Sale and Preview',
  description: 'Get The Real Deal Plan',
  keywords: 'electronics, buy electronics, cheap electroincs',
}

export default Meta

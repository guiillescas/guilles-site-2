import React, { ReactElement } from 'react'

import Head from 'next/head'

import { SEOProps } from './types'

export default function SEO(props: SEOProps): ReactElement {
  const pageTitle = `${props.title} ${
    !props.shouldExcludeTitleSuffix ? '| Dev Guilherme Illescas' : ''
  }`
  const pageImage = props.image
    ? `http://localhost:3000/${props.image}`
    : undefined

  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {pageImage && <meta name="image" content={pageImage} />}
      <link
        rel="image_src"
        href={`http://guilhermeillescas.dev${props.image}`}
      />

      {!props.shouldIndexPage && (
        <meta name="robots" content="noindex,nofollow" />
      )}

      <title>{pageTitle}</title>

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={props.description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta
        property="og:image"
        content={`https://guilhermeillescas.dev${props.image}`}
        key="ogimage"
      />
      <meta
        property="og:image:secure_url"
        content={`https://guilhermeillescas.dev${props.image}`}
      />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@guillescas" />
      <meta name="twitter:creator" content="@guillescas" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {props.description ? (
        <meta name="description" content={props.description} />
      ) : (
        <meta
          name="description"
          content="Guilherme Illescas's website. You'll find projects and cool stuff here!"
        />
      )}
    </Head>
  )
}

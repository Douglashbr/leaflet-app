import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in map the places that I went and show more informations and photos when clicked."
        canonical="https://mytrips.douglas.com.br"
        openGraph={{
          url: 'https://mytrips.douglas.com.br',
          images: [
            {
              url: 'https://mytrips.douglas.com.br/img/cover.png',
              height: 720,
              width: 1280,
              alt: 'My Trips'
            }
          ]
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

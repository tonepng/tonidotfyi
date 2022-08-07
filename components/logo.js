import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
          //navbar name logo
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily= 'IBM Plex Mono, monospace'
            //fontSize={20}
            ml={3}
          >
            toni.fyi
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo

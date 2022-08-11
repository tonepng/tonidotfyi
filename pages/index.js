import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Badge,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import Image from 'next/image'
//test
import React, {useEffect} from 'react'
import Typed from 'typed.js'
//test

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        {/* <Box flexGrow={1}>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            fontSize={16}
            fontFamily= 'IBM Plex Mono, monospace'
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            artist / filmmaker / environmentalist
          </Box>
            <Heading as="h2" variant="page-title">
              Antoni Alvarez
            </Heading>
             <p>passionate about making things</p>
        </Box> */}
        
      <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
      >
          {/* profile picture border */}
        {/* <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
        > */}
            {/* profile picture */}
            {/* <ProfileImage
              src="/images/sptoni1.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /> */}
          </Box>
        </Box>
      {/* </Box> */}
      
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          about me:
        </Heading>
        <Paragraph>
          Hi, my name is Antoni! I&apos;m a recent grad living in Vancouver, 
          passionate about making things, storytelling, and wildlife. 
          Check out some of the
          {' '}
          <NextLink href="/projects" passHref scroll={false}>
            <Link>projects</Link>
          </NextLink>
          &nbsp;I&apos;ve been working on. 
        </Paragraph>
        <br></br>
        <Paragraph>
          I am currently looking for work! If you like what you see, or have
          any questions, please 
          {' '}
          <NextLink href="/contact" passHref scroll={false}>
            <Link>contact</Link>
          </NextLink>
          &nbsp;me and I will get back to you asap.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          education:  
        </Heading>
        <BioSection>
          <Badge fontFamily='IBM Plex Mono'>2017-2022</Badge>
            &nbsp;University of British Columbia
             <p>&#8627;&nbsp;Natural Resource Conservation, Spanish, Film</p>
        </BioSection>
        <BioSection>
          <Badge fontFamily='IBM Plex Mono'>2022</Badge>
            &nbsp;Intersections Media Opportunities for Youth
            <p>&#8627;&nbsp;Film Industry Training</p>
        </BioSection>
        <BioSection>
          <Badge fontFamily='IBM Plex Mono'>2016</Badge>
            &nbsp;University of Michigan
            <p>&#8627;&nbsp;Screen Arts and Cultures Program</p>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          i love ♥
        </Heading>
        <Paragraph>
          Art, Film, 3D, GameDev, Music, Drawing, Audio Production, Photography, Wildlife, Environmental Science
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'


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
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
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
          hi! my name is antoni. it would be cool if you checked out the
          {' '}
          <NextLink href="/projects" passHref scroll={false}>
            <Link>projects </Link>
          </NextLink>
           i&apos;m working on. i&apos;m going   to talk about myself here. sell myself.
           become another cog in the machine. please, buy my labour.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              PROJECTS
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          timeline:  
        </Heading>
        <BioSection>
          <BioYear>2017-2022</BioYear>
            University of British Columbia
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
            Intersections Media
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          University of Michigan
        </BioSection>
        <BioSection>
          <BioYear>2013-2017</BioYear>
          Community Highschool
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          i love ♥
        </Heading>
        <Paragraph>
          Art, Game Dev, 3D, Music, Drawing, Audio Production, Photography, Wildlife, Environmental Science
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'


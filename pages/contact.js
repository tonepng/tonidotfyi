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
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoMailSharp, IoLogoLinkedin } from 'react-icons/io5'


const Posts = () => (
  <Layout title="ILM">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={7}>
        contact me!
      </Heading>
      <List>
          <ListItem>
            <Link href="mailto:pikualvarez@gmail.com" target="_blank">
              <Button
                variant="solid"
                color='starYellow'
                //colorScheme="pink"
                leftIcon={<IoMailSharp />}
                fontSize={20}
                fontFamily="IBM Plex Mono"
                borderRadius='1px'
                mb={4}
                _focus={{
                  boxShadow:
                    'none',
                }}
              >
                email
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/antonialvarez/" target="_blank">
              <Button
                variant="solid"
                color='starYellow'
                //colorScheme="linkedin"
                leftIcon={<IoLogoLinkedin />}
                fontSize={20}
                fontFamily="IBM Plex Mono"
                borderRadius='1px'
                mb={4}
                _focus={{
                  boxShadow:
                    'none',
                }}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>
    </Container>
  </Layout>
)
export default Posts
export { getServerSideProps } from '../components/chakra'

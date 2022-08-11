import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="film">
    <Container>
      <Title>
        FILM <Badge>2016-2022</Badge>
      </Title>
      <P>
        I wrote my first 90 page script sitting in on a university class in high school.
        I haven&apos;t stopped writing and making movies since. 
      </P>
      <br></br>
      <P>
        I enjoy every part of the filmmaking proccess; from writing and storyboarding, to
        shooting and editing, I can&apos;t help but try and get involved every step of 
        the way.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Roles</Meta>
          <span>PA, Assistant DP, Editor, Lighting</span>
        </ListItem>
        <ListItem>
          <Meta>Technical</Meta>
          <span>Premiere Pro, After Effects, Audition, Davinci Resolve</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Writing, Editing, Colour Grading, Cinematography, Audio</span>
        </ListItem>
        <ListItem>
          <Meta>Certifications</Meta>
          <span>MPSA101, WHMIS, First Aid</span>
        </ListItem>
      </List>
      <br></br>
      <Heading as="h4" variant="section-title" fontSize={16} my={-1}>
        <Center>Resume</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
            <Badge mr={2}>short films</Badge>
            Risa&apos;s Flower, Notice Me
        </ListItem>

        <ListItem>
          <Link href="http://www.intersectionsmedia.com/">
            <Badge mr={2}>internship</Badge>
            Intersections Digital Media Program
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
            <Badge mr={2}>classes</Badge>
            Writing for the Screen, Feature Film Writing, Screenplay Workshop, Motion Picture Directing
        </ListItem>

      </UnorderedList>


      <WorkImage src="/images/works/film/filmrisaflower_1c.jpg" alt="risa's flower" />  
      <WorkImage src="/images/works/film/risaflower_3.jpg" alt="risa's flower" /> 
      <WorkImage src="/images/works/film/risaflower_4.jpg" alt="risa's flower" />
      <WorkImage src="/images/works/film/risaflower_5.jpg" alt="risa's flower" /> 
      <WorkImage src="/images/works/film/noticeme_1.jpg" alt="notice me" />   
      <WorkImage src="/images/works/film/noticeme_2.jpg" alt="notice me" />           
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

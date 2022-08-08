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
  <Layout title="3d">
    <Container>
      <Title>
        3D <Badge>2022</Badge>
      </Title>
      <P>

      </P>
      <br></br>
      <P>
       
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
      </List>
      <br></br>
      <Heading as="h4" variant="section-title" fontSize={16} my={-1}>
        <Center>Resume</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
            <Badge mr={2}>short films</Badge>
           
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


      <WorkImage src="/images/works/risaflower_1c.png" alt="risa's flower" />  
      <WorkImage src="/images/works/risaflower_3.png" alt="risa's flower" /> 
      <WorkImage src="/images/works/risaflower_4.png" alt="risa's flower" />
      <WorkImage src="/images/works/risaflower_5.png" alt="risa's flower" /> 
      <WorkImage src="/images/works/noticeme_1.png" alt="notice me" />   
      <WorkImage src="/images/works/noticeme_2.png" alt="notice me" />           
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

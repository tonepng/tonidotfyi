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
  <Layout title="photography">
    <Container>
      <Title>
        PHOTOGRAPHY <Badge>2014-2022</Badge>
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
          <Meta>Technical</Meta>
          <span>Photoshop, Lightroom, Film Scanning</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Shooting, Editing</span>
        </ListItem>
      </List>



      <WorkImage src="/images/works/grass n bugs.png" alt="grass n bugs" /> 
      <WorkImage src="/images/works/valentine.png" alt="valentine" /> 
      <WorkImage src="/images/works/halloween.png" alt="halloween" />   
      <WorkImage src="/images/works/purple flower.png" alt="purple flower" />  
      <WorkImage src="/images/works/more bugs.png" alt="more bugs" />
      <WorkImage src="/images/works/toni.png" alt="me" />    
      <WorkImage src="/images/works/white flowers.png" alt="white flowers" />      
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

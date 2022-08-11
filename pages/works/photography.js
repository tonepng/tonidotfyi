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
        At my first ever job, I saved up all summer to buy a DSLR camera. 
        Whenever I&apos;m out taking photos, I find myself hunched over,
        zoomed all the way in, and focused on some tiny world hidden in the grass.
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



      <WorkImage src="/images/works/photography/grass n bugs.jpg" alt="grass n bugs" /> 
      <WorkImage src="/images/works/photography/valentine.jpg" alt="valentine" /> 
      <WorkImage src="/images/works/photography/halloween.jpg" alt="halloween" />   
      <WorkImage src="/images/works/photography/purple flower.jpg" alt="purple flower" />  
      <WorkImage src="/images/works/photography/more bugs.jpg" alt="more bugs" />
      <WorkImage src="/images/works/photography/toni.jpg" alt="me" />    
      <WorkImage src="/images/works/photography/white flowers.jpg" alt="white flowers" />      
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

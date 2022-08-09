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
import Layout from '../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Application, Title, WorkImage, Meta } from '../components/work'
import P from '../components/paragraph'

const ILM = () => (
  <Layout Title="ILM APPLICATION">
    <Container>
      <Application>
        ILM APPLICATION <Badge>RE: Jedi Academy</Badge>
      </Application>
      <P>
        This past spring, I completed an intensive 5 week training program at 
        Intersections Media. Just a few weeks ago, our program was connected with 
        ILM where I learned about the Jedi Academy.
      </P>
      <br></br>
      <P>
        Since then, I&apos;ve been obsessed. During the call, I wrote down the software 
        used in-house, downloaded them to teach myself the basics, started an online course 
        to better understand programming and scripting, and even created this very website 
        and 3D model above to put together my portfolio.
      </P>
      <br></br>
      <P>
        I don&apos;t have a traditional background in 3D or VFX. A few weeks ago, I had no
        background in making websites either. Through my multidisciplinary experience making 
        games, shooting films, and taking photos while studying environmental science, I learned 
        to leverage my strong work ethic, time management skills, and persistence to keep creating
        new things. I am passionate about film and telling stories, and would bring my enthusiasm
        and work ethic to ILM.
      </P>
      <br></br>
      <P>
        I am sharing my resume for review and would love the opportunity to share more details regarding 
        my experience and training and how I could serve as a strong candidate for the Jedi Academy.
      </P>
      <br></br>
      <P>
        Many thanks for your consideration.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Application</Meta>
          <span>Jedi Academy, Layout, PA</span>
        </ListItem>
        <ListItem>
          <Meta>Attributes</Meta>
          <span>Curious, Detail Oriented, Quick Learner</span>
        </ListItem>
        <ListItem>
          <Meta>Learning</Meta>
          <span>As Much As Possible</span>
        </ListItem>
      </List>
      <br></br>
    </Container>
  </Layout>
)

export default ILM
export { getServerSideProps } from '../components/chakra'

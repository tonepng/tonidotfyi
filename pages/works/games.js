import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Games = () => (
  <Layout title="games">
    <Container>
      <Title>
        GAMES <Badge>2020-2022</Badge>
      </Title>
      <P>
        Since the pandemic, I&apos;ve spent a lot of time creating little games with my friends.
        Together, we participated in a few gamejams where we finished a game in under 48 hours.
      </P>
      <br></br>
      <P>
        Apart from following GameDev tutorials on YouTube and practicing on my own, I&apos;ve taken media
        writing and game narrative courses throughout university.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://oktoni.itch.io/">
          https://oktoni.itch.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/Web</span>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Pixel Art, Animation, GameDev, Narrative Design</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mogu.gif" alt="mogu game" />
      <WorkImage src="/images/works/jamantha.jpg" alt="jamantha's last stand" />
      <WorkImage src="/images/works/dissident.jpg" alt="dissident" />
    </Container>
  </Layout>
)

export default Games
export { getServerSideProps } from '../../components/chakra'

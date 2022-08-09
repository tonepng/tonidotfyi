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
  <Layout title="3D">
    <Container>
      <Title>
        3D <Badge>2022</Badge>
      </Title>
      <P>
        Inspired by the magic of cinema, the worlds inside 3D games, and
        curiousity for how things work, I started learning how to model and
        animate in 3D.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Technical</Meta>
          <span>Blender, Houdini, Unreal Engine, Three.js, AutoCAD</span>
        </ListItem>
        <ListItem>
          <Meta>Learning</Meta>
          <span>Modeling, Animation, Scripting, Texture Painting</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/donut.gif" alt="donut" />           
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

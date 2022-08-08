import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/mogu.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={10}>
        projects // collaborations
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="games" 
            title= "GAMES"
            thumbnail={thumbInkdrop}>
            making games with my friends, 
            <br></br>
              usually under 48 hours
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="film"
            title="FILM"
            thumbnail={thumbWalknote}
          >
            short films, screenwriting
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="photography"
            title="PHOTOGRAPHY"
            thumbnail={thumbFourPainters}
          >
            snapping pics
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="audio production"  
            title="AUDIO PRODUCTION"
            thumbnail={thumbMenkiki}
          >
            making sounds
          </WorkGridItem>
          <br></br>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'

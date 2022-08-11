import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGames from '../public/images/works/mogu.png'
import thumbFilm from '../public/images/works/film/film.png'
import thumbPhotos from '../public/images/works/photography/photos.png'
import thumb3D from '../public/images/works/3d.png'


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
            thumbnail={thumbGames}>
            making games with my friends, 
            <br></br>
              usually under 48 hours
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="film"
            title="FILM"
            thumbnail={thumbFilm}
          >
            short films, screenwriting,
            <br></br>
            and editing things together
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="photography"
            title="PHOTOGRAPHY"
            thumbnail={thumbPhotos}
          >
            snapping pics of nature
            <br></br>
            and my friends
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="3d"  
            title="3D"
            thumbnail={thumb3D}
          >
            cubes, vfx, animation,
            <br></br>
            and other things
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'

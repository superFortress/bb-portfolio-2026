// I M P O R T

// Assets
import LogoAmsterdam from '#assets/vector/logos/amsterdam.svg';
import LogoMFilms from '#assets/vector/logos/m-films.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';
import Video from '#components/widgets/Video';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Utils
import useStyle from '#utils/hook/useStyle';

// S T Y L E D

const StyledProject = styled(Project)`

    /* header */

    #project-header {
        background: #3680ff;
    }

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #f4e729;
    }

`;

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';

    // E F F E C T

    useStyle(`
        --page-background: #eaf3f3;

        --text-color: #000; 
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Gebieds&shy;pool</h1>
            <figure>
                <Video
                    poster="/assets/images/work/pool/video08.jpg"
                    src="/assets/videos/work/pool/final.mp4"
                />
            </figure>
            <p>To improve collaboration within our local government, we produced a short video to explain the role of the <i>gebiedspool</i>: a diverse team of dedicated civil servants that strings together all other departments.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Gebieds&shy;pool</dd>
                <dt>Commissioned by</dt>
                <dd><LogoAmsterdam /></dd>
                <dt>Produced by</dt>
                <dd><LogoMFilms /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Illustration & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Francoise Mittertreiner<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/pool/video05.jpg" />
                <img src="/assets/images/work/pool/video06.jpg" />
                <img src="/assets/images/work/pool/video03.jpg" desktop />
                <img src="/assets/images/work/pool/video12.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery>
                <img src="/assets/images/work/pool/story01.jpg" />
                <img src="/assets/images/work/pool/story06.jpg" />
                <img src="/assets/images/work/pool/story04.jpg" />
                <img src="/assets/images/work/pool/story08.jpg" />
                <img src="/assets/images/work/pool/story11.jpg" />
                <img src="/assets/images/work/pool/story09.jpg" />
            </Gallery>
        </Project.Section>

    </StyledProject>;

}
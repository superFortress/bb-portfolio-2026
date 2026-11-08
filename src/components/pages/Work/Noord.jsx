// I M P O R T

// Assets
import LogoNoordkwartier from '#assets/vector/logos/noordkwartier.svg';
import LogoTupilakStudio from '#assets/vector/logos/tupilak-studio.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Image from '#components/widgets/Image';
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

const StyledProject = styled(Project)``;

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';

    // E F F E C T

    useStyle(`
        --page-background: #f3f0e6;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>NoordKRACHT</h1>
            <figure>
                <Video
                    poster="/assets/images/work/noord/video01.png"
                    src="/assets/videos/work/noord/final.mp4"
                />
            </figure>
            <p>The Imagine Fantastic Film Festival is an annual, Dutch event where audiences are treated to the newest horror, fantasy, and science-fiction films from across the world. In 2013 we entered into a competition for that year's official leader.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Noord&shy;KRACHT</dd>
                <dt>Commissioned by</dt>
                <dd><LogoNoordkwartier /></dd>
                <dt>Produced by</dt>
                <dd><LogoTupilakStudio /></dd>
                <dt>My contribution</dt>
                <dd><b>Illustration & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Laurens Verwijs<br />
                    <b>Animation</b> Laurens Verwijs<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/noord/design01.jpg" desktop />
                <img src="/assets/images/work/noord/design07.png" />
                <img src="/assets/images/work/noord/design06.png" />
                <img src="/assets/images/work/noord/design08.png" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 3 : 2}>
                <img src="/assets/images/work/noord/story01.jpg" desktop />
                <img src="/assets/images/work/noord/story02.jpg" />
                <img src="/assets/images/work/noord/story03.jpg" />
                <img src="/assets/images/work/noord/story04.jpg" />
                <img src="/assets/images/work/noord/story05.jpg" desktop />
                <img src="/assets/images/work/noord/story06.jpg" />
                <img src="/assets/images/work/noord/story07.jpg" desktop />
                <img src="/assets/images/work/noord/story08.jpg" />
                <img src="/assets/images/work/noord/story09.jpg" />
            </Gallery>
        </Project.Section>

        <Project.Aside>
            <Image src="/assets/images/work/noord/design10.jpg" />
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/noord/element02.png" />
        </Project.Section>

    </StyledProject>;

}
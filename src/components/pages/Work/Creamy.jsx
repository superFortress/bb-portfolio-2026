// I M P O R T

// Assets
import LogoFrieslandCampina from '#assets/vector/logos/friesland-campina.svg';
import LogoImaginePeople from '#assets/vector/logos/imagine-people.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';
import Video from '#components/widgets/Video';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Utils
import useStyle from '#utils/hook/useStyle.js';

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';

    // E F F E C T

    useStyle(`
        --page-background: #eff3e9;
    `);

    // R E T U R N

    return <Project>

        <Project.Header id="project-header">
            <h1>Creamy Creation</h1>
            <figure>
                <Video
                    poster="/assets/images/work/creamy/video04.jpg"
                    src="/assets/videos/work/creamy/final.mp4"
                />
            </figure>
            <p>The Dutch dairy company <b>FrieslandCampina</b> introduces a new product in their line up: the cream liqueur. With this introductory video we show distilleries how the cream is made.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Creamy Creation</dd>
                <dt>Commissioned by</dt>
                <dd><LogoFrieslandCampina /></dd>
                <dt>Produced by</dt>
                <dd><LogoImaginePeople /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Graphic design & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Tanja Engelen<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-sketch">
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/creamy/concept01.jpg" />
                <img src="/assets/images/work/creamy/concept03.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-briefing">
            <figure>
                <img src="/assets/images/work/creamy/element02.png" />
            </figure>
            <h1>Classic drink, new bottle</h1>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery>
                <img src="/assets/images/work/creamy/story01.jpg" />
                <img src="/assets/images/work/creamy/story03.jpg" />
                <img src="/assets/images/work/creamy/story04.jpg" />
                <img src="/assets/images/work/creamy/story07.jpg" />
                <img src="/assets/images/work/creamy/story14.jpg" />
                <img src="/assets/images/work/creamy/story16.jpg" desktop />
                <img src="/assets/images/work/creamy/story05.jpg" desktop />
                <img src="/assets/images/work/creamy/story08.jpg" />
                <img src="/assets/images/work/creamy/story10.jpg" desktop/>
            </Gallery>
        </Project.Section>

        <Project.Aside id="project-video">
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/creamy/video14.jpg" />
                <img src="/assets/images/work/creamy/video05.jpg" desktop />
                <img src="/assets/images/work/creamy/concept04.jpg" desktop />
                <img src="/assets/images/work/creamy/video01.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-result">
            <figure>
                <img src="/assets/images/work/creamy/video02.jpg" />
            </figure>
            <h2>Result</h2>
            <hr />
            <h3>Result</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

    </Project>;

}
import { FC } from 'react';
import classes from './Home.module.scss';

const Home: FC = () => {
    return (
        <div id="home">
            <div className={classes.home_section}>
                <div className={classes.home_layout}>
                    <div className={classes.home_text}>
                        <h2 style={{textAlign: 'right'}}>Bill Riehl</h2>
                        <div style={{textAlign: 'justify'}}>
                            <div>
                                This is a website. This is just the splash part. Stuff'll go here, like a picture. Then other things below.
                            </div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla non dui tincidunt finibus. Mauris condimentum urna dolor, eu rhoncus ex mattis nec. Curabitur eget sapien congue, dapibus lectus in, luctus dolor. Aenean gravida sodales diam, tempus tempor est congue et. Maecenas sagittis, velit id euismod accumsan, quam arcu efficitur eros, id scelerisque magna felis quis massa. Aenean sit amet nunc et nibh feugiat bibendum. Vestibulum non ullamcorper justo, vitae ullamcorper nulla. Duis iaculis enim sit amet placerat consectetur. Duis commodo semper commodo. Donec cursus, est sed iaculis dignissim, dui risus sollicitudin turpis, vel imperdiet odio ligula et sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam mauris, accumsan ut felis gravida, vulputate viverra nibh. Nulla aliquam, orci egestas aliquet commodo, ex neque finibus libero, non efficitur nisi eros dapibus turpis. Donec et tincidunt augue, ullamcorper lobortis ante.
                            </div>
                        </div>
                    </div>
                    <div className={classes.home_image}>[ picture goes here ]</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
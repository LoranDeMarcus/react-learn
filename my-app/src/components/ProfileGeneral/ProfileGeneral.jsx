import React from 'react';
import Block from '../common/Block/Block';

import styles from './ProfileGeneral.module.css';
import MetaInfo from '../MetaInfo/MetaInfo';
import PostsContainer from '../Posts/PostsContainer';

const ProfileGeneral = (props) => {
    return (
        <div className={ styles.block }>
            <Block title='General ProfileInfo'>
                <div className={ styles.flex }>
                    <MetaInfo
                        icon={ <i className="fas fa-puzzle-piece" /> }
                        title='Hobbies'
                        content='I  like to ride the bicycle, swimming, and working out.
                    I also like reading design magazines, and searching on internet,
                    and also binge watching a good hollywood Movies while it’s raining outside.'
                    />
                    <MetaInfo
                        icon={ <i className="fas fa-graduation-cap" /> }
                        title='Education'
                        content='Master of computer science, sixteen years degree From Oxford Uniersity, London'
                    />
                    <MetaInfo
                        icon={ <i className="fas fa-plus" /> }
                        title='Others Interests'
                        content='Swimming, Surfing, Uber Diving, Anime, Photography, Tattoos, Street Art.'
                    />
                    <MetaInfo
                        icon={ <i className="fas fa-plus" /> }
                        title='Work and experience'
                        content='Currently working in the "color hands" web development agency from the last 5 five
                    years as Senior UI/UX Designer'
                    />
                </div>
            </Block>
            <Block title='Posts'>
                <PostsContainer />
            </Block>
        </div>
    );
};

export default ProfileGeneral;

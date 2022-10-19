import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import styles from './team/team.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Member from './team/Member';
import Subtitle from './team/Subtitle';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} - A toolbox for semantic web applications`}
      description={`${siteConfig.title} - A toolbox for semantic web applications`}>

      <div className={classnames(styles.layoutContainer, styles.teamContainer)}>

        <section className={styles.teamIntro}>
          <h1>Semapps and the virtual assembly</h1>
          <div className={styles.image}><img src="/img/av-baniere.png" alt="virtual assembly banner" /></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias quas non dolor assumenda voluptatem aliquid sapiente illo, veniam omnis!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, inventore.</p>
        </section>

        <section className={classnames(styles.teamMembers, styles.contrast)}>
          <div className={styles.wrapper}>
            <h2>Team</h2>
            <Subtitle label='Core team' />
            <ul>
              <li className={styles.memberCard}>
                <Member 
                  label='Sébastien Rosset' 
                  image='/img/srosset.jpg' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Facilitation',
                    'Communication',
                    'DevX',
                    'Code quality',
                    'Virtual Assembly coordination'
                  ]}
                  linkedIn='https://www.linkedin.com/in/sebastien-rosset-reconnexion/'
                  twitter=''
                  github='https://github.com/srosset81'
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Simon Louvet' 
                  image='/img/simon-louvet.jpg' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Development',
                    'Economic sustainability'
                  ]}
                  linkedIn='https://www.linkedin.com/in/simon-louvet-a9842018/'
                  twitter='https://twitter.com/simonlouvet'
                  github='https://github.com/simonLouvet'
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Niko Bonnieure' 
                  image='img/blank-profile-picture.png' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[]}
                  linkedIn=''
                  twitter=''
                  github=''
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Pierre Bouvier-Muller' 
                  image='/img/pierre-bouvier-muller.png' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Mediation'
                  ]}
                  linkedIn='https://www.linkedin.com/in/bouviermullerp/'
                  twitter=''
                  github=''
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Guillaume Rouyer' 
                  image='/img/guillaume-rouyer.jpg' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Mediation'
                  ]}
                  linkedIn='https://www.linkedin.com/in/guillaume-rouyer-paris/'
                  twitter=''
                  github=''
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Yannick Duthé' 
                  image='/img/yannick-duthe.png' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Onboarding',
                    'Information',
                    'gardening'
                  ]}
                  linkedIn='https://www.linkedin.com/in/yannick-duthe-569a741b/'
                  twitter=''
                  github=''
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Bastien Siguier' 
                  image='/img/bastien-siguier.jfif' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Instances hosting'
                  ]}
                  linkedIn='https://www.linkedin.com/in/bastien-siguier/'
                  twitter=''
                  github=''
                />
              </li>
              <li className={styles.memberCard}>
                <Member 
                  label='Vincent Farcy' 
                  image='/img/vincent-farcy.png' 
                  description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga?'
                  roles={[
                    'Web development'
                  ]}
                  linkedIn='https://www.linkedin.com/in/vincentfarcy/'
                  twitter=''
                  github='https://github.com/VincentFarcy'
                />
              </li>
            </ul>
            <Subtitle label='Technical advisors' />
            <ul>
              <li className={styles.memberCard}>
                <Member 
                  label='Thomas Francart' 
                  image='/img/Thomas-Francart.jpg' 
                  description='Knowledge Graph and Semantic Web senior consultant'
                  roles={[
                    'Development',
                    'Economic sustainability'
                  ]}
                  linkedIn='https://www.linkedin.com/in/thomasfrancart/'
                  twitter=''
                  github=''
                />
              </li>
            </ul>
          </div>
        </section>

      </div>

    </Layout >
  );
}

export default Home;

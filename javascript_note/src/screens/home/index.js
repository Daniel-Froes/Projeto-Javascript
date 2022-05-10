import React, { Fragment } from 'react';
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header/index';
import { Column, Section, Title, Container} from 'rbx';
import '../../styles/home.scss'

const HomeScreen = () => (
    <Fragment>
        <Header/>

        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Create notes easily and acess when you wants on the cloud
                        </Title>
                        <Title size={2} spaced className="has-text-white" subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non suscipit mi, quis maximus ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non suscipit mi, quis maximus ipsum.
                        </Title>
                        <a href className="button is-outlined is-white is-large"><strong>Register for free now</strong></a>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={presentationImage} alt="presentation"/>
                    </Column>
                </Column.Group>
            </Container>

        </Section>


    </Fragment>

)

export default HomeScreen;
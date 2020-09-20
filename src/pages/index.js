import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Parallax} from 'react-parallax';
import {Col, Row} from 'reactstrap';
import "./index.scss"
import loadable from '@loadable/component'

const image = require('./../../public/images/image1.jpg')
const secondImage = require('./../../public/images/image2.jpg')
const AnimatedCursor = loadable(() => import("../components/AnimatedCursor"))

const Index = () => {

    return <Layout>
        <AnimatedCursor/>
        <SEO title="Home"/>
        <Parallax bgImage={image} strength={500}>
            <div style={{height: 800}} className="d-flex justify-content-center align-items-center">
                <h1 className="text-center title">
                    PROGRESSION <br/>
                    THROUGH<br/>
                    UNLEARNING
                </h1>
            </div>
        </Parallax>
        <Row>
            <Col className="text-block">
                <p> I strongly believe that each and everyone of us can be inspired by and learn from each other.</p>
            </Col>
            <Col className="text-block">
                <p> With time I learned what it is that I have to share to help and inspire other photographers. The
                    reasons why I do things certain ways. In my workshops, personal coachings or presentations I wanna
                    inspire people to find their own ways to do and see things, to find their why's. But of course, I
                    can also just tell you how I do it.</p>
            </Col>
            <Col className="text-block">
                <p> On this website you'll find info about my workshops, presets, guides that I have to offer (coming
                    soon) or any other info I find needful to give you inspiration and support along the way. These are
                    based on my personal experiences</p>
            </Col>
        </Row>
        <Parallax bgImage={secondImage} strength={500}>
            <div style={{height: 1200}} className="d-flex align-items-center">
                <h1 className="text-left title">
                    FOR THE <br/>
                    HEARTS STILL<br/>
                    BEATING
                </h1>
            </div>
        </Parallax>
        <Row className="d-flex justify-content-center align-items-center vh-100 text-center"
             style={{background: 'black'}}>
            <h1 className="w-50 font-weight-bold" style={{color: 'white'}}>"Jeśli czegoś nie da się zrobić, zleć to
                komuś
                kto o tym nie wie, a on przyjdzie i to
                zrobi</h1>
        </Row>

    </Layout>
}

export default Index;

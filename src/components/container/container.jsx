import React from 'react';

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import Scatter from '../scatter/scatter.component';

class ContainerComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            upper: null,
            lower: null
        }
        this.divs = 11
    }

    componentDidMount(){
        // let up = parseInt(this.divs / 2)
        // this.setState({
        //     upper: up,
        //     lower: parseInt(this.divs - up)
        // })

    }

    render(){
        // console.log(this.state)
        // if(this.state.upper === null){
        //     return <div>Wait</div>
        // }else{
            return(
                <Container fluid>
                    <Row xs={12} style={{height: '30vh'}}>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.1}                            
                            />                            
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.11}                            
                            /> 

                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.12}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter  time = {0.13}/>
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time={0.14} />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time = {0.15} />
                        </Col>
                    </Row>

                    <Row xs={12} style={{height: '30vh'}}>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time={0.16} />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time = {0.17} />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time = {0.18} />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time = {0.19} />
                        </Col >
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter time = {0.2} />
                        </Col>
                    </Row>

                    <Row xs={12} style={{height: '35vh'}}>
                        <Col xs={12}>
                            Node link
                        </Col>
                    </Row>
                </Container>
            )
            
        // }
        
    }
}

export default ContainerComponent ;
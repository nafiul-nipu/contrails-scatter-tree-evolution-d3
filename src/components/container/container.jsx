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
                                // time={210}                          
                            />                            
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.11} 
                                // time={211}                           
                            /> 

                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.12}
                                // time={212}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter  
                                time = {0.13}
                                // time={213}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.14} 
                                // time={213}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter
                                time = {0.15} 
                                // time={214}
                            />
                        </Col>
                    </Row>

                    <Row xs={12} style={{height: '30vh'}}>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time={0.16} 
                                // time={215}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time = {0.17} 
                                // time={216}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time = {0.18} 
                                // time={217}
                            />
                        </Col>
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time = {0.19} 
                                // time={218}
                            />
                        </Col >
                        <Col xs={2} style={{height: '30vh'}}>
                            <Scatter 
                                time = {0.2} 
                                // time={219}
                            />
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
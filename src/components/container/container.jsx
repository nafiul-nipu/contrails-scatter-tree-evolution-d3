import React from 'react';

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

class ContainerComponent extends React.Component{
    constructor(){
        super();

        this.state = {}
    }

    componentDidMount(){

    }

    render(){
        return(
            <Container fluid>
                <Row xs={12}>
                    <Col xs={6}>
                        Column 1
                    </Col>
                    <Col xs={6}>
                        Column 2
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContainerComponent ;
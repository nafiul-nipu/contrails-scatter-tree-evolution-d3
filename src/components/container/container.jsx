import React from 'react';

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
import { timeHours } from 'd3-time';

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
        let up = parseInt(this.divs / 2)
        this.setState({
            upper: up,
            lower: parseInt(this.divs - up)
        })

    }

    render(){
        console.log(this.state)
        if(this.state.upper === null){
            return <div>Wait</div>
        }else{
            return(
                <Container fluid>
                    <Row xs={12}>
                        {
                            
                        }
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
}

export default ContainerComponent ;
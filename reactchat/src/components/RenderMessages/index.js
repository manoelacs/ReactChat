import React, {Component} from 'react';
import smile from '../../assets/images/smile.svg';
import { Container, Balloon, PerfilImage, ContainerMessage} from './styles';


class StyledMessages extends Component {
    constructor(props) {
      super(props);
      this.boxRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.active) { // whatever your test might be
          this.boxRef.current.scrollIntoView({
            behavior: 'smooth',            
          });
        }
      }
  
    render() {
      return (
        
        <Container ref={this.boxRef}>
        
            <PerfilImage src={smile} alt="Chatnilson"/>

            <Balloon>                        
                <ContainerMessage> {this.props.message} </ContainerMessage>                        
            </Balloon> 

        </Container>
      );
    }
           

}; export default StyledMessages;
import React, {Component} from 'react';
import smile from '../assets/images/smile.jpg';
import '../assets/css/RenderMessages.css';


class RenderMessages extends Component {
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
        
        <li ref={this.boxRef} className="messageQuad">
        
            <img src={smile} alt="Chatnilson"/>
            <div className="balao2">
                        
                <p> {this.props.message} </p>
                        
            </div>      
        </li>
      );
    }
           

}; export default RenderMessages;
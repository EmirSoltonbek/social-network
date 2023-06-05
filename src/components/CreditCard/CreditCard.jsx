import { Button, Form, Alert, Row, Col} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css" 
import Cards from 'react-credit-cards-2'; 
import { useCreditCard } from '../../contexts/CreditCardProvider'; 
import 'react-credit-cards-2/dist/es/styles-compiled.css'; 
import { useCart } from '../../contexts/CartContextProvider'; 
import { useNavigate } from 'react-router-dom'; 
import "../CreditCard/CreditCard.css" 
 
 
 
const CreditCard = () => { 
  const {cart} = useCart(); 
  const navigate = useNavigate(); 
const { 
  number, 
  date, 
  name, 
  cvc, 
  focus, 
 
  setNumber, 
  setName, 
  setDate, 
  setCvc, 
  setFocus, 
 
  handleSubmit, 
 
} = useCreditCard(); 
 
 
 
 
  return ( 
    <> 
    <div className="container"> 
      <div className="box"> 
        <div className="credit-form"> 
          <div className="credit-cards"> 
          <Cards  className="cards" 
          number={number} 
          name={name} 
          expiry={date} 
          cvc={cvc} 
          focused={focus} 
 
        /> 
          </div> 
          <Form onSubmit={handleSubmit}> 
            <Form.Group> 
            <Form.Control 
            type="text" 
            className="cCard" 
            id='name' 
            name="number" 
            pattern='[\d| ]{16,22}' 
            maxLength={16} 
            placeholder='Card Number' 
            value={number} 
            onChange={(e)=> setNumber(e.target.value)} 
            onFocus={(e)=> setFocus(e.target.name)} 
             
            /> 
            </Form.Group> 
             
            <Form.Group> 
            <Form.Control 
            type="text" 
            id='name' 
            name="name" 
            className="cCard" 
 
            pattern='[a-z A-Z-]+' 
            placeholder='Cardholder Name' 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
            onFocus={(e)=> setFocus(e.target.name)} 
            /> 
            </Form.Group> 
            <Row> 
              <Col> 
                <Form.Group> 
                  <Form.Control 
                    type="text" 
                    name="expiry" 
                    className="cCard" 
 
                    id="expiry" 
                    pattern='\d\d/\d\d' 
                    maxLength={4} 
                    data-testid="cardType" 
                    placeholder="Expiration Date" 
                    value={date} 
                    onChange={(e)=> setDate(e.target.value)} 
                    onFocus={(e)=> setFocus(e.target.name)} 
                  /> 
                </Form.Group> 
              </Col> 
             
                <Form.Group> 
                  <Form.Control 
                    type="password"  //! type change 
                    id="cvc" 
                    data-testid="cvc" 
                    className="cCard" 
 
                    name="cvc" 
                     pattern='\d{3}' 
                     maxLength={3} 
                    placeholder="CVC" 
                    value={cvc} 
                    onChange={(e)=> setCvc(e.target.value)} 
                    onFocus={(e)=> setFocus(e.target.name)} 
                  /> 
                </Form.Group> 
               
            </Row> 
            <Button className="cardBtn" onClick={()=>{ 
              navigate("/paymentCheck") 
            }}>Pay {cart.totalPrice} сом</Button> 
          </Form> 
        </div>  
      </div> 
    </div> 
    </> 
  ); 
} 
 
export default CreditCard;
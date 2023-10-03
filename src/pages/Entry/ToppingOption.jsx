import { Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { useOrderDetails } from '../../contexts/OrderDetails'

export function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails()

  function handleChange(event) {
    updateItemCount(name, +event.currentTarget.checked, 'toppings')
  }

  return (
    <Col xs={6} sm={4} md={3} lg={2} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030${imagePath}`}
        alt={`${name} topping`}
      />

      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type="checkbox" onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  )
}

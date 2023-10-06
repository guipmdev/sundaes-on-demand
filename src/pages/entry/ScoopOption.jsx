import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { useOrderDetails } from '../../contexts/OrderDetails'
import { useState } from 'react'

export function ScoopOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails()

  const [isInvalid, setIsInvalid] = useState(false)

  function handleChange(event) {
    const currentValue = event.currentTarget.value

    // make sure we're using a number and not a string to validate
    const currentValueFloat = parseFloat(currentValue)
    const valueIsValid =
      0 <= currentValueFloat &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) === currentValueFloat

    // validate
    setIsInvalid(!valueIsValid)

    // update scoop to 0 if value is invalid
    updateItemCount(name, valueIsValid ? parseInt(currentValue) : 0, 'scoops')
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030${imagePath}`}
        alt={`${name} scoop`}
      />

      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs="6" style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            required={true}
            defaultValue={0}
            min={0}
            max={10}
            step={1}
            onChange={handleChange}
            isInvalid={isInvalid}
          />
        </Col>
      </Form.Group>
    </Col>
  )
}

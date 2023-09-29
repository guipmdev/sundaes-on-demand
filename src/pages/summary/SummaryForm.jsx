import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false)

  function handleChangeButtonStatus(event) {
    setTcChecked(event.currentTarget.checked)
  }

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  )

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={handleChangeButtonStatus}
          label={checkboxLabel}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  )
}

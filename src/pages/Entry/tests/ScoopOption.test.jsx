import { render, screen } from '../../../test-utils/testing-library-utils'
import { ScoopOption } from '../ScoopOption'
import userEvent from '@testing-library/user-event'

test('indicate if scoop count is non-int or out of range', async () => {
  const user = userEvent.setup()

  render(<ScoopOption name={jest.fn()} imagePath={jest.fn()} />)

  const scoopInput = await screen.findByRole('spinbutton')

  // expect input to be invalid with empty value
  await user.clear(scoopInput)
  expect(scoopInput).toBeInvalid()
  expect(scoopInput).toHaveClass('is-invalid')

  // add decimal input
  await user.type(scoopInput, '2.5')
  expect(scoopInput).toBeInvalid()
  expect(scoopInput).toHaveClass('is-invalid')

  // replace with negative number
  await user.clear(scoopInput)
  await user.type(scoopInput, '-1')
  expect(scoopInput).toBeInvalid()
  expect(scoopInput).toHaveClass('is-invalid')

  // replace with input that's too high
  await user.clear(scoopInput)
  await user.type(scoopInput, '11')
  expect(scoopInput).toBeInvalid()
  expect(scoopInput).toHaveClass('is-invalid')

  // replace with valid input
  // note: here we're testing our validation rules (namely that the input can display as valid)
  // and not react-bootstrap's response
  await user.clear(scoopInput)
  await user.type(scoopInput, '3')
  expect(scoopInput).toBeValid()
  expect(scoopInput).not.toHaveClass('is-invalid')
})

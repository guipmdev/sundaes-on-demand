import { render, screen } from '@testing-library/react'
import { SummaryForm } from '../SummaryForm'
import userEvent from '@testing-library/user-event'

test('initial conditions', () => {
  render(<SummaryForm />)

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  })
  expect(checkbox).not.toBeChecked()

  const confirmButton = screen.getByRole('button', {
    name: 'Confirm order',
  })
  expect(confirmButton).toBeDisabled()
})

test('checkbox enables button on first click and disables on second click', async () => {
  const user = userEvent.setup()

  render(<SummaryForm />)

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  })
  const confirmButton = screen.getByRole('button', {
    name: 'Confirm order',
  })

  await user.click(checkbox)
  expect(confirmButton).toBeEnabled()

  await user.click(checkbox)
  expect(confirmButton).toBeDisabled()
})

test('popover responds to hover', async () => {
  const user = userEvent.setup()

  // popover starts out hidden

  // popover appears on mouseover of checkbox label

  // popover disappears when we mouse out
})

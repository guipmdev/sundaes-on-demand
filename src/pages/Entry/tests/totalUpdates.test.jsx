import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import { Options } from '../Options'

test('update scoop subtotal when scoops change', async () => {
  const user = userEvent.setup()

  render(<Options optionType="scoops" />)

  // make sure total start out at $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1, and check subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })

  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })

  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent('6.00')
})

test('update topping subtotal when toppings change', async () => {
  const user = userEvent.setup()

  render(<Options optionType="toppings" />)

  // make sure total start out at $0.00
  const toppingSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  })
  expect(toppingSubtotal).toHaveTextContent('0.00')

  // add cherries topping, and check subtotal
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  })
  await user.click(cherriesCheckbox)
  expect(toppingSubtotal).toHaveTextContent('1.50')

  // add hot fudge topping, and check subtotal
  const hotFudgeCheckbox = await screen.findByRole('checkbox', {
    name: 'Hot fudge',
  })
  await user.click(hotFudgeCheckbox)
  expect(toppingSubtotal).toHaveTextContent('3.00')

  // remove hot fudge topping, and check subtotal
  await user.click(hotFudgeCheckbox)
  expect(toppingSubtotal).toHaveTextContent('1.50')
})

import Button from 'react-bootstrap/Button'
import { useOrderDetails } from '../../contexts/OrderDetails'
import { formatCurrency } from '../../utilities'
import { Options } from './Options'

export function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails()

  function handleOrderSundae() {
    setOrderPhase('review')
  }

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button onClick={handleOrderSundae} disabled={!totals.scoops}>
        Order Sundae!
      </Button>
    </div>
  )
}

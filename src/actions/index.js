import axios from 'axios'
export const FETCH_CARD = 'FETCH_CARD'

export function fetchCard(card_name) {
  const request = axios.get(
    `http://yugiohprices.com/api/card_data/${card_name}`
  )
  console.log(request)
  console.log(card_name)
  return {
    type: FETCH_CARD,
    payload: request,
  }
}

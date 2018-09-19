import React from 'react'

const Currency = ({ args, currency, rate }) => <p>US Dollar: ${args.amount.toFixed(2)} - {currency}{(args.amount * rate).toFixed(2)}</p>

export default Currency
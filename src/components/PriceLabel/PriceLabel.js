import React from 'react';

function PriceLabel({ old, type = "positive", currency, price, className, size="small" }) {
  const classes = [
    'price-label',
    old ? 'price-label-old' : 'price-label-new',
    size === 'big' ? 'price-label-big' : null,
    className
  ].join(" ");
  return (
    <div className={classes}>
      {type && type === 'negative' ? (
        <span className="price-label-type">-</span>
      ) : null}
      <span className="price-label-currency">{currency}</span>
      <span className="price-label-number">{price}</span>
    </div>
  );
}

export default PriceLabel;

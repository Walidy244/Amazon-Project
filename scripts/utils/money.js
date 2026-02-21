export function formatCurrency(priceCents){//Reusing the function using modules
  return (priceCents / 100).toFixed(2);
}

export default formatCurrency;
//Each file can only have one default export.



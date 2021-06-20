const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;
	
	fetch(
    `https://v6.exchangerate-api.com/v6/ae29aa0d49b7f5937fe3bec3/latest/${from_currency}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[to_currency];

      rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;

      to_ammount.value = (from_ammount.value * rate).toFixed(2);
    });
}

calculate();
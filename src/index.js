module.exports = function toReadable(n) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (n >= 0 && n <= 9) return digits[n];
  if (n > 9 && n < 20) return teens[n - 10];
  if (n >= 20 && n < 100 && n % 10 === 0) return tens[n / 10];
  if (n >= 20 && n < 100)
    return `${tens[Math.floor(n / 10)]} ${digits[n % 10]}`;

  if (n >= 100 && n < 1000) {
    const hundred = digits[Math.floor(n / 100)];
    const remainder = n % 100;
    if (remainder === 0) return `${hundred} hundred`;
    if (remainder < 10) return `${hundred} hundred ${digits[remainder]}`;
    if (remainder < 20) return `${hundred} hundred ${teens[remainder - 10]}`;
    if (remainder % 10 === 0)
      return `${hundred} hundred ${tens[remainder / 10]}`;
    return `${hundred} hundred ${tens[Math.floor(remainder / 10)]} ${digits[remainder % 10]}`;
  }
  return '';
};

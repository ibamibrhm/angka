function numberToWords(number) {
  const words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  if (number < 12) {
    return words[number];
  } else if (number < 20) {
    return numberToWords(Math.floor(number % 10)) + ' belas';
  } else if (number < 100) {
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
  } else if (number < 1000) {
    if (Math.floor(number /100) === 1) {
      return 'seratus ' + numberToWords(number % 100);
    } else {
      return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
    }
  } else if (number < 1000000) {
    if (Math.floor(number / 1000) === 1) {
      return 'seribu ' + numberToWords(number % 1000);
    } else {
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
    }
  } else if (number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000);
  } else if (number < 1000000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000);
  }
}

module.exports = numberToWords;
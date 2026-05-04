/**
 * IP-based currency detection + conversion
 * Uses free ipapi.co for geolocation
 */

const RATES = {
  IDR: 1,
  USD: 0.0000625,    // 1 IDR = 0.0000625 USD (16,000 IDR = 1 USD)
  EUR: 0.0000575,    // ~17,400 IDR = 1 EUR
  GBP: 0.0000495,    // ~20,200 IDR = 1 GBP
  AUD: 0.0000955,    // ~10,470 IDR = 1 AUD
  SGD: 0.0000835,    // ~11,980 IDR = 1 SGD
  MYR: 0.000281,     // ~3,560 IDR = 1 MYR
  JPY: 0.00975,      // ~102 IDR = 1 JPY
  INR: 0.00528,      // ~189 IDR = 1 INR
  PHP: 0.00354,      // ~282 IDR = 1 PHP
  THB: 0.00215,      // ~465 IDR = 1 THB
  KRW: 0.0875,       // ~11.4 IDR = 1 KRW
  CNY: 0.000455,     // ~2,198 IDR = 1 CNY
  AED: 0.00023,      // ~4,350 IDR = 1 AED
}

const SYMBOLS = {
  IDR: 'Rp', USD: '$', EUR: '€', GBP: '£', AUD: 'A$', SGD: 'S$',
  MYR: 'RM', JPY: '¥', INR: '₹', PHP: '₱', THB: '฿', KRW: '₩',
  CNY: '¥', AED: 'AED',
}

const COUNTRY_CURRENCY = {
  US: 'USD', GB: 'GBP', IE: 'EUR', AU: 'AUD', SG: 'SGD', MY: 'MYR',
  JP: 'JPY', IN: 'INR', PH: 'PHP', TH: 'THB', KR: 'KRW', CN: 'CNY',
  AE: 'AED', ID: 'IDR', DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR',
  NL: 'EUR', PT: 'EUR', AT: 'EUR', BE: 'EUR', FI: 'EUR', GR: 'EUR',
  CA: 'USD', NZ: 'AUD', HK: 'USD', TW: 'USD', VN: 'USD', SA: 'AED',
}

/**
 * Detect user's currency from IP address
 * @returns {Promise<{ currency: string, country: string, symbol: string }>}
 */
export async function detectCurrency() {
  try {
    const cached = sessionStorage.getItem('indoo_currency')
    if (cached) return JSON.parse(cached)

    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) })
    const data = await res.json()
    const country = data.country_code || 'ID'
    const currency = COUNTRY_CURRENCY[country] || 'USD'
    const result = { currency, country, symbol: SYMBOLS[currency] || currency }

    sessionStorage.setItem('indoo_currency', JSON.stringify(result))
    return result
  } catch {
    return { currency: 'USD', country: 'US', symbol: '$' }
  }
}

/**
 * Convert IDR price to detected currency
 * @param {number} idrPrice — price in IDR
 * @param {string} currency — target currency code
 * @returns {{ formatted: string, value: number, symbol: string }}
 */
export function convertPrice(idrPrice, currency = 'USD') {
  if (currency === 'IDR') {
    return {
      formatted: `Rp ${idrPrice.toLocaleString('id-ID')}`,
      value: idrPrice,
      symbol: 'Rp',
    }
  }

  const rate = RATES[currency] || RATES.USD
  const value = Math.round(idrPrice * rate * 100) / 100
  const symbol = SYMBOLS[currency] || currency

  // Format based on currency
  if (['JPY', 'KRW'].includes(currency)) {
    return { formatted: `${symbol}${Math.round(value).toLocaleString()}`, value, symbol }
  }
  return { formatted: `${symbol}${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, value, symbol }
}

/**
 * Format IDR price with dual display (local + IDR)
 * @param {number} idrPrice
 * @param {string} currency
 * @returns {string}
 */
export function dualPrice(idrPrice, currency) {
  if (currency === 'IDR') return `Rp ${idrPrice.toLocaleString('id-ID')}`
  const converted = convertPrice(idrPrice, currency)
  return `${converted.formatted} (Rp ${idrPrice.toLocaleString('id-ID')})`
}

import axios from 'axios'

import { API_URL } from 'react-native-dotenv'

async function getPlanification(params) {
  const horizon = 2020 + params.horizon;

  return axios.post(API_URL, {
    initialAmount: params.initialAmount,
    expectedPerformance:  0.08,
    expectedVolatility:  0.05,
    targetAmount: params.targetAmount,
    dateFrom: '20200122',
    dateTo: `${horizon}0122`,
    periodicContributions: params.periodicContributions,
    contributionsFrequency: 'MONTHLY'
    })
}

module.exports.getPlanification = getPlanification
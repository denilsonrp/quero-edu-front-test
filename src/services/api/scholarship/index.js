import data from './../../../assets/json/db.json'

async function getScholarships() {
  return data
}

async function getInitialCities() {
  let allCities = []

  data.map(scholarship => {
    allCities.push(scholarship.campus.city)
  })

  return allCities
  //return [...new Set(allCities)]
}

export default {
  getScholarships,
  getInitialCities
}

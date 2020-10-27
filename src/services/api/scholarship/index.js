import data from './../../../assets/json/db.json'

/**
 * Get a list of scholarships, considering some filters (city, course, kind, price)
 *
 * @async
 * @function getScholarships
 * @return {Promise}
 */
async function getScholarships({ filters }) {
  let filteredScholarships = data

  if (filters.city) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.campus.city === filters.city)
  if (filters.course) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.course.name === filters.course)
  if (!(filters.kind_presencial && filters.kind_ead)) {
    if (filters.kind_presencial) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.course.kind === 'Presencial')
    if (filters.kind_ead) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.course.kind === 'EaD')
  }
  if (filters.price) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.price_with_discount <= filters.price)

  return filteredScholarships
}

/**
 * Get a list of unique cities in db
 *
 * @async
 * @function getCities
 * @return {Promise}
 */
async function getCities() {
  const uniqueCities = [...new Set(data.map(scholarship => scholarship.campus.city))]

  return uniqueCities
}

/**
 * Get a list of unique courses by city
 *
 * @async
 * @function getCoursesByCity
 * @return {Promise}
 */
async function getCoursesByCity(city) {
  const scholarships = data.filter(scholarship => scholarship.campus.city === city)

  const uniqueCourses = [...new Set(scholarships.map(scholarship => scholarship.course.name))]

  return uniqueCourses
}

export default {
  getScholarships,
  getCities,
  getCoursesByCity
}

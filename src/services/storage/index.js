const store = (value) => {
  try {
    localStorage.setItem(`@QueroEduFrontTest:scholarships`, JSON.stringify(value))
  } catch (error) {
    alert('Error saving data localStorage store')
  }
}

const retrieve = () => {
  try {
    return localStorage.getItem(`@QueroEduFrontTest:scholarships`)
  } catch (error) {
    alert('Error retrieving data localStorage store')
  }
}

export default {
  store,
  retrieve
}

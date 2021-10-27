import React from 'react'
import AppForm from '../components/AppForm.jsx'
import PatientsList from '../components/PatientsList.jsx'

const Home = () => {
  return (
    <main className='container'>
      <AppForm />
      <PatientsList />

    </main>
  )
}

export default Home

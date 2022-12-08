import React from 'react'
import PropTypes from 'prop-types'
import ContentRowMoviesCard from './ContentRowMoviesCard'

let moviesInDb ={
    titulo: "Movies in Data Base",
    color: "primary",
    cifra : 179,
    icono : "fa-film"
}

let awardsTotal ={
    titulo: "Total awards",
    color: "success",
    cifra : 79,
    icono : "fa-award"
}

let actorsTotal ={
    titulo: "Actors quantity",
    color: "warning",
    cifra : 49,
    icono : "fa-user"
}

let valueCards = [moviesInDb,awardsTotal,actorsTotal]

function ContentRowMovies() {
  return (

    <div className="row">
      {
        valueCards.map( (card,index) => {
        return <ContentRowMoviesCard key={index} {...card}/>
        }
        )
      }
    </div>
  )
}

ContentRowMovies.propType = {
  titulo : PropTypes.string,
  
}


export default ContentRowMovies

     
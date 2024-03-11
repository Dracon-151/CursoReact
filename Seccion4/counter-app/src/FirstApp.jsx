import PropTypes from 'prop-types'

const getUser = (name, year)=>{
    return {
        name: `Hola ${name}`,
        subtitle: `React ${year}`
    }
}

export function App ({ 
    title, 
    year,
}) {
    return(
        <>
            <h1>{ getUser(title, year).name }</h1>
            <h5>{ getUser(title, year).subtitle }</h5>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
}

App.defaultProps = {
    title: 'Sin título',
    year: 2020,
}
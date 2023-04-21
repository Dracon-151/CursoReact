interface Persona {
    nombre : string,
    edad: number,
    oficio: Oficio,
}

interface Oficio {
    id: number,
    name: string,
}

export const ObjetosLiterales = () => {

    const persona : Persona = {
        nombre: 'Alexis',
        edad: 21,
        oficio: {
            id: 1,
            name: 'frontend dev',
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify(persona) }
            </pre>
        </code>
    </>
  )
}

// when we get data from the server it is available as props

import axios from "axios"

export default function Animals({ data }) {
    return (
        <h1> Rando Animal: { data.rando}</h1>
    )
}

// export a function thats called 'getStaticProps' to return 'data' prop in our components

export async function getStaticProps() { 
    // we can do all ajax/axios/fetch
    const { data } = await axios.get(`${process.env.SERVER_URL}/api/animals`)
    console.log(data)
    return { 
        props: { 
            data,
            otherProp: 'Hi'
        }
    }
}
// import { useState, useEffect } from "react";

// function useFetch(fetchFn) {
//     const [data, setData] =useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, serError] = useState(false)

//     useEffect(() => {
//         fetchFn()
//             .then(result => (setData(result)))
//             .catch(err => (serError(err.message)))
//             .finally(() => setLoading(false))
//     }, [fetchFn])

//     return {data , loading, error}
// }

// export default useFetch

const prenom = ['alice','bob', 'charlie']
const affichage = prenom.map(p => `Bonjour ${p}`)
console.log(affichage)
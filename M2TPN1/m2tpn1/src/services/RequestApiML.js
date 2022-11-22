import Firestore from '../config/Firestore'
export const RequestApiML = async () => {
  // const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`;

  try {
    const querySnapshot = await Firestore.firestore().collection('producto').get()
    // const resu = fetch(URL)
    //   .then((res) => res.json())
    //   .then((res) => res.results);
    return querySnapshot.docs;
  } catch (error) {
    console.error(error);
  }
};

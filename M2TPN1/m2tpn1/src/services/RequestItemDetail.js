import Firestore from '../config/Firestore'

const RequestItemDetail = async (id) => {
  // const URL = `https://api.mercadolibre.com/items/${id}/`;
  // const [resultado, setResultado] = useState('');
  // useEffect( () => {
    try {
      // fetch(URL)
      //   .then((res) => res.json())
      //   .then((res) => setResultado(res));
      const querySnapshot = await Firestore.firestore().doc(`producto/${id}`).get()
      return querySnapshot
    } catch (error) {
      console.error(error);
    }
  // }, [URL]);
};

export default RequestItemDetail;

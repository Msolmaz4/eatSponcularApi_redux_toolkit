import React, { useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/foodSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "./Card.jsx";

const Home = () => {

    const [int,setInt] = useState({inp:'',sel:''})
  const dispatch = useDispatch();
  const { foods, loading } = useSelector((state) => state.food);

  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(foods.products, loading);
  useEffect(() => {
    // `loading` durumunu takip et
    if (loading) {
      toast.info("Loading..."); // Loading durumunda bilgi mesajı göster
    } else if (foods.error) {
      toast.error(`Error: ${foods.error.message}`); // Hata durumunda hata mesajı göster
    }
  }, [loading, foods.error]);

  //  useEffect(()=>{
  //   const derleme=async   () => {
  //         const data=  await axios.get(`https://api.spoonacular.com/food/products/search?apiKey=018a82e3be1441f787d85e6feff06457&query=cheese`)
  //         console.log(data.data)
  //         return data
  //      }
  //      derleme()
  //  },[])

const inpHan =(e)=>{
    e.preventDefault()
    setInt({ inp:e.target.value,sel:e.target.value})

}
console.log(user.name.slice(0,1),'user')
  return (
    <div>
      <h1>Home</h1>

      <div style={{border:'2px solid red',width:'30px', height:'60px', display:'flex',background:'black',color:'white', textSize:'28px' ,justifyContent:'center' ,borderRadius:'100%' ,alignItems:'center'}}>{user.name.slice(0,1)}</div>
      <form  onSubmit={inpHan}>
        <div style={{display:'flex', justifyContent:'center', padding:'15px', marginLeft:'15px'}}>
          <div style={{marginRight:'15px'}}>
            <input
              placeholder="Search for Recipe"
              required=""
              type="search"
              id="search"
              class="form-control"
              value={int.inp}
              onChange={(e)=>setInt({...int,inp:e.target.value})}
            />
          </div>
          <button
            variant="primary w-25 h-25"
            type="submit"
            class="sc-eCstZk kzQJBF"
          >
            Search
          </button>
          <div style={{marginLeft:'15px'}}>
            <select class="form-select" id="meal" value={int.sel}
              onChange={(e)=>setInt({...int,sel:e.target.value})}>
              <option selected="">Choose...</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="brunch">Brunch</option>
              <option value="teaTime">Tea Time</option>
            </select>
          </div>
        </div>
      </form>
      <div style={{display:'flex',flexWrap:'wrap' ,gap:'5px'}}>
        {

    foods.products?.map((item)=>(

      <Card item={item}/>
    ))
   }
      </div>
   
      <ToastContainer />" Home
    </div>
  );
};

export default Home;

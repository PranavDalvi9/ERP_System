import axios from 'axios'

export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

 
export const dataLoading = () => ({
    type : DATA_LOADING
});

export const dataSuccess = (payload) => ({
    type : DATA_SUCCESS,
    payload
});

export const dataFailure =() => ({
    type: DATA_FAILURE
})


// export const login = (data) => (dispatch)=> {

//     dispatch(loginLoading())

// axios.post("https://e-commerce-website-pranav.herokuapp.com/login", data).then((res) => {dispatch(loginSuccess(res.data)) ; alert("Login Success") }).catch((error) => {alert(error.response.data.message); dispatch(loginFailure())})
  
// }


// export const register = (data) => (dispatch)=> {
//     // const dispatch = useDispatch();

//     // dispatch(loginLoading())
//     // fetch("https://loginregisterbackend.herokuapp.com/register", {
//     //   method: "POST",
//     //   body: JSON.stringify(payload),
//     //   headers:{
//     //     "Content-Type": "application/json"
//     //   }
//     // })
//     // .then((res) => res.json())
//     // .then((res) => dispatch(loginSuccess({email:res.email,token:res.token})))
//     // .then((res) => {alert("Register Successfull")})
//     // .catch((err) => dispatch(loginFailure()))

//     dispatch(loginLoading())
//     axios.post("https://e-commerce-website-pranav.herokuapp.com/register", data).then((res) => {dispatch(loginSuccess(res.data)) ;alert("Register Successfully")}).catch((error) => {console.log(error.response.data.message) ; dispatch(loginFailure()) })

// }
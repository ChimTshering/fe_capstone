import cycle from '../assets/cycle.png'
export const Card = ({data})=>{
  return<div className = 'card-container'>
    <img src = {data.imgurl} alt={data.name} height = {200} width = {200}/>
    <div>
      <h4>{data.name}</h4>
      <h4 className ='price'>${data.price}</h4>
    </div>
    <p>{data.description}</p>
    <div>
      <h5>Order a delivery</h5>
      <img src={cycle} alt = 'delivery' height = {20}/>
    </div>
  </div>
}
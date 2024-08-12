import React from 'react'
import"./Card.css"

function Card({data}) {

return<>
{
    data.color &&  <div style={{backgroundColor:data.color}} className='Card' >
           {data.title}
   </div>
}
{
    data.color === null &&  <div style={{backgroundImage:`url(${data.img})`}} className='Card' >
                             {data.title}
                    </div>
}
</>

}

export default Card
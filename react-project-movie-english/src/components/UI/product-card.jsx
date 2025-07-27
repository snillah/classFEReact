import React from "react";

function ProductCart ({product,onAddToCardList}){
    const {title:name,description:desc} =product
    return(
        <>
            <div
            style={{border:"1px solid #dddddd",borderRadiu:4,padding:"1rem",margin:"0.5rem",width:200,
                textAlign:"center"
            }}>

            <img src="" alt=""
            style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
            <h4>{name}</h4>
            <p>{desc}</p>
            {
                // short curcuiting
                onAddToCardList&&(
                    <button onClick={()=>onAddToCardList(product)}>Add To Cart</button>
                )
            }
            </div>
        </>
    )
}

export default ProductCart;
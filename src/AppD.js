import React from "react";

export default function AppD(){
    const sorting =[2, 5, 9, 24, 4, 15]


    function trial(){
        // const sorting =[2, 5, 9, 24, 4, 15]
        const genap = []
        const ganjil = []


        // sorting.map(a => a % 2 === 0 ? genap.push(a) : ganjil.push(a))
        // genap.sort((a, b) => (b-a))
        // ganjil.sort((a, b) => (b-a))
     

        
        
        for (let i = 0 ; i < sorting.length; i++){
            if(sorting[i] %2 == 0 ){
                genap.push(sorting[i])
            }else{
                ganjil.push(sorting[i])
            }
        }
        console.log(genap)
        console.log(ganjil)
    }

    function hitung(a, b){
      const result = a + b
        
        console.log(result)
    }
    hitung(5, 4)
    
    trial()

    return(
        <div>
        
        </div>
    )
}
export const dataU=[
    {
        name: 'refill',
        data:[
            [
              {img:"../../../../assets/img/carouselMarkers&Refills/Refills/1.jpg",h4Data:"Water Based Paint Refills",pData:"200 ml - Water Based - 20 Colors",active:true},
              {img:"../../../assets/img/carouselMarkers&Refills/Refills/2.jpg",h4Data: "Street Paint Refills",pData:"200 ml - Solvent Paint - 11 Colors",active:true},
              {img:"../../../assets/img/carouselMarkers&Refills/Refills/3.jpg",h4Data: "Street Ink Refills",pData:"2 Colors - 200 ml - Alcohol Base",active:true},
            ],
            [
              {img:"../../../assets/img/carouselMarkers&Refills/Refills/4.jpg",h4Data: "MTN Liquid",pData:"200 ml - Acrylic Paint - 3 Colors",active:false},
              {img:"../../../assets/img/carouselMarkers&Refills/Refills/1.jpg",h4Data: "Water Based Paint Refills",pData:"200 ml - Water Based - 20 Colors",active:false},
              {img:"../../../assets/img/carouselMarkers&Refills/Refills/2.jpg",h4Data: "Street Paint Refills",pData:"200 ml - Solvent Paint - 11 Colors",active:false}
            ]
        ]
    },
    {
        name: 'caps',
        data:[
            [{img:'../../../assets/img/carouselCaps/c21.jpg',h4Data:'MTN CAPS',pData: 'Complete MTN Cap Range',active:true,},
            {img:'../../../assets/img/carouselCaps/c22.jpg',h4Data:'BUCKETS',pData: '120 Unit Buckets',active:false,},
            {img:'../../../assets/img/carouselCaps/c23.jpg',h4Data:'MTN CAP PACKS',pData: '5 Unit Packs',active:false,},]
        
        ]
    }
];

export const getDataById = (id)=>{
    return dataU[id];
}
// new Isotope(".grid",{
//     itemSelector: ".item",
//     precentPosition: true,
//     transitionDuraition: "0.8s",
//     masonry:{
//         columWidth: ".item-sizer"
//     }
// })

$('.grid').isotope({
    itemSelector: '.item',
    percentPosition: true,
    masonry: {
      columnWidth: '.item-sizer'
    }
  });
  

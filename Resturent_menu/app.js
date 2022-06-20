const menu=
   [
       {
           id:1,
           title:"pasta",
           category:"breakfast",
           price:55.99,
           img:"./image/Pasta.jpg",
           desc:``
       },
       {
        id:2,
        title:"Noodles",
        category:"lunch",
        price:35.99,
        img:"./image/Moodles.jpg",
        desc:``
       },
       {
        id:3,
        title:"bugger",
        category:"breakfast",
        price:76.99,
        img:"./image/R.jpg",
        desc:``
       },
       {
        id:4,
        title:"Hot-dogs",
        category:"lunch",
        price:35.99,
        img:"./image/Hot-Dogs.jpg",
        desc:``
       }
   ]

   //variables
   let Items=Array.from(document.getElementsByClassName("item"));
   let All=document.getElementsByClassName('all');
   let Breakfast=document.getElementsByClassName('breakfast');
   let Lunch=document.getElementsByClassName('lunch');
   let Shakes=document.getElementsByClassName('shakes');

  Items.forEach((element, i)=>
  { 
      element.getElementsByTagName("img")[0].src=menu[i].img;
  element.getElementsByTagName("h4")[0].innerText=menu[i].title;
    element.getElementsByTagName("p")[0].innerText="$"+menu[i].price;
    //element.getElementsByTagName("p")[1].innerText=menu[i].desc;
    element.classList.add(menu[i].category);
    element.id=menu[i].id;
  })

  function DisplayBreakfast()
  {
      Array.from(document.getElementsByClassName("item")).forEach((element )=>
      { if(element.classList[1]==="breakfast")
        {
            element.style.display='flex';
            
        }
        else
        {
            element.style.display='none';
        }
        });
    }
    function DisplayAll()
    {
        Array.from(document.getElementsByClassName("item")).forEach((element )=>
        { element.style.display='flex';
          });
    }
    function DisplayShake()
    {
        Array.from(document.getElementsByClassName('item')).forEach((element)=>
        {
            if(element.classList[0]==='shake')
            {
                element.style.display='flex';
            }
            else{
                element.style.display='none';
            }
        })
    }
    function DisplayLunch()
    {
        Array.from(document.getElementsByClassName("item")).forEach((element )=>
      { if(element.classList[1]==="lunch")
        {
            element.style.display='flex';
            
        }
        else
        {
            element.style.display='none';
        }
        });
    }
Breakfast[0].addEventListener("click", DisplayBreakfast);
Lunch[0].addEventListener("click",DisplayLunch);
All[0].addEventListener("click", DisplayAll);
Shakes[0].addEventListener('click',DisplayShake);
//     Breakfast[0].addEventListener('click',
//     ()=>
// {Items.forEach((element )=>
//       { if(element.classList[0]="breakfast")
//         {
//             element.style.display='block';
//             console.log("yes");
//         }
//         else
//         {
//             element.style.display='none';
//         }
//         })
// } 
      
//     );

 
import React,{useState} from 'react'
import MenuCard from './MenuCard'
import classes from './MenuDish.module.css'
function MenuDish(props) {
  const [menus,setMenus] = useState([
    {
        id:0,
        dishName:'Beef Burger',
        dishDescription:'"Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun."',
        dishPic:'https://www.thespruceeats.com/thmb/POpuxXZ8hoq56_m7KUPcy41clvo=/2668x2001/smart/filters:no_upscale()/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
    },
    {
        id:1,
        dishName:'Zinger Burger',
        dishDescription:'This burger is very famous and most likely by youngsters and children. A treat for all the fast food lover.',
        dishPic:'https://www.tastyden.com/wp-content/uploads/2016/05/Zinger-Burger-with-mayo-dip--848x477.jpg',
    },
    {
        id:2,
        dishName:'French Fries',
        dishDescription:'french fries, also called chips, finger chips, fries, or French pommes frites, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. ',
        dishPic:'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=509&height=340',
    },
    {
        id:3,
        dishName:'Burritos',
        dishDescription:'Burritos are filled with savory ingredients, most often a meat such as beef, chicken, or pork, and often include other ingredients, such as rice, cooked beans (either whole or refried), vegetables, such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
        dishPic:'https://www.oldelpaso.co.uk/-/media/oep/uk/articles/how-to-make-a-burrito/how-to-make-a-burrito-banner.jpg',
    },
    {
        id:4,
        dishName:'Beef Burger',
        dishDescription:'"Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun."',
        dishPic:'https://www.thespruceeats.com/thmb/POpuxXZ8hoq56_m7KUPcy41clvo=/2668x2001/smart/filters:no_upscale()/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
    },
    {
        id:5,
        dishName:'Zinger Burger',
        dishDescription:'This burger is very famous and most likely by youngsters and children. A treat for all the fast food lover.',
        dishPic:'https://www.tastyden.com/wp-content/uploads/2016/05/Zinger-Burger-with-mayo-dip--848x477.jpg',
    },
    {
        id:6,
        dishName:'French Fries',
        dishDescription:'french fries, also called chips, finger chips, fries, or French pommes frites, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. ',
        dishPic:'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=509&height=340',
    },
    {
        id:7,
        dishName:'Burritos',
        dishDescription:'Burritos are filled with savory ingredients, most often a meat such as beef, chicken, or pork, and often include other ingredients, such as rice, cooked beans (either whole or refried), vegetables, such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
        dishPic:'https://www.oldelpaso.co.uk/-/media/oep/uk/articles/how-to-make-a-burrito/how-to-make-a-burrito-banner.jpg',
    },
    {
        id:8,
        dishName:'Burritos',
        dishDescription:'Burritos are filled with savory ingredients, most often a meat such as beef, chicken, or pork, and often include other ingredients, such as rice, cooked beans (either whole or refried), vegetables, such as lettuce and tomatoes, cheese, and condiments such as salsa, pico de gallo, guacamole, or crema.',
        dishPic:'https://www.oldelpaso.co.uk/-/media/oep/uk/articles/how-to-make-a-burrito/how-to-make-a-burrito-banner.jpg',
    }


  ])
  let orderData = (data)=>{
    props.orderedData(data)
  }
  return (
    <div className={classes.menuDish}>
        {menus.map(el=>{
            return(
                <MenuCard 
                darkCard={props.darkCard}
                name={el.dishName} description={el.dishDescription}
                image={el.dishPic}
                key={el.id}
                orderClick={()=> orderData(el)}
               /> 
            )
        })}

    </div>
  )
}

export default MenuDish
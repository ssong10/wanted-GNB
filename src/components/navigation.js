import { MENUS } from '../assets/menus'

function Navigation({onMouseOver}) {
  return (
    <ul
      className="navigation"
      onMouseOver={onMouseOver}
    >
      {MENUS.map((menu,idx) => (
        <li key={idx} className={menu.class}>{menu.type}</li>
        ))}
    </ul>
  )
}

export default Navigation
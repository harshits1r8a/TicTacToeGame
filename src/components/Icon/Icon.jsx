import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';
import "./Icon.css"

function Icon({ name }) {
  if ((name == 'circle')) {
    return <FaRegCircle className='icon' />;
  } else if ((name == 'cross')) {
    return <FaTimes className='icon' />;
  } else {
    return <FaPen className='icon' />;
  }
}
export default Icon;

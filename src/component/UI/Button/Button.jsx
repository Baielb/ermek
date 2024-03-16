import {Button as MuiButton} from '@mui/material';
import './Button.scss';
const Button = ({children}) => {
  return (
      <MuiButton className='button' variant="contained">{children}</MuiButton>
  )
}

export default Button

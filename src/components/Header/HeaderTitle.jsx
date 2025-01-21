import { rem } from '../../utils'
import { Link } from 'react-router-dom'

export default function HeaderTitle(){
    return(
        <>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            <h1 style={{fontSize:rem(25), fontWeight:900}}>MATTEBLACK</h1>
        </Link>
        
        </>
    )
}
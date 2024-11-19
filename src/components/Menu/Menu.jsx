import { Link } from 'react-router-dom'
import { List, ListItem} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectRole } from '../Admin/adminSlice';

export const Menu = ({ items }) => {
    const role = useSelector(selectRole)
    const filteredItems = items.filter(item => {
        if ((item.id === 'guardRoute') && role !== 'admin') {
            return false
        }
        return true
    })
    return (
        <nav
            style={{
                backgroundColor: '#333',
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '15px',
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {filteredItems.map(item => (
                    <ListItem
                        key={item.id}
                        sx={{
                            padding: 0,
                            width: 'auto',
                        }}
                    >
                        <Link
                            to={item.path}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                fontSize: '16px',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseOver={e => (e.target.style.backgroundColor = '#555')}
                            onMouseOut={e => (e.target.style.backgroundColor = 'transparent')}
                        >
                            {item.label}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </nav>
    )
}
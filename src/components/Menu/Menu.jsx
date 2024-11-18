import './Menu.scss'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material';
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
        <nav className='menu-nav'>
            <List className='menu-list'>
                {filteredItems.map(item => (
                    <ListItem
                        button
                        key={item.id}
                        component={Link}
                        to={item.path}
                        className='menu-item'>
                        <ListItemText primary={<span className="menu-link">{item.label}</span>} />
                    </ListItem>
                ))}
            </List>
        </nav>
    )
}
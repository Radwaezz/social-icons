import './linksItem.css';
import PropTypes from 'prop-types';
function LinksItem(props) {
    // Debugging props
    console.log('LinksItem props:', props);
   
    return (    
        <div className="LinksItem">
            <a href={props. LinkName} 
            className='btn' 
            target="_blank" 
            rel="noopener noreferrer">
                {props.LinkName}</a>
        </div>   
    );
}
LinksItem.propTypes = {
    LinkName: PropTypes.string.isRequired,
    LinkUrl: PropTypes.string.isRequired
}
export default LinksItem;

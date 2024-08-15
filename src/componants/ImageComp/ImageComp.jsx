import './ImageComp.css';
import jessica from '../../assets/images/avatar-jessica.jpeg';

function ImageComp() {
    return (
        <div id='ImageRounded'>
            <img src={jessica} alt="Jessica's Avatar" id='ProfileImage' />
        </div>
    );
}

export default ImageComp;

            
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function MainMenu() {
    return (
        <p>This is for index/main menu <FontAwesomeIcon icon={faCoffee} width={30} className='inline'/></p>
    )
}
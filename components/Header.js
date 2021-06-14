

// 1 -

// import in the Nav component
import Nav from './Nav';

// import in our stylesheet
import styles from '../styles/Header.module.scss';


const Header = () => {

    return (

        <header className={ styles.headerContainer }>

            <Nav />

        </header>

    );

}

export default Header;

// End of 1 -

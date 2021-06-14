

// 1 -

// import in the Link component
import Link from 'next/link';

// import in our stylesheet
import styles from '../styles/Footer.module.scss';


const Footer = () => {

    return (

        <footer className={ styles.footerContainer }>

            <p>Copyright &copy; DJ Events 2021</p>

            <div>

                <Link href="/about">

                    <a>About This Project</a>

               </Link>

            </div>

        </footer>

    );

}

export default Footer;

// End of 1 -
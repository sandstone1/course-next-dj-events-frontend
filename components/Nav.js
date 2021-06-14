
// 1 -

// import in the Link component
import Link from 'next/link';

// next let's surround the anchor tags with this Link component and then let's add in the
// href attribute to each Link component and remember we add the href to the Link component
// and then inside the Link component we have the anchor tags

// import in the image component
// import Image from 'next/image';

// and to use the Image component all we need to do is change " <img src="logo.png" /> " to
// " <Image src="logo.png" /> " and then add a width and height to the image

// another good thing about using the Image component is that next automatically uses lazy
// loading for images so if an image is below the fold it will not be loaded until the
// user scrolls down the page and this optimizes our page loading times


// import in our stylesheet
import styles from '../styles/Nav.module.scss';


const Nav = () => {

    return (

        <nav className={ styles.navContainer }>
            
            <div className={ styles.companyLogo }>

                <Link href="/">
                    <a>DJ Events</a>
                </Link>

            </div>

            <div className={ styles.nav }>
            
                <ul>
                    <li>
                        <Link href="/events"><a>Events</a></Link>
                    </li>
                    <li>
                        <Link href="/events/add"><a className={ styles.nav2ndChild }>Add</a></Link>
                    </li>
                    <li>
                        <Link href="/dashboard"><a className={ styles.nav3rdChild }>Dashboard</a></Link>
                    </li>
                </ul>

            </div>

        </nav>

    );

}


export default Nav;

// End of 1 -

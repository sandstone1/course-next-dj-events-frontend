
/*
// 1 -

const AboutPage = () => {

    return (

        <div>

            <h1>About</h1>
            <p>This is an app to find the latest DJ and other musical events</p>
            <p>Version 1.0.0</p>

        </div>

    );

}


export default AboutPage;

// let's create a new folder inside the pages folder called " events " and inside the events
// folder let's create a new file called index.js and let's go to index.js 1 - file now


// 2 -
// add 2 paragraghs above

// and now Brad wants to take a minute and talk about seo and remember with next your initial
// page is rendered on the server so that means that google can index your site and this is great
// for seo and this is one of the top features of using next

// and let's make our first commit and remember we will make commits for the frontend and for
// the backend and so far we have been working in the frontend exclusively so let's make our
// first commit in the frontend and we do that by doing the following ( please refer to my notes
// in the app-next-tutorial.js file ):


// ==============================
// WORKFLOW - LOCALHOST SOLUTION - STEPS TO GETTING A NEXT APP UP AND RUNNING ON VERCEL
// ==============================


// ****************
// STEP 1 - CREATE A GITHUB REPOSITORY FOR THE PROJECT AND CONNECT PROJECT TO GITHUB
// ****************

// for the dj events project and I gave the project a repository name of
// " course-next-dj-events-frontend " and then pressed the " Create repository " button

// after creating a new repository in GitHub I need to connect my GitHub repository to my
// local machine and I do that by typing the following 6 commands in my project frontend root
// folder and for the dj events project that frontend root folder is
// " Home@Rogers-iMac next-dj-events-frontend % " so the 6 commands are:

// #1 - Home@Rogers-iMac next-dj-events-frontend % git remote add origin https://github.com/sandstone1/course-next-dj-events-frontend.git

// #2 - git status

// #3 - git add .

// #4 - git commit -m "first commit" ( from GitHub documentation )

// #5 - git push -u origin main ( from GitHub documentation )
// git push does take some arguments and the first argument is the -u flag and this flag creates
// the association between our local code and the upstream GitHub repository and we only have to
// run the -u flag one time and we will never run it again and the next thing we are going to type
// is the remote or " origin " and then the branch and by default the branch we are going
// to be working with is called " main "

// #6 - I may have to enter my GitHub user name and password


// # Git Commands

// git init - creates a new git repo
// git status - allows us to view changes to our project
// git add . - allows us to add files to the staging area
// git commit -m "Message" - allows us to create a new commit with files from the staging area
// git push - push our changes to GitHub
// git log - allows us to view recent commits
// git pull - pulls the latest changes from GitHub
// git branch - will show us what branches we have and how many we have
// git branch newBranchName - allows us to add a new branch and give it a name
// git checkout newBranchName - move to the newBranchName branch and start working on that branch
// git merge main - merge main with the new branch
// git push origin conflict - if we get a error saying " git push --set-upstream origin conflict "


// updating my GitHub repository going forward:

// " git status "
// " git add . "
// " git commit -m " Message " "
// " git push "


// ****************
// STEP 1 - THE END
// ****************

// and we have successfully set up our GitHub repository for the " course-next-dj-events-frontend "

// End of 2 -


// End of 1 -
*/
















// ===============================





















// at the beginning of lecture 8, given all the notes, I created a new file below without
// the notes so we are starting fresh

/*
// 3 -

// coming from the pages/index.js 1 - file

// import in the Link component
import Link from 'next/link';

// link back to the home page below 

// End of 3 -


const AboutPage = () => {

    return (

        <div>

            <h1>About</h1>
            <p>This is an app to find the latest DJ and other musical events</p>
            <p>Version 1.0.0</p>

            <Link href="/">
                <a>Home</a>
            </Link>

        </div>

    );

}


export default AboutPage;

// and now Brad wants to take a minute and talk about seo and remember with next your initial
// page is rendered on the server so that means that google can index your site and this is great
// for seo and this is one of the top features of using next
*/
















// ===============================





















// at the beginning of lecture 9, given all the notes, I created a new file below without
// the notes so we are starting fresh

// if we wanted a different title on this page, for example, then we would import in the
// Meta component and then pass in a title prop like the following: " title="DJ Events | About" "
import Meta from '../components/Meta';


const AboutPage = () => {

    return (

        <div>

            <Meta title="DJ Events | About" />

            <h1>About</h1>
            <p>This is an app to find the latest DJ and other musical events</p>
            <p>Version 1.0.0</p>

        </div>

    );

}


export default AboutPage;

// and now Brad wants to take a minute and talk about seo and remember with next your initial
// page is rendered on the server so that means that google can index your site and this is great
// for seo and this is one of the top features of using next


import { Link } from "react-router-dom"


export default function ViewDetails(){
    return<>
    <p className="flex justify-center bg-light m-4 p-4 font-bold">Laravel Developer - Match Company Limited</p>
    <div className="capitalized flex m-2  justify-center"> 
        <button  className="border ml-1 p-1 rounded">view company</button>
        <Link to="/apply" className="border ml-2 p-1 rounded bg-primary text-white">Apply to this job</Link>
    </div>
    <div className="capitalized m-10">
        <p className="font-bold">Experience Level: <span className="font-normal">Mid-level</span></p>
        <p className="font-bold" >Minimum Qualification: <span className="font-normal">Batchloer</span></p>
        <p className="font-bold">Experience Length: <span className="font-normal">2-years</span></p>
        <p className="font-bold">Location: <span className="font-normal">ktm</span></p>
        <p className="font-bold">Application deadline: <span className="font-normal">12/09/2024</span></p>
        <p className="font-bold">Salary range: <span className="font-normal">$120k -$150k</span></p>
        <p className="font-bold">Job Type: <span className="font-normal">Full time</span></p>
    </div>
    <div className="capitalized m-10">
        <p className="font-bold">Job discription</p>
        <p>We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business. <br /> <br /> To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce complete solutions in a short turnaround time.</p>
    </div>
    <div className="m-10">
   <p className="font-bold">  Laravel Developer Requirements:</p> 
   <ul className="list-disc">
    <li> A degree in programming, computer science, or a related field.</li>
    <li> Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
    <li>  A solid understanding of application design using Laravel. </li>
    <li> Knowledge of database design and querying using SQL. </li>
    <li>  Proficiency in HTML and JavaScript.</li>
    <li>      Experience developing in Vue is considered a plus.</li>
    <li> Practical experience using the MVC architecture. </li>
    <li> The ability to work on LAMP development environment Problem-solving skills and critical mindset. </li>
    <li> Great communication skills. The desire and ability to learn. </li>
  </ul>
    </div>
    <div className="m-10">
            <p className="font-bold"> Responsibilities:</p>
        <ul className="list-disc" >
            <li>Discussing project aims with the client and development team.</li>
            <li> Designing and building web applications using Laravel.</li> 
            <li>Troubleshooting issues in the implementation and debug builds.</li>
             <li>Working with front-end and back-end developers on projects. </li>
             <li>  Testing functionality for users and the backend.</li> 
             <li>Ensuring that integrations run smoothly. Scaling projects based on client feedback.</li>
             <li>Recording and reporting on work done in Laravel.</li>
             <li>Maintaining web-based applications. Presenting work in meetings with clients and management.</li>
        </ul>
    </div>
    </>
}
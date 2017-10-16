import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="resume_parent">
                <section className="resume_header">
                    <h4>Aryan</h4>
                    <h4>aryan.iitgn@gmail.com</h4>
                    <p>github.com/AryanSingh</p>
                    <p>Phone Number: 8292935091</p>
                </section>
                <section className="resume_content">
                    <div className="work_experience">
                        <div className="work_experience_header">
                            <h4>Work Experience</h4>
                        </div>
                         <div className="experience1">
                            <div className="experience1_header">
                                <div className="experience1_header_h">
                                    <h4>Awign</h4>
                                    <a href="https://www.awign.com/"><i className="material-icons">link</i></a>
                                </div>
                                <p>May 1 - October 31 2017</p>
                            </div>
                             <div className="experience1_content">
                                <div className="experience1_content_p">
                                     <i className="material-icons">lens</i>
                                     <p>Created the new webapp of the product using ReactJs and redux from scratch</p>
                                </div>
                             </div>
                             <div className="experience1_content">
                                <div className="experience1_content_p">
                                    <i className="material-icons">lens</i>
                                    <p>Improved User experience of product, resulting in higher conversions and reduced AWS server instance from 16 gb to 2gb</p>
                                </div>
                             </div>
                             <div className="experience1_content">
                                <div className="experience1_content_p">
                                    <i className="material-icons">lens</i>
                                    <p>Used ES6 syntax, typechecking with propTypes, Airbnb lint config and webpack</p>
                                </div>
                             </div>
                             <div className="experience1_content">
                                <div className="experience1_content_p">
                                    <i className="material-icons">lens</i>
                                    <p>Optimized code, decreased bundle size by 40%, enabled compression and improved load time</p>
                                </div>
                             </div>
                             <div className="experience1_content">
                                <div className="experience1_content_p">
                                    <i className="material-icons">lens</i>
                                    <p>Prioritized above the fold content for faster loading, integrated SEO techniuqes, pushed site to no. 1 in google search (for awign) </p>
                                </div>
                             </div>
                             <div className="experience1_content">
                                <div className="experience1_content_p">
                                    <i className="material-icons">lens</i>
                                    <p>Integrated analytics(google), error reporting(sentry) and ads manager(pixel) for production site</p>
                                </div>
                             </div>
                         </div>
        <div className="experience2">
            <div className="experience2_header">
            <div className="experience2_header_h">
            <h4>Grexter</h4>
            <a href="http://www.grexter.in/#/home"><i className="material-icons">link</i></a>
        </div>

        <p>October 16 - March 17</p>
        </div>
        <div className="experience2_content">
            <div className="experience2_content_p">
            <i className="material-icons">lens</i>
            <p>Fully reworked the existing website in AngularJS</p>
        </div>
        <div className="experience2_content_p">
            <i className="material-icons">lens</i>
            <p>Extended the website with new features, integrated new designs, added stub mode for the website to work without backend</p>
        </div>
        <div className="experience2_content_p">
            <i className="material-icons">lens</i>
            <p>Converted the whole website to Angular2 from AngularJs</p>
        </div>
        <div className="experience2_content_p">
            <i className="material-icons">lens</i>
            <p>Decreased load times from 10s to 2-3s</p>
        </div>
        </div>
        </div>
        </div>
        <div className="education">
            <div className="education_header">
            <h4>Education</h4>
            </div>
            <div className="education_content">
            <p>2011 - 2015</p>
            <p>IIT Gandhinagar</p>
        <p>CGPA: 7.2</p>
        <p>Mechanical Engineering</p>
        </div>
        </div>
        <div className="web_development_projects">
            <div className="web_development_projects_header">
            <h4>Web Development Projects</h4>
        </div>
        <div className="web_development_projects_content">

        <div className="project2">
            <div className="project2_header">
            <h4>Ecommerce Website</h4>
        </div>
        <div className="project2_content">
            <i className="material-icons">lens</i>
            <p>Built from scratch using NodeJs, MongoDb and Express</p>
        </div><div className="project2_content">
        <i className="material-icons">lens</i>
            <p>Implemented full Authentication, payment gateway using stripe and complete Server side rendering</p>
        </div>
        </div>
        <div className="project3">
            <div className="project3_header">
            <h4>Whatsapp Clone</h4>
        </div>
        <div className="project3_content">
            <i className="material-icons">lens</i>
            <p>Hybrid Webapp usig Ionic, MeteorJs and AngularJs </p>
        </div>

        </div>
        </div>

        </div>
        <div className="relevant_skills">
            <div className="relevant_skills_header">
            <h4>Relevant Skills</h4>
        </div>
        <div className="relevant_skills_content">
            <div className="relevant_skills_row1">
            <i className="material-icons">lens</i>
            <p><b>Language:</b> Javascript</p>
        </div>
        <div className="relevant_skills_row2">
            <i className="material-icons">lens</i>
            <p><b>Frameworks:</b> ReactJs, AngularJs, Angular2, NodeJs, Express</p>
        </div>
        <div className="relevant_skills_row3">
            <i className="material-icons">lens</i>
            <p><b>Familiar with:</b> Ruby, Ruby On Rails, MeteorJs, Ionic</p>
        </div>
        </div>
        </div>

        </section>
        </div>
    );
    }
}

export default App;

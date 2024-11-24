import React from 'react';
import Card from './Card';
import TeamProject from '../../img/team-project.png';
import TaskProject from '../../img/tasks.png';
import './projects.css';

const Projects = () => {
    return (
        <section className="projects-container" data-aos="fade-right">
            <h1>Featured Projects</h1>
            <div className="projects-list">
                <Card
                    img={TeamProject}
                    description="The main functionality of this application is to replace the outdated, in-person scheduling appointments with a digital, efficient system."
                    link="https://github.com/Timski-Proekt/TP"
                    technologies="React, Java Spring, PostgreSQL"
                />
                <Card
                    img={TaskProject}
                    description="A React-based task management application that allows users to create, edit, delete, and drag-and-drop tasks between columns: To Do, In Progress, and Done."
                    link="https://github.com/krstevskap/kanban-board"
                    technologies="React"
                />
            </div>
        </section>
    );
};

export default Projects;

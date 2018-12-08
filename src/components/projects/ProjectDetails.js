import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam atque ex iure in accusamus quam necessitatibus cupiditate, aut voluptatem quod quas dolorum voluptatum? Iste aut quos ducimus velit corporis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Rohan</div>
                    <div>2nd Sept,3am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;

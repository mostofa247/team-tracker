import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const Team = (props) => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [teams])
    //const {idTeam, strTeam, strTeamBadge}=props.team;
    return (
        <div className='grid'>

            {
                teams.map((team) => {
                    const { idTeam,strLeague, strTeam, strTeamBadge } = team

                    return <article key={idTeam}>
                        <div>
                            <img src={strTeamBadge} alt={strTeam} />
                            <div className="details">
                                <h3>Team: {strTeam}</h3>
                                <h4>League: <span>{strLeague}</span></h4><br></br>
                                <div className="buttons">
                                    <Link to={`/teams/${idTeam}`} className="btn">Learn More <i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </article>
                })
            }
        </div>
    );
};

export default Team;
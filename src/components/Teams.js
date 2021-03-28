import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Teams.css'

const Teams = () => {
    const [league, setLeague] = useState({})
    const { idTeam } = useParams()


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setLeague(data.teams[0]))
    }, [idTeam])
    return (
        <section className="button">
            <div className="details">
                <div className="image-effect">
                    <img className="logo" src={league.strTeamBadge} alt={idTeam} />
                    <h3 className="details-title">{league.strTeam}</h3>
                </div>
            </div>

            <section className="extra-part">
                <div className="box">
                    <h3>Team: {league.strTeam}</h3>
                    <h6>Founded: {league.intFormedYear}</h6>
                    <h6>Country: {league.strStadium}</h6>
                    <h6>Sport Type: {league.strLeague2}</h6>
                    <h6>Gender: {league.strGender}</h6>
                </div>
                <div className="box">
                <img className="img2" src={league.strTeamFanart4} alt={idTeam} />
                </div>
            </section>
            
            <div className="details-here">
                <p>{league.strStadiumDescription}</p><br></br>
            </div>
            <div className="details-here">
                <p>{league.strStadiumDescription}</p><br></br>
            </div>
            <br></br>

            <section class="last bg-dark">
                <footer>
                    <p className="contact-title">Going-To-Internet</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                    </div>
                </footer>
            </section>
            <Link to="/" className="btn btn-light"><i className="fa fa-arrow-left"></i>Previous Page</Link>
        </section>
    );
};

export default Teams;
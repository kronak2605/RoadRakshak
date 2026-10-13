import "./About.css";
function About() {
    return (
        <>
        <div className="about_hero">
            <img src="/media/about_image.png" alt="Clean City" />
            <h1>Notice something?</h1>
            <h2>Make it count.</h2>
            <p>A clearer city starts with people who care enough to point things out</p>
            <button className="about_hero_button">Make a Report</button>
        </div>
        </>
    )
}
export default About;
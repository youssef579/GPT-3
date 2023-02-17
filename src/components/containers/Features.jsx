// Import feature component
import Feature from "../children/Feature";

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="heading">
                    <h1 className="gradient">
                        The Future is Now and You Just Need to Realize It. Step
                        into Future Today. & Make it Happen.
                    </h1>
                    <p className="light-orange">
                        Request Early Access to Get Started
                    </p>
                </div>
                <div className="content">
                    <Feature
                        heading="Improving end distrusts instantly"
                        paragraph="From they fine john he give of rich he. They age and
                            draw mrs like. Improving end distrusts may instantly
                            was household applauded."
                    />
                    <Feature
                        heading="Become the tended active"
                        paragraph="Considered sympathize ten uncommonly occasional
                            assistance sufficient not. Letter of on become he
                            tended active enable to."
                    />
                    <Feature
                        heading="Message or am nothing"
                        paragraph="Led ask possible mistress relation elegance eat
                            likewise debating. By message or am nothing amongst
                            chiefly address."
                    />
                    <Feature
                        heading="Really boy law county"
                        paragraph="Really boy law county she unable her sister. Feet
                            you off its like like six. Among sex are leave law
                            built now. In built table in an rapid blush."
                    />
                </div>
            </div>
        </section>
    );
}

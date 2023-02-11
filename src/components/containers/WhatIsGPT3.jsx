// Components
import Feature from "../children/Feature";

export default function WhatIsGPT3() {
    return (
        <section className="what-is" id="what-is">
            <div className="container">
                <div className="intro">
                    <h1 className="gradient-before extra-bold">
                        What is GPT-3
                    </h1>
                    <p>
                        We so opinion friends me message as delight. Whole front
                        do of plate heard oh ought. His defective nor convinced
                        residence own. Connection has put impossible own
                        apartments boisterous. At jointure ladyship an insisted
                        so humanity he. Friendly bachelor entrance to on by.
                    </p>
                </div>
                <div className="heading">
                    <h2 className="gradient">
                        The possibilities are beyond your imagination
                    </h2>
                    <a href="#library" className="light-orange">Explore the Library</a>
                </div>
                <div className="features">
                    <Feature
                        heading="Chatbots"
                        paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
                    />
                    <Feature
                        heading="Knowledgebase"
                        paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                    />
                    <Feature
                        heading="Education"
                        paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                    />
                </div>
            </div>
        </section>
    );
}

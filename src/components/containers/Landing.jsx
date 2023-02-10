import React from "react";
// Components
import Brands from "../children/Brands";
// Images
import people from "../../assets/images/people.png";
import pattern from "../../assets/images/pattern.png";

export default function Landing() {
    return (
        <section className="landing">
            <div className="container">
                <div className="content">
                    <h1 className="gradient">
                        Let's Build Something amazing with GPT3 OpenAI
                    </h1>
                    <p>
                        Yet bed any for travelling assistance indulgence
                        unpleasing. Not thoughts all exercise blessing.
                        Indulgence way everything joy alteration boisterous the
                        attachment. Party we years to order allow asked of.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            required
                            placeholder="Your Email Address"
                        />
                        <input
                            className="orange-btn"
                            type="submit"
                            value="Get Started"
                        />
                    </form>
                    <div className="people">
                        <img src={people} alt="People" />
                        <p>
                            1,600 people requested access a visit in last 24
                            hours
                        </p>
                    </div>
                </div>
                <img className="image" src={pattern} alt="Face pattern" />
            </div>
            <Brands />
        </section>
    );
}

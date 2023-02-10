import React from "react";

export default function Feature({ heading, paragraph }) {
    return (
        <article className="feature">
            <h3 className="gradient-before extra-bold">{heading}</h3>
            <p>{paragraph}</p>
        </article>
    );
}

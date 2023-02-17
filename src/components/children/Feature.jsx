export default function Feature({ heading, paragraph }) {
    return (
        <article className="feature">
            <h3 className="gradient-before extra-bold">{heading}</h3>
            <p className="blue">{paragraph}</p>
        </article>
    );
}

export default function Brands() {
    const brands = ["Google", "Slack", "Atlassian", "Dropbox", "Shopify"];

    return (
        <div className="brands">
            {brands.map(
                (alt, index) => (
                    <img
                        key={index}
                        src={
                            new URL(
                                `../../assets/images/companies/${
                                    index + 1
                                }.png`,
                                import.meta.url
                            ).href
                        }
                        alt={alt}
                    />
                )
            )}
        </div>
    );
}

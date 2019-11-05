import React from "react";

function Footer ({ content }) {
    return (
        <footer className="center tn__site--footer bg-dark text-light">
            <div className="tn__site--wrapper">
                <section className="tn__site-content--inner">
                    <p>This is the footer.</p>
                    {
                        content.split(/\n\n/).map((str, i) => <p key={i}>{ str }</p>)
                    }
                </section>
            </div>
        </footer>
    );
};

export default Footer;

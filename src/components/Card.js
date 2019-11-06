import React from "react";

function Card ({
    header_content = '',
    body_content = '',
    footer_content = ''
}) {
    return (
        <div className="card--wrapper">
            <article className="card">
                <header>
                {
                    header_content
                }
                </header>
                {
                    body_content
                }
                <footer>
                {
                    footer_content
                }
                </footer>
            </article>
        </div>
    );
};

export default Card;

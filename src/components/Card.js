import React from "react";

function Card () {
    return (
        <article className="card">
            <header>
                <h3>Card Title</h3>
            </header>
            <p>
            Praesent hendrerit feugiat massa nec aliquam. Aenean vestibulum tincidunt risus in interdum. Sed aliquam ligula eu posuere vulputate. Morbi eget diam sapien. Pellentesque pellentesque fringilla ex, id porttitor velit semper vel. Nulla condimentum congue ultrices. Duis tincidunt leo orci, ut rutrum lectus posuere sit amet. In faucibus massa nec mauris mattis, id ornare ipsum faucibus. Suspendisse tristique iaculis cursus.
            </p>
            <footer>
                <div  className="flex justify-content-between">
                    <button>Button 1</button>
                    <button>Button 2</button>
                </div>
            </footer>
        </article>
    );
};

export default Card;

import React from "react";

function handle_click (e) {
    console.log("button was clicked");
}

function Card_Button () {
    return (
        <button
            onClick={handle_click}
        >Click me!</button>
    );
}

export const card_content = [
    {
        header_content: <h3>Card 1</h3>,
        body_content: <p>Card 1 body</p>,
        footer_content: <Card_Button />
    },
    {
        header_content: <h3>Card 2</h3>,
        body_content: <p>Card 2 body</p>,
        footer_content: <button>Card 2 button</button>
    },
    {
        header_content: <h3>Card 3</h3>,
        body_content: <p>Card 3 body</p>,
        footer_content: <button>Card 3 button</button>
    }
];


export const name = 'Test title';
export const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat pretium fermentum. Praesent vestibulum at tellus eget dapibus. Proin eu metus quis arcu iaculis mattis. Donec consequat feugiat tincidunt. Quisque consequat bibendum ultricies. Praesent commodo laoreet nulla id interdum. Sed id laoreet leo. Donec aliquet turpis magna, vel vehicula justo semper eu. Suspendisse efficitur blandit diam, a suscipit enim lobortis ut. Nullam rutrum, nunc a auctor finibus, lorem augue commodo ex, scelerisque ultrices tellus sapien quis mauris. Nunc enim nibh, consectetur in placerat nec, placerat non massa. Aenean accumsan sed sapien nec blandit. Praesent maximus mi nec risus consectetur, sed sagittis velit dapibus. Duis faucibus sit amet mi et placerat.

In dictum imperdiet sapien, eu interdum nulla posuere non. Donec viverra ac dolor eu porttitor. Duis vulputate purus porta consectetur auctor. Cras a blandit elit. Donec suscipit, ipsum eu varius congue, leo lectus elementum urna, ac molestie ipsum sapien at sem. In commodo sodales mauris, sed congue lorem malesuada sit amet. Vestibulum nisl orci, egestas in sapien nec, tincidunt pharetra mauris. Proin a dapibus orci. Vivamus placerat lectus id lectus pellentesque, quis venenatis ante fringilla. Maecenas nec neque consectetur tellus gravida pulvinar gravida eu massa. Nullam iaculis lectus bibendum dui suscipit facilisis. Maecenas facilisis ipsum et ante volutpat, eu pharetra diam suscipit. Donec eleifend fermentum arcu sed volutpat. In hac habitasse platea dictumst. Quisque elementum ipsum et neque iaculis, dictum imperdiet lorem vehicula.

Vivamus pellentesque mauris placerat sem finibus dignissim. Maecenas auctor, ex sit amet porttitor vehicula, magna nisi accumsan tortor, sit amet finibus metus justo sed lorem. Suspendisse pulvinar risus et ultrices rutrum. In semper sodales turpis id ornare. Suspendisse eu urna libero. Nunc vestibulum pulvinar dui. Ut porttitor nulla porttitor elit varius, in ultrices magna suscipit. Maecenas pellentesque est egestas lectus imperdiet tincidunt. Duis tempor auctor cursus. Praesent dictum lorem nunc, et elementum nisi feugiat ac. Phasellus lectus ipsum, aliquet et blandit quis, dictum et mauris. Donec suscipit nisl non eros varius dapibus. Phasellus cursus est ac sodales facilisis. Etiam malesuada ligula quis quam rutrum efficitur. Duis quis laoreet nunc.

In in enim magna. Sed sem ante, venenatis non lacus non, mattis commodo felis. Vivamus interdum neque vel sapien posuere pulvinar. Suspendisse tempor tortor id enim semper commodo eget eu turpis. Vivamus eros nibh, viverra vitae vestibulum rutrum, venenatis eget magna. Donec maximus turpis et risus faucibus viverra. Nulla vehicula augue nec cursus scelerisque. Morbi venenatis neque sed lectus volutpat convallis.

Suspendisse pharetra leo at metus convallis, at fermentum nunc viverra. Curabitur ultrices felis a pretium luctus. Maecenas turpis leo, pellentesque ut turpis a, tristique tempor arcu. Morbi vehicula condimentum lectus quis tincidunt. Etiam at ex ante. Donec in velit sit amet ipsum dapibus faucibus et ac sapien. Phasellus ac blandit nibh. Sed at interdum orci. In dictum egestas ipsum sed rutrum. Nunc et mauris efficitur, commodo urna placerat, rutrum libero. Aliquam id orci at dolor accumsan bibendum sit amet et lorem. Aenean nunc arcu, mollis vitae orci non, malesuada semper risus. Morbi in ultricies purus, sit amet porta tellus. Proin mi lectus, aliquam ac eros quis, porta placerat mi. Praesent quis sodales mi.`;
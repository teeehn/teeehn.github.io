import React from "react";
import Brand from "./Brand";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FullPanel from "./FullPanel";
import Card from "./Card";

import { card_content, message, name } from "../assets/data";

const menu_items = [
    {
        label: "About",
        link: "#about"
    },
    {
        label: "Blog",
        link: "#blog"
    },
    {
        label: "Contact",
        link: "#contact"
    }
];

const App = () => {

    return (
        <>
            <Navbar>    
                <Brand />
                <Menu items={menu_items} />
            </Navbar>
            <div className="tn__site-wrapper">
                <FullPanel />
                <div className="tn__site-wrapper--inner">
                    <section className="tn__site-content--inner">
                        <h1 className="pb-0">{ name }</h1>
                        {
                            message.split(/\n\n/).map((str, i) => <p key={i}>{ str }</p>)
                        }
                    </section>
                    <section className="tn__site-content--inner">
                        <div className=" flex one three-800">
                        {
                            card_content.map(function (card, index) {
                                return (
                                    <Card 
                                        key={index}
                                        { ...card }
                                    />
                                );
                            })
                        }
                        </div>
                    </section>
                </div>
            </div>
            <Footer content={message}/>
        </>
    );
}

export default App;

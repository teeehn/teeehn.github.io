import React from "react";
import Brand from "./Brand";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FullPanel from "./FullPanel";
import Card from "./Card";

// Test data

import { card_content, message, name } from "../assets/data";

const App = () => {

    return (
        <>
            <Navbar>    
                <Brand />
                <Menu />
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
                    <section className="tn__site-content--inner flex one three-800">
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
                    </section>
                </div>
            </div>
            <Footer content={message}/>
        </>
    );
}

export default App;

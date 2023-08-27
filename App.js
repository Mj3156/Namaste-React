const parent = React.createElement(
    "div", { id: "parent" },
    [
        React.createElement(
        "div", { id: "child1" }, [
            React.createElement(
                "h1", {}, "I'm a h1 tag."),
            React.createElement(
            "h2", {} ,"I'm a h2 tag.")
        ]
                
        ),
         React.createElement(
        "div", { id: "child2" }, [
            React.createElement(
                "h1", {}, "I'm a h1 tag."),
            React.createElement(
            "h2", {} ,"I'm a h2 tag.")
        ]
            
        )    
   ]

)

const root = ReactDOM.createRoot(document.getElementById("root"));




const parent2 = React.createElement("div", { id: "parent2" }, [

    React.createElement("div", { id: "div1" }, [
        React.createElement("p", {}, "I am p1"),
        React.createElement("p",{},"I am p2")
    ]),
    React.createElement("div", { id: "div2" }, [
        React.createElement("span", {}, "I am span1"),
        React.createElement("span",{},"I am span2")
    ])
])
const parentOfParent = React.createElement("div", {
    id: "bapKaBap"}, [
    parent,parent2
    ]
)

root.render(parentOfParent)





// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World from React!"
// );
// console.log(heading)//Return an object because it is a react element at the end of the day.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
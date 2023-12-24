const parent = React.createElement("div", {id : "parent"}, 
React.createElement("div", {id : "child"}, [
    React.createElement("h1" , {className : "heading1", id : "child"}, "Hello Js"),
    React.createElement("h1" , {className : "heading", id : "child2"}, "Hello React"),
]),
React.createElement("div", {id : "child1"}, [
    React.createElement("h1" , {className : "heading1", id : "child3"}, "Hello Js"),
    React.createElement("h1" , {className : "heading", id : "child4"}, "Hello React"),
])
)

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)
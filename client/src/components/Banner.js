import EditToolbar from './EditToolbar.js'
/*
    Our Application's Banner, note we are using function-style
    React. Our banner just has a left-aligned heading and a
    right-aligned toolbar for undo/redo and close list buttons.
    
    @author McKilla Gorilla
*/
function Banner(props) {
    return (        
        <div id="top5-banner">
             Top 5 Lister
            <EditToolbar />
        </div>
    );
}

export default Banner;
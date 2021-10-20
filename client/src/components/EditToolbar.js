import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();

    let enabledButtonClass = "top5-button";
    let disabledButtonClass = "top5-button-disabled";

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    
    let editStatus = false;
    if (store.isListNameEditActive) {
        editStatus = true;
    }
    
    let undoStatus = disabledButtonClass;
    let redoStatus = disabledButtonClass;
    let closeStatus = enabledButtonClass
    if (store.hasUndo){
        undoStatus = enabledButtonClass;
    }
    if (store.hasRedo){
        redoStatus = enabledButtonClass;
    }
    if (store.currentList === null || store.isItemEditActive){
        undoStatus = disabledButtonClass;
        redoStatus = disabledButtonClass;
        closeStatus = disabledButtonClass;
        return (
            <div id="edit-toolbar">
                <div
                    disabled={editStatus}
                    id='undo-button'
                    className={undoStatus}>
                    &#x21B6;
                </div>
                <div
                    disabled={editStatus}
                    id='redo-button'
                    className={redoStatus}>
                    &#x21B7;
                </div>
                <div
                    disabled={editStatus}
                    id='close-button'
                    className={closeStatus}>
                    &#x24E7;
                </div>
            </div>
        )
    } else {
        return (
            <div id="edit-toolbar">
                <div
                    disabled={editStatus}
                    id='undo-button'
                    onClick={handleUndo}
                    className={undoStatus}>
                    &#x21B6;
                </div>
                <div
                    disabled={editStatus}
                    id='redo-button'
                    onClick={handleRedo}
                    className={redoStatus}>
                    &#x21B7;
                </div>
                <div
                    disabled={editStatus}
                    id='close-button'
                    onClick={handleClose}
                    className={closeStatus}>
                    &#x24E7;
                </div>
            </div>
        )
    }

    
    
}

export default EditToolbar;
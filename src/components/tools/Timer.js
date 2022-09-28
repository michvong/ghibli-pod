import Draggable from 'react-draggable';

export default function Timer() {
    return (
        <Draggable>
            <div class="bg-black box-border h-32 w-32 p-4 border-4">
                This can be dragged!
            </div>
        </Draggable>
    )
}
import React from "react";

const DraggableComponent = ({ field, onDragStart, onDragEnd }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(field));
        onDragStart();
    };

    const handleDragEnd = () => {
        onDragEnd();
    };

    return (
        <div draggable onDragStart={(e) => onDragStart(e, field)}
            onDragEnd={onDragEnd}>
            <div
                className="flex flex-col items-center justify-center"
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <field.icon className="text-4xl" />
                <p>{field.name}</p>
            </div>
        </div>
    );
};

export default DraggableComponent;

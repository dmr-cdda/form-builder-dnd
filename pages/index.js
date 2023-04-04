import DraggableComponent from "@/components/DragableCom";
import EditModal from "@/components/Edit/EditModal";
import TextInput from "@/components/Inputs/TextInput";
import { useState } from "react";
import {AiOutlinePhone, AiOutlineFileText} from "react-icons/ai";
import {
    HiOutlineServer,
    HiOutlineLockClosed
} from "react-icons/hi";
import {MdOutlineEmail} from "react-icons/md";
import {BsUiRadiosGrid} from "react-icons/bs";

const components = [
    {
        name: "Text",
        type : "text",
        id: "input-1000",
        icon: HiOutlineServer,
    },
    {
        name: "Email",
        type : "email",
        id: "input-1001",
        icon: MdOutlineEmail,
    },
    {
        name: "Password",
        type : "password",
        id: "input-1002",
        icon: HiOutlineLockClosed,
    },
    {
        name: "Phone",
        type : "number",
        id: "input-1003",
        icon: AiOutlinePhone,
    },
    {
        name: "File",
        type : "file",
        id: "input-1004",
        icon: AiOutlineFileText,
    },
    {
        name: "Radio",
        type : "radio",
        id: "input-1004",
        icon: BsUiRadiosGrid,
    },
];

const Home = () => {
    const [fields, setFields] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [editField, setEditField] = useState();
    const [open, setOpen] = useState(false);

    // start input drag
const handleDragStart = (e, field) => {
        e?.dataTransfer.setData("text/plain", JSON.stringify(field));
        setIsDragging(true);
        if (field?.type) {
            e.dataTransfer.setData("inputType", field.type);
        }
    };

    // end input drag
    const handleDragEnd = () => {
        setIsDragging(false);
    };

    // drop input field
    const handleDrop = (event) => {
        
        event.preventDefault();

        const field = JSON.parse(event.dataTransfer.getData("text/plain"));
        field["_id"] = Math.floor(1000 + Math.random() * 9000);
        field["type"] = field.type;
        setOpen(true);
        setEditField(field);
    };

    return (
        <div>
            <div className="flex h-screen bg-gray-100">
                <div className="bg-white w-64 p-4">
                    <h1 className="text-center font-semibold">COMPONENT</h1>
                    <div className="grid grid-cols-2 mt-4 gap-3">
                        {components.map((component, index) => {
                            return (
                                <DraggableComponent
                                    key={index}
                                    field={{
                                        name: component.name,
                                        id: component.id,
                                        icon: component.icon,
                                        type : component.type
                                    }}
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                />
                            );
                        })}
                    </div>
                </div>
                <div
                    className="bg-gray-50 h-full w-full flex flex-col gap-2"
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                    style={{ minHeight: "300px" }}
                >
                    {fields.map((field, index) => {
                        return (
                            <div
                                key={index}
                            >
                                <TextInput textInput={field}/>
                            </div>
                        );
                    })}
                    <hr />
                </div>
            </div>

            {/* edit modal condition*/}
            {open && (
                <EditModal
                    open={open}
                    setOpen={setOpen}
                    setFields={setFields}
                    editField={editField}
                    setEditField={setEditField}
                    
                />
            )}
        </div>
    );
};
export default Home;

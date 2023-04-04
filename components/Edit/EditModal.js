import { commonInput } from '@/utils/inputAttributes';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import {AiOutlinePhone, AiOutlineFileText} from "react-icons/ai";
import {
    HiOutlineServer,
    HiOutlineLockClosed
} from "react-icons/hi";
import {MdOutlineEmail} from "react-icons/md";
import {BsUiRadiosGrid} from "react-icons/bs";

const EditModal = ({ open, setOpen, editField, setFields }) => {
    const [editFormVal, setEditFormVal] = useState({
    });
    
    const handleSave = (e) =>{
        e.preventDefault();
        editFormVal["type"] = editField?.type;
        console.log(editFormVal);
        if(editFormVal?.label && editFormVal?.name){

            switch (editField.type) {
                case "email":
                    setFields(prev =>([
                        ...prev,
                        commonInput(MdOutlineEmail,editFormVal)
                    ]));
                    setOpen(false);
                    return;
                case "password" : 
                    setFields(prev =>([
                        ...prev,
                        commonInput(HiOutlineLockClosed,editFormVal)
                    ]));
                    setOpen(false);
                    return;
                case "number" : 
                    setFields(prev =>([
                        ...prev,
                        commonInput(AiOutlinePhone,editFormVal)
                    ]));
                    setOpen(false);
                    return;
                case "file" : 
                    setFields(prev =>([
                        ...prev,
                        commonInput(AiOutlineFileText,editFormVal)
                    ]));
                    setOpen(false);
                    return;
                case "text" : 
                    setFields(prev =>([
                        ...prev,
                        commonInput(HiOutlineServer,editFormVal)
                    ]));
                    setOpen(false);
                    return;
                case "radio" : 
                    setFields(prev =>([
                        ...prev,
                        commonInput(HiOutlineServer,editFormVal)
                    ]));
                    setOpen(false);
                    return;
                default:
                    return;
            }
        };
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                
                                {/* Label */}
                                <div>
                                    <label>Label</label>
                                    <div className="text-center">
                                        <input
                                            name="label"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                label : e.target.value
                                            }))}
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <div>
                                    <label>Name</label>
                                    <div className="text-center">
                                        <input
                                            name="name"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                name : e.target.value
                                            }))}
                                        />
                                    </div>
                                </div>

                                {/* class name */}
                                <div>
                                    <label>Class Name</label>
                                    <div className="text-center">
                                        <input
                                            name="className"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                className : e.target.value
                                            }))}
                                        />
                                    </div>
                                </div>

                                {editField?.type !== "radio" && <>
                                 {/* Pattern */}
                                <div>
                                    <label>Pattern</label>
                                    <div className="text-center">
                                        <input
                                            name="pattern"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                pattern : e.target.value
                                            }))}
                                        />
                                    </div>
                                </div>
                                           
                                {/* Placeholder */}
                                <div>
                                    <label>Placeholder</label>
                                    <div className="text-center">
                                        <input
                                            name="placeholder"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                placeholder : e.target.value
                                            }))}
                                        />
                                    </div>
                                </div>

                                {/* Max Length , min Length */}
                                {editField?.type === "number" && <div className="flex gap-2">
                                    <div className="text-center">
                                    <label>Max Length</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                maxLength : e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="text-center">
                                    <label>Min Length</label>
                                        <input
                                            name="name"
                                            type="text"
                                            
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                minLength : e.target.value
                                            }))}
                                        />
                                    </div>
                                </div>}

                                {/* Required & Disabled & Auto Complete */}
                                <div className='flex justify-evenly mt-4'>

                                {/* Required  */}
                                <div>
                                    <div className="text-center flex items-center gap-2">
                                    <label>Required</label>
                                        <input
                                            name="required"
                                            type="checkbox"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                required : e.target.checked
                                            }))}
                                        />
                                    </div>
                                </div>

                                {/* Disabled */}
                                <div>
                                    <div className="text-center flex items-center gap-2">
                                    <label>Disabled</label>
                                        <input
                                            name="disabled"
                                            type="checkbox"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                disabled : e.target.checked
                                            }))}
                                        />
                                    </div>
                                </div>

                                {/* Auto Complete */}
                                <div>
                                    <div className="text-center flex items-center gap-2">
                                    <label>Auto Complete</label>
                                        <input
                                            name="autoComplete"
                                            type="checkbox"
                                            onChange={(e) => setEditFormVal(prev => ({
                                                ...prev,
                                                autoComplete : e.target.checked
                                            }))}
                                        />
                                    </div>
                                </div>
                                </div>
                                </>}


                                {/* Save button */}
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        onClick={handleSave}
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                                    >
                                        Save
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default EditModal
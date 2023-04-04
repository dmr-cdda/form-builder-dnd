import { HiOutlineMail } from "react-icons/hi";

const TextInput = ({ textInput }) => {
        const { attributes, suffix } = textInput || {};
        const {id, label} = attributes || {};

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                {suffix && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <suffix.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                )}
                <input
                   {...attributes}
                    className={`${
                        suffix?.icon && "pl-10"
                    } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
            </div>
        </div>
    );
};
export default TextInput;

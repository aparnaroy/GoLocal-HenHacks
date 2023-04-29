import React, { useState } from "react";

const initialValues = {
    business: "",
    description: "",
    category: "",
    address: "",
    website: "",
    image: ""
};

export default function FormAdd(): JSX.Element {
    const [values, setValues] = useState(initialValues);
    const [selectedCategory, setCategory] = useState("");

    const handleInputChange = (event: {
        target: { name: string; value: string };
    }) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleOptionChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCategory(event.target.value);
    };

    return (
        <form>
            <div className="form">
                <label>
                    Business Name:
                    <input
                        value={values.business}
                        onChange={handleInputChange}
                        name="business"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Description:
                    <input
                        value={values.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Category:
                    <select
                        id="cat-dropdown"
                        value={selectedCategory}
                        onChange={handleOptionChange}
                    >
                        <option>Test</option>
                    </select>
                </label>
            </div>
            <div className="form">
                <label>
                    Address:
                    <input
                        value={values.address}
                        onChange={handleInputChange}
                        name="address"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Website URL:
                    <input
                        value={values.website}
                        onChange={handleInputChange}
                        name="website"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Image URL:
                    <input
                        value={values.website}
                        onChange={handleInputChange}
                        name="image"
                    />
                </label>
            </div>
            <button type="submit"> Submit </button>
        </form>
    );
}

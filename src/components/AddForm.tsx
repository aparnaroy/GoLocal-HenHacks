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

    const handleInputChange = (e: {
        target: { name: string; value: string };
    }) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <form>
            <label>
                Business Name:
                <input
                    value={values.business}
                    onChange={handleInputChange}
                    name="business"
                />
            </label>
            <label>
                Description:
                <input
                    value={values.description}
                    onChange={handleInputChange}
                    name="description"
                />
            </label>
            <label>
                Category:
                <input
                    value={values.category}
                    onChange={handleInputChange}
                    name="category"
                />
            </label>
            <label>
                Address:
                <input
                    value={values.address}
                    onChange={handleInputChange}
                    name="address"
                />
            </label>
            <label>
                Website URL:
                <input
                    value={values.website}
                    onChange={handleInputChange}
                    name="website"
                />
            </label>
            <label>
                Image URL:
                <input
                    value={values.website}
                    onChange={handleInputChange}
                    name="image"
                />
            </label>
            <button type="submit"> Submit </button>
        </form>
    );
}
